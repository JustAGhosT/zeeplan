import { PartnershipData } from './partnershipData';

/**
 * Simple greedy optimization algorithm to maximize profit
 * by allocating land optimally across different livestock and crops
 */
export function optimizeLandAllocation(data: PartnershipData): Partial<PartnershipData> {
  const availableLand = data.landSize;
  
  // Calculate profit per hectare for each option
  const options = [
    {
      name: 'cattle',
      profitPerHa: calculateCattleProfit(data),
      field: 'cattleHectares' as keyof PartnershipData,
    },
    {
      name: 'goats',
      profitPerHa: calculateGoatsProfit(data),
      field: 'goatsHectares' as keyof PartnershipData,
    },
    {
      name: 'pigs',
      profitPerHa: calculatePigsProfit(data),
      field: 'pigsHectares' as keyof PartnershipData,
    },
    {
      name: 'chickens',
      profitPerHa: data.includeChickens ? calculateChickensProfit(data) : -Infinity,
      field: 'chickensHectares' as keyof PartnershipData,
    },
    {
      name: 'crops',
      profitPerHa: calculateCropsProfit(data),
      field: 'cropsHectares' as keyof PartnershipData,
    },
  ];

  // Sort by profit per hectare (descending)
  options.sort((a, b) => b.profitPerHa - a.profitPerHa);

  // Allocate land greedily
  let remainingLand = availableLand;
  const allocation: Partial<PartnershipData> = {
    cattleHectares: 0,
    goatsHectares: 0,
    pigsHectares: 0,
    chickensHectares: 0,
    cropsHectares: 0,
  };

  // Allocate at least some land to each profitable option
  const minAllocation = Math.min(50, availableLand / options.filter(o => o.profitPerHa > 0).length);
  
  for (const option of options) {
    if (option.profitPerHa > 0 && remainingLand >= minAllocation) {
      const allocated = minAllocation;
      (allocation as any)[option.field] = allocated;
      remainingLand -= allocated;
    }
  }

  // Allocate remaining land to the most profitable option
  if (remainingLand > 0 && options[0].profitPerHa > 0) {
    (allocation as any)[options[0].field] = ((allocation as any)[options[0].field] || 0) + remainingLand;
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
