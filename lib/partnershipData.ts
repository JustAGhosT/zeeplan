// Data model for the Zeerust Partnership Proposal

export interface PartnershipData {
  // Farm basics
  landSize: number; // hectares
  currentLSU: number; // Large Stock Units
  targetLSU: number; // Target LSU capacity
  sekelbosEncroachment: number; // percentage
  currentCarryingCapacity: number; // ha/LSU
  targetCarryingCapacity: number; // ha/LSU
  
  // Baseline revenue (current state)
  baselineRevenue: {
    cattle: [number, number]; // min, max range
    goats: [number, number];
    pigs: [number, number];
    chickens: [number, number];
    crops: [number, number];
    wood: [number, number];
  };
  
  baselineCosts: [number, number]; // min, max range
  
  // Hans's investment
  hansLivestockValue: [number, number]; // min, max
  hansMonthlySalary: [number, number]; // min, max
  
  // Equity structure by year
  equityStructure: {
    year1: { oomWillie: number; eben: number; hans: number };
    year2: { oomWillie: number; eben: number; hans: number };
    year3: { oomWillie: number; eben: number; hans: number };
    year4: { oomWillie: number; eben: number; hans: number };
    year5: { oomWillie: number; eben: number; hans: number };
  };
  
  // Revenue targets by year
  yearlyTargets: {
    year1: {
      sekelbosCleared: number; // hectares
      targetLSU: number;
      sekelbosRevenue: [number, number];
      cattleRevenue: [number, number];
      goatsRevenue: [number, number];
      pigsRevenue: [number, number];
      chickensRevenue: [number, number];
      cropsRevenue: [number, number];
      costs: [number, number];
    };
    year2: {
      sekelbosCleared: number;
      targetLSU: number;
      sekelbosRevenue: [number, number];
      cattleRevenue: [number, number];
      goatsMeatRevenue: [number, number];
      goatsDairyRevenue: [number, number];
      pigsRevenue: [number, number];
      chickensRevenue: [number, number];
      cropsRevenue: [number, number];
      costs: [number, number];
    };
    year3: {
      sekelbosCleared: number;
      targetLSU: number;
      sekelbosRevenue: [number, number];
      cattleRevenue: [number, number];
      goatsMeatRevenue: [number, number];
      goatsDairyRevenue: [number, number];
      pigsRevenue: [number, number];
      chickensRevenue: [number, number];
      cropsRevenue: [number, number];
      costs: [number, number];
    };
    year4: {
      sekelbosCleared: number;
      targetLSU: number;
      sekelbosRevenue: [number, number];
      cattleRevenue: [number, number];
      goatsMeatRevenue: [number, number];
      goatsDairyRevenue: [number, number];
      pigsRevenue: [number, number];
      chickensRevenue: [number, number];
      cropsRevenue: [number, number];
      costs: [number, number];
    };
    year5: {
      sekelbosCleared: number;
      targetLSU: number;
      sekelbosRevenue: [number, number];
      cattleRevenue: [number, number];
      goatsMeatRevenue: [number, number];
      goatsDairyRevenue: [number, number];
      pigsRevenue: [number, number];
      chickensRevenue: [number, number];
      cropsRevenue: [number, number];
      costs: [number, number];
    };
  };
}

export const defaultPartnershipData: PartnershipData = {
  landSize: 600,
  currentLSU: 72,
  targetLSU: 104,
  sekelbosEncroachment: 70, // average of 60-80%
  currentCarryingCapacity: 8.33,
  targetCarryingCapacity: 5.5,
  
  baselineRevenue: {
    cattle: [216000, 243000],
    goats: [8000, 16000],
    pigs: [0, 10000],
    chickens: [4000, 8000],
    crops: [0, 5000],
    wood: [5000, 15000],
  },
  
  baselineCosts: [150000, 200000],
  
  hansLivestockValue: [48000, 98000],
  hansMonthlySalary: [10000, 15000],
  
  equityStructure: {
    year1: { oomWillie: 50, eben: 50, hans: 0 },
    year2: { oomWillie: 42.5, eben: 42.5, hans: 15 },
    year3: { oomWillie: 38.75, eben: 38.75, hans: 22.5 },
    year4: { oomWillie: 35, eben: 35, hans: 30 },
    year5: { oomWillie: 35, eben: 35, hans: 30 },
  },
  
  yearlyTargets: {
    year1: {
      sekelbosCleared: 50,
      targetLSU: 81,
      sekelbosRevenue: [40000, 205000],
      cattleRevenue: [216000, 243000],
      goatsRevenue: [24000, 50000],
      pigsRevenue: [25000, 50000],
      chickensRevenue: [20000, 40000],
      cropsRevenue: [15000, 30000],
      costs: [220000, 340000],
    },
    year2: {
      sekelbosCleared: 30,
      targetLSU: 86,
      sekelbosRevenue: [65000, 328000],
      cattleRevenue: [258000, 288000],
      goatsMeatRevenue: [36000, 70000],
      goatsDairyRevenue: [30000, 55000],
      pigsRevenue: [65000, 130000],
      chickensRevenue: [60000, 110000],
      cropsRevenue: [30000, 50000],
      costs: [320000, 480000],
    },
    year3: {
      sekelbosCleared: 20,
      targetLSU: 90,
      sekelbosRevenue: [81000, 410000],
      cattleRevenue: [270000, 300000],
      goatsMeatRevenue: [56000, 90000],
      goatsDairyRevenue: [70000, 120000],
      pigsRevenue: [110000, 210000],
      chickensRevenue: [110000, 210000],
      cropsRevenue: [55000, 120000],
      costs: [420000, 620000],
    },
    year4: {
      sekelbosCleared: 100,
      targetLSU: 98,
      sekelbosRevenue: [81000, 410000],
      cattleRevenue: [294000, 330000],
      goatsMeatRevenue: [68000, 105000],
      goatsDairyRevenue: [115000, 180000],
      pigsRevenue: [150000, 280000],
      chickensRevenue: [150000, 280000],
      cropsRevenue: [85000, 190000],
      costs: [520000, 720000],
    },
    year5: {
      sekelbosCleared: 60,
      targetLSU: 104,
      sekelbosRevenue: [5000, 102000],
      cattleRevenue: [312000, 348000],
      goatsMeatRevenue: [76000, 115000],
      goatsDairyRevenue: [200000, 325000],
      pigsRevenue: [220000, 375000],
      chickensRevenue: [220000, 300000],
      cropsRevenue: [95000, 210000],
      costs: [600000, 800000],
    },
  },
};
