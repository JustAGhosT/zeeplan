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

export interface FiveYearSummary {
  year1: YearlyFinancials;
  year2: YearlyFinancials;
  year3: YearlyFinancials;
  year4: YearlyFinancials;
  year5: YearlyFinancials;
  cumulative: {
    revenue: [number, number];
    costs: [number, number];
    profit: [number, number];
    oomWillie: [number, number];
    eben: [number, number];
    hans: [number, number];
  };
}

function sumRevenue(revenues: Record<string, [number, number]>): [number, number] {
  let minTotal = 0;
  let maxTotal = 0;
  
  Object.values(revenues).forEach(([min, max]) => {
    minTotal += min;
    maxTotal += max;
  });
  
  return [minTotal, maxTotal];
}

function calculateProfit(revenue: [number, number], costs: [number, number]): [number, number] {
  return [revenue[0] - costs[1], revenue[1] - costs[0]]; // conservative: min rev - max cost, max rev - min cost
}

function calculateEquityShare(profit: [number, number], percentage: number): [number, number] {
  return [
    Math.round(profit[0] * (percentage / 100)),
    Math.round(profit[1] * (percentage / 100))
  ];
}

export function calculateYearlyFinancials(
  year: number,
  data: PartnershipData
): YearlyFinancials {
  const yearKey = `year${year}` as keyof typeof data.yearlyTargets;
  const yearData = data.yearlyTargets[yearKey];
  const equity = data.equityStructure[yearKey];
  
  // Calculate total revenue
  const revenues: Record<string, [number, number]> = {
    sekelbos: yearData.sekelbosRevenue,
    cattle: yearData.cattleRevenue,
  };
  
  if ('goatsRevenue' in yearData) {
    revenues.goats = yearData.goatsRevenue;
  }
  if ('goatsMeatRevenue' in yearData) {
    revenues.goatsMeat = yearData.goatsMeatRevenue;
  }
  if ('goatsDairyRevenue' in yearData) {
    revenues.goatsDairy = yearData.goatsDairyRevenue;
  }
  
  revenues.pigs = yearData.pigsRevenue;
  revenues.chickens = yearData.chickensRevenue;
  revenues.crops = yearData.cropsRevenue;
  
  const revenue = sumRevenue(revenues);
  const costs = yearData.costs;
  const profit = calculateProfit(revenue, costs);
  
  const oomWillieIncome = calculateEquityShare(profit, equity.oomWillie);
  const ebenIncome = calculateEquityShare(profit, equity.eben);
  const hansEquityIncome = calculateEquityShare(profit, equity.hans);
  
  const hansSalary: [number, number] = [
    data.hansMonthlySalary[0] * 12,
    data.hansMonthlySalary[1] * 12
  ];
  
  const hansTotalIncome: [number, number] = [
    hansEquityIncome[0] + hansSalary[0],
    hansEquityIncome[1] + hansSalary[1]
  ];
  
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

export function calculateFiveYearSummary(data: PartnershipData): FiveYearSummary {
  const year1 = calculateYearlyFinancials(1, data);
  const year2 = calculateYearlyFinancials(2, data);
  const year3 = calculateYearlyFinancials(3, data);
  const year4 = calculateYearlyFinancials(4, data);
  const year5 = calculateYearlyFinancials(5, data);
  
  const cumulative = {
    revenue: [
      year1.revenue[0] + year2.revenue[0] + year3.revenue[0] + year4.revenue[0] + year5.revenue[0],
      year1.revenue[1] + year2.revenue[1] + year3.revenue[1] + year4.revenue[1] + year5.revenue[1],
    ] as [number, number],
    costs: [
      year1.costs[0] + year2.costs[0] + year3.costs[0] + year4.costs[0] + year5.costs[0],
      year1.costs[1] + year2.costs[1] + year3.costs[1] + year4.costs[1] + year5.costs[1],
    ] as [number, number],
    profit: [
      year1.profit[0] + year2.profit[0] + year3.profit[0] + year4.profit[0] + year5.profit[0],
      year1.profit[1] + year2.profit[1] + year3.profit[1] + year4.profit[1] + year5.profit[1],
    ] as [number, number],
    oomWillie: [
      year1.oomWillieIncome[0] + year2.oomWillieIncome[0] + year3.oomWillieIncome[0] + year4.oomWillieIncome[0] + year5.oomWillieIncome[0],
      year1.oomWillieIncome[1] + year2.oomWillieIncome[1] + year3.oomWillieIncome[1] + year4.oomWillieIncome[1] + year5.oomWillieIncome[1],
    ] as [number, number],
    eben: [
      year1.ebenIncome[0] + year2.ebenIncome[0] + year3.ebenIncome[0] + year4.ebenIncome[0] + year5.ebenIncome[0],
      year1.ebenIncome[1] + year2.ebenIncome[1] + year3.ebenIncome[1] + year4.ebenIncome[1] + year5.ebenIncome[1],
    ] as [number, number],
    hans: [
      year1.hansTotalIncome[0] + year2.hansTotalIncome[0] + year3.hansTotalIncome[0] + year4.hansTotalIncome[0] + year5.hansTotalIncome[0],
      year1.hansTotalIncome[1] + year2.hansTotalIncome[1] + year3.hansTotalIncome[1] + year4.hansTotalIncome[1] + year5.hansTotalIncome[1],
    ] as [number, number],
  };
  
  return {
    year1,
    year2,
    year3,
    year4,
    year5,
    cumulative,
  };
}

export function formatCurrency(value: number): string {
  return 'R' + value.toLocaleString('en-ZA', { maximumFractionDigits: 0 });
}

export function formatRange(range: [number, number]): string {
  return `${formatCurrency(range[0])}-${formatCurrency(range[1])}`;
}

export function calculateROI(investment: [number, number], netProfit: [number, number]): string {
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
