// This test file has been updated to use the refactored calculation functions.
// The individual enterprise revenue/cost functions are now internal to the
// calculateYearlyFinancials function. We test the public API instead.

import { calculateYearlyFinancials, calculateFinancialSummary } from './calculations';
import { PartnershipData } from './partnershipData';

describe('Refactored Financial Calculations', () => {
  // Test data using the new enterprise-based model
  const testData: PartnershipData = {
    landSize: 600,
    sekelbosEncroachment: 70,
    sekelbosRevenuePerHectare: [3000, 5000],
    currentLSU: 100,
    targetLSU: 200,
    includeChickens: true,
    includeRabbits: false,
    enterprises: [
      {
        id: 'cattle',
        name: 'Cattle',
        type: 'livestock',
        enabled: true,
        hectares: 100,
        density: 1,
        marketPrice: [1000, 1500],
        offtakeRate: 25,
        costPerHectare: [50, 75],
        costPerAnimal: [100, 150],
      },
      {
        id: 'crops',
        name: 'Crops',
        type: 'crop',
        enabled: true,
        hectares: 50,
        revenuePerHectare: [500, 800],
        costPerHectare: [200, 300],
      },
    ],
    hansLivestockValue: [48000, 98000],
    hansMonthlySalary: [10000, 15000],
    equityStructure: [
      { year: 1, oomHein: 35, eben: 35, hans: 0 },
      { year: 2, oomHein: 35, eben: 35, hans: 15 },
    ],
    yearlyTargets: [
      { year: 1, sekelbosCleared: 10, otherCosts: [10000, 15000] },
      { year: 2, sekelbosCleared: 0, otherCosts: [12000, 18000] },
    ],
  };

  describe('calculateYearlyFinancials', () => {
    it('should calculate yearly financials with correct structure', () => {
      const result = calculateYearlyFinancials(1, testData);
      
      expect(result).toHaveProperty('year');
      expect(result).toHaveProperty('revenue');
      expect(result).toHaveProperty('costs');
      expect(result).toHaveProperty('profit');
      expect(result).toHaveProperty('oomHeinIncome');
      expect(result).toHaveProperty('ebenIncome');
      expect(result).toHaveProperty('hansEquityIncome');
      expect(result).toHaveProperty('hansSalary');
      expect(result).toHaveProperty('hansTotalIncome');
    });

    it('should include enterprise revenues and sekelbos revenue in total', () => {
      const result = calculateYearlyFinancials(1, testData);
      
      // Revenue should be a positive range [min, max]
      expect(result.revenue[0]).toBeGreaterThan(0);
      expect(result.revenue[1]).toBeGreaterThanOrEqual(result.revenue[0]);
    });

    it('should include enterprise costs, other costs, and salary in total costs', () => {
      const result = calculateYearlyFinancials(1, testData);
      
      // Costs should be a positive range [min, max]
      expect(result.costs[0]).toBeGreaterThan(0);
      expect(result.costs[1]).toBeGreaterThanOrEqual(result.costs[0]);
    });

    it('should return zero values for invalid year', () => {
      const result = calculateYearlyFinancials(99, testData);
      
      expect(result.revenue).toEqual([0, 0]);
      expect(result.costs).toEqual([0, 0]);
      expect(result.profit).toEqual([0, 0]);
    });
  });

  describe('calculateFinancialSummary', () => {
    it('should calculate summary for all years', () => {
      const summary = calculateFinancialSummary(testData);
      
      expect(summary.yearly.length).toBe(testData.yearlyTargets.length);
      expect(summary.cumulative.revenue[0]).toBeGreaterThan(0);
      expect(summary.cumulative.costs[0]).toBeGreaterThan(0);
    });

    it('should have cumulative totals matching sum of yearly values', () => {
      const summary = calculateFinancialSummary(testData);
      
      const summedRevenue = summary.yearly.reduce((sum, y) => [sum[0] + y.revenue[0], sum[1] + y.revenue[1]], [0, 0]);
      
      expect(summary.cumulative.revenue[0]).toBeCloseTo(summedRevenue[0], 0);
      expect(summary.cumulative.revenue[1]).toBeCloseTo(summedRevenue[1], 0);
    });
  });
});
