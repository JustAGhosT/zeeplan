import { formatCurrency, formatRange } from './formatting';

describe('formatCurrency', () => {
  it('should format the currency correctly', () => {
    const value = 123456;
    const formatted = formatCurrency(value);
    expect(formatted).toBe('R123 456'.replace(/ /g, '\u00A0'));
  });
});

describe('formatRange', () => {
  it('should format the range correctly', () => {
    const range: [number, number] = [1000, 2000];
    const formatted = formatRange(range);
    expect(formatted).toBe('R1 000-R2 000'.replace(/ /g, '\u00A0'));
  });
});
