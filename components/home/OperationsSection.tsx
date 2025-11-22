import Link from 'next/link';
import { ArrowRight, Beef, Milk, Salad, Egg, Wheat } from 'lucide-react';
import styles from '@/app/page.module.css';

export function OperationsSection() {
  return (
    <section className={styles.sectionPadding}>
      <div className={styles.mainContent}>
        <div className={styles.sectionCenter}>
          <h2 className={styles.sectionHeading}>Livestock & Crop Operations</h2>
          <p className={styles.sectionSubheading}>
            Diversified revenue streams from integrated livestock and crop production
          </p>
        </div>

        <div className={styles.livestockGrid}>
          {/* Cattle */}
          <Link href="/cattle" className={styles.livestockCard}>
            <div className={`${styles.featureIconContainer} ${styles.featureIconGreen}`}>
              <Beef className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className={styles.livestockCardTitle}>Cattle Ranging</h3>
            <p className={styles.livestockCardDescription}>
              Foundation operation expanding from 72 to 104 LSU through regenerative practices
            </p>
            <div className={styles.livestockCardLink}>
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </Link>

          {/* Goats */}
          <Link href="/goats" className={styles.livestockCard}>
            <div className={`${styles.featureIconContainer} ${styles.featureIconBlue}`}>
              <Milk className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className={styles.livestockCardTitle}>Goats, Dairy & Cheese</h3>
            <p className={styles.livestockCardDescription}>
              Triple revenue stream from meat goats, dairy production, and artisan cheese
            </p>
            <div className={styles.livestockCardLink}>
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </Link>

          {/* Pigs */}
          <Link href="/pigs" className={styles.livestockCard}>
            <div className={`${styles.featureIconContainer} ${styles.featureIconYellow}`}>
              <Salad className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className={styles.livestockCardTitle}>Pig Farming</h3>
            <p className={styles.livestockCardDescription}>
              High-efficiency protein production with rapid ROI and waste recycling
            </p>
            <div className={styles.livestockCardLink}>
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </Link>

          {/* Chicken */}
          <Link href="/chicken" className={styles.livestockCard}>
            <div className={`${styles.featureIconContainer} ${styles.featureIconYellow}`}>
              <Egg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className={styles.livestockCardTitle}>Chicken & Eggs</h3>
            <p className={styles.livestockCardDescription}>
              Dual revenue from premium free-range eggs and pasture-raised chicken
            </p>
            <div className={styles.livestockCardLink}>
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </Link>

          {/* Crops */}
          <Link href="/crops" className={styles.livestockCard}>
            <div className={`${styles.featureIconContainer} ${styles.featureIconYellow}`}>
              <Wheat className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className={styles.livestockCardTitle}>Crop Production</h3>
            <p className={styles.livestockCardDescription}>
              Drought-adapted crops providing feed independence, food security, and cash income
            </p>
            <div className={styles.livestockCardLink}>
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
