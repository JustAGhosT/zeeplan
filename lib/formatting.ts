// lib/formatting.ts

export function formatCurrency(value: number): string {
  return 'R' + value.toLocaleString('en-ZA', { maximumFractionDigits: 0 });
}

export function formatRange(range: [number, number]): string {
  return `${formatCurrency(range[0])}-${formatCurrency(range[1])}`;
}
