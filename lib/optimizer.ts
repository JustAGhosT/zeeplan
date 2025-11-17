import { PartnershipData } from './partnershipData';

/**
 * Optimization algorithm with realistic farm constraints
 * to maximize profit while maintaining operational sustainability
 */
export function optimizeLandAllocation(data: PartnershipData): Partial<PartnershipData> {
  const availableLand = data.landSize;
  
  // Define realistic constraints based on farm context
  const constraints = {
    // Cattle is the foundation - must maintain minimum for core operation
    cattleMin: Math.max(200, availableLand * 0.3), // At least 30% for cattle (foundation operation)
    cattleMax: availableLand * 0.7, // Maximum 70% to allow diversification
    
    // Goats help with sekelbos clearance - important for regenerative model
    goatsMin: data.sekelbosEncroachment > 50 ? 50 : 0, // Minimum if high sekelbos
    goatsMax: availableLand * 0.25, // Maximum 25% to avoid overgrazing
    
    // Pigs and chickens are intensive operations - limited by infrastructure
    pigsMax: 100, // Maximum 100ha for intensive pig operation
    chickensMax: 50, // Maximum 50ha for chicken operation
    
    // Crops provide feed independence - important but limited by water/soil
    cropsMin: 30, // Minimum 30ha for basic feed crops
    cropsMax: availableLand * 0.2, // Maximum 20% for crops (water-dependent)
    
    // Diversification constraint - no single enterprise should dominate completely
    maxSingleAllocation: availableLand * 0.6, // No more than 60% in any one enterprise
  };
  
  // Calculate profit per hectare for each option
  const options = [
    {
      name: 'cattle',
      profitPerHa: calculateCattleProfit(data),
      field: 'cattleHectares' as keyof PartnershipData,
      min: constraints.cattleMin,
      max: constraints.cattleMax,
      priority: 10, // Highest priority - foundation of operation
    },
    {
      name: 'goats',
      profitPerHa: calculateGoatsProfit(data),
      field: 'goatsHectares' as keyof PartnershipData,
      min: constraints.goatsMin,
      max: constraints.goatsMax,
      priority: 8, // High priority for sekelbos clearance
    },
    {
      name: 'pigs',
      profitPerHa: calculatePigsProfit(data),
      field: 'pigsHectares' as keyof PartnershipData,
      min: 0,
      max: constraints.pigsMax,
      priority: 5, // Medium priority
    },
    {
      name: 'chickens',
      profitPerHa: data.includeChickens ? calculateChickensProfit(data) : -Infinity,
      field: 'chickensHectares' as keyof PartnershipData,
      min: 0,
      max: constraints.chickensMax,
      priority: 4, // Medium priority
    },
    {
      name: 'crops',
      profitPerHa: calculateCropsProfit(data),
      field: 'cropsHectares' as keyof PartnershipData,
      min: constraints.cropsMin,
      max: constraints.cropsMax,
      priority: 6, // Medium-high priority for feed independence
    },
  ];

  // Sort by priority first, then profit per hectare
  options.sort((a, b) => {
    if (Math.abs(a.profitPerHa - b.profitPerHa) < 100) {
      return b.priority - a.priority;
    }
    return b.profitPerHa - a.profitPerHa;
  });

  const allocation: Partial<PartnershipData> = {
    cattleHectares: 0,
    goatsHectares: 0,
    pigsHectares: 0,
    chickensHectares: 0,
    cropsHectares: 0,
  };

  let remainingLand = availableLand;

  // Phase 1: Allocate minimum required land for each enterprise
  for (const option of options) {
    if (option.profitPerHa > 0 && option.min > 0 && remainingLand >= option.min) {
      const allocated = Math.min(option.min, remainingLand);
      (allocation as any)[option.field] = allocated;
      remainingLand -= allocated;
    }
  }

  // Phase 2: Allocate remaining land based on profitability while respecting constraints
  // Sort again by profit for remaining allocation
  const sortedByProfit = [...options].sort((a, b) => b.profitPerHa - a.profitPerHa);
  
  for (const option of sortedByProfit) {
    if (option.profitPerHa > 0 && remainingLand > 0) {
      const currentAllocation = (allocation as any)[option.field] || 0;
      const maxAdditional = Math.min(
        option.max - currentAllocation,
        constraints.maxSingleAllocation - currentAllocation,
        remainingLand
      );
      
      if (maxAdditional > 0) {
        const allocated = Math.min(maxAdditional, remainingLand * 0.4); // Allocate up to 40% of remaining
        (allocation as any)[option.field] = currentAllocation + allocated;
        remainingLand -= allocated;
      }
    }
  }

  // Phase 3: Distribute any remaining land to the most profitable viable option
  if (remainingLand > 10) { // Only if significant land remains
    for (const option of sortedByProfit) {
      const currentAllocation = (allocation as any)[option.field] || 0;
      const canTake = Math.min(
        option.max - currentAllocation,
        constraints.maxSingleAllocation - currentAllocation,
        remainingLand
      );
      
      if (canTake > 0) {
        (allocation as any)[option.field] = currentAllocation + canTake;
        remainingLand -= canTake;
        break;
      }
    }
  }

  return allocation;
}

