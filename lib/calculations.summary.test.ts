import { calculateFinancialSummary } from './calculations';
import { PartnershipData } from './partnershipData';
import { cloneDeep } from 'lodash';

// A consistent, simplified dataset for summary testing
const summaryTestData: PartnershipData = {
  landSize: 100,
  sekelbosEncroachment: 50,
  sekelbosRevenuePerHectare: [1000, 1000], // Simplified to constant values
  enterprises: [
    {
      id: 'goats',
      name: 'Goats',
      type: 'livestock',
      enabled: true,
      hectares: 100,
      density: 1,
      marketPrice: [1000, 1000],
      offtakeRate: 50,
      costPerHectare: [100, 100],
      costPerAnimal: [100, 100]
    }
  ],
  hansLivestockValue: [10000, 10000],
  hansMonthlySalary: [1000, 1000],
  equityStructure: [
    { "year": 1, "oomHein": 35, "eben": 35, "hans": 0 },
    { "year": 2, "oomHein": 30, "eben": 30, "hans": 10 }
  ],
  yearlyTargets: [
    { "year": 1, "sekelbosCleared": 10, "otherCosts": [10000, 10000] },
    { "year": 2, "sekelbosCleared": 10, "otherCosts": [10000, 10000] }
  ]
};

describe('Calculation Engine - Financial Summary', () => {

  it('should calculate a correct 2-year summary', () => {
    const summary = calculateFinancialSummary(summaryTestData);

    // --- Year 1 Calculations ---
    const year1_goatRevenue = 100 * 1 * 0.50 * 1000; // 50,000
    const year1_sekelbosRevenue = 10 * 1000; // 10,000
    const year1_totalRevenue = year1_goatRevenue + year1_sekelbosRevenue; // 60,000

    const year1_goatCost = (100 * 100) + (100 * 1 * 100); // 20,000
    const year1_otherCost = 10000;
    const year1_hansSalary = 12 * 1000; // 12,000
    const year1_totalCost = year1_goatCost + year1_otherCost + year1_hansSalary; // 42,000

    const year1_profit = year1_totalRevenue - year1_totalCost; // 18,000
    const year1_oomHein = year1_profit * 0.35; // 6,300
    const year1_eben = year1_profit * 0.35; // 6,300
    const year1_hansEquity = year1_profit * 0; // 0
    const year1_hansTotal = year1_hansSalary + year1_hansEquity; // 12,000

    // --- Year 2 Calculations (Identical to Year 1 for this data) ---
    const year2_profit = year1_profit; // 18,000
    const year2_oomHein = year2_profit * 0.30; // 5,400
    const year2_eben = year2_profit * 0.30; // 5,400
    const year2_hansEquity = year2_profit * 0.10; // 1,800
    const year2_hansTotal = (12 * 1000) + year2_hansEquity; // 13,800

    // --- Cumulative Calculations ---
    const cumulativeRevenue = year1_totalRevenue * 2; // 120,000
    const cumulativeCost = year1_totalCost * 2; // 84,000
    const cumulativeProfit = year1_profit * 2; // 36,000
    const cumulativeOomHein = year1_oomHein + year2_oomHein; // 11,700
    const cumulativeEben = year1_eben + year2_eben; // 11,700
    const cumulativeHans = year1_hansTotal + year2_hansTotal; // 25,800

    // --- Assertions ---
    expect(summary.yearly.length).toBe(2);

    // Check Year 1 values (since min/max are the same, check index 0)
    expect(summary.yearly[0].profit[0]).toBe(year1_profit);
    expect(summary.yearly[0].oomHeinIncome[0]).toBe(year1_oomHein);
    expect(summary.yearly[0].ebenIncome[0]).toBe(year1_eben);
    expect(summary.yearly[0].hansTotalIncome[0]).toBe(year1_hansTotal);

    // Check Year 2 values
    expect(summary.yearly[1].profit[0]).toBe(year2_profit);
    expect(summary.yearly[1].oomHeinIncome[0]).toBe(year2_oomHein);
    expect(summary.yearly[1].ebenIncome[0]).toBe(year2_eben);
    expect(summary.yearly[1].hansTotalIncome[0]).toBe(year2_hansTotal);

    // Check Cumulative values
    expect(summary.cumulative.revenue[0]).toBe(cumulativeRevenue);
    expect(summary.cumulative.costs[0]).toBe(cumulativeCost);
    expect(summary.cumulative.profit[0]).toBe(cumulativeProfit);
    expect(summary.cumulative.oomHein[0]).toBe(cumulativeOomHein);
    expect(summary.cumulative.eben[0]).toBe(cumulativeEben);
    expect(summary.cumulative.hans[0]).toBe(cumulativeHans);
  });

  it('should return an empty summary if the data has no yearly targets', () => {
    const testData = cloneDeep(summaryTestData);
    testData.yearlyTargets = []; // No years to calculate

    const summary = calculateFinancialSummary(testData);

    expect(summary.yearly.length).toBe(0);
    expect(summary.cumulative.revenue).toEqual([0, 0]);
    expect(summary.cumulative.costs).toEqual([0, 0]);
    expect(summary.cumulative.profit).toEqual([0, 0]);
    expect(summary.cumulative.oomHein).toEqual([0, 0]);
    expect(summary.cumulative.eben).toEqual([0, 0]);
    expect(summary.cumulative.hans).toEqual([0, 0]);
  });
});
