// lib/validation.test.ts
import { validateMinMaxRange } from './validation';

describe('validateMinMaxRange', () => {
  it('should not throw an error for valid ranges', () => {
    expect(() => validateMinMaxRange([0, 100], 'test')).not.toThrow();
    expect(() => validateMinMaxRange([100, 100], 'test')).not.toThrow();
  });

  it('should throw an error for negative values', () => {
    expect(() => validateMinMaxRange([-1, 100], 'test')).toThrow('Invalid negative values in range for test: [-1, 100]');
    expect(() => validateMinMaxRange([0, -1], 'test')).toThrow('Invalid negative values in range for test: [0, -1]');
  });

  it('should throw an error if min is greater than max', () => {
    expect(() => validateMinMaxRange([101, 100], 'test')).toThrow('Invalid range for test: min (101) cannot be greater than max (100)');
  });
});
