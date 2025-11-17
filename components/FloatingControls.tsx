'use client';

import { useState, useEffect } from 'react';
import { useData } from '@/app/contexts/DataContext';
import { ControlsPanel } from './ControlsPanel';
import styles from './FloatingControls.module.css';

export function FloatingControls() {
  const { data, updateData, isControlsOpen, openControls, closeControls } = useData();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button
        className={`${styles.floatingButton} ${isDark ? styles.dark : ''}`}
        onClick={openControls}
        aria-label="Toggle controls panel"
        data-testid="fab-open-controls"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0L8 7.48a1 1 0 01-1.34.79l-4.2-1.7a1 1 0 00-1.28.82l-1 4.5a1 1 0 00.57 1.2l3.4 1.9a1 1 0 010 1.7l-3.4 1.9a1 1 0 00-.57 1.2l1 4.5a1 1 0 001.28.82l4.2-1.7a1 1 0 011.34.79l.51 4.31c.38 1.56 2.6 1.56 2.98 0l.51-4.31a1 1 0 011.34-.79l4.2 1.7a1 1 0 001.28-.82l1-4.5a1 1 0 00-.57-1.2l-3.4-1.9a1 1 0 010-1.7l3.4-1.9a1 1 0 00.57-1.2l-1-4.5a1 1 0 00-1.28-.82l-4.2 1.7a1 1 0 01-1.34-.79L11.49 3.17zm-1.98 8.33a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div data-testid="controls-panel" className={`${styles.panel} ${isControlsOpen ? '' : styles.closed} ${isDark ? styles.dark : ''}`}>
        <div className={`${styles.panelHeader} ${isDark ? styles.dark : ''}`}>
          <h3 className={styles.panelTitle}>⚙️ Adjust Parameters</h3>
          <button
            onClick={closeControls}
            className={`${styles.closeButton} ${isDark ? styles.dark : ''}`}
            aria-label="Close controls panel"
          >
            &times;
          </button>
        </div>
        <div className={styles.panelBody}>
          <ControlsPanel data={data} onUpdate={updateData} />
        </div>
      </div>
    </>
  );
}
