import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Beef, TrendingUp, Target, Calendar, DollarSign, Users, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

export default function CattlePage() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.iconContainer}>
            <Beef className="w-10 h-10 text-white" />
          </div>
          <h1 className={styles.heroTitle}>
            Cattle Ranging Operations
          </h1>
          <p className={styles.heroSubtitle}>
            Foundation of the regenerative agriculture system with planned expansion from 72 to 104 LSU
          </p>
        </div>

        {/* Current State & Target Section */}
        <section className={styles.section}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Current Operations</h2>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <CheckCircle className={`${styles.featureIcon} ${styles.featureIconGreen}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Herd Size</h4>
                    <p className={styles.featureDescription}>72 LSU (Large Stock Units)</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle className={`${styles.featureIcon} ${styles.featureIconGreen}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Grazing Area</h4>
                    <p className={styles.featureDescription}>600 hectares Bushveld farmland</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle className={`${styles.featureIcon} ${styles.featureIconGreen}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Current Revenue</h4>
                    <p className={styles.featureDescription}>R233K - R297K annually</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle className={`${styles.featureIcon} ${styles.featureIconGreen}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Production System</h4>
                    <p className={styles.featureDescription}>Traditional Bushveld cattle farming</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.targetCard}>
              <h2 className={styles.cardTitle}>Year 5 Target</h2>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <Target className={`${styles.featureIcon} ${styles.featureIconBlue}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Expanded Herd</h4>
                    <p className={styles.featureDescription}>104 LSU (+44% increase)</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <Target className={`${styles.featureIcon} ${styles.featureIconBlue}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Enhanced Grazing</h4>
                    <p className={styles.featureDescription}>260ha cleared of sekelbos, improved carrying capacity</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <Target className={`${styles.featureIcon} ${styles.featureIconBlue}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Projected Revenue</h4>
                    <p className={styles.featureDescription}>Significant contribution to R1.13M - R1.78M total</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <Target className={`${styles.featureIcon} ${styles.featureIconBlue}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Regenerative System</h4>
                    <p className={styles.featureDescription}>Holistic management and rotational grazing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy & Management Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Cattle Management Strategy
          </h2>
          <div className={styles.threeColumnGrid}>
            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconGreen}`}>
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className={styles.strategyTitle}>Capacity Expansion</h3>
              <p className={styles.strategyDescription}>
                Increase carrying capacity through sekelbos clearing (50ha/year), improving grazing quality and enabling herd growth from 72 to 104 LSU.
              </p>
            </div>

            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconBlue}`}>
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={styles.strategyTitle}>Rotational Grazing</h3>
              <p className={styles.strategyDescription}>
                Implement regenerative grazing practices with planned rest periods to improve pasture health, soil quality, and long-term productivity.
              </p>
            </div>

            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconYellow}`}>
                <DollarSign className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className={styles.strategyTitle}>Value Optimization</h3>
              <p className={styles.strategyDescription}>
                Strategic marketing, direct-to-consumer channels, and premium pricing for grass-fed, regeneratively-raised beef products.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            5-Year Development Timeline
          </h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={`${styles.timelineIconContainer} ${styles.timelineIconGreen}`}>
                  <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Year 1: Foundation</h3>
                  <p className={styles.timelineDescription}>
                    Establish baseline tracking systems, implement initial sekelbos clearing (50ha), optimize existing herd management, and develop market channels.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={`${styles.timelineIconContainer} ${styles.timelineIconBlue}`}>
                  <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Year 2-3: Growth</h3>
                  <p className={styles.timelineDescription}>
                    Continue clearing operations (100ha total), begin gradual herd expansion, implement rotational grazing, and establish premium beef brand.
                  </p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={`${styles.timelineIconContainer} ${styles.timelineIconYellow}`}>
                  <Calendar className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Year 4-5: Maturity</h3>
                  <p className={styles.timelineDescription}>
                    Complete clearing program (260ha), reach target capacity of 104 LSU, establish stable direct-to-consumer relationships, and optimize profit margins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Cattle as the Foundation?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Proven Track Record</h4>
                <p className={styles.benefitDescription}>Existing operation provides stable baseline revenue and operational knowledge</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Land Improvement</h4>
                <p className={styles.benefitDescription}>Cattle grazing aids in sekelbos management and pasture regeneration</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Scalable Growth</h4>
                <p className={styles.benefitDescription}>Clear path to 44% capacity increase through systematic land clearing</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Market Demand</h4>
                <p className={styles.benefitDescription}>Strong local and regional demand for quality grass-fed beef</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
