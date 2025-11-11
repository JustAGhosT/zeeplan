// Utility functions for financial calculations

import { PartnershipData } from './partnershipData';

export interface YearlyFinancials {
  revenue: [number, number]; // min, max
  costs: [number, number];
  profit: [number, number];
  oomWillieIncome: [number, number];
  ebenIncome: [number, number];
  hansEquityIncome: [number, number];
  hansSalary: [number, number];
  hansTotalIncome: [number, number];
}

export interface FinancialSummary {
  yearly: YearlyFinancials[];
  cumulative: {
    revenue: [number, number];
    costs: [number, number];
    profit: [number, number];
    oomWillie: [number, number];
    eben: [number, number];
    hans: [number, number];
  };
}

export function sumRevenue(revenues: Record<string, [number, number]>): [number, number] {
  let minTotal = 0;
  let maxTotal = 0;

  Object.values(revenues).forEach(([min, max]) => {
    minTotal += min;
    maxTotal += max;
  });

  return [minTotal, maxTotal];
}

export function calculateProfit(revenue: [number, number], costs: [number, number]): [number, number] {
  return [revenue[0] - costs[0], revenue[1] - costs[1]];
}

export function calculateEquityShare(profit: [number, number], percentage: number): [number, number] {
  return [Math.round(profit[0] * (percentage / 100)), Math.round(profit[1] * (percentage / 100))];
}

function calculateTotalRevenue(yearData: any): [number, number] {
  const revenues: Record<string, [number, number]> = {
    sekelbos: yearData.sekelbosRevenue,
    cattle: yearData.cattleRevenue,
    goats: yearData.goatsRevenue,
    pigs: yearData.pigsRevenue,
    chickens: yearData.chickensRevenue,
    crops: yearData.cropsRevenue,
  };
  return sumRevenue(revenues);
}

function calculatePartnerIncomes(profit: [number, number], equity: any) {
  const oomWillieIncome = calculateEquityShare(profit, equity.oomWillie);
  const ebenIncome = calculateEquityShare(profit, equity.eben);
  const hansEquityIncome = calculateEquityShare(profit, equity.hans);
  return { oomWillieIncome, ebenIncome, hansEquityIncome };
}

const MONTHS_IN_YEAR = 12;

function calculateHansTotalIncome(
  hansEquityIncome: [number, number],
  hansMonthlySalary: [number, number],
): { hansSalary: [number, number]; hansTotalIncome: [number, number] } {
  const hansSalary: [number, number] = [hansMonthlySalary[0] * MONTHS_IN_YEAR, hansMonthlySalary[1] * MONTHS_IN_YEAR];
  const hansTotalIncome: [number, number] = [hansEquityIncome[0] + hansSalary[0], hansEquityIncome[1] + hansSalary[1]];
  return { hansSalary, hansTotalIncome };
}

export function calculateYearlyFinancials(year: number, data: PartnershipData): YearlyFinancials {
  const yearIndex = year - 1;
  const yearData = data.yearlyTargets[yearIndex];
  const equity = data.equityStructure[yearIndex];

  const revenue = calculateTotalRevenue(yearData);
  const costs = yearData.costs;
  const profit = calculateProfit(revenue, costs);

  const { oomWillieIncome, ebenIncome, hansEquityIncome } = calculatePartnerIncomes(profit, equity);
  const { hansSalary, hansTotalIncome } = calculateHansTotalIncome(hansEquityIncome, data.hansMonthlySalary);

  return {
    revenue,
    costs,
    profit,
    oomWillieIncome,
    ebenIncome,
    hansEquityIncome,
    hansSalary,
    hansTotalIncome,
  };
}

const summaryCache = new Map<string, FinancialSummary>();

export function calculateFinancialSummary(data: PartnershipData): FinancialSummary {
  const cacheKey = JSON.stringify(data);
  if (summaryCache.has(cacheKey)) {
    return summaryCache.get(cacheKey)!;
  }

  const yearly: YearlyFinancials[] = [];
  const cumulative = {
    revenue: [0, 0] as [number, number],
    costs: [0, 0] as [number, number],
    profit: [0, 0] as [number, number],
    oomWillie: [0, 0] as [number, number],
    eben: [0, 0] as [number, number],
    hans: [0, 0] as [number, number],
  };

  for (let i = 1; i <= data.yearlyTargets.length; i++) {
    const yearlyFinancials = calculateYearlyFinancials(i, data);
    yearly.push(yearlyFinancials);

    cumulative.revenue[0] += yearlyFinancials.revenue[0];
    cumulative.revenue[1] += yearlyFinancials.revenue[1];
    cumulative.costs[0] += yearlyFinancials.costs[0];
    cumulative.costs[1] += yearlyFinancials.costs[1];
    cumulative.profit[0] += yearlyFinancials.profit[0];
    cumulative.profit[1] += yearlyFinancials.profit[1];
    cumulative.oomWillie[0] += yearlyFinancials.oomWillieIncome[0];
    cumulative.oomWillie[1] += yearlyFinancials.oomWillieIncome[1];
    cumulative.eben[0] += yearlyFinancials.ebenIncome[0];
    cumulative.eben[1] += yearlyFinancials.ebenIncome[1];
    cumulative.hans[0] += yearlyFinancials.hansTotalIncome[0];
    cumulative.hans[1] += yearlyFinancials.hansTotalIncome[1];
  }

  const summary = { yearly, cumulative };
  summaryCache.set(cacheKey, summary);
  return summary;
}


export function calculateROI(investment: [number, number], netProfit: [number, number]): string {
  if (investment[0] === 0 || investment[1] === 0) {
    if (netProfit[1] > 0) {
      return 'Infinite';
    } else {
      return 'N/A';
    }
  }

  const minROI = ((netProfit[0] - investment[1]) / investment[1]) * 100;
  const maxROI = ((netProfit[1] - investment[0]) / investment[0]) * 100;

  return `${Math.round(minROI).toLocaleString()}-${Math.round(maxROI).toLocaleString()}%`;
}

export function calculateBaseline(data: PartnershipData): {
  revenue: [number, number];
  costs: [number, number];
  profit: [number, number];
} {
  const revenue = sumRevenue(data.baselineRevenue);
  const costs = data.baselineCosts;
  const profit = calculateProfit(revenue, costs);

  return { revenue, costs, profit };
}
