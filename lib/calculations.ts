// Utility functions for financial calculations, refactored for the new data model.

import { Enterprise, Equity, PartnershipData, YearlyTarget } from './partnershipData';
import { TIME } from './constants';

export interface YearlyFinancials {
  year: number;
  revenue: [number, number];
  costs: [number, number];
  profit: [number, number];
  oomHeinIncome: [number, number];
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
    oomHein: [number, number];
    eben: [number, number];
    hans: [number, number];
  };
}

// Calculates revenue and costs for a single enterprise
function calculateEnterpriseFinancials(enterprise: Enterprise): { revenue: [number, number]; costs: [number, number] } {
  if (!enterprise.enabled) {
    return { revenue: [0, 0], costs: [0, 0] };
  }

  let revenue: [number, number] = [0, 0];
  let costs: [number, number] = [0, 0];

  if (enterprise.type === 'livestock') {
    const { hectares, density = 0, marketPrice = [0, 0], offtakeRate = 0, costPerHectare = [0, 0], costPerAnimal = [0, 0] } = enterprise;
    const totalAnimals = hectares * density;
    const animalsSold = totalAnimals * (offtakeRate / 100);
    revenue = [animalsSold * marketPrice[0], animalsSold * marketPrice[1]];
    costs = [
      hectares * costPerHectare[0] + totalAnimals * costPerAnimal[0],
      hectares * costPerHectare[1] + totalAnimals * costPerAnimal[1],
    ];
  } else if (enterprise.type === 'crop') {
    const { hectares, revenuePerHectare = [0, 0], costPerHectare = [0, 0] } = enterprise;
    revenue = [hectares * revenuePerHectare[0], hectares * revenuePerHectare[1]];
    costs = [hectares * costPerHectare[0], hectares * costPerHectare[1]];
  }

  return { revenue, costs };
}

// Calculates the financial summary for a single year
export function calculateYearlyFinancials(year: number, data: PartnershipData): YearlyFinancials {
  const yearIndex = year - 1;
  const yearTarget = data.yearlyTargets.find(yt => yt.year === year);
  const equity = data.equityStructure.find(es => es.year === year);

  if (!yearTarget || !equity) {
    const zero: [number, number] = [0, 0];
    return { year, revenue: zero, costs: zero, profit: zero, oomHeinIncome: zero, ebenIncome: zero, hansEquityIncome: zero, hansSalary: zero, hansTotalIncome: zero };
  }

  let totalRevenue: [number, number] = [0, 0];
  let totalCosts: [number, number] = [0, 0];

  // Calculate financials for each enterprise and aggregate them
  data.enterprises.forEach(enterprise => {
    const { revenue, costs } = calculateEnterpriseFinancials(enterprise);
    totalRevenue[0] += revenue[0];
    totalRevenue[1] += revenue[1];
    totalCosts[0] += costs[0];
    totalCosts[1] += costs[1];
  });

  // Add sekelbos revenue
  const sekelbosRevenue: [number, number] = [
    yearTarget.sekelbosCleared * data.sekelbosRevenuePerHectare[0],
    yearTarget.sekelbosCleared * data.sekelbosRevenuePerHectare[1],
  ];
  totalRevenue[0] += sekelbosRevenue[0];
  totalRevenue[1] += sekelbosRevenue[1];

  // Add other costs for the year
  totalCosts[0] += yearTarget.otherCosts[0];
  totalCosts[1] += yearTarget.otherCosts[1];

  const profit: [number, number] = [totalRevenue[0] - totalCosts[1], totalRevenue[1] - totalCosts[0]];

  // Calculate partner incomes
  const oomHeinIncome: [number, number] = [profit[0] * (equity.oomHein / 100), profit[1] * (equity.oomHein / 100)];
  const ebenIncome: [number, number] = [profit[0] * (equity.eben / 100), profit[1] * (equity.eben / 100)];
  const hansEquityIncome: [number, number] = [profit[0] * (equity.hans / 100), profit[1] * (equity.hans / 100)];

  const hansSalary: [number, number] = [data.hansMonthlySalary[0] * TIME.MONTHS_IN_YEAR, data.hansMonthlySalary[1] * TIME.MONTHS_IN_YEAR];
  const hansTotalIncome: [number, number] = [hansEquityIncome[0] + hansSalary[0], hansEquityIncome[1] + hansSalary[1]];

  // Hans' salary is also a cost to the partnership
  totalCosts[0] += hansSalary[0];
  totalCosts[1] += hansSalary[1];
  const finalProfit: [number, number] = [totalRevenue[0] - totalCosts[1], totalRevenue[1] - totalCosts[0]];

  return {
    year,
    revenue: totalRevenue,
    costs: totalCosts,
    profit: finalProfit,
    oomHeinIncome: [finalProfit[0] * (equity.oomHein / 100), finalProfit[1] * (equity.oomHein / 100)],
    ebenIncome: [finalProfit[0] * (equity.eben / 100), finalProfit[1] * (equity.eben / 100)],
    hansEquityIncome: [finalProfit[0] * (equity.hans / 100), finalProfit[1] * (equity.hans / 100)],
    hansSalary,
    hansTotalIncome: [
      (finalProfit[0] * (equity.hans / 100)) + hansSalary[0],
      (finalProfit[1] * (equity.hans / 100)) + hansSalary[1]
    ],
  };
}


