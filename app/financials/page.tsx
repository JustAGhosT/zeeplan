'use client';

import { FinancialProjections } from '@/components/FinancialProjections';
import { Header } from '@/components/Header';
import { FinancialCharts } from '@/components/FinancialCharts';
import { Footer } from '@/components/Footer';
import { FloatingControls } from '@/components/FloatingControls'; // Import the new controls
import styles from './page.module.css';

export default function FinancialsPage() {
  // The data context and local state are no longer needed,
  // as the zustand store manages the application state globally.

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Financial Projections</h1>
          <p className={styles.subtitle}>
            Comprehensive 5-year revenue, cost, and profit breakdown with interactive controls
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            {/* The components below will be updated to use the zustand store directly */}
            <FinancialProjections />
            <div className={styles.chartsSection}>
              <FinancialCharts />
            </div>
          </div>
        </div>
      </main>

      {/* Render the new floating controls component */}
      <FloatingControls />

      <Footer />
    </div>
  );
}
