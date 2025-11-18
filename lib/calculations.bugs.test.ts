import { calculateFinancialSummary } from './calculations';
import { PartnershipData } from './partnershipData';
import { defaultPartnershipData } from './partnershipData';


// A more realistic mock data structure for testing the refactored logic
const mockRefactoredData: PartnershipData = {
    ...defaultPartnershipData,
    enterprises: [
        { id: 'cattle', name: 'Cattle', type: 'livestock', enabled: true, hectares: 300, density: 0.24, marketPrice: [12000, 15000], offtakeRate: 25, costPerHecatare: [100,150], costPerAnimal: [500,700] },
        { id: 'goats', name: 'Goats', type: 'livestock', enabled: true, hectares: 100, density: 1, marketPrice: [1500, 2000], offtakeRate: 40, costPerHecatare: [80,120], costPerAnimal: [200,300] },
        { id: 'pigs', name: 'Pigs', type: 'livestock', enabled: true, hectares: 5, density: 20, marketPrice: [2000, 2500], offtakeRate: 80, costPerHecatare: [150,200], costPerAnimal: [800,1000] },
        { id: 'sekelbos', name: 'Sekelbos', type: 'other', enabled: true, hectares: 0, revenuePerHectare: [3000,5000], costTotal: [0,0] }
    ],
};


describe('calculateFinancialSummary with bugs', () => {
  it('should not throw when number of years is less than targets', () => {
    // This test is designed to catch out-of-bounds errors
    const dataWithFewerTargets = {
      ...mockRefactoredData,
      yearlyTargets: mockRefactoredData.yearlyTargets.slice(0, 2), // Only 2 years of targets
      equityStructure: mockRefactoredData.equityStructure.slice(0, 2),
    };

    // We expect this to run without crashing and process only the available years
    const summary = calculateFinancialSummary(dataWithFewerTargets);
    expect(summary.yearly.length).toBe(2);
    expect(summary.cumulative.revenue[0]).toBeGreaterThan(0);
  });

  it('should return zeroed-out financials for an invalid year', () => {
    const summary = calculateFinancialSummary({ ...mockRefactoredData, yearlyTargets: [] });
    expect(summary.yearly.length).toBe(0);
    expect(summary.cumulative.revenue[0]).toBe(0);
  });

  it('should handle enabled/disabled enterprises correctly', () => {
    const dataWithDisabledEnterprise = {
        ...mockRefactoredData,
        enterprises: mockRefactoredData.enterprises.map(e => e.id === 'cattle' ? { ...e, enabled: false } : e),
    };

    const summaryWithCattle = calculateFinancialSummary(mockRefactoredData);
    const summaryWithoutCattle = calculateFinancialSummary(dataWithDisabledEnterprise);

    expect(summaryWithoutCattle.cumulative.revenue[0]).toBeLessThan(summaryWithCattle.cumulative.revenue[0]);
    expect(summaryWithoutCattle.cumulative.costs[0]).toBeLessThan(summaryWithCattle.cumulative.costs[0]);
  });
});
