import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Wheat, ArrowRight, TrendingUp, Target, Droplets } from 'lucide-react';
import Link from 'next/link';
import styles from '../../livestock/page.module.css';

export default function CropsSummaryPage() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section
          className={styles.heroSection}
          style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}
        >
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroIcon}>🌾</span>
              Crop Production Overview
            </h1>
            <p className={styles.heroSubtitle}>
              Drought-adapted crop rotation system providing feed independence, food security, and cash income in 315mm
              rainfall zone
            </p>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className={styles.metricsSection}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>20ha</div>
              <div className={styles.metricLabel}>Total Cropping Area</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>R120K-280K</div>
              <div className={styles.metricLabel}>Year 5 Total Value</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>8</div>
              <div className={styles.metricLabel}>Crop Types</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>R50K-100K</div>
              <div className={styles.metricLabel}>Annual Feed Savings</div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className={styles.overviewSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Integrated Crop System</h2>
            <p className={styles.sectionText}>
              The crop production system complements livestock operations by providing feed independence, household food
              security, and cash crop income. Focused on drought-adapted varieties suited to the 315mm rainfall
              environment, the system integrates seamlessly with livestock through manure fertilization and crop residue
              grazing.
            </p>
          </div>
        </section>

        {/* Crop Production Cards */}
        <section className={styles.livestockGrid}>
          <Link href="/crops/dryland" className={styles.livestockCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconYellow}`}>
                <Wheat className={styles.icon} style={{ color: '#f59e0b' }} />
              </div>
              <h3 className={styles.cardTitle}>Dryland Crops (18ha)</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                Drought-adapted grain and forage production for 315mm rainfall zone
              </p>
              <div className={styles.cardMetrics}>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Area:</span>
                  <span className={styles.metricValue}>18ha (90% of cropping)</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Cash Revenue:</span>
                  <span className={styles.metricValue}>R60K-150K/year</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Feed Savings:</span>
                  <span className={styles.metricValue}>R40K-85K/year</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Year 5 Total:</span>
                  <span className={styles.metricValue}>R105K-235K</span>
                </div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Sorghum 8ha (primary grain)</div>
                <div className={styles.feature}>✓ Cowpeas 4ha (protein + N-fixation)</div>
                <div className={styles.feature}>✓ Pearl millet 2ha (backup grain)</div>
                <div className={styles.feature}>✓ Sunflower 2ha (cash crop)</div>
                <div className={styles.feature}>✓ Pumpkins 2ha (food security)</div>
                <div className={styles.feature}>✓ Lablab 2ha (forage + N-fixation)</div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.learnMore}>
                View dryland crops <ArrowRight className={styles.arrowIcon} />
              </span>
            </div>
          </Link>

          <Link href="/crops/irrigated" className={styles.livestockCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconBlue}`}>
                <Droplets className={styles.icon} style={{ color: '#3b82f6' }} />
              </div>
              <h3 className={styles.cardTitle}>Irrigated Crops (2ha)</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardDescription}>
                High-value vegetables and premium livestock feed with borehole irrigation
              </p>
              <div className={styles.cardMetrics}>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Area:</span>
                  <span className={styles.metricValue}>2ha (10% of cropping)</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Lucerne Feed:</span>
                  <span className={styles.metricValue}>R30K/year value</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Vegetable Sales:</span>
                  <span className={styles.metricValue}>R15K-30K/year</span>
                </div>
                <div className={styles.cardMetric}>
                  <span className={styles.metricLabel}>Year 5 Total:</span>
                  <span className={styles.metricValue}>R45K-60K</span>
                </div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Lucerne 2ha (high-protein feed)</div>
                <div className={styles.feature}>✓ Leafy greens (spinach, kale, chard)</div>
                <div className={styles.feature}>✓ Root vegetables (carrots, beetroot)</div>
                <div className={styles.feature}>✓ Tomatoes (high-value cash)</div>
                <div className={styles.feature}>✓ Onions & herbs (storage crops)</div>
                <div className={styles.feature}>✓ Seedling nursery (sales + own use)</div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.learnMore}>
                View irrigated crops <ArrowRight className={styles.arrowIcon} />
              </span>
            </div>
          </Link>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Why Drought-Adapted Crops?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon} style={{ backgroundColor: '#fef3c7' }}>
                  <TrendingUp className={styles.icon} style={{ color: '#f59e0b' }} />
                </div>
                <h3 className={styles.benefitTitle}>Feed Independence</h3>
                <p className={styles.benefitText}>
                  On-farm grain and forage production reduces purchased feed costs by R50K-100K/year at full capacity.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon} style={{ backgroundColor: '#fef3c7' }}>
                  <Target className={styles.icon} style={{ color: '#f59e0b' }} />
                </div>
                <h3 className={styles.benefitTitle}>Proven 315mm Crops</h3>
                <p className={styles.benefitText}>
                  Sorghum, millet, and cowpeas evolved for low-rainfall Africa. Opportunistic planting minimizes drought
                  risk.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon} style={{ backgroundColor: '#fef3c7' }}>
                  <Droplets className={styles.icon} style={{ color: '#f59e0b' }} />
                </div>
                <h3 className={styles.benefitTitle}>Soil Regeneration</h3>
                <p className={styles.benefitText}>
                  Planting on cleared sekelbos areas. Legume nitrogen fixation and crop residues rebuild soil fertility
                  for improved grazing.
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
