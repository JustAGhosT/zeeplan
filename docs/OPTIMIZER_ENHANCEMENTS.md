# Optimizer Enhancements - Technical Documentation

## Overview

The land allocation optimizer in `lib/optimizer.ts` has been enhanced with advanced agricultural economics principles, risk management, and operational constraints. This document explains the improvements and the reasoning behind them.

## Key Enhancements

### 1. Multi-Year NPV Projections

**Previous**: Single-year profit calculation  
**Current**: 5-year Net Present Value (NPV) with 12% discount rate

```typescript
// Calculate 5-year NPV with 12% discount rate (typical for agriculture)
const discountRate = 0.12;
let npv = 0;
for (let year = 1; year <= 5; year++) {
  const growthFactor = 1 + (year - 1) * 0.05; // 5% improvement per year
  const yearProfit = baseProfit * growthFactor;
  npv += yearProfit / Math.pow(1 + discountRate, year);
}
```

**Benefits**:
- Accounts for time value of money
- Rewards enterprises with sustainable long-term returns
- Models operational improvements over time (5% annual growth)

### 2. Risk-Adjusted Profit Calculations

Each enterprise has a volatility coefficient based on agricultural risk:

| Enterprise | Volatility | Risk Factors |
|-----------|-----------|--------------|
| Cattle | 20% | Stable prices, extensive operation |
| Goats | 25% | Moderate market volatility |
| Pigs | 30% | Feed cost variation, disease risk |
| Chickens | 35% | High disease risk, egg price fluctuation |
| Crops | 40% | Weather-dependent, highest uncertainty |

**Risk Premium Calculation**:
```typescript
const riskPremium = volatility * 0.5; // Risk aversion factor
const riskAdjustedProfit = baseProfit * (1 - riskPremium);
```

**Impact**: Lower-risk enterprises (cattle) get preference over high-risk enterprises (crops) when profit levels are similar.

### 3. Labor Capacity Constraints

**Previous**: No labor constraints  
**Current**: Labor-days per hectare for each enterprise

| Enterprise | Labor-Days/Ha | Intensity Level |
|-----------|---------------|-----------------|
| Cattle | 2 | Extensive (grazing) |
| Goats | 4 | Low intensity |
| Crops | 10 | Seasonal peaks |
| Pigs | 15 | Intensive (daily feeding) |
| Chickens | 20 | Very intensive (daily management) |

**Total Labor Budget**: 5,000 labor-days/year (~2-3 full-time workers)

**Benefits**:
- Prevents over-allocation to intensive operations
- Reflects real farm labor availability
- Forces diversification toward sustainable labor mix

### 4. Infrastructure Capacity Constraints

Physical infrastructure limits applied:

```typescript
infrastructureCapacity: {
  pigsMaxAnimals: 500,      // Barn/housing capacity
  chickensMaxAnimals: 3000, // Coop capacity
}
```

These limits are divided by animals per hectare to determine maximum hectares:
- Pigs: 500 animals ÷ 10 animals/ha = 50 ha maximum
- Chickens: 3000 animals ÷ 100 animals/ha = 30 ha maximum

### 5. Synergy Effects Between Enterprises

Enterprises that complement each other get efficiency bonuses:

```typescript
synergy: {
  pigs: { crops: 0.10 },     // Pigs can utilize crop waste (+10%)
  chickens: { crops: 0.08 },  // Chickens forage on crop land (+8%)
  goats: { crops: 0.05 },     // Goats graze crop residues (+5%)
  crops: { pigs: 0.10, chickens: 0.08, goats: 0.05 } // Crops provide feed
}
```

**Calculation**:
```typescript
function applySynergyBonus(option, allocation): number {
  let bonus = 1.0;
  for (const [enterprise, synergyFactor] of Object.entries(option.synergy)) {
    const allocatedHa = allocation[`${enterprise}Hectares`] || 0;
    if (allocatedHa > 0) {
      // Synergy increases with hectares but with diminishing returns
      const synergyContribution = synergyFactor * Math.sqrt(allocatedHa / 100);
      bonus += synergyContribution;
    }
  }
  return bonus;
}
```

**Example**: If you have 100 ha of crops and add pigs:
- Base synergy bonus: 10%
- Actual bonus: 10% × √(100/100) = 10%
- Pigs become 10% more valuable when crops are present

### 6. Diminishing Returns on Scale

**Economic Reality**: Marginal profit decreases as you scale up an enterprise.

