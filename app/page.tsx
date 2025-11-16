import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target, CheckCircle, Beef, Milk, Salad, Egg, Wheat } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import styles from './page.module.css';
import commonStyles from './common.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className="block">Transform Your Farm</span>
              <span className={styles.heroTitleAccent}>Zero Cash, Maximum Returns</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Performance-based partnership that increases your farm revenue by 229-384% while you maintain 70% family
              control
            </p>
            <div className={styles.heroCTA}>
              <Link href="/proposal" className={commonStyles.primaryButton}>
                View Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/sekelbos" className={commonStyles.secondaryButton}>
                Sekelbos Clearance Plan
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
              <div className={styles.metricValue}>70%</div>
              <div className={styles.metricLabel}>Family Control</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>R0</div>
              <div className={styles.metricLabel}>Cash Required</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>+229%</div>
              <div className={styles.metricLabel}>Revenue Growth (Eben & Hein)</div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricValue}>R1.8M</div>
              <div className={styles.metricLabel}>Year 5 Target</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekelbos Clearance Featured Section */}
      <section
        className={styles.sectionPadding}
        style={{ background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' }}
      >
        <div className={styles.mainContent}>
          <div className={styles.transformationGrid}>
            <div>
              <h2 className={styles.sectionHeading} style={{ color: '#065f46' }}>
                Sekelbos Clearance: Immediate Value Generator
              </h2>
              <p className={styles.sectionSubheading} style={{ color: '#047857' }}>
                Turn your sekelbos problem into profit while expanding grazing capacity
              </p>

              <div className={styles.checklistContainer}>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checklistIcon} style={{ color: '#059669' }} />
                  <div>
                    <h4 className={styles.checklistTitle} style={{ color: '#065f46' }}>
                    360-420ha heavily affected
                    </h4>
                    <p className={styles.checklistDescription} style={{ color: '#047857' }}>
                    60-70% of your property has heavy sekelbos encroachment reducing grazing capacity
                    </p>
                  </div>
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checklistIcon} style={{ color: '#059669' }} />
                  <div>
                    <h4 className={styles.checklistTitle} style={{ color: '#065f46' }}>
                      R1.08M-3M Wood Revenue
                    </h4>
                    <p className={styles.checklistDescription} style={{ color: '#047857' }}>
                      Generate R150K-250K in Year 1 from firewood, braai wood, and poles
                    </p>
                  </div>
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checklistIcon} style={{ color: '#059669' }} />
                  <div>
                    <h4 className={styles.checklistTitle} style={{ color: '#065f46' }}>
                      Biological Clearance System
                    </h4>
                    <p className={styles.checklistDescription} style={{ color: '#047857' }}>
                      Goats, pigs, and chickens do the work - sustainable and cost-effective
                    </p>
                  </div>
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checklistIcon} style={{ color: '#059669' }} />
                  <div>
                    <h4 className={styles.checklistTitle} style={{ color: '#065f46' }}>
                    +50% Capacity Increase
                    </h4>
                    <p className={styles.checklistDescription} style={{ color: '#047857' }}>
                    Expand from 72 LSU to ±110 LSU as land is cleared
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link href="/sekelbos" className={commonStyles.primaryButton}>
                  View Complete Sekelbos Plan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className={styles.revenueBox} style={{ background: '#ffffff', border: '2px solid #059669' }}>
              <h3 className={styles.revenueBoxTitle} style={{ color: '#065f46' }}>
                5-Year Sekelbos Revenue
              </h3>
              <div className={styles.revenueList}>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 1 (50ha)</span>
                    <span className={styles.revenueAmount}>R150K-250K</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '14%', background: '#059669' }}></div>
                  </div>
                </div>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 2 (100ha)</span>
                    <span className={styles.revenueAmount}>R300K-500K</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '28%', background: '#059669' }}></div>
                  </div>
                </div>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 3 (120ha)</span>
                    <span className={styles.revenueAmount}>R360K-600K</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '33%', background: '#059669' }}></div>
                  </div>
                </div>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 4 (165ha)</span>
                    <span className={styles.revenueAmount}>R495K-825K</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '46%', background: '#059669' }}></div>
                  </div>
                </div>
                <div className={styles.revenueItem}>
                  <div className={styles.revenueItemHeader}>
                    <span className={styles.revenueYear}>Year 5 (165ha)</span>
                    <span className={styles.revenueAmount}>R495K-825K</span>
                  </div>
                  <div className={styles.revenueBar}>
                    <div className={styles.revenueBarFill} style={{ width: '100%', background: '#059669' }}></div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#d1fae5', borderRadius: '0.5rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#065f46' }}>
                  Total 5-Year Revenue: R1.8M - R3M
                </p>
                <p style={{ fontSize: '0.75rem', color: '#047857', marginTop: '0.25rem' }}>
                  Plus avoided cost of R1.8M-6M in conventional clearance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                Eben and Willie retain 70% ownership (35% each). Partnership equity starts at 0% and grows only when
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
                No money required from Eben or Willie. Hans brings R48K-98K in livestock and pure sweat equity. You risk
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

      {/* Partnership Structure Section */}
      <section className={styles.lightSection}>
        <div className={styles.mainContent}>
          <div className={styles.sectionCenter}>
            <h2 className={styles.sectionHeading}>Partnership Structure</h2>
            <p className={styles.sectionSubheading}>Fair and balanced equity distribution</p>
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
                    <p className={styles.checklistDescription}>
                      Add goats, pigs, chickens, crops for 8+ revenue streams
                    </p>
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

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaHeading}>Ready to Explore the Full Proposal?</h2>
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
