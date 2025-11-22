// Data model for the Zeerust Partnership Proposal

// Represents a single revenue-generating enterprise (e.g., Cattle, Goats, Sekelbos)
export interface Enterprise {
  id: string; // e.g., 'cattle', 'sekelbos'
  name: string; // e.g., 'Cattle', 'Sekelbos Clearance'
  type: 'livestock' | 'crop' | 'other';
  enabled: boolean;
  hectares: number;
  // Livestock-specific
  density?: number; // animals per hectare
  marketPrice?: [number, number];
  offtakeRate?: number;
  costPerHecatare?: [number, number];
  costPerAnimal?: [number, number];
  // Crop-specific
  revenuePerHectare?: [number, number];
  costPerHectare?: [number, number];
  // Other (e.g., Sekelbos)
  revenueTotal?: [number, number];
  costTotal?: [number, number];
}


export interface PartnershipData {
  // Farm basics
  landSize: number; // hectares
  sekelbosEncroachment: number; // percentage
  currentCarryingCapacity: number; // ha/LSU
  targetCarryingCapacity: number; // ha/LSU

  // All enterprises associated with the farm
  enterprises: Enterprise[];

  // Baseline revenue (current state) - Can be refactored to use Enterprise model as well
  baselineRevenue: {
    cattle: [number, number];
    goats: [number, number];
    pigs: [number, number];
    chickens: [number, number];
    crops: [number, number];
    wood: [number, number];
    rabbits: [number, number];
  };

  baselineCosts: [number, number];

  // Hans's investment
  hansLivestockValue: [number, number];
  hansMonthlySalary: [number, number];

  equityStructure: Equity[];
  yearlyTargets: YearlyTarget[]; // This will also be refactored to be more dynamic
}

export interface Equity {
  year: number;
  oomHein: number;
  eben: number;
  hans: number;
}

export interface YearlyTarget {
  year: number;
  // This structure will be simplified as calculations become more dynamic
  sekelbosCleared: number; // Example field, will be driven by enterprise data
  costs: [number, number];
}

// The default data will now be constructed in a more structured way
import partnershipData from './partnershipData-refactored.json';

export const defaultPartnershipData: PartnershipData = partnershipData;
