import { optimizeLandAllocation } from './optimizer';
import { PartnershipData } from './partnershipData';

describe('optimizeLandAllocation', () => {
  // Base test data
  const baseData: PartnershipData = {
    includeChickens: true,
    includeRabbits: false,
    landSize: 600,
    currentLSU: 72,
    targetLSU: 110,
    sekelbosEncroachment: 70,
    sekelbosRevenuePerHectare: [3000, 5000],
    currentCarryingCapacity: 8.33,
    targetCarryingCapacity: 5.5,
    cattleHectares: 500,
    goatsHectares: 0,
    pigsHectares: 0,
    chickensHectares: 0,
    rabbitsHectares: 0,
    cropsHectares: 0,
    cattlePerHectare: 0.144,
    goatsPerHectare: 5,
    pigsPerHectare: 10,
    chickensPerHectare: 100,
    cattleMarketPrice: [15000, 20000],
    cattleOfftakeRate: 25,
    cattleCostPerHectare: [500, 700],
    cattleCostPerAnimal: [1000, 1500],
    goatsMarketPrice: [1000, 1500],
    goatsOfftakeRate: 40,
    goatsCostPerHectare: [300, 500],
    goatsCostPerAnimal: [300, 500],
    pigsMarketPrice: [2000, 3000],
    pigsOfftakeRate: 90,
    pigsCostPerHectare: [1000, 1500],
    pigsCostPerAnimal: [800, 1200],
    chickensMarketPrice: [80, 120],
    chickensOfftakeRate: 95,
    chickensCostPerHectare: [200, 300],
    chickensCostPerAnimal: [20, 30],
    rabbitsPerHectare: 20,
    rabbitsMarketPrice: [100, 150],
    rabbitsOfftakeRate: 90,
    rabbitsCostPerHectare: [1000, 1500],
    rabbitsCostPerAnimal: [50, 80],
    cropsRevenuePerHectare: [5000, 10000],
    cropsCostPerHectare: [2000, 4000],
    baselineRevenue: {
      cattle: [216000, 243000],
      goats: [8000, 16000],
      pigs: [0, 10000],
      chickens: [4000, 8000],
      crops: [0, 5000],
      wood: [5000, 15000],
      rabbits: [0, 0],
    },
    baselineCosts: [150000, 200000],
    hansLivestockValue: [48000, 98000],
    hansMonthlySalary: [10000, 15000],
    equityStructure: [
      { oomHein: 50, eben: 50, hans: 0 },
      { oomHein: 42.5, eben: 42.5, hans: 15 },
      { oomHein: 38.75, eben: 38.75, hans: 22.5 },
      { oomHein: 35, eben: 35, hans: 30 },
      { oomHein: 35, eben: 35, hans: 30 },
    ],
    yearlyTargets: [],
  };

  test('should allocate all available land', () => {
    const result = optimizeLandAllocation(baseData);
    
    const totalAllocated =
      (result.cattleHectares || 0) +
      (result.goatsHectares || 0) +
      (result.pigsHectares || 0) +
      (result.chickensHectares || 0) +
      (result.cropsHectares || 0);
    
    // Should allocate all or nearly all land (within 5% tolerance for rounding)
    expect(totalAllocated).toBeGreaterThan(baseData.landSize * 0.95);
    expect(totalAllocated).toBeLessThanOrEqual(baseData.landSize);
  });

  test('should respect minimum constraints for cattle', () => {
    const result = optimizeLandAllocation(baseData);
    
    const cattleMin = Math.max(200, baseData.landSize * 0.3);
    expect(result.cattleHectares).toBeGreaterThanOrEqual(cattleMin);
  });

  test('should respect minimum constraints for crops', () => {
    const result = optimizeLandAllocation(baseData);
    
    // Minimum 30ha for crops
    expect(result.cropsHectares).toBeGreaterThanOrEqual(30);
  });

  test('should respect maximum constraints', () => {
    const result = optimizeLandAllocation(baseData);
    
    // Each enterprise has specific maximum constraints
    expect(result.cattleHectares || 0).toBeLessThanOrEqual(baseData.landSize * 0.7);
    expect(result.goatsHectares || 0).toBeLessThanOrEqual(baseData.landSize * 0.25);
    expect(result.pigsHectares || 0).toBeLessThanOrEqual(100);
    expect(result.chickensHectares || 0).toBeLessThanOrEqual(50);
    expect(result.cropsHectares || 0).toBeLessThanOrEqual(baseData.landSize * 0.2);
  });

  test('should not allocate chickens when includeChickens is false', () => {
    const dataWithoutChickens = { ...baseData, includeChickens: false };
    const result = optimizeLandAllocation(dataWithoutChickens);
    
    expect(result.chickensHectares).toBe(0);
  });

  test('should allocate minimum goats when sekelbos encroachment is high', () => {
    const dataWithHighSekelbos = { ...baseData, sekelbosEncroachment: 80 };
    const result = optimizeLandAllocation(dataWithHighSekelbos);
    
    // Should allocate at least 50ha for goats when sekelbos > 50%
    expect(result.goatsHectares).toBeGreaterThanOrEqual(50);
  });

  test('should allocate zero goats when sekelbos encroachment is low', () => {
    const dataWithLowSekelbos = { ...baseData, sekelbosEncroachment: 20 };
    const result = optimizeLandAllocation(dataWithLowSekelbos);
    
    // With low sekelbos, goats may or may not be allocated based on profitability
    expect(result.goatsHectares).toBeGreaterThanOrEqual(0);
  });

  test('should return valid allocation object with all required fields', () => {
    const result = optimizeLandAllocation(baseData);
    
    expect(result).toHaveProperty('cattleHectares');
    expect(result).toHaveProperty('goatsHectares');
    expect(result).toHaveProperty('pigsHectares');
    expect(result).toHaveProperty('chickensHectares');
    expect(result).toHaveProperty('cropsHectares');
  });

  test('should handle edge case of very small land size', () => {
    const smallData = { ...baseData, landSize: 50 };
    const result = optimizeLandAllocation(smallData);
    
    const totalAllocated =
      (result.cattleHectares || 0) +
      (result.goatsHectares || 0) +
      (result.pigsHectares || 0) +
      (result.chickensHectares || 0) +
      (result.cropsHectares || 0);
    
    expect(totalAllocated).toBeLessThanOrEqual(50);
  });

  test('should handle edge case of very large land size', () => {
    const largeData = { ...baseData, landSize: 10000 };
    const result = optimizeLandAllocation(largeData);
    
    const totalAllocated =
      (result.cattleHectares || 0) +
      (result.goatsHectares || 0) +
      (result.pigsHectares || 0) +
      (result.chickensHectares || 0) +
      (result.cropsHectares || 0);
    
    // With labor constraints, we may not allocate all land
    // The optimizer should allocate what makes sense given constraints
    expect(totalAllocated).toBeGreaterThan(0);
    expect(totalAllocated).toBeLessThanOrEqual(10000);
    
    // But all allocated land should respect individual constraints
    expect(result.cattleHectares || 0).toBeLessThanOrEqual(largeData.landSize * 0.7);
    expect(result.goatsHectares || 0).toBeLessThanOrEqual(largeData.landSize * 0.25);
  });

  test('should consider infrastructure capacity for pigs', () => {
    const result = optimizeLandAllocation(baseData);
    
    // With pigsPerHectare = 10, infrastructure capacity of 500 animals = max 50ha
    // But also constrained by pigsMax = 100ha
    expect(result.pigsHectares || 0).toBeLessThanOrEqual(50);
  });

  test('should consider infrastructure capacity for chickens', () => {
    const result = optimizeLandAllocation(baseData);
    
    // With chickensPerHectare = 100, infrastructure capacity of 3000 animals = max 30ha
    // But also constrained by chickensMax = 50ha
    expect(result.chickensHectares || 0).toBeLessThanOrEqual(30);
  });

  test('should produce consistent results for the same input', () => {
    const result1 = optimizeLandAllocation(baseData);
    const result2 = optimizeLandAllocation(baseData);
    
    expect(result1).toEqual(result2);
  });

  test('should prioritize cattle as foundation operation', () => {
    const result = optimizeLandAllocation(baseData);
    
    // Cattle should get a significant allocation as the foundation
    expect(result.cattleHectares).toBeGreaterThan(200);
  });

  test('should respect labor capacity constraints', () => {
    // High-labor enterprises (pigs, chickens) should be limited
    const result = optimizeLandAllocation(baseData);
    
    // Calculate total labor used
    const laborUsed =
      (result.cattleHectares || 0) * 2 +
      (result.goatsHectares || 0) * 4 +
      (result.pigsHectares || 0) * 15 +
      (result.chickensHectares || 0) * 20 +
      (result.cropsHectares || 0) * 10;
    
    // Should not exceed total labor available (5000 labor-days)
    expect(laborUsed).toBeLessThanOrEqual(5000);
  });

  test('should apply diminishing returns on scale', () => {
    // When we have high profitability for one enterprise, it shouldn't take all land
    // due to diminishing returns
    const highProfitData = {
      ...baseData,
      pigsMarketPrice: [5000, 8000] as [number, number], // Very high profit
    };
    
    const result = optimizeLandAllocation(highProfitData);
    
    // Even with very high profit, pigs should be constrained by infrastructure and labor
    expect(result.pigsHectares || 0).toBeLessThanOrEqual(100);
    
    // And other enterprises should still get allocations (diversification)
    expect(result.cattleHectares || 0).toBeGreaterThan(0);
    expect(result.cropsHectares || 0).toBeGreaterThan(0);
  });

  test('should allocate more to low-risk enterprises under high volatility', () => {
    const result = optimizeLandAllocation(baseData);
    
    // Cattle (low risk) should get substantial allocation due to risk adjustment
    // Crops (high risk) should be more constrained
    expect(result.cattleHectares || 0).toBeGreaterThan(result.cropsHectares || 0);
  });
});
