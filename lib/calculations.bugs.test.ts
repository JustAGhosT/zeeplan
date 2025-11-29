import { calculateYearlyFinancials } from './calculations';
import { PartnershipData, Enterprise } from './partnershipData';
import { cloneDeep } from 'lodash';

// A baseline dataset for testing, derived from the refactored JSON data.
const baseTestData: PartnershipData = {
  landSize: 600,
  sekelbosEncroachment: 70,
  sekelbosRevenuePerHectare: [3000, 5000],
  enterprises: [
    {
      id: 'cattle',
      name: 'Cattle',
      type: 'livestock',
      enabled: true,
      hectares: 500,
      density: 0.2,
      marketPrice: [8000, 12000],
      offtakeRate: 25,
      costPerHectare: [100, 200],
      costPerAnimal: [500, 800]
    },
    {
      id: 'crops',
      name: 'Crops',
      type: 'crop',
      enabled: true,
      hectares: 20,
      revenuePerHectare: [2000, 5000],
      costPerHectare: [1000, 2000]
    }
  ],
  hansLivestockValue: [48000, 98000],
  hansMonthlySalary: [10000, 15000],
  equityStructure: [
    { "year": 1, "oomHein": 35, "eben": 35, "hans": 0 },
    { "year": 2, "oomHein": 35, "eben": 35, "hans": 15 },
    { "year": 3, "oomHein": 35, "eben": 35, "hans": 22.5 },
    { "year": 4, "oomHein": 35, "eben": 35, "hans": 30 },
    { "year": 5, "oomHein": 35, "eben": 35, "hans": 30 }
  ],
  yearlyTargets: [
    { "year": 1, "sekelbosCleared": 50, "otherCosts": [50000, 75000] },
    { "year": 2, "sekelbosCleared": 0, "otherCosts": [60000, 85000] }
  ]
};

describe('Calculation Engine - Bug Fixes and Edge Cases', () => {

  it('should calculate zero revenue and costs for an enterprise with zero hectares', () => {
    const testData = cloneDeep(baseTestData);
    // Set cattle hectares to zero
    (testData.enterprises[0] as any).hectares = 0;

    const year1Financials = calculateYearlyFinancials(1, testData);

    // Revenue should only come from crops and sekelbos
    const expectedMinRevenue = (20 * 2000) + (50 * 3000); // Crops + Sekelbos
    const expectedMaxRevenue = (20 * 5000) + (50 * 5000);
    expect(year1Financials.revenue[0]).toBe(expectedMinRevenue);
    expect(year1Financials.revenue[1]).toBe(expectedMaxRevenue);

    // Costs should include crops, other costs, and Hans's salary, but zero for cattle.
    const expectedMinCosts = (20 * 1000) + 50000 + (12 * 10000); // Crops + Other + Hans Salary
    const expectedMaxCosts = (20 * 2000) + 75000 + (12 * 15000);
    expect(year1Financials.costs[0]).toBe(expectedMinCosts);
    expect(year1Financials.costs[1]).toBe(expectedMaxCosts);
  });

  it('should ignore a disabled enterprise completely', () => {
    const testData = cloneDeep(baseTestData);
    // Disable the cattle enterprise
    (testData.enterprises[0] as any).enabled = false;

    const year1Financials = calculateYearlyFinancials(1, testData);

    // Revenue should only come from crops and sekelbos (same as zero hectares test)
    const expectedMinRevenue = (20 * 2000) + (50 * 3000);
    const expectedMaxRevenue = (20 * 5000) + (50 * 5000);
    expect(year1Financials.revenue[0]).toBe(expectedMinRevenue);
    expect(year1Financials.revenue[1]).toBe(expectedMaxRevenue);

    // Costs should also be the same as the zero hectares test
    const expectedMinCosts = (20 * 1000) + 50000 + (12 * 10000);
    const expectedMaxCosts = (20 * 2000) + 75000 + (12 * 15000);
    expect(year1Financials.costs[0]).toBe(expectedMinCosts);
    expect(year1Financials.costs[1]).toBe(expectedMaxCosts);
  });

  it('should calculate zero revenue but still incur per-hectare costs for livestock with zero offtake', () => {
    const testData = cloneDeep(baseTestData);
    // Set cattle offtake rate to zero
    (testData.enterprises[0] as any).offtakeRate = 0;

    const year1Financials = calculateYearlyFinancials(1, testData);

    // Revenue should only be from crops and sekelbos, as cattle revenue is now zero
    const expectedMinRevenue = (20 * 2000) + (50 * 3000);
    const expectedMaxRevenue = (20 * 5000) + (50 * 5000);
    expect(year1Financials.revenue[0]).toBe(expectedMinRevenue);
    expect(year1Financials.revenue[1]).toBe(expectedMaxRevenue);

    // Costs should be the same as the base case, as per-hectare and per-animal costs still apply
    const cattleMinCost = (500 * 100) + (500 * 0.2 * 500); // per ha + per animal
    const cattleMaxCost = (500 * 200) + (500 * 0.2 * 800);
    const cropsMinCost = 20 * 1000;
    const cropsMaxCost = 20 * 2000;
    const otherMinCost = 50000;
    const otherMaxCost = 75000;
    const hansMinSalary = 12 * 10000;
    const hansMaxSalary = 12 * 15000;

    const expectedMinCosts = cattleMinCost + cropsMinCost + otherMinCost + hansMinSalary;
    const expectedMaxCosts = cattleMaxCost + cropsMaxCost + otherMaxCost + hansMaxSalary;

    expect(year1Financials.costs[0]).toBe(expectedMinCosts);
    expect(year1Financials.costs[1]).toBe(expectedMaxCosts);
  });

  it('should calculate zero sekelbos revenue if no sekelbos is cleared', () => {
    const testData = cloneDeep(baseTestData);
    const year2Financials = calculateYearlyFinancials(2, testData);

    // Total revenue should only be from cattle and crops
    const cattleMinRevenue = 500 * 0.2 * 0.25 * 8000;
    const cattleMaxRevenue = 500 * 0.2 * 0.25 * 12000;
    const cropsMinRevenue = 20 * 2000;
    const cropsMaxRevenue = 20 * 5000;

    const expectedMinRevenue = cattleMinRevenue + cropsMinRevenue;
    const expectedMaxRevenue = cattleMaxRevenue + cropsMaxRevenue;

    expect(year2Financials.revenue[0]).toBe(expectedMinRevenue);
    expect(year2Financials.revenue[1]).toBe(expectedMaxRevenue);
  });
});
