// Formatting utilities

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

export function formatRange(range: [number, number]): string {
  return `${formatCurrency(range[0])}-${formatCurrency(range[1])}`;
}
