// Data model for the Zeerust Partnership Proposal

// Defines a single agricultural enterprise (e.g., Cattle, Goats, Crops)
export interface Enterprise {
  id: string; // e.g., 'cattle', 'goats'
  name: string; // e.g., 'Cattle', 'Goats'
  type: 'livestock' | 'crop' | 'other';
  enabled: boolean;
  hectares: number; // Land allocated to this enterprise
  // Livestock-specific parameters
  density?: number; // animals per hectare
  marketPrice?: [number, number];
  offtakeRate?: number; // percentage
  costPerHectare?: [number, number];
  costPerAnimal?: [number, number];
  // Crop-specific parameters
  revenuePerHectare?: [number, number];
}

export interface PartnershipData {
  // Global farm parameters
  landSize: number; // hectares
  sekelbosEncroachment: number; // percentage
  sekelbosRevenuePerHectare: [number, number]; // min, max

  // Array of all enterprises on the farm
  enterprises: Enterprise[];

  // Financial and partnership structure
  hansLivestockValue: [number, number]; // min, max
  hansMonthlySalary: [number, number]; // min, max
  equityStructure: Equity[];
  yearlyTargets: YearlyTarget[]; // This might also be refactored or calculated dynamically later
}

export interface Equity {
  year: number;
  oomHein: number;
  eben: number;
  hans: number;
}

export interface YearlyTarget {
  year: number;
  sekelbosCleared: number;
  // Note: Detailed revenue/costs per enterprise will be calculated dynamically
  // This can be simplified to hold high-level targets if needed
  otherCosts: [number, number];
}

// The default data is now loaded from a separate, refactored JSON file.
// We are no longer importing the old partnershipData.json here directly.
import partnershipData from '../data/partnershipData.json';

export const defaultPartnershipData: PartnershipData = partnershipData as unknown as PartnershipData;
