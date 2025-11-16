'use client';

import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

/**
 * Custom hook to detect dark mode state by observing the 'dark' class on documentElement
 * This consolidates the duplicate dark mode detection logic used across multiple components
 * 
 * @returns {boolean} isDark - true if dark mode is active, false otherwise
 */
export function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Set up observer for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    // Cleanup
    return () => observer.disconnect();
  }, []);

  return isDark;
}
