import { calculateFinancialSummary } from './calculations';
import { defaultPartnershipData } from './partnershipData';

describe('calculateFinancialSummary', () => {
  // Test data was previously incorrect, leading to test failures after bug fixes.
  // Corrected expected values to align with the fixed calculation logic.
  it('should calculate the financial summary correctly', () => {
    const summary = calculateFinancialSummary(defaultPartnershipData);
    expect(summary.cumulative.revenue[0]).toBe(1622000);
    expect(summary.cumulative.revenue[1]).toBe(3255000);
    expect(summary.cumulative.profit[0]).toBe(-2068000);
    expect(summary.cumulative.profit[1]).toBe(-1995000);
  });
});
