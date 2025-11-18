// Utility functions for financial calculations

import { Equity, PartnershipData, YearlyTarget, Enterprise } from './partnershipData';
import { validateMinMaxRange } from './validation';
import { TIME } from './constants';

export interface YearlyFinancials {
  revenue: [number, number]; // min, max
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

/**
 * Sums all revenue streams into a single min-max range
 * @param revenues - Object containing revenue ranges for each stream
 * @returns [min, max] tuple of total revenue
 */
export function sumRevenue(revenues: Record<string, [number, number]>): [number, number] {
  let minTotal = 0;
  let maxTotal = 0;

  Object.values(revenues).forEach(([min, max]) => {
    minTotal += min;
    maxTotal += max;
  });

  return [minTotal, maxTotal];
}

/**
 * Calculates profit by subtracting costs from revenue
 * @param revenue - [min, max] revenue range
 * @param costs - [min, max] costs range
 * @returns [min, max] profit range
 * @throws Error if ranges are invalid (negative values or min > max)
 */
export function calculateProfit(revenue: [number, number], costs: [number, number]): [number, number] {
  validateMinMaxRange(revenue, 'revenue');
  validateMinMaxRange(costs, 'costs');
  return [revenue[0] - costs[0], revenue[1] - costs[1]];
}

/**
 * Calculates a partner's equity share of the profit
 * @param profit - [min, max] profit range
 * @param percentage - Equity percentage (0-100)
 * @returns [min, max] equity income range, rounded to nearest rand
 * @throws Error if percentage is outside 0-100 range
 */
export function calculateEquityShare(profit: [number, number], percentage: number): [number, number] {
  if (percentage < 0 || percentage > 100) {
    throw new Error(`Invalid percentage for equity share: ${percentage}`);
  }
  return [Math.round(profit[0] * (percentage / 100)), Math.round(profit[1] * (percentage / 100))];
}

export function calculateEnterpriseRevenue(enterprise: Enterprise, yearData: YearlyTarget): [number, number] {
    if (!enterprise.enabled) return [0, 0];

    switch (enterprise.type) {
        case 'livestock':
            const totalAnimals = enterprise.hectares * (enterprise.density ?? 0);
            const animalsSold = totalAnimals * ((enterprise.offtakeRate ?? 0) / 100);
            return [animalsSold * (enterprise.marketPrice?.[0] ?? 0), animalsSold * (enterprise.marketPrice?.[1] ?? 0)];
        case 'crop':
            return [enterprise.hectares * (enterprise.revenuePerHectare?.[0] ?? 0), enterprise.hectares * (enterprise.revenuePerHectare?.[1] ?? 0)];
        case 'other':
             // Special handling for sekelbos based on yearly cleared amount
            if (enterprise.id === 'sekelbos') {
                // Assuming revenuePerHectare is stored for sekelbos
                return [yearData.sekelbosCleared * (enterprise.revenuePerHectare?.[0] ?? 0), yearData.sekelbosCleared * (enterprise.revenuePerHectare?.[1] ?? 0)];
            }
            return enterprise.revenueTotal ?? [0, 0];
        default:
            return [0, 0];
    }
}

export function calculateEnterpriseCosts(enterprise: Enterprise): [number, number] {
    if (!enterprise.enabled) return [0, 0];

    switch (enterprise.type) {
        case 'livestock':
            const totalAnimals = enterprise.hectares * (enterprise.density ?? 0);
            const minCost = enterprise.hectares * (enterprise.costPerHecatare?.[0] ?? 0) + totalAnimals * (enterprise.costPerAnimal?.[0] ?? 0);
            const maxCost = enterprise.hectares * (enterprise.costPerHecatare?.[1] ?? 0) + totalAnimals * (enterprise.costPerAnimal?.[1] ?? 0);
            return [minCost, maxCost];
        case 'crop':
            return [enterprise.hectares * (enterprise.costPerHectare?.[0] ?? 0), enterprise.hectares * (enterprise.costPerHectare?.[1] ?? 0)];
        case 'other':
            return enterprise.costTotal ?? [0, 0];
        default:
            return [0, 0];
    }
}

export function calculateTotalRevenue(data: PartnershipData, yearData: YearlyTarget): [number, number] {
    const enterpriseRevenues = data.enterprises.reduce((acc, enterprise) => {
        acc[enterprise.id] = calculateEnterpriseRevenue(enterprise, yearData);
        return acc;
    }, {} as Record<string, [number, number]>);

    return sumRevenue(enterpriseRevenues);
}

export function calculateTotalCosts(data: PartnershipData, yearData: YearlyTarget): [number, number] {
    const enterpriseCosts = data.enterprises.map(enterprise => calculateEnterpriseCosts(enterprise));

    let minTotal = 0;
    let maxTotal = 0;

    enterpriseCosts.forEach(([min, max]) => {
        minTotal += min;
        maxTotal += max;
    });

    // Add other yearly costs not associated with a specific enterprise
    minTotal += yearData.costs[0];
    maxTotal += yearData.costs[1];

    return [minTotal, maxTotal];
}

function calculatePartnerIncomes(profit: [number, number], equity: Equity) {
  const oomHeinIncome = calculateEquityShare(profit, equity.oomHein);
  const ebenIncome = calculateEquityShare(profit, equity.eben);
  const hansEquityIncome = calculateEquityShare(profit, equity.hans);
  return { oomHeinIncome, ebenIncome, hansEquityIncome };
}

function calculateHansTotalIncome(
  hansEquityIncome: [number, number],
  hansMonthlySalary: [number, number],
): { hansSalary: [number, number]; hansTotalIncome: [number, number] } {
  const hansSalary: [number, number] = [hansMonthlySalary[0] * TIME.MONTHS_IN_YEAR, hansMonthlySalary[1] * TIME.MONTHS_IN_YEAR];
  const hansTotalIncome: [number, number] = [hansEquityIncome[0] + hansSalary[0], hansEquityIncome[1] + hansSalary[1]];
  return { hansSalary, hansTotalIncome };
}

export function calculateYearlyFinancials(year: number, data: PartnershipData): YearlyFinancials {
  const yearIndex = year - 1;

  if (yearIndex < 0 || yearIndex >= data.yearlyTargets.length || yearIndex >= data.equityStructure.length) {
    throw new Error(`Invalid year: ${year}. Data only available for years 1-${data.yearlyTargets.length}.`);
  }
  const yearData = data.yearlyTargets[yearIndex];
  const equity = data.equityStructure[yearIndex];

  const revenue = calculateTotalRevenue(data, yearData);
  const costs = calculateTotalCosts(data, yearData);
  const profit = calculateProfit(revenue, costs);

  const { oomHeinIncome, ebenIncome, hansEquityIncome } = calculatePartnerIncomes(profit, equity);
  const { hansSalary, hansTotalIncome } = calculateHansTotalIncome(hansEquityIncome, data.hansMonthlySalary);

  return {
    revenue,
    costs,
    profit,
    oomHeinIncome,
    ebenIncome,
    hansEquityIncome,
    hansSalary,
    hansTotalIncome,
  };
}

export function calculateFinancialSummary(data: PartnershipData): FinancialSummary {

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
    accumulateFinancials(yearlyFinancials, cumulative);
  }

  const summary = { yearly, cumulative };
  // summaryCache.set(cacheKey, summary);
  return summary;
}

function accumulateFinancials(yearlyFinancials: YearlyFinancials, cumulative: FinancialSummary['cumulative']) {
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


export function calculateROI(investment: [number, number], netProfit: [number, number]): string {
  if (investment[0] === 0 && investment[1] === 0) {
    return netProfit[0] > 0 || netProfit[1] > 0 ? 'Infinite' : 'N/A';
  }

  if (investment[0] === 0 || investment[1] === 0) {
    return 'Invalid Investment';
  }

  const minROI = (netProfit[0] / investment[1]) * 100;
  const maxROI = (netProfit[1] / investment[0]) * 100;

  if (isNaN(minROI) || isNaN(maxROI)) {
    return 'N/A';
  }

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
