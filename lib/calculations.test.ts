import { calculateROI } from './calculations';

describe('calculateROI', () => {
  it('should calculate the ROI correctly', () => {
    const investment: [number, number] = [48000, 98000];
    const netProfit: [number, number] = [747000, 4579000];
    const roi = calculateROI(investment, netProfit);
    expect(roi).toBe('762-9,540%');
  });
});