const summaryCache = new Map<string, FinancialSummary>();
// Calculates the full 5-year financial summary
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
    oomHein: [0, 0] as [number, number],
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
    cumulative.oomHein[0] += yearlyFinancials.oomHeinIncome[0];
    cumulative.oomHein[1] += yearlyFinancials.oomHeinIncome[1];
    cumulative.eben[0] += yearlyFinancials.ebenIncome[0];
    cumulative.eben[1] += yearlyFinancials.ebenIncome[1];
    cumulative.hans[0] += yearlyFinancials.hansTotalIncome[0];
    cumulative.hans[1] += yearlyFinancials.hansTotalIncome[1];
  }

  const summary = { yearly, cumulative };
  summaryCache.set(cacheKey, summary);
  return summary;
}

// Baseline interface for current state
export interface Baseline {
  revenue: [number, number];
  costs: [number, number];
  profit: [number, number];
}

// Calculates the baseline (current state) financials from enterprise data
export function calculateBaseline(data: PartnershipData): Baseline {
  const totalRevenue: [number, number] = [0, 0];
  const totalCosts: [number, number] = [0, 0];

  // Calculate baseline financials for each enabled enterprise
  data.enterprises.forEach(enterprise => {
    const { revenue, costs } = calculateEnterpriseFinancials(enterprise);
    totalRevenue[0] += revenue[0];
    totalRevenue[1] += revenue[1];
    totalCosts[0] += costs[0];
    totalCosts[1] += costs[1];
  });

  const profit: [number, number] = [totalRevenue[0] - totalCosts[1], totalRevenue[1] - totalCosts[0]];

  return { revenue: totalRevenue, costs: totalCosts, profit };
}

// Calculates ROI
export function calculateROI(investment: [number, number], netProfit: [number, number]): string {
  if (investment[0] === 0 && investment[1] === 0) {
    return netProfit[0] > 0 || netProfit[1] > 0 ? 'Infinite' : 'N/A';
  }

  if (investment[1] === 0) {
    return 'Invalid Investment';
  }

  const minROI = (netProfit[0] / investment[1]) * 100;
  const maxROI = (netProfit[1] / investment[0]) * 100;

  if (isNaN(minROI) || isNaN(maxROI)) {
    return 'N/A';
  }

  return `${Math.round(minROI).toLocaleString()}-${Math.round(maxROI).toLocaleString()}%`;
}
