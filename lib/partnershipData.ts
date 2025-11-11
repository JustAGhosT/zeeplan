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

  equityStructure: Equity[];
  yearlyTargets: YearlyTarget[];
}

export interface Equity {
  oomWillie: number;
  eben: number;
  hans: number;
}

export interface YearlyTarget {
  sekelbosCleared: number;
  targetLSU: number;
  sekelbosRevenue: [number, number];
  cattleRevenue: [number, number];
  goatsRevenue: [number, number];
  pigsRevenue: [number, number];
  chickensRevenue: [number, number];
  cropsRevenue: [number, number];
  costs: [number, number];
}

import partnershipData from './partnershipData.json';

export const defaultPartnershipData: PartnershipData = partnershipData;
