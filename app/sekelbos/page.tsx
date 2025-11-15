'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  SekelbosExecutiveSummary,
  SekelbosSection1,
  SekelbosSection2,
  SekelbosSection3,
  SekelbosSection4,
  SekelbosSection5,
  SekelbosSection6,
  SekelbosSection7,
} from '@/components/SekelbosClearance';
import { ChickenModule } from '@/components/ChickenModule';
import { RabbitModule } from '@/components/RabbitModule';
import { useData } from '@/app/contexts/DataContext';
import styles from './page.module.css';

export default function SekelbosPage() {
  const { data } = useData();

  return (
    <div className={styles.pageContainer}>
      {/* Enhanced Header */}
      <Header />

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.layoutGrid}>
          {/* Left Sidebar - Navigation (Desktop only) */}
          <aside className={styles.navigationSidebar}>
            <Navigation pageType="sekelbos" />
          </aside>

          {/* Content Area */}
          <div className={styles.contentArea}>
            {/* Sekelbos Clearance Business Plan Sections */}
            <div id="sekelbos-executive">
              <SekelbosExecutiveSummary />
            </div>

            <div id="sekelbos-section1">
              <SekelbosSection1 />
            </div>

            <div id="sekelbos-section2">
              <SekelbosSection2 />
            </div>

            <div id="sekelbos-section3">
              <SekelbosSection3 />
            </div>

            <div id="sekelbos-section4">
              <SekelbosSection4 />
            </div>

            <div id="sekelbos-section5">
              <SekelbosSection5 />
            </div>

            <div id="sekelbos-section6">
              <SekelbosSection6 />
            </div>

            <div id="sekelbos-section7">
              <SekelbosSection7 />
            </div>
            {data.includeChickens && <ChickenModule />}
            {data.includeRabbits && <RabbitModule />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
