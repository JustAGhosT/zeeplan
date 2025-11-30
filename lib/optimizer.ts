import { PartnershipData, Enterprise } from './partnershipData';

/**
 * Helper function to find an enterprise by ID
 */
function getEnterprise(data: PartnershipData, id: string): Enterprise | undefined {
  return data.enterprises.find(e => e.id === id);
}

/**
 * Calculate profit per hectare for an enterprise
 */
function calculateEnterpriseProfit(enterprise: Enterprise): number {
  if (!enterprise.enabled) return 0;

  if (enterprise.type === 'livestock') {
    const avgMarketPrice = ((enterprise.marketPrice?.[0] ?? 0) + (enterprise.marketPrice?.[1] ?? 0)) / 2;
    const avgCostPerHa = ((enterprise.costPerHectare?.[0] ?? 0) + (enterprise.costPerHectare?.[1] ?? 0)) / 2;
    const avgCostPerAnimal = ((enterprise.costPerAnimal?.[0] ?? 0) + (enterprise.costPerAnimal?.[1] ?? 0)) / 2;
    
    const animalsPerHa = enterprise.density ?? 0;
    const revenue = animalsPerHa * avgMarketPrice * ((enterprise.offtakeRate ?? 0) / 100);
    const cost = avgCostPerHa + (animalsPerHa * avgCostPerAnimal);
    
    return revenue - cost;
  } else if (enterprise.type === 'crop') {
    const avgRevenue = ((enterprise.revenuePerHectare?.[0] ?? 0) + (enterprise.revenuePerHectare?.[1] ?? 0)) / 2;
    const avgCost = ((enterprise.costPerHectare?.[0] ?? 0) + (enterprise.costPerHectare?.[1] ?? 0)) / 2;
    
    return avgRevenue - avgCost;
  }
  
  return 0;
}

