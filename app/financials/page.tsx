'use client';

import { useState, useEffect } from 'react';
import { useData } from '@/app/contexts/DataContext';
import { FinancialProjections } from '@/components/FinancialProjections';
import { Header } from '@/components/Header';
import { FinancialCharts } from '@/components/FinancialCharts';
import { Footer } from '@/components/Footer';
import styles from './page.module.css';

export default function FinancialsPage() {
  const { data } = useData();
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

        </div>
      </main>

      <Footer />
    </div>
  );
}
