import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Beef, Milk, Salad, Egg, ArrowRight, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LivestockPage() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroIcon}>🐄</span>
              Livestock Operations Overview
            </h1>
            <p className={styles.heroSubtitle}>
              Diversified livestock portfolio providing multiple revenue streams through integrated regenerative
              agriculture practices
            </p>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className={styles.metricsSection}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>4</div>
              <div className={styles.metricLabel}>Livestock Types</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>R1.0M-1.5M</div>
              <div className={styles.metricLabel}>Year 5 Revenue Target</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>104 LSU</div>
              <div className={styles.metricLabel}>Total Capacity Year 5</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>+384%</div>
              <div className={styles.metricLabel}>Growth from Current</div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Integrated Livestock System</h2>
            <p className={styles.sectionText}>
              The livestock operations form the foundation of the regenerative agriculture system, providing multiple
              revenue streams while working synergistically with sekelbos clearance and soil regeneration efforts. Each
              enterprise is carefully selected to complement the others and maximize the use of available resources.
            </p>
          </div>
        </section>

        {/* Livestock Grid */}
        <section className={styles.livestockGrid}>
          {/* Cattle */}
          <Link href="/cattle" className={styles.livestockCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconGreen}`}>
                <Beef className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Cattle Ranging</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                Foundation operation expanding from 72 to 104 LSU through regenerative practices and sekelbos clearance
              </p>
              <div className={styles.cardMetrics}>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Current:</span>
                  <span className={styles.metricValue}>72 LSU</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Target:</span>
                  <span className={styles.metricValue}>104 LSU</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Year 5 Revenue:</span>
                  <span className={styles.metricValue}>R432K-584K</span>
                </div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Composite genetics (Brahman/Santa Gertrudis/Bonsmara/Nguni)</div>
                <div className={styles.feature}>✓ Rotational grazing system</div>
                <div className={styles.feature}>✓ Premium weaner production</div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.learnMore}>
                Learn more <ArrowRight className={styles.arrowIcon} />
              </span>
            </div>
          </Link>

          {/* Goats */}
          <Link href="/goats" className={styles.livestockCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconBlue}`}>
                <Milk className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Goats, Dairy & Cheese</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                Triple revenue stream from meat goats, dairy production, and artisan chevre cheese
              </p>
              <div className={styles.cardMetrics}>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Dairy Goats:</span>
                  <span className={styles.metricValue}>40-50 does</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Meat Goats:</span>
                  <span className={styles.metricValue}>60-80 head</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Year 5 Revenue:</span>
                  <span className={styles.metricValue}>R276K-440K</span>
                </div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Saanen dairy goats (3-4L/day)</div>
                <div className={styles.feature}>✓ Boer meat goats</div>
                <div className={styles.feature}>✓ Premium chevre production</div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.learnMore}>
                Learn more <ArrowRight className={styles.arrowIcon} />
              </span>
            </div>
          </Link>

          {/* Pigs */}
          <Link href="/pigs" className={styles.livestockCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconPink}`}>
                <Salad className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Pig Farming</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                High-efficiency protein production with rapid ROI and waste recycling integration
              </p>
              <div className={styles.cardMetrics}>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Breeding Sows:</span>
                  <span className={styles.metricValue}>10-15</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Annual Output:</span>
                  <span className={styles.metricValue}>150-250 pigs</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Year 5 Revenue:</span>
                  <span className={styles.metricValue}>R220K-375K</span>
                </div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Landrace/Large White cross</div>
                <div className={styles.feature}>✓ Mobile shelters on cleared land</div>
                <div className={styles.feature}>✓ Sekelbos root clearing</div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.learnMore}>
                Learn more <ArrowRight className={styles.arrowIcon} />
              </span>
            </div>
          </Link>

          {/* Chicken */}
          <Link href="/chicken" className={styles.livestockCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconYellow}`}>
                <Egg className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>Chicken & Eggs</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                Dual revenue from premium free-range eggs and pasture-raised chicken production
              </p>
              <div className={styles.cardMetrics}>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Laying Hens:</span>
                  <span className={styles.metricValue}>500 birds</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Annual Eggs:</span>
                  <span className={styles.metricValue}>108,000</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Year 5 Revenue:</span>
                  <span className={styles.metricValue}>R220K-300K</span>
                </div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Multi-breed flock (Koekoek/RIR/Australorp)</div>
                <div className={styles.feature}>✓ Mobile chicken tractors</div>
                <div className={styles.feature}>✓ Sekelbos seed control</div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.learnMore}>
                Learn more <ArrowRight className={styles.arrowIcon} />
              </span>
            </div>
          </Link>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Why Diversified Livestock?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <TrendingUp className={styles.icon} />
                </div>
                <h3 className={styles.benefitTitle}>Multiple Revenue Streams</h3>
                <p className={styles.benefitText}>
                  Four distinct enterprises reduce risk through diversification. If one market weakens, others provide
                  stability.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <Target className={styles.icon} />
                </div>
                <h3 className={styles.benefitTitle}>Synergistic Integration</h3>
                <p className={styles.benefitText}>
                  Each enterprise supports others: chickens control pests, pigs clear roots, all provide manure for
                  pasture improvement.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <Beef className={styles.icon} />
                </div>
                <h3 className={styles.benefitTitle}>Proven Baseline</h3>
                <p className={styles.benefitText}>
                  Existing cattle operation (72 LSU, R233K-297K/year) provides stable foundation with clear expansion
                  path.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
