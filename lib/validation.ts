// lib/validation.ts

/**
 * Validates a min-max range.
 * Throws an error if the range is invalid.
 * @param range - The [min, max] tuple to validate.
 * @param context - A string describing the context of the validation, for error messages.
 */
export function validateMinMaxRange(range: [number, number], context: string) {
  const [min, max] = range;

  if (min < 0 || max < 0) {
    throw new Error(`Invalid negative values in range for ${context}: [${min}, ${max}]`);
  }

  if (min > max) {
    throw new Error(`Invalid range for ${context}: min (${min}) cannot be greater than max (${max})`);
  }
}
