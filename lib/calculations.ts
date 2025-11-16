// Utility functions for financial calculations

import { Equity, PartnershipData, YearlyTarget } from './partnershipData';
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

// New helper functions for dynamic calculations based on slider data

function calculateLivestockRevenue(
  hectares: number,
  density: number,
  marketPrice: [number, number],
  offtakeRate: number,
): [number, number] {
  const totalAnimals = hectares * density;
  const animalsSold = totalAnimals * (offtakeRate / 100);
  return [animalsSold * marketPrice[0], animalsSold * marketPrice[1]];
}

function calculateLivestockCosts(
  hectares: number,
  density: number,
  costPerHectare: [number, number],
  costPerAnimal: [number, number],
): [number, number] {
  const totalAnimals = hectares * density;
  const minCost = hectares * costPerHectare[0] + totalAnimals * costPerAnimal[0];
  const maxCost = hectares * costPerHectare[1] + totalAnimals * costPerAnimal[1];
  return [minCost, maxCost];
}

function calculateCropsRevenue(hectares: number, revenuePerHectare: [number, number]): [number, number] {
  return [hectares * revenuePerHectare[0], hectares * revenuePerHectare[1]];
}

function calculateCropsCosts(hectares: number, costPerHectare: [number, number]): [number, number] {
  return [hectares * costPerHectare[0], hectares * costPerHectare[1]];
}

function calculateTotalRevenue(data: PartnershipData, yearData: YearlyTarget): [number, number] {
  const revenues: Record<string, [number, number]> = {
    sekelbos: [
      yearData.sekelbosCleared * data.sekelbosRevenuePerHectare[0],
      yearData.sekelbosCleared * data.sekelbosRevenuePerHectare[1],
    ],
    cattle: calculateLivestockRevenue(
      data.cattleHectares,
      data.cattlePerHectare,
      data.cattleMarketPrice,
      data.cattleOfftakeRate,
    ),
    goats: calculateLivestockRevenue(
      data.goatsHectares,
      data.goatsPerHectare,
      data.goatsMarketPrice,
      data.goatsOfftakeRate,
    ),
    pigs: calculateLivestockRevenue(
      data.pigsHectares,
      data.pigsPerHectare,
      data.pigsMarketPrice,
      data.pigsOfftakeRate,
    ),
    crops: calculateCropsRevenue(data.cropsHectares, data.cropsRevenuePerHectare),
  };

  if (data.includeChickens) {
    revenues.chickens = calculateLivestockRevenue(
      data.chickensHectares,
      data.chickensPerHectare,
      data.chickensMarketPrice,
      data.chickensOfftakeRate,
    );
  } else {
    revenues.chickens = [0, 0];
  }

  if (data.includeRabbits) {
    revenues.rabbits = calculateLivestockRevenue(
      data.rabbitsHectares,
      data.rabbitsPerHectare,
      data.rabbitsMarketPrice,
      data.rabbitsOfftakeRate,
    );
  } else {
    revenues.rabbits = [0, 0];
  }


  return sumRevenue(revenues);
}

function calculateTotalCosts(data: PartnershipData, yearData: YearlyTarget): [number, number] {
  const costs: [number, number][] = [];

  costs.push(calculateLivestockCosts(
    data.cattleHectares,
    data.cattlePerHectare,
    data.cattleCostPerHectare,
    data.cattleCostPerAnimal,
  ));

  costs.push(calculateLivestockCosts(
    data.goatsHectares,
    data.goatsPerHectare,
    data.goatsCostPerHectare,
    data.goatsCostPerAnimal,
  ));

  costs.push(calculateLivestockCosts(
    data.pigsHectares,
    data.pigsPerHectare,
    data.pigsCostPerHectare,
    data.pigsCostPerAnimal,
  ));

  if (data.includeChickens) {
    costs.push(calculateLivestockCosts(
      data.chickensHectares,
      data.chickensPerHectare,
      data.chickensCostPerHectare,
      data.chickensCostPerAnimal,
    ));
  }

  if (data.includeRabbits) {
    costs.push(calculateLivestockCosts(
      data.rabbitsHectares,
      data.rabbitsPerHectare,
      data.rabbitsCostPerHectare,
      data.rabbitsCostPerAnimal,
    ));
  }

  costs.push(calculateCropsCosts(data.cropsHectares, data.cropsCostPerHectare));

  let minTotal = 0;
  let maxTotal = 0;

  costs.forEach(([min, max]) => {
    minTotal += min;
    maxTotal += max;
  });

  // Assuming yearData.costs contains other costs like sekelbos clearing, baseline costs etc.
  // This is a temporary solution until all costs are slider-driven.
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

  // Bounds checking to prevent accessing out of range data.
  if (yearIndex < 0 || yearIndex >= data.yearlyTargets.length || yearIndex >= data.equityStructure.length) {
    // Returning a zeroed-out structure for invalid years.
    const zero: [number, number] = [0, 0];
    return {
      revenue: zero,
      costs: zero,
      profit: zero,
      oomHeinIncome: zero,
      ebenIncome: zero,
      hansEquityIncome: zero,
      hansSalary: zero,
      hansTotalIncome: zero,
    };
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
  cumulative.oomHein[0] += yearlyFinancials.oomHeinIncome[0];
  cumulative.oomHein[1] += yearlyFinancials.oomHeinIncome[1];
  cumulative.eben[0] += yearlyFinancials.ebenIncome[0];
  cumulative.eben[1] += yearlyFinancials.ebenIncome[1];
  cumulative.hans[0] += yearlyFinancials.hansTotalIncome[0];
  cumulative.hans[1] += yearlyFinancials.hansTotalIncome[1];
}


/**
 * Calculates Return on Investment (ROI) as a percentage
 * 
 * The calculation uses cross-multiplication to provide the widest possible range:
 * - minROI = minimum profit / maximum investment (most conservative scenario)
 * - maxROI = maximum profit / minimum investment (most optimistic scenario)
 * 
 * This approach ensures that:
 * 1. The ROI range accurately represents the best and worst case scenarios
 * 2. Investors can see the full spectrum of potential returns
 * 3. The range accounts for uncertainty in both investment and returns
 * 
 * @param investment - [min, max] range of investment amount
 * @param netProfit - [min, max] range of net profit
 * @returns Formatted ROI string (e.g., "1,870-3,400%") or special values
 */
export function calculateROI(investment: [number, number], netProfit: [number, number]): string {
  // If the investment is zero, ROI can be considered infinite if there's a profit, otherwise it's not applicable.
  if (investment[0] === 0 && investment[1] === 0) {
    return netProfit[0] > 0 || netProfit[1] > 0 ? 'Infinite' : 'N/A';
  }

  // Avoid division by zero. If either investment bound is zero, ROI calculation is problematic.
  if (investment[0] === 0 || investment[1] === 0) {
    return 'Invalid Investment';
  }

  // Cross-multiply to get the widest possible ROI range
  // minROI: worst case (lowest profit with highest investment)
  // maxROI: best case (highest profit with lowest investment)
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