/**
 * Enhanced optimization algorithm with realistic farm constraints
 * to maximize risk-adjusted profit while maintaining operational sustainability.
 * 
 * Improvements:
 * - Risk-adjusted profit calculations (includes volatility)
 * - Multi-year NPV projections
 * - Labor and infrastructure capacity constraints
 * - Synergy effects between enterprises
 * - Diminishing returns on scale
 * - Seasonal variation consideration
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
    
    // NEW: Labor capacity constraints (labor-days per hectare per year)
    laborDaysPerHa: {
      cattle: 2,    // Extensive grazing - minimal labor
      goats: 4,     // More management than cattle
      pigs: 15,     // Intensive operation - daily feeding/cleaning
      chickens: 20, // Very intensive - daily management
      crops: 10,    // Seasonal peaks but spread over year
    },
    totalLaborDaysAvailable: 5000, // ~2-3 full-time workers year-round
    
    // NEW: Infrastructure capacity (animals or hectares that can be supported)
    infrastructureCapacity: {
      pigsMaxAnimals: 500,   // Barn/housing capacity for pigs
      chickensMaxAnimals: 3000, // Coop capacity for chickens
    },
  };

  // Get enterprises
  const cattle = getEnterprise(data, 'cattle');
  const goats = getEnterprise(data, 'goats');
  const pigs = getEnterprise(data, 'pigs');
  const chickens = getEnterprise(data, 'chickens');
  const crops = getEnterprise(data, 'crops');
  
  // Calculate risk-adjusted profit and metrics for each option
  const cattleMetrics = cattle ? calculateEnhancedMetrics(cattle, 'cattle', constraints) : { riskAdjustedProfit: 0, npv: 0, laborPerHa: 0, volatility: 0 };
  const goatsMetrics = goats ? calculateEnhancedMetrics(goats, 'goats', constraints) : { riskAdjustedProfit: 0, npv: 0, laborPerHa: 0, volatility: 0 };
  const pigsMetrics = pigs ? calculateEnhancedMetrics(pigs, 'pigs', constraints) : { riskAdjustedProfit: 0, npv: 0, laborPerHa: 0, volatility: 0 };
  const chickensMetrics = (chickens && data.includeChickens)
    ? calculateEnhancedMetrics(chickens, 'chickens', constraints)
    : { riskAdjustedProfit: -Infinity, npv: -Infinity, laborPerHa: 0, volatility: 0 };
  const cropsMetrics = crops ? calculateEnhancedMetrics(crops, 'crops', constraints) : { riskAdjustedProfit: 0, npv: 0, laborPerHa: 0, volatility: 0 };

  // Calculate max allocations for pigs and chickens based on density
  const pigsDensity = pigs?.density ?? 2;
  const chickensDensity = chickens?.density ?? 10;
  
  const options = [
    {
      name: 'cattle',
      profitPerHa: cattleMetrics.riskAdjustedProfit,
      npv: cattleMetrics.npv,
      laborPerHa: cattleMetrics.laborPerHa,
      volatility: cattleMetrics.volatility,
      enterpriseId: 'cattle',
      min: constraints.cattleMin,
      max: constraints.cattleMax,
      priority: 10, // Highest priority - foundation of operation
    },
    {
      name: 'goats',
      profitPerHa: goatsMetrics.riskAdjustedProfit,
      npv: goatsMetrics.npv,
      laborPerHa: goatsMetrics.laborPerHa,
      volatility: goatsMetrics.volatility,
      enterpriseId: 'goats',
      min: constraints.goatsMin,
      max: constraints.goatsMax,
      priority: 8, // High priority for sekelbos clearance
      synergy: { crops: 0.05 }, // Goats can graze crop residues (+5% efficiency)
    },
    {
      name: 'pigs',
      profitPerHa: pigsMetrics.riskAdjustedProfit,
      npv: pigsMetrics.npv,
      laborPerHa: pigsMetrics.laborPerHa,
      volatility: pigsMetrics.volatility,
      enterpriseId: 'pigs',
      min: 0,
      max: Math.min(
        constraints.pigsMax,
        constraints.infrastructureCapacity.pigsMaxAnimals / pigsDensity
      ),
      priority: 5, // Medium priority
      synergy: { crops: 0.10 }, // Pigs can utilize crop waste/by-products (+10% efficiency)
    },
    {
      name: 'chickens',
      profitPerHa: chickensMetrics.riskAdjustedProfit,
      npv: chickensMetrics.npv,
      laborPerHa: chickensMetrics.laborPerHa,
      volatility: chickensMetrics.volatility,
      enterpriseId: 'chickens',
      min: 0,
      max: Math.min(
        constraints.chickensMax,
        constraints.infrastructureCapacity.chickensMaxAnimals / chickensDensity
      ),
      priority: 4, // Medium priority
      synergy: { crops: 0.08 }, // Chickens can forage on crop land (+8% efficiency)
    },
    {
      name: 'crops',
      profitPerHa: cropsMetrics.riskAdjustedProfit,
      npv: cropsMetrics.npv,
      laborPerHa: cropsMetrics.laborPerHa,
      volatility: cropsMetrics.volatility,
      enterpriseId: 'crops',
      min: constraints.cropsMin,
      max: constraints.cropsMax,
      priority: 6, // Medium-high priority for feed independence
      synergy: { pigs: 0.10, chickens: 0.08, goats: 0.05 }, // Crops provide feed
    },
  ];

  // Sort by risk-adjusted NPV (considering both profit and risk)
  options.sort((a, b) => {
    // Prioritize by NPV with risk adjustment
    const scoreA = a.npv / (1 + a.volatility);
    const scoreB = b.npv / (1 + b.volatility);
    
    if (Math.abs(scoreA - scoreB) < 100) {
      return b.priority - a.priority;
    }
    return scoreB - scoreA;
  });

  // Build allocation as a map of enterprise ID to hectares
  const allocation: Record<string, number> = {
    cattle: 0,
    goats: 0,
    pigs: 0,
    chickens: 0,
    crops: 0,
  };

  let remainingLand = availableLand;
  let remainingLabor = constraints.totalLaborDaysAvailable;

  // Phase 1: Allocate minimum required land for each enterprise
  for (const option of options) {
    if (option.profitPerHa > 0 && option.min > 0 && remainingLand >= option.min) {
      const laborRequired = option.min * option.laborPerHa;
      
      // Check if we have enough labor capacity
      if (laborRequired <= remainingLabor) {
        const allocated = Math.min(option.min, remainingLand);
        allocation[option.enterpriseId] = allocated;
        remainingLand -= allocated;
        remainingLabor -= laborRequired;
      }
    }
  }

  // Phase 2: Allocate remaining land based on risk-adjusted profitability and synergies
  const sortedByValue = [...options].sort((a, b) => {
    const scoreA = (a.npv / (1 + a.volatility)) * applySynergyBonus(a, allocation);
    const scoreB = (b.npv / (1 + b.volatility)) * applySynergyBonus(b, allocation);
    return scoreB - scoreA;
  });
  
  for (const option of sortedByValue) {
    if (option.profitPerHa > 0 && remainingLand > 0) {
      const currentAllocation = allocation[option.enterpriseId] || 0;
      
      // Apply diminishing returns - marginal profit decreases with scale
      const scaleFactor = calculateScaleFactor(currentAllocation, option.max);
      const adjustedProfit = option.profitPerHa * scaleFactor;
      
      if (adjustedProfit > 0) {
        const maxByConstraints = Math.min(
          option.max - currentAllocation,
          constraints.maxSingleAllocation - currentAllocation,
          remainingLand
        );
        
        const maxByLabor = remainingLabor / option.laborPerHa;
        const maxAdditional = Math.min(maxByConstraints, maxByLabor);
        
        if (maxAdditional > 0) {
          // Allocate up to 40% of remaining land, or labor capacity, whichever is limiting
          const allocated = Math.min(maxAdditional, remainingLand * 0.4);
          allocation[option.enterpriseId] = currentAllocation + allocated;
          remainingLand -= allocated;
          remainingLabor -= allocated * option.laborPerHa;
        }
      }
    }
  }

  // Phase 3: Distribute any remaining land to the most valuable option considering all factors
  if (remainingLand > 10) { // Only if significant land remains
    for (const option of sortedByValue) {
      const currentAllocation = allocation[option.enterpriseId] || 0;
      const scaleFactor = calculateScaleFactor(currentAllocation, option.max);
      
      // Only allocate more if diminishing returns haven't made it unprofitable
      if (scaleFactor > 0.3) { // At least 30% of original efficiency
        const maxByConstraints = Math.min(
          option.max - currentAllocation,
          constraints.maxSingleAllocation - currentAllocation,
          remainingLand
        );
        
        const maxByLabor = remainingLabor / option.laborPerHa;
        const canTake = Math.min(maxByConstraints, maxByLabor);
        
        if (canTake > 0) {
          allocation[option.enterpriseId] = currentAllocation + canTake;
          remainingLand -= canTake;
          remainingLabor -= canTake * option.laborPerHa;
          break;
        }
      }
    }
  }

  // Convert allocation to updated enterprises
  const updatedEnterprises = data.enterprises.map(e => ({
    ...e,
    hectares: allocation[e.id] ?? e.hectares
  }));

  return {
    ...data,
    enterprises: updatedEnterprises,
  };
}

/**
 * Calculate enhanced metrics including risk-adjusted profit, NPV, and volatility
 */
