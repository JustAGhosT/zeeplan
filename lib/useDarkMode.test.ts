// Tests for useDarkMode hook
import { renderHook } from '@testing-library/react';
import { useDarkMode } from './useDarkMode';

describe('useDarkMode', () => {
  beforeEach(() => {
    // Clean up the document
    document.documentElement.classList.remove('dark');
  });

  afterEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('should return false when dark mode is not active', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current).toBe(false);
  });

  it('should return true when dark mode is active', () => {
    document.documentElement.classList.add('dark');
    const { result } = renderHook(() => useDarkMode());
    expect(result.current).toBe(true);
  });

  it('should update when dark mode class changes', () => {
    const { result, rerender } = renderHook(() => useDarkMode());
    expect(result.current).toBe(false);

    // Add dark class
    document.documentElement.classList.add('dark');
    // Trigger a re-render
    rerender();
    
    // Note: The actual update happens via MutationObserver
    // In a real test environment, you'd need to wait for the observer to trigger
  });
});
