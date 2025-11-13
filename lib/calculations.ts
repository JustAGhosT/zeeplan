// Utility functions for financial calculations

import { PartnershipData, YearlyTarget, Equity } from './partnershipData';
import { validateMinMaxRange } from './validation';

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
  validateMinMaxRange(revenue, 'revenue');
  validateMinMaxRange(costs, 'costs');
  return [revenue[0] - costs[0], revenue[1] - costs[1]];
}

export function calculateEquityShare(profit: [number, number], percentage: number): [number, number] {
  if (percentage < 0 || percentage > 100) {
    throw new Error(`Invalid percentage for equity share: ${percentage}`);
  }
  return [Math.round(profit[0] * (percentage / 100)), Math.round(profit[1] * (percentage / 100))];
}

function calculateTotalRevenue(yearData: YearlyTarget, data: PartnershipData): [number, number] {
  const cattleRevenuePerLSU: [number, number] = [
    data.baselineRevenue.cattle[0] / data.currentLSU,
    data.baselineRevenue.cattle[1] / data.currentLSU,
  ];

  const cattleCount = data.cattleHectares * data.cattlePerHectare;
  const goatCount = data.goatsHectares * data.goatsPerHectare;
  const pigCount = data.pigsHectares * data.pigsPerHectare;
  const chickenCount = data.chickensHectares * data.chickensPerHectare;

  // Assuming other livestock revenue is proportional to cattle revenue per LSU
  const goatRevenuePerAnimal: [number, number] = [cattleRevenuePerLSU[0] * 0.2, cattleRevenuePerLSU[1] * 0.2];
  const pigRevenuePerAnimal: [number, number] = [cattleRevenuePerLSU[0] * 0.3, cattleRevenuePerLSU[1] * 0.3];
  const chickenRevenuePerAnimal: [number, number] = [cattleRevenuePerLSU[0] * 0.05, cattleRevenuePerLSU[1] * 0.05];
  const cropsRevenuePerHectare: [number, number] = [
    data.baselineRevenue.crops[0] > 0 ? data.baselineRevenue.crops[0] : 1000,
    data.baselineRevenue.crops[1] > 0 ? data.baselineRevenue.crops[1] : 2000,
  ];

  const revenues: Record<string, [number, number]> = {
    sekelbos: yearData.sekelbosRevenue,
    cattle: [cattleRevenuePerLSU[0] * cattleCount, cattleRevenuePerLSU[1] * cattleCount],
    goats: [goatRevenuePerAnimal[0] * goatCount, goatRevenuePerAnimal[1] * goatCount],
    pigs: [pigRevenuePerAnimal[0] * pigCount, pigRevenuePerAnimal[1] * pigCount],
    chickens: [chickenRevenuePerAnimal[0] * chickenCount, chickenRevenuePerAnimal[1] * chickenCount],
    crops: [cropsRevenuePerHectare[0] * data.cropsHectares, cropsRevenuePerHectare[1] * data.cropsHectares],
  };
  return sumRevenue(revenues);
}

import { MONTHS_IN_YEAR } from './config';

function calculatePartnerIncomes(profit: [number, number], equity: Equity) {
  const oomWillieIncome = calculateEquityShare(profit, equity.oomWillie);
  const ebenIncome = calculateEquityShare(profit, equity.eben);
  const hansEquityIncome = calculateEquityShare(profit, equity.hans);
  return { oomWillieIncome, ebenIncome, hansEquityIncome };
}

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

  // Bounds checking to prevent accessing out of range data.
  if (yearIndex < 0 || yearIndex >= data.yearlyTargets.length || yearIndex >= data.equityStructure.length) {
    // Returning a zeroed-out structure for invalid years.
    const zero: [number, number] = [0, 0];
    return {
      revenue: zero,
      costs: zero,
      profit: zero,
      oomWillieIncome: zero,
      ebenIncome: zero,
      hansEquityIncome: zero,
      hansSalary: zero,
      hansTotalIncome: zero,
    };
  }
  const yearData = data.yearlyTargets[yearIndex];
  const equity = data.equityStructure[yearIndex];

  const revenue = calculateTotalRevenue(yearData, data);
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
    accumulateFinancials(yearlyFinancials, cumulative);
  }

  const summary = { yearly, cumulative };
  summaryCache.set(cacheKey, summary);
  return summary;
}

function accumulateFinancials(yearlyFinancials: YearlyFinancials, cumulative: FinancialSummary['cumulative']) {
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


export function calculateROI(investment: [number, number], netProfit: [number, number]): string {
  // If the investment is zero, ROI can be considered infinite if there's a profit, otherwise it's not applicable.
  if (investment[0] === 0 && investment[1] === 0) {
    return netProfit[0] > 0 || netProfit[1] > 0 ? 'Infinite' : 'N/A';
  }

  // Avoid division by zero. If either investment bound is zero, ROI calculation is problematic.
  // This simplistic check can be refined based on business logic for handling such cases.
  if (investment[0] === 0 || investment[1] === 0) {
    return 'Invalid Investment';
  }

  const minROI = (netProfit[0] / investment[1]) * 100;
  const maxROI = (netProfit[1] / investment[0]) * 100;

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
