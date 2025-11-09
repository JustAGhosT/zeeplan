'use client';

import { useState, useEffect } from 'react';
import { defaultPartnershipData, PartnershipData } from '@/lib/partnershipData';
import { FinancialProjections } from '@/components/FinancialProjections';
import { ControlsPanel } from '@/components/ControlsPanel';
import { Header } from '@/components/Header';
import { FinancialCharts } from '@/components/FinancialCharts';
import { Footer } from '@/components/Footer';
import styles from './page.module.css';

export default function FinancialsPage() {
  const [data, setData] = useState<PartnershipData>(defaultPartnershipData);
  const [showControls, setShowControls] = useState(false);
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
    <div className={`${styles.page} ${isDark ? styles.dark : ''}`}>
      <Header onToggleControls={() => setShowControls(!showControls)} showControls={showControls} />

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={`${styles.title} ${isDark ? styles.dark : ''}`}>Financial Projections</h1>
          <p className={`${styles.subtitle} ${isDark ? styles.dark : ''}`}>
            Comprehensive 5-year revenue, cost, and profit breakdown with interactive controls
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            <FinancialProjections data={data} />

            <div className={styles.chartsSection}>
              <FinancialCharts data={data} />
            </div>
          </div>

          {showControls && (
            <aside className={styles.sidebar}>
              <ControlsPanel data={data} onUpdate={setData} />
            </aside>
          )}
        </div>

        {/* Mobile Controls Modal */}
        {showControls && (
          <div className={styles.mobileModal}>
            <div className={`${styles.modalContent} ${isDark ? styles.dark : ''}`}>
              <div className={`${styles.modalHeader} ${isDark ? styles.dark : ''}`}>
                <h3 className={styles.modalTitle}>Adjust Values</h3>
                <button
                  onClick={() => setShowControls(false)}
                  className={`${styles.closeButton} ${isDark ? styles.dark : ''}`}
                >
                  <svg className={styles.closeIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className={styles.modalBody}>
                <ControlsPanel data={data} onUpdate={setData} />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
