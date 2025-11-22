'use client';
import { useState, useEffect } from 'react';
import { Settings, X } from 'lucide-react';
import styles from './FloatingControls.module.css';
import { ConsolidatedControls } from './ConsolidatedControls';
import { useStore } from '../lib/store';
import { PartnershipData } from '@/lib/partnershipData';

export function FloatingControls() {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStore((state) => state.data);

  // This is a workaround to ensure the component re-renders when data changes.
  // Zustand provides more elegant ways to handle this, but for a quick POC this is fine.
  const [, setForceRender] = useState({});
  useEffect(() => {
    const unsubscribe = useStore.subscribe(() => setForceRender({}));
    return () => unsubscribe();
  }, []);

  return (
    <>
      <button
        className={styles.floatingButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close controls panel' : 'Open controls panel'}
      >
        {isOpen ? <X size={24} /> : <Settings size={24} />}
      </button>

      <div className={`${styles.panel} ${isOpen ? '' : styles.closed}`}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>Interactive Model Controls</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close controls panel"
          >
            <X size={20} />
          </button>
        </div>
        <div className={styles.panelContent}>
            <ConsolidatedControls />
        </div>
      </div>

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  );
}
