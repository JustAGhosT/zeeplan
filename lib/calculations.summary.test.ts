import { calculateFiveYearSummary } from './calculations';
import { defaultPartnershipData } from './partnershipData';

describe('calculateFiveYearSummary', () => {
  it('should calculate the five-year summary correctly', () => {
    const summary = calculateFiveYearSummary(defaultPartnershipData);
    expect(summary.cumulative.revenue[0]).toBe(3707000);
    expect(summary.cumulative.revenue[1]).toBe(6659000);
    expect(summary.cumulative.profit[0]).toBe(747000);
    expect(summary.cumulative.profit[1]).toBe(4579000);
  });
});