**Implementation**:
```typescript
function calculateScaleFactor(currentAllocation, maxAllocation): number {
  const utilizationRate = currentAllocation / maxAllocation;
  // Quadratic diminishing returns
  return 1 - 0.5 * Math.pow(utilizationRate, 2);
}
```

**Effect**:
- At 0% capacity: 100% efficiency
- At 50% capacity: 87.5% efficiency
- At 70% capacity: 75.5% efficiency
- At 100% capacity: 50% efficiency

This prevents the optimizer from putting everything into the highest-profit enterprise.

### 7. Three-Phase Allocation Algorithm

**Phase 1: Minimum Requirements**
- Allocate minimum required land for foundation enterprises
- Ensures cattle (foundation) and crops (feed) get baseline allocation
- Respects labor capacity

**Phase 2: Profitable Expansion**
- Allocate remaining land to highest value enterprises
- Value = (NPV ÷ (1 + volatility)) × synergy_bonus × scale_factor
- Allocates up to 40% of remaining land per iteration
- Respects labor, infrastructure, and diversification constraints

**Phase 3: Marginal Allocation**
- Distribute final remaining land (if > 10 ha)
- Only to enterprises still operating with reasonable efficiency (>30%)
- Ensures full land utilization where sensible

## Constraint Hierarchy

The optimizer respects constraints in this priority order:

1. **Physical Constraints** (hardest)
   - Total land available
   - Infrastructure capacity (buildings, equipment)
   
2. **Operational Constraints**
   - Labor availability (5,000 labor-days)
   - Minimum requirements (cattle foundation, crops for feed)
   - Maximum allocations (diversification, land suitability)

3. **Economic Constraints** (softest)
   - Risk-adjusted profitability
   - Diminishing returns on scale
   - Synergy effects

## Optimization Scoring

Final enterprise value score:

```
Value = (NPV / (1 + volatility)) × synergy_bonus × scale_factor

Where:
- NPV = 5-year net present value
- volatility = enterprise-specific risk coefficient
- synergy_bonus = 1.0 + complementarity effects
- scale_factor = efficiency reduction due to current scale
```

## Validation & Testing

Comprehensive test suite covers:

1. **Basic Constraints**
   - Total land allocation ≤ available land
   - Minimum requirements respected
   - Maximum limits enforced

2. **Labor Constraints**
   - Total labor used ≤ 5,000 labor-days
   - Intensive operations limited

3. **Infrastructure Constraints**
   - Pigs ≤ barn capacity
   - Chickens ≤ coop capacity

4. **Risk Management**
   - Low-risk enterprises preferred under similar profit
   - Diversification maintained

5. **Edge Cases**
   - Small farms (50 ha)
   - Large farms (10,000 ha)
   - Extreme profitability scenarios

6. **Consistency**
   - Deterministic results (same input → same output)
   - No randomness in allocation

## Academic Foundations

These improvements are based on:

1. **Portfolio Theory** (Markowitz, 1952)
   - Risk-return tradeoff
   - Diversification benefits

2. **Agricultural Economics**
   - Diminishing marginal returns
   - Factor constraints (land, labor, capital)

3. **Net Present Value Analysis**
   - Time value of money
   - Multi-period planning

4. **Systems Theory**
   - Synergy effects
   - Complementarity

5. **Operations Research**
   - Constraint optimization
   - Multi-objective optimization

## Future Enhancements

Potential further improvements:

1. **Stochastic Optimization**
   - Monte Carlo simulation for risk analysis
   - Probability distributions for prices/yields

2. **Cash Flow Timing**
   - Working capital requirements
   - Seasonal cash flow constraints

3. **Market Constraints**
   - Demand limits for niche products
   - Marketing channel capacity

4. **Environmental Constraints**
   - Water availability by season
   - Soil suitability mapping
   - Grazing rotation requirements

5. **Dynamic Programming**
   - Sequential decision making
   - State-dependent transitions

## References

- Barnard, C. S., & Nix, J. S. (1979). *Farm Planning and Control*. Cambridge University Press.
- Kay, R. D., Edwards, W. M., & Duffy, P. A. (2019). *Farm Management*. McGraw-Hill Education.
- Hardaker, J. B., et al. (2015). *Coping with Risk in Agriculture*. CABI.

## Conclusion

The enhanced optimizer provides sophisticated, research-backed agricultural planning that balances:
- Profit maximization
- Risk management
- Operational feasibility
- Long-term sustainability

This represents a significant improvement over simple profit-maximization approaches and produces more realistic, implementable farm plans.
