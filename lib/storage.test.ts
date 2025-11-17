// Tests for localStorage utility functions
import { getStorageItem, setStorageItem, removeStorageItem, isStorageAvailable } from './storage';

describe('storage utilities', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe('getStorageItem', () => {
    it('should return default value when key does not exist', () => {
      const result = getStorageItem('nonexistent', 'default');
      expect(result).toBe('default');
    });

    it('should return stored value when key exists', () => {
      localStorage.setItem('test', JSON.stringify('stored'));
      const result = getStorageItem('test', 'default');
      expect(result).toBe('stored');
    });

    it('should handle complex objects', () => {
      const obj = { name: 'test', value: 123 };
      localStorage.setItem('obj', JSON.stringify(obj));
      const result = getStorageItem('obj', {});
      expect(result).toEqual(obj);
    });

    it('should return default value on parse error', () => {
      localStorage.setItem('invalid', 'not valid json');
      const result = getStorageItem('invalid', 'default');
      expect(result).toBe('default');
    });
  });

  describe('setStorageItem', () => {
    it('should store simple values', () => {
      const result = setStorageItem('test', 'value');
      expect(result).toBe(true);
      expect(localStorage.getItem('test')).toBe(JSON.stringify('value'));
    });

    it('should store complex objects', () => {
      const obj = { name: 'test', value: 123 };
      const result = setStorageItem('obj', obj);
      expect(result).toBe(true);
      expect(JSON.parse(localStorage.getItem('obj') || '{}')).toEqual(obj);
    });
  });

  describe('removeStorageItem', () => {
    it('should remove existing items', () => {
      localStorage.setItem('test', 'value');
      const result = removeStorageItem('test');
      expect(result).toBe(true);
      expect(localStorage.getItem('test')).toBeNull();
    });

    it('should return true even if item does not exist', () => {
      const result = removeStorageItem('nonexistent');
      expect(result).toBe(true);
    });
  });

  describe('isStorageAvailable', () => {
    it('should return true when localStorage is available', () => {
      expect(isStorageAvailable()).toBe(true);
    });
  });
});
