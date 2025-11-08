import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target, CheckCircle, Beef, Milk, Salad, Egg, Wheat } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className="block">Regenerative Agriculture</span>
              <span className={styles.heroTitleAccent}>Partnership Proposal</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Zero-cash entry, performance-based partnership in 600ha regenerative agriculture venture
            </p>
            <div className={styles.heroCTA}>
              <Link
                href="/proposal"
                className={styles.primaryButton}
              >
                View Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/financials"
                className={styles.secondaryButton}
              >
                Financial Projections
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className={styles.decorativeBackground}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
          <div className={`${styles.blob} ${styles.blob3}`}></div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className={styles.whiteSection}>
        <div className={styles.mainContent}>
          <div className={styles.fourColumnGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>600ha</div>
              <div className={styles.metricLabel}>Bushveld Farmland</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>+384%</div>
              <div className={styles.metricLabel}>Revenue Growth</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>R1.8M</div>
              <div className={styles.metricLabel}>Year 5 Target</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>3,400%</div>
              <div className={styles.metricLabel}>ROI (5-year)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.sectionPadding}>
        <div className={styles.mainContent}>
          <div className={styles.sectionCenter}>
            <h2 className={styles.sectionHeading}>
              Why This Partnership?
            </h2>
            <p className={styles.sectionSubheading}>
              A unique opportunity combining zero-capital entry with high returns through regenerative agriculture
            </p>
          </div>

          <div className={styles.threeColumnGrid}>
            {/* Feature 1 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIconContainer} ${styles.featureIconGreen}`}>
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className={styles.featureCardTitle}>
                Performance-Based Growth
              </h3>
              <p className={styles.featureCardText}>
                Phased equity earn-in from 0% to 30% based on revenue milestones, protecting all partners while enabling significant returns.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIconContainer} ${styles.featureIconBlue}`}>
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={styles.featureCardTitle}>
                Win-Win-Win Structure
              </h3>
              <p className={styles.featureCardText}>
                All partners benefit with 229% growth for existing owners and 1,870-3,400% ROI for new partner with zero cash investment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIconContainer} ${styles.featureIconYellow}`}>
                <Target className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className={styles.featureCardTitle}>
                Diversified Revenue Streams
              </h3>
              <p className={styles.featureCardText}>
                8+ revenue streams including cattle, goats, pigs, chickens, crops, and wood products for resilient income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Structure Section */}
      <section className={styles.lightSection}>
        <div className={styles.mainContent}>
          <div className={styles.sectionCenter}>
            <h2 className={styles.sectionHeading}>
              Partnership Structure
            </h2>
            <p className={styles.sectionSubheading}>
              Fair and balanced equity distribution
            </p>
          </div>

          <div className={styles.partnershipGrid}>
            <div className={styles.partnerCard}>
              <div className={styles.partnerCardGreen}>
                <div className={styles.partnerPercentage}>35%</div>
                <div className={styles.partnerName}>Oom Willie</div>
                <div className={styles.partnerRole}>Land + Operations</div>
              </div>
            </div>
            <div className={styles.partnerCard}>
              <div className={styles.partnerCardBlue}>
                <div className={styles.partnerPercentage}>35%</div>
                <div className={styles.partnerName}>Eben</div>
                <div className={styles.partnerRole}>Infrastructure + Family</div>
              </div>
            </div>
            <div className={styles.partnerCard}>
              <div className={styles.partnerCardYellow}>
                <div className={styles.partnerPercentage}>30%</div>
                <div className={styles.partnerName}>Hans</div>
                <div className={styles.partnerRole}>Sweat Equity + Livestock</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className={styles.sectionPadding}>
        <div className={styles.mainContent}>
          <div className={styles.transformationGrid}>
            <div>
              <h2 className={styles.sectionHeading}>
                5-Year Transformation Plan
              </h2>
              <p className={styles.sectionSubheading}>
                A comprehensive strategy to transform the farm through regenerative agriculture practices, 
                capacity expansion, and revenue diversification.
              </p>
              
              <div className={styles.checklistContainer}>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checklistIcon} />
                  <div>
                    <h4 className={styles.checklistTitle}>
                      <Link href="/sekelbos" className={styles.checklistLink}>
                        Sekelbos Clearing
                      </Link>
                    </h4>
                    <p className={styles.checklistDescription}>260ha removal generates revenue + capacity expansion</p>
                  </div>
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checklistIcon} />
                  <div>
                    <h4 className={styles.checklistTitle}>Stocking Increase</h4>
                    <p className={styles.checklistDescription}>From 72 LSU to 104 LSU (+44% capacity)</p>
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
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 1</span>
                    <span className={styles.revenueAmount}>R340K - R618K</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '19%' }}></div>
                  </div>
                </div>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 2</span>
                    <span className={styles.revenueAmount}>R544K - R1.03M</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '31%' }}></div>
                  </div>
                </div>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 3</span>
                    <span className={styles.revenueAmount}>R752K - R1.46M</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 4</span>
                    <span className={styles.revenueAmount}>R943K - R1.78M</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '53%' }}></div>
                  </div>
                </div>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 5</span>
                    <span className={styles.revenueAmount}>R1.13M - R1.78M</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livestock & Crops Operations Section */}
      <section className={styles.sectionPadding}>
        <div className={styles.mainContent}>
          <div className={styles.sectionCenter}>
            <h2 className={styles.sectionHeading}>
              Livestock & Crop Operations
            </h2>
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
              <h3 className={styles.livestockCardTitle}>
                Cattle Ranging
              </h3>
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
              <h3 className={styles.livestockCardTitle}>
                Goats, Dairy & Cheese
              </h3>
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
              <h3 className={styles.livestockCardTitle}>
                Pig Farming
              </h3>
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
              <h3 className={styles.livestockCardTitle}>
                Chicken & Eggs
              </h3>
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
              <h3 className={styles.livestockCardTitle}>
                Crop Production
              </h3>
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

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaHeading}>
            Ready to Explore the Full Proposal?
          </h2>
          <p className={styles.ctaText}>
            Dive into the complete partnership details, financial projections, and transformation plan.
          </p>
          <div className={styles.heroCTA}>
            <Link href="/proposal" className={styles.ctaButton}>
              Full Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/sekelbos" className={styles.ctaButton}>
              Sekelbos Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/contact" className={styles.ctaButtonOutline}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
