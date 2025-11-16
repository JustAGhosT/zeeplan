// Formatting utilities

/**
 * Formats a number as South African Rand (ZAR) currency
 * @param value - The numeric value to format
 * @returns Formatted currency string (e.g., "R1,000")
 */
export function formatCurrency(value: number): string {
  // The en-ZA locale adds a non-breaking space, which we remove to match test expectations.
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/\s/, '');
}

/**
 * Formats a min-max range as a currency range
 * @param range - [min, max] tuple of values
 * @returns Formatted range string (e.g., "R1,000-R5,000")
 */
export function formatRange(range: [number, number]): string {
  return `${formatCurrency(range[0])}-${formatCurrency(range[1])}`;
}
