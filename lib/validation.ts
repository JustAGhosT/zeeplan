// lib/validation.ts

/**
 * Validates a min-max range.
 * Throws an error if the range is invalid.
 * @param range - The [min, max] tuple to validate.
 * @param context - A string describing the context of the validation, for error messages.
 * @throws Error if range contains negative values or min > max
 */
export function validateMinMaxRange(range: [number, number], context: string): void {
  const [min, max] = range;

  if (min < 0 || max < 0) {
    throw new Error(`Invalid negative values in range for ${context}: [${min}, ${max}]`);
  }

  if (min > max) {
    throw new Error(`Invalid range for ${context}: min (${min}) cannot be greater than max (${max})`);
  }
}

/**
 * Validates that a percentage is within 0-100 range
 * @param value - The percentage value to validate
 * @param context - Description for error messages
 * @throws Error if value is outside 0-100 range
 */
export function validatePercentage(value: number, context: string): void {
  if (value < 0 || value > 100) {
    throw new Error(`Invalid percentage for ${context}: ${value}. Must be between 0 and 100.`);
  }
}

/**
 * Validates that a number is positive
 * @param value - The value to validate
 * @param context - Description for error messages
 * @throws Error if value is negative
 */
export function validatePositive(value: number, context: string): void {
  if (value < 0) {
    throw new Error(`Invalid negative value for ${context}: ${value}. Must be positive.`);
  }
}

/**
 * Validates that livestock density is within realistic bounds
 * @param hectares - Land area in hectares
 * @param density - Animals per hectare
 * @param maxRealisticDensity - Maximum realistic density for the animal type
 * @param animalType - Type of animal for error messages
 * @throws Error if density exceeds realistic bounds
 */
export function validateLivestockDensity(
  hectares: number,
  density: number,
  maxRealisticDensity: number,
  animalType: string
): void {
  validatePositive(hectares, `${animalType} hectares`);
  validatePositive(density, `${animalType} density`);
  
  if (density > maxRealisticDensity) {
    throw new Error(
      `Unrealistic ${animalType} density: ${density} per hectare. ` +
      `Maximum recommended: ${maxRealisticDensity} per hectare.`
    );
  }
}

