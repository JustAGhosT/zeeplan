'use client';

import { ExecutiveSummary } from '@/components/ExecutiveSummary';
import { FinancialProjections } from '@/components/FinancialProjections';
import { TransformationPlan } from '@/components/TransformationPlan';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { FinancialCharts } from '@/components/FinancialCharts';
import { Footer } from '@/components/Footer';
import { ChickenModule } from '@/components/ChickenModule';
import { RabbitModule } from '@/components/RabbitModule';
import { useStore } from '@/lib/store';
import styles from './page.module.css';

export default function ProposalPage() {
  const data = useStore((state) => state.data);

  return (
    <div className={styles.pageContainer}>
      {/* Enhanced Header */}
      <Header />

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
              <FinancialProjections />

              {/* Enhanced Charts */}
              <div className={styles.chartsSection}>
                <FinancialCharts />
              </div>
            </div>

            <div id="transformation-plan">
              <TransformationPlan data={data} />
              {data.includeChickens && <ChickenModule />}
              {data.includeRabbits && <RabbitModule />}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
