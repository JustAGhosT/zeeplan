// Business Constants for Zeerust Partnership

/**
 * Partnership Equity Structure
 * These percentages define the ownership distribution among partners
 */
export const EQUITY_SHARES = {
  OOM_HEIN: 35, // Oom Hein's equity share (%)
  EBEN: 35, // Eben's equity share (%)
  HANS: 30, // Hans's equity share (%)
  FAMILY_CONTROL: 70, // Combined family control (Oom Hein + Eben) (%)
} as const;

/**
 * Time-based constants
 */
export const TIME = {
  MONTHS_IN_YEAR: 12,
  PLANNING_HORIZON_YEARS: 5,
} as const;

/**
 * Farm metrics
 */
export const FARM = {
  TOTAL_HECTARES: 600,
  CURRENT_LSU: 72,
  TARGET_LSU: 104,
  SEKELBOS_ENCROACHMENT_MIN: 60, // %
  SEKELBOS_ENCROACHMENT_MAX: 80, // %
} as const;

/**
 * Calculation precision
 */
export const PRECISION = {
  CURRENCY_DECIMALS: 0,
  PERCENTAGE_DECIMALS: 1,
  ROI_DECIMALS: 0,
} as const;

/**
 * UI thresholds and limits
 */
export const UI_LIMITS = {
  MIN_SLIDER_PERCENTAGE: 0,
  MAX_SLIDER_PERCENTAGE: 100,
  DEFAULT_ANIMATION_DURATION: 300, // ms
} as const;

/**
 * Livestock density limits (animals per hectare)
 * Based on regenerative agriculture best practices
 */
export const LIVESTOCK_DENSITY = {
  CATTLE_MAX: 1.0, // Maximum realistic cattle density
  GOATS_MAX: 10.0, // Maximum realistic goat density
  PIGS_MAX: 20.0, // Maximum realistic pig density
  CHICKENS_MAX: 50.0, // Maximum realistic chicken density
} as const;

/**
 * Revenue growth targets (%)
 */
export const GROWTH_TARGETS = {
  MIN_REVENUE_GROWTH: 229, // Minimum expected revenue growth for Eben & Oom Hein (%)
  MAX_REVENUE_GROWTH: 384, // Maximum expected revenue growth for Eben & Oom Hein (%)
  HANS_MIN_ROI: 1870, // Hans's minimum 5-year ROI (%)
  HANS_MAX_ROI: 3400, // Hans's maximum 5-year ROI (%)
} as const;
