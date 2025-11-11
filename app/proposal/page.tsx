'use client';

import { useState } from 'react';
import { defaultPartnershipData, PartnershipData } from '@/lib/partnershipData';
import { ExecutiveSummary } from '@/components/ExecutiveSummary';
import { FinancialProjections } from '@/components/FinancialProjections';
import { TransformationPlan } from '@/components/TransformationPlan';
import { ControlsPanel } from '@/components/ControlsPanel';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { FinancialCharts } from '@/components/FinancialCharts';
import { Footer } from '@/components/Footer';
import styles from './page.module.css';

export default function ProposalPage() {
  const [data, setData] = useState<PartnershipData>(defaultPartnershipData);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className={styles.pageContainer}>
      {/* Enhanced Header */}
      <Header onToggleControls={() => setShowControls(!showControls)} showControls={showControls} />

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.layoutGrid}>
          {/* Left Sidebar - Navigation (Desktop only) */}
          <aside className={styles.navigationSidebar}>
            <Navigation pageType="proposal" />
          </aside>

          {/* Content Area */}
          <div className={styles.contentArea}>
            <div id="executive-summary">
              <ExecutiveSummary data={data} />
            </div>

            <div id="financial-projections">
              <FinancialProjections data={data} />

              {/* Enhanced Charts */}
              <div className={styles.chartsSection}>
                <FinancialCharts data={data} />
              </div>
            </div>

            <div id="transformation-plan">
              <TransformationPlan data={data} />
            </div>
          </div>

          {/* Right Sidebar - Controls (Desktop only) */}
          {showControls && (
            <aside className={styles.controlsSidebar}>
              <ControlsPanel data={data} onUpdate={setData} />
            </aside>
          )}
        </div>

        {/* Mobile Controls Modal */}
        {showControls && (
          <div className={styles.mobileModal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Adjust Values</h3>
                <button onClick={() => setShowControls(false)} className={styles.closeButton}>
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
