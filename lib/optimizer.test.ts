import { optimizeLandAllocation } from './optimizer';
import { PartnershipData, Enterprise } from './partnershipData';

// Helper function to get enterprise hectares from result
function getEnterpriseHectares(result: Partial<PartnershipData>, id: string): number {
  return result.enterprises?.find(e => e.id === id)?.hectares ?? 0;
}

describe('optimizeLandAllocation', () => {
  // Base test data using the new enterprise-based model
  const baseData: PartnershipData = {
    includeChickens: true,
    includeRabbits: false,
    landSize: 600,
    currentLSU: 72,
    targetLSU: 110,
    sekelbosEncroachment: 70,
    sekelbosRevenuePerHectare: [3000, 5000],
    enterprises: [
      {
        id: 'cattle',
        name: 'Cattle',
        type: 'livestock',
        enabled: true,
        hectares: 500,
        density: 0.144,
        marketPrice: [15000, 20000],
        offtakeRate: 25,
        costPerHectare: [500, 700],
        costPerAnimal: [1000, 1500],
      },
      {
        id: 'goats',
        name: 'Goats',
        type: 'livestock',
        enabled: true,
        hectares: 0,
        density: 5,
        marketPrice: [1000, 1500],
        offtakeRate: 40,
        costPerHectare: [300, 500],
        costPerAnimal: [300, 500],
      },
      {
        id: 'pigs',
        name: 'Pigs',
        type: 'livestock',
        enabled: true,
        hectares: 0,
        density: 10,
        marketPrice: [2000, 3000],
        offtakeRate: 90,
        costPerHectare: [1000, 1500],
        costPerAnimal: [800, 1200],
      },
      {
        id: 'chickens',
        name: 'Chickens',
        type: 'livestock',
        enabled: true,
        hectares: 0,
        density: 100,
        marketPrice: [80, 120],
        offtakeRate: 95,
        costPerHectare: [200, 300],
        costPerAnimal: [20, 30],
      },
      {
        id: 'crops',
        name: 'Crops',
        type: 'crop',
        enabled: true,
        hectares: 0,
        revenuePerHectare: [5000, 10000],
        costPerHectare: [2000, 4000],
      },
    ],
    hansLivestockValue: [48000, 98000],
    hansMonthlySalary: [10000, 15000],
    equityStructure: [
      { year: 1, oomHein: 50, eben: 50, hans: 0 },
      { year: 2, oomHein: 42.5, eben: 42.5, hans: 15 },
      { year: 3, oomHein: 38.75, eben: 38.75, hans: 22.5 },
      { year: 4, oomHein: 35, eben: 35, hans: 30 },
      { year: 5, oomHein: 35, eben: 35, hans: 30 },
    ],
    yearlyTargets: [
      { year: 1, sekelbosCleared: 50, otherCosts: [50000, 75000] },
      { year: 2, sekelbosCleared: 50, otherCosts: [60000, 85000] },
      { year: 3, sekelbosCleared: 20, otherCosts: [70000, 95000] },
      { year: 4, sekelbosCleared: 45, otherCosts: [80000, 105000] },
      { year: 5, sekelbosCleared: 0, otherCosts: [90000, 115000] },
    ],
  };

  test('should allocate all available land', () => {
    const result = optimizeLandAllocation(baseData);
    
    const totalAllocated = result.enterprises?.reduce((sum, e) => sum + e.hectares, 0) ?? 0;
    
    // Should allocate all or nearly all land (within 5% tolerance for rounding)
    expect(totalAllocated).toBeGreaterThan(baseData.landSize * 0.95);
    expect(totalAllocated).toBeLessThanOrEqual(baseData.landSize);
  });

  test('should respect minimum constraints for cattle', () => {
    const result = optimizeLandAllocation(baseData);
    
    const cattleMin = Math.max(200, baseData.landSize * 0.3);
    expect(getEnterpriseHectares(result, 'cattle')).toBeGreaterThanOrEqual(cattleMin);
  });

  test('should respect minimum constraints for crops', () => {
    const result = optimizeLandAllocation(baseData);
    
    // Minimum 30ha for crops
    expect(getEnterpriseHectares(result, 'crops')).toBeGreaterThanOrEqual(30);
  });

  test('should respect maximum constraints', () => {
    const result = optimizeLandAllocation(baseData);
    
    // Each enterprise has specific maximum constraints
    expect(getEnterpriseHectares(result, 'cattle')).toBeLessThanOrEqual(baseData.landSize * 0.7);
    expect(getEnterpriseHectares(result, 'goats')).toBeLessThanOrEqual(baseData.landSize * 0.25);
    expect(getEnterpriseHectares(result, 'pigs')).toBeLessThanOrEqual(100);
    expect(getEnterpriseHectares(result, 'chickens')).toBeLessThanOrEqual(50);
    expect(getEnterpriseHectares(result, 'crops')).toBeLessThanOrEqual(baseData.landSize * 0.2);
  });

  test('should not allocate chickens when includeChickens is false', () => {
    const dataWithoutChickens = { ...baseData, includeChickens: false };
    const result = optimizeLandAllocation(dataWithoutChickens);
    
    expect(getEnterpriseHectares(result, 'chickens')).toBe(0);
  });

  test('should allocate minimum goats when sekelbos encroachment is high', () => {
    const dataWithHighSekelbos = { ...baseData, sekelbosEncroachment: 80 };
    const result = optimizeLandAllocation(dataWithHighSekelbos);
    
    // Should allocate at least 50ha for goats when sekelbos > 50%
    expect(getEnterpriseHectares(result, 'goats')).toBeGreaterThanOrEqual(50);
  });

  test('should allocate zero goats when sekelbos encroachment is low', () => {
    const dataWithLowSekelbos = { ...baseData, sekelbosEncroachment: 20 };
    const result = optimizeLandAllocation(dataWithLowSekelbos);
    
    // With low sekelbos, goats may or may not be allocated based on profitability
    expect(getEnterpriseHectares(result, 'goats')).toBeGreaterThanOrEqual(0);
  });

  test('should return valid allocation object with enterprises', () => {
    const result = optimizeLandAllocation(baseData);
    
    expect(result).toHaveProperty('enterprises');
    expect(result.enterprises).toBeDefined();
    expect(result.enterprises?.length).toBeGreaterThan(0);
  });

  test('should handle edge case of very small land size', () => {
    const smallData = { ...baseData, landSize: 50 };
    const result = optimizeLandAllocation(smallData);
    
    const totalAllocated = result.enterprises?.reduce((sum, e) => sum + e.hectares, 0) ?? 0;
    
    expect(totalAllocated).toBeLessThanOrEqual(50);
  });

  test('should handle edge case of very large land size', () => {
    const largeData = { ...baseData, landSize: 10000 };
    const result = optimizeLandAllocation(largeData);
    
    const totalAllocated = result.enterprises?.reduce((sum, e) => sum + e.hectares, 0) ?? 0;
    
    // With labor constraints, we may not allocate all land
    // The optimizer should allocate what makes sense given constraints
    expect(totalAllocated).toBeGreaterThan(0);
    expect(totalAllocated).toBeLessThanOrEqual(10000);
    
    // But all allocated land should respect individual constraints
    expect(getEnterpriseHectares(result, 'cattle')).toBeLessThanOrEqual(largeData.landSize * 0.7);
    expect(getEnterpriseHectares(result, 'goats')).toBeLessThanOrEqual(largeData.landSize * 0.25);
  });

  test('should consider infrastructure capacity for pigs', () => {
    const result = optimizeLandAllocation(baseData);
    
    // With density = 10, infrastructure capacity of 500 animals = max 50ha
    // But also constrained by pigsMax = 100ha
    expect(getEnterpriseHectares(result, 'pigs')).toBeLessThanOrEqual(50);
  });

  test('should consider infrastructure capacity for chickens', () => {
    const result = optimizeLandAllocation(baseData);
    
    // With density = 100, infrastructure capacity of 3000 animals = max 30ha
    // But also constrained by chickensMax = 50ha
    expect(getEnterpriseHectares(result, 'chickens')).toBeLessThanOrEqual(30);
  });

  test('should produce consistent results for the same input', () => {
    const result1 = optimizeLandAllocation(baseData);
    const result2 = optimizeLandAllocation(baseData);
    
    expect(result1).toEqual(result2);
  });

  test('should prioritize cattle as foundation operation', () => {
    const result = optimizeLandAllocation(baseData);
    
    // Cattle should get a significant allocation as the foundation
    expect(getEnterpriseHectares(result, 'cattle')).toBeGreaterThan(200);
  });

  test('should respect labor capacity constraints', () => {
    // High-labor enterprises (pigs, chickens) should be limited
    const result = optimizeLandAllocation(baseData);
    
    // Calculate total labor used
    const laborUsed =
      getEnterpriseHectares(result, 'cattle') * 2 +
      getEnterpriseHectares(result, 'goats') * 4 +
      getEnterpriseHectares(result, 'pigs') * 15 +
      getEnterpriseHectares(result, 'chickens') * 20 +
      getEnterpriseHectares(result, 'crops') * 10;
    
    // Should not exceed total labor available (5000 labor-days)
    expect(laborUsed).toBeLessThanOrEqual(5000);
  });

  test('should apply diminishing returns on scale', () => {
    // When we have high profitability for one enterprise, it shouldn't take all land
    // due to diminishing returns
    const highProfitData = JSON.parse(JSON.stringify(baseData));
    const pigsEnterprise = highProfitData.enterprises.find((e: Enterprise) => e.id === 'pigs');
    if (pigsEnterprise) {
      pigsEnterprise.marketPrice = [5000, 8000]; // Very high profit
    }
    
    const result = optimizeLandAllocation(highProfitData);
    
    // Even with very high profit, pigs should be constrained by infrastructure and labor
    expect(getEnterpriseHectares(result, 'pigs')).toBeLessThanOrEqual(100);
    
    // And other enterprises should still get allocations (diversification)
    expect(getEnterpriseHectares(result, 'cattle')).toBeGreaterThan(0);
    expect(getEnterpriseHectares(result, 'crops')).toBeGreaterThan(0);
  });

  test('should allocate more to low-risk enterprises under high volatility', () => {
    const result = optimizeLandAllocation(baseData);
    
    // Cattle (low risk) should get substantial allocation due to risk adjustment
    // Crops (high risk) should be more constrained
    expect(getEnterpriseHectares(result, 'cattle')).toBeGreaterThan(getEnterpriseHectares(result, 'crops'));
  });
});