function calculateCattleProfit(data: PartnershipData): number {
  const avgMarketPrice = (data.cattleMarketPrice[0] + data.cattleMarketPrice[1]) / 2;
  const avgCostPerHa = (data.cattleCostPerHectare[0] + data.cattleCostPerHectare[1]) / 2;
  const avgCostPerAnimal = (data.cattleCostPerAnimal[0] + data.cattleCostPerAnimal[1]) / 2;
  
  const animalsPerHa = data.cattlePerHectare;
  const revenue = animalsPerHa * avgMarketPrice * (data.cattleOfftakeRate / 100);
  const cost = avgCostPerHa + (animalsPerHa * avgCostPerAnimal);
  
  return revenue - cost;
}

function calculateGoatsProfit(data: PartnershipData): number {
  const avgMarketPrice = (data.goatsMarketPrice[0] + data.goatsMarketPrice[1]) / 2;
  const avgCostPerHa = (data.goatsCostPerHectare[0] + data.goatsCostPerHectare[1]) / 2;
  const avgCostPerAnimal = (data.goatsCostPerAnimal[0] + data.goatsCostPerAnimal[1]) / 2;
  
  const animalsPerHa = data.goatsPerHectare;
  const revenue = animalsPerHa * avgMarketPrice * (data.goatsOfftakeRate / 100);
  const cost = avgCostPerHa + (animalsPerHa * avgCostPerAnimal);
  
  return revenue - cost;
}

function calculatePigsProfit(data: PartnershipData): number {
  const avgMarketPrice = (data.pigsMarketPrice[0] + data.pigsMarketPrice[1]) / 2;
  const avgCostPerHa = (data.pigsCostPerHectare[0] + data.pigsCostPerHectare[1]) / 2;
  const avgCostPerAnimal = (data.pigsCostPerAnimal[0] + data.pigsCostPerAnimal[1]) / 2;
  
  const animalsPerHa = data.pigsPerHectare;
  const revenue = animalsPerHa * avgMarketPrice * (data.pigsOfftakeRate / 100);
  const cost = avgCostPerHa + (animalsPerHa * avgCostPerAnimal);
  
  return revenue - cost;
}

function calculateChickensProfit(data: PartnershipData): number {
  const avgMarketPrice = (data.chickensMarketPrice[0] + data.chickensMarketPrice[1]) / 2;
  const avgCostPerHa = (data.chickensCostPerHectare[0] + data.chickensCostPerHectare[1]) / 2;
  const avgCostPerAnimal = (data.chickensCostPerAnimal[0] + data.chickensCostPerAnimal[1]) / 2;
  
  const animalsPerHa = data.chickensPerHectare;
  const revenue = animalsPerHa * avgMarketPrice * (data.chickensOfftakeRate / 100);
  const cost = avgCostPerHa + (animalsPerHa * avgCostPerAnimal);
  
  return revenue - cost;
}

function calculateCropsProfit(data: PartnershipData): number {
  const avgRevenue = (data.cropsRevenuePerHectare[0] + data.cropsRevenuePerHectare[1]) / 2;
  const avgCost = (data.cropsCostPerHectare[0] + data.cropsCostPerHectare[1]) / 2;
  
  return avgRevenue - avgCost;
}
