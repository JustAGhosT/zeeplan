import { Users, Target, TrendingUp } from 'lucide-react';
import styles from '@/app/page.module.css';

export function PartnershipProtectionSection() {
  return (
    <section className={styles.sectionPadding}>
      <div className={styles.mainContent}>
        <div className={styles.sectionCenter}>
          <h2 className={styles.sectionHeading}>Why This Partnership Protects Your Interests</h2>
          <p className={styles.sectionSubheading}>
            Designed to preserve family farm ownership while maximizing returns for all partners
          </p>
        </div>

        <div className={styles.threeColumnGrid}>
          {/* Feature 1 */}
          <div className={styles.featureCard}>
            <div className={`${styles.featureIconContainer} ${styles.featureIconGreen}`}>
              <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className={styles.featureCardTitle}>Family Control Maintained (70%)</h3>
            <p className={styles.featureCardText}>
              Eben and Hein retain 70% ownership (35% each). Partnership equity starts at 0% and grows only when
              revenue targets are met.
            </p>
          </div>

          {/* Feature 2 */}
          <div className={styles.featureCard}>
            <div className={`${styles.featureIconContainer} ${styles.featureIconBlue}`}>
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className={styles.featureCardTitle}>Zero Cash Risk</h3>
            <p className={styles.featureCardText}>
              No money required from Eben or Hein. Hans brings R48K-98K in livestock and pure sweat equity. You risk
              nothing financially.
            </p>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureCard}>
            <div className={`${styles.featureIconContainer} ${styles.featureIconYellow}`}>
              <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className={styles.featureCardTitle}>Your Income Grows 229-384%</h3>
            <p className={styles.featureCardText}>
              From R210K-245K baseline to R618K-1.41M over 5 years. Each of you earns substantially more while
              maintaining control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