function calculateEnhancedMetrics(
  enterprise: Enterprise,
  enterpriseType: 'cattle' | 'goats' | 'pigs' | 'chickens' | 'crops',
  constraints: any
): { riskAdjustedProfit: number; npv: number; laborPerHa: number; volatility: number } {
  const baseProfit = calculateEnterpriseProfit(enterprise);
  let volatility: number; // Coefficient of variation for risk
  
  switch (enterpriseType) {
    case 'cattle':
      volatility = 0.20; // 20% price/yield volatility (lower for cattle)
      break;
    case 'goats':
      volatility = 0.25; // 25% volatility (moderate for goats)
      break;
    case 'pigs':
      volatility = 0.30; // 30% volatility (higher for pigs - feed costs, disease)
      break;
    case 'chickens':
      volatility = 0.35; // 35% volatility (highest - disease, egg prices)
      break;
    case 'crops':
      volatility = 0.40; // 40% volatility (weather-dependent, highest risk)
      break;
  }
  
  // Calculate 5-year NPV with 12% discount rate (typical for agriculture)
  const discountRate = 0.12;
  let npv = 0;
  for (let year = 1; year <= 5; year++) {
    // Apply growth factor for year (operations improve over time)
    const growthFactor = 1 + (year - 1) * 0.05; // 5% improvement per year
    const yearProfit = baseProfit * growthFactor;
    npv += yearProfit / Math.pow(1 + discountRate, year);
  }
  
  // Risk-adjusted profit: reduce expected value by risk premium
  const riskPremium = volatility * 0.5; // Risk aversion factor
  const riskAdjustedProfit = baseProfit * (1 - riskPremium);
  
  const laborPerHa = constraints.laborDaysPerHa[enterpriseType] || 0;
  
  return {
    riskAdjustedProfit,
    npv,
    laborPerHa,
    volatility,
  };
}

/**
 * Calculate synergy bonus based on complementary enterprises
 * Example: Pigs benefit from crop waste, chickens can forage on crop land
 */
function applySynergyBonus(
  option: any,
  allocation: Record<string, number>
): number {
  if (!option.synergy) return 1.0;
  
  let bonus = 1.0;
  
  for (const [enterprise, synergyFactor] of Object.entries(option.synergy)) {
    const allocatedHa = allocation[enterprise] || 0;
    
    if (allocatedHa > 0) {
      // Synergy benefit increases with allocated hectares but with diminishing returns
      const synergyContribution = (synergyFactor as number) * Math.sqrt(allocatedHa / 100);
      bonus += synergyContribution;
    }
  }
  
  return bonus;
}

/**
 * Calculate scale factor for diminishing returns
 * Returns 1.0 at 0% utilization, decreasing to 0.5 at 100% utilization
 */
function calculateScaleFactor(currentAllocation: number, maxAllocation: number): number {
  if (maxAllocation === 0) return 1.0;
  
  const utilizationRate = currentAllocation / maxAllocation;
  
  // Quadratic diminishing returns: efficiency = 1 - 0.5 * utilization^2
  // At 0% utilization: 100% efficiency
  // At 50% utilization: 87.5% efficiency  
  // At 100% utilization: 50% efficiency
  return 1 - 0.5 * Math.pow(utilizationRate, 2);
}
