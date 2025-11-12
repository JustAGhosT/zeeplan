import { calculateFinancialSummary } from './calculations';
import { defaultPartnershipData } from './partnershipData';

describe('calculateFinancialSummary', () => {
  it('should calculate the financial summary correctly', () => {
    const summary = calculateFinancialSummary(defaultPartnershipData);
    expect(summary.cumulative.revenue[0]).toBe(1352000);
    expect(summary.cumulative.revenue[1]).toBe(2670000);
    expect(summary.cumulative.profit[0]).toBe(-728000);
    expect(summary.cumulative.profit[1]).toBe(-290000);
  });
});
