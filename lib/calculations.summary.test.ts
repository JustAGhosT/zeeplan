import { calculateFinancialSummary } from './calculations';
import { PartnershipData } from './partnershipData';
import { defaultPartnershipData } from './partnershipData';

// Using a structured mock that aligns with the new data model
const mockRefactoredData: PartnershipData = {
    ...defaultPartnershipData,
    enterprises: [
        { id: 'cattle', name: 'Cattle', type: 'livestock', enabled: true, hectares: 300, density: 0.24, marketPrice: [12000, 15000], offtakeRate: 25, costPerHecatare: [100,150], costPerAnimal: [500,700] },
        { id: 'goats', name: 'Goats', type: 'livestock', enabled: true, hectares: 100, density: 1, marketPrice: [1500, 2000], offtakeRate: 40, costPerHecatare: [80,120], costPerAnimal: [200,300] },
        { id: 'pigs', name: 'Pigs', type: 'livestock', enabled: true, hectares: 5, density: 20, marketPrice: [2000, 2500], offtakeRate: 80, costPerHecatare: [150,200], costPerAnimal: [800,1000] },
        { id: 'sekelbos', name: 'Sekelbos', type: 'other', enabled: true, hectares: 0, revenuePerHecatare: [3000,5000], costTotal: [0,0] }
    ],
     yearlyTargets: [
        { year: 1, sekelbosCleared: 50, costs: [100000, 150000] },
        { year: 2, sekelbosCleared: 50, costs: [120000, 170000] },
        { year: 3, sekelbosCleared: 50, costs: [140000, 190000] },
        { year: 4, sekelbosCleared: 50, costs: [160000, 210000] },
        { year: 5, sekelbosCleared: 50, costs: [180000, 230000] },
    ],
    equityStructure: defaultPartnershipData.equityStructure,
    hansMonthlySalary: defaultPartnershipData.hansMonthlySalary,
};

describe('calculateFinancialSummary', () => {
  it('should calculate the financial summary correctly', () => {
    const summary = calculateFinancialSummary(mockRefactoredData);

    // Check for the correct number of years
    expect(summary.yearly).toHaveLength(5);

    // Check that cumulative values are calculated
    expect(summary.cumulative.revenue[0]).toBeGreaterThan(0);
    expect(summary.cumulative.costs[0]).toBeGreaterThan(0);
    expect(summary.cumulative.profit[0]).not.toBe(0); // Could be negative, but shouldn't be exactly 0
    expect(summary.cumulative.hans[0]).toBeGreaterThan(0);

    // Check a specific yearly calculation for plausibility
    const year1 = summary.yearly[0];
    expect(year1.revenue[0]).toBeGreaterThan(0);
    expect(year1.costs[0]).toBeGreaterThan(0);
    expect(year1.profit[0]).not.toBe(0);
    expect(year1.hansTotalIncome[0]).toBeGreaterThan(0);

    // Ensure cumulative is the sum of yearly
    const totalRevenue = summary.yearly.reduce((sum, year) => sum + year.revenue[0], 0);
    expect(summary.cumulative.revenue[0]).toBe(totalRevenue);
  });
});
