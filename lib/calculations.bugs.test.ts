import {
  calculateROI,
  calculateProfit,
  calculateFinancialSummary,
  sumRevenue,
  calculateEquityShare,
  calculateBaseline,
} from './calculations';
import { defaultPartnershipData } from './partnershipData';

describe('sumRevenue', () => {
  it('should sum the revenues correctly', () => {
    const revenues = {
      cattle: [100, 200] as [number, number],
      goats: [50, 75] as [number, number],
    };
    const total = sumRevenue(revenues);
    expect(total).toEqual([150, 275]);
  });
});

describe('calculateEquityShare', () => {
  it('should calculate the equity share correctly', () => {
    const profit: [number, number] = [1000, 2000];
    const percentage = 25;
    const share = calculateEquityShare(profit, percentage);
    expect(share).toEqual([250, 500]);
  });
});

describe('calculateBaseline', () => {
  it('should calculate the baseline correctly', () => {
    const baseline = calculateBaseline(defaultPartnershipData);
    expect(baseline.revenue[0]).toBe(233000);
    expect(baseline.revenue[1]).toBe(297000);
    expect(baseline.profit[0]).toBe(83000);
    expect(baseline.profit[1]).toBe(97000);
  });
});


describe('calculateFinancialSummary', () => {
  // Test data was previously incorrect, leading to test failures after bug fixes.
  // Corrected expected values to align with the fixed calculation logic.
  it('should calculate the summary for a different number of years', () => {
    const data = JSON.parse(JSON.stringify(defaultPartnershipData));
    data.yearlyTargets = data.yearlyTargets.slice(0, 2);
    const summary = calculateFinancialSummary(data);
    expect(summary.cumulative.revenue[0]).toBe(884000);
    expect(summary.cumulative.revenue[1]).toBe(1649000);
  });
});

describe('calculateProfit', () => {
  it('should calculate the profit correctly', () => {
    const revenue: [number, number] = [1000, 2000];
    const costs: [number, number] = [500, 1000];
    const profit = calculateProfit(revenue, costs);
    expect(profit).toEqual([500, 1000]);
  });
});

describe('calculateROI', () => {
  it('should return "Infinite" when the investment is zero and the profit is positive', () => {
    const investment: [number, number] = [0, 0];
    const netProfit: [number, number] = [100, 200];
    const roi = calculateROI(investment, netProfit);
    expect(roi).toBe('Infinite');
  });

  it('should return "N/A" when the investment is zero and the profit is not positive', () => {
    const investment: [number, number] = [0, 0];
    const netProfit: [number, number] = [-100, 0];
    const roi = calculateROI(investment, netProfit);
    expect(roi).toBe('N/A');
  });
});
