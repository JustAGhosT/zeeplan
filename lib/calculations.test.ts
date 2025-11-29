import { calculateYearlyFinancials, calculateFinancialSummary, calculateROI } from './calculations';
import { PartnershipData, defaultPartnershipData } from './partnershipData';
import { deepCopy } from './testUtils';

describe('Financial Calculations (Refactored)', () => {
  let testData: PartnershipData;

  beforeEach(() => {
    // Use a deep copy to prevent tests from interfering with each other
    testData = deepCopy(defaultPartnershipData);
  });

  describe('calculateYearlyFinancials', () => {
    it('should calculate Year 1 financials correctly', () => {
      const year1 = calculateYearlyFinancials(1, testData);

      // Revenue Calculation
      // Cattle: 500ha * 0.2 density * (25/100) offtake = 25 animals * [8000, 12000] price = [200000, 300000]
      // Goats: 50ha * 1 density * (50/100) offtake = 25 animals * [1000, 1500] price = [25000, 37500]
      // ... and so on for other enterprises
      // Sekelbos: 50ha * [3000, 5000] = [150000, 250000]
      // Min Revenue = 470,200; Max Revenue = 778,300
      expect(year1.revenue[0]).toBeCloseTo(470200);
      expect(year1.revenue[1]).toBeCloseTo(778300);

      // Cost Calculation (includes Hans's salary and other costs)
      // Min Costs = 316,500; Max Costs = 521,500
      expect(year1.costs[0]).toBeCloseTo(316500);
      expect(year1.costs[1]).toBeCloseTo(521500);

      // Profit is Revenue - Costs. Note the cross-calculation for min/max.
      const expectedMinProfit = year1.revenue[0] - year1.costs[1]; // 470200 - 521500 = -51300
      const expectedMaxProfit = year1.revenue[1] - year1.costs[0];
      expect(year1.profit[0]).toBeCloseTo(expectedMinProfit);
      expect(year1.profit[1]).toBeCloseTo(expectedMaxProfit);

      // Equity for Year 1: Hans has 0%
      expect(year1.hansEquityIncome[0]).toBeCloseTo(0);
      expect(year1.hansEquityIncome[1]).toBeCloseTo(0);

      // Hans Total Income is just his salary
      expect(year1.hansTotalIncome[0]).toBe(120000);
      expect(year1.hansTotalIncome[1]).toBe(180000);
    });

    it('should calculate Year 3 financials with Hans equity', () => {
        const year3 = calculateYearlyFinancials(3, testData);
        const equityYear3 = testData.equityStructure.find(e => e.year === 3);

        expect(equityYear3.hans).toBe(22.5);

        const expectedMinHansEquity = year3.profit[0] * (22.5 / 100);
        const expectedMaxHansEquity = year3.profit[1] * (22.5 / 100);

        expect(year3.hansEquityIncome[0]).toBeCloseTo(expectedMinHansEquity);
        expect(year3.hansEquityIncome[1]).toBeCloseTo(expectedMaxHansEquity);

        const hansSalary = [testData.hansMonthlySalary[0] * 12, testData.hansMonthlySalary[1] * 12];
        expect(year3.hansTotalIncome[0]).toBeCloseTo(expectedMinHansEquity + hansSalary[0]);
        expect(year3.hansTotalIncome[1]).toBeCloseTo(expectedMaxHansEquity + hansSalary[1]);
    });

    it('should return zeroed financials for an invalid year', () => {
      const invalidYear = calculateYearlyFinancials(99, testData);
      expect(invalidYear.revenue).toEqual([0, 0]);
      expect(invalidYear.costs).toEqual([0, 0]);
      expect(invalidYear.profit).toEqual([0, 0]);
    });
  });

  describe('calculateFinancialSummary', () => {
    it('should calculate cumulative totals correctly', () => {
      const summary = calculateFinancialSummary(testData);
      let revenueSumMin = 0;
      let revenueSumMax = 0;

      for(let i = 1; i <= 5; i++) {
        const yearly = calculateYearlyFinancials(i, testData);
        revenueSumMin += yearly.revenue[0];
        revenueSumMax += yearly.revenue[1];
      }

      expect(summary.cumulative.revenue[0]).toBeCloseTo(revenueSumMin);
      expect(summary.cumulative.revenue[1]).toBeCloseTo(revenueSumMax);
      expect(summary.yearly.length).toBe(5);
    });
  });

  describe('calculateROI', () => {
    it('should calculate ROI correctly', () => {
      const investment: [number, number] = [48000, 98000];
      const profit: [number, number] = [995000, 1780000];
      const roi = calculateROI(investment, profit);

      // minROI = 995000 / 98000 = ~1015%
      // maxROI = 1780000 / 48000 = ~3708%
      expect(roi).toMatch(/1,015-3,708%/);
    });

    it('should return "Infinite" for zero investment with profit', () => {
      const roi = calculateROI([0, 0], [1000, 2000]);
      expect(roi).toBe('Infinite');
    });
  });

  describe('Dynamic Enterprise Handling', () => {
    it('should exclude disabled enterprises from calculations', () => {
        const summaryBefore = calculateFinancialSummary(testData);

        const cattleEnterprise = testData.enterprises.find(e => e.id === 'cattle');
        cattleEnterprise.enabled = false;

        const summaryAfter = calculateFinancialSummary(testData);

        expect(summaryAfter.cumulative.revenue[0]).toBeLessThan(summaryBefore.cumulative.revenue[0]);
        expect(summaryAfter.cumulative.costs[0]).toBeLessThan(summaryBefore.cumulative.costs[0]);
    });

    it('should handle an empty enterprise array', () => {
        testData.enterprises = [];
        const summary = calculateFinancialSummary(testData);
        const year1 = summary.yearly[0];

        // Revenue should only come from Sekelbos
        const sekelbosRevenue = [
            testData.yearlyTargets[0].sekelbosCleared * testData.sekelbosRevenuePerHectare[0],
            testData.yearlyTargets[0].sekelbosCleared * testData.sekelbosRevenuePerHectare[1],
        ];

        expect(year1.revenue[0]).toBe(sekelbosRevenue[0]);
        expect(year1.revenue[1]).toBe(sekelbosRevenue[1]);
    });
  });
});
