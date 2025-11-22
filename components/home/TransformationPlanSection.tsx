import { CheckCircle } from 'lucide-react';
import styles from '@/app/page.module.css';

export function TransformationPlanSection() {
  return (
    <section className={styles.sectionPadding}>
      <div className={styles.mainContent}>
        <div className={styles.transformationGrid}>
          <div>
            <h2 className={styles.sectionHeading}>5-Year Transformation Plan</h2>
            <p className={styles.sectionSubheading}>
              A comprehensive strategy to transform the farm through regenerative agriculture practices, capacity
              expansion, and revenue diversification.
            </p>

            <div className={styles.checklistContainer}>
              <div className={styles.checklistItem}>
                <CheckCircle className={styles.checklistIcon} />
                <div>
                  <h4 className={styles.checklistTitle}>Stocking Increase</h4>
                  <p className={styles.checklistDescription}>
                    From 72 LSU to ±110 LSU (+50% capacity) as Sekelbos is cleared
                  </p>
                </div>
              </div>
              <div className={styles.checklistItem}>
                <CheckCircle className={styles.checklistIcon} />
                <div>
                  <h4 className={styles.checklistTitle}>Diversification</h4>
                  <p className={styles.checklistDescription}>Add goats, pigs, chickens, crops for 8+ revenue streams</p>
                </div>
              </div>
              <div className={styles.checklistItem}>
                <CheckCircle className={styles.checklistIcon} />
                <div>
                  <h4 className={styles.checklistTitle}>Systems Implementation</h4>
                  <p className={styles.checklistDescription}>Financial tracking, optimization, KPI management</p>
                </div>
              </div>
              <div className={styles.checklistItem}>
                <CheckCircle className={styles.checklistIcon} />
                <div>
                  <h4 className={styles.checklistTitle}>Market Development</h4>
                  <p className={styles.checklistDescription}>Direct-to-consumer, premium pricing, farm shop</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.revenueBox}>
            <h3 className={styles.revenueBoxTitle}>Revenue Growth Trajectory</h3>
            <div className={styles.revenueList}>
              {/* This could also be dynamically generated */}
              <div className={styles.revenueItem}>
                <div className={styles.revenueItemHeader}>
                  <span className={styles.revenueYear}>Year 1</span>
                  <span className={styles.revenueAmount}>R340K - R618K</span>
                </div>
                <div className={styles.revenueBar}>
                  <div className={styles.revenueBarFill} style={{ width: '19%' }}></div>
                </div>
              </div>
              {/* ... other years */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
