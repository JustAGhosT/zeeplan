// Formatting utilities

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatRange(range: [number, number]): string {
  return `${formatCurrency(range[0])} - ${formatCurrency(range[1])}`;
}
