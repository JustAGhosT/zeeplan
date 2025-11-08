import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Salad, TrendingUp, Recycle, DollarSign, Calendar, CheckCircle, Target } from 'lucide-react';
import styles from './page.module.css';

export default function PigsPage() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.iconContainer}>
            <Salad className="w-10 h-10 text-white" />
          </div>
          <h1 className={styles.heroTitle}>
            Pig Farming Operations
          </h1>
          <p className={styles.heroSubtitle}>
            High-efficiency protein production with waste recycling and rapid return on investment
          </p>
        </div>

        {/* System Overview Section */}
        <section className={styles.section}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Production System</h2>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <CheckCircle className={`${styles.featureIcon} ${styles.featureIconPink}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Breeding Stock</h4>
                    <p className={styles.featureDescription}>
                      5-10 sows with 1-2 boars (Large White, Landrace, or Duroc breeds)
                    </p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle className={`${styles.featureIcon} ${styles.featureIconPink}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Production Cycle</h4>
                    <p className={styles.featureDescription}>
                      2.3 litters per sow per year, 8-12 piglets per litter
                    </p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle className={`${styles.featureIcon} ${styles.featureIconPink}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Time to Market</h4>
                    <p className={styles.featureDescription}>
                      5-6 months from birth to market weight (100-120kg)
                    </p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircle className={`${styles.featureIcon} ${styles.featureIconPink}`} />
                  <div>
                    <h4 className={styles.featureTitle}>Annual Production</h4>
                    <p className={styles.featureDescription}>
                      100-200+ market-ready pigs per year at full capacity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.targetCard}>
              <h2 className={styles.cardTitle}>Feed Efficiency</h2>
              <p className={styles.featureDescription}>
                Pigs are exceptional converters of feed to protein, making them one of the most efficient livestock options:
              </p>
              <div className={styles.featureList}>
                <div className="bg-white/50 dark:bg-gray-900/30 rounded-lg p-4">
                  <div className={`${styles.metricValue} ${styles.metricValuePink}`}>3:1</div>
                  <div className={styles.metricLabel}>Feed Conversion Ratio</div>
                  <p className={styles.progressBarDescription}>
                    3kg feed produces 1kg of pork (more efficient than cattle at 7:1)
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-gray-900/30 rounded-lg p-4">
                  <div className={`${styles.metricValue} ${styles.metricValueRed}`}>6 months</div>
                  <div className={styles.metricLabel}>Market Ready</div>
                  <p className={styles.progressBarDescription}>
                    Rapid growth enables 2 production cycles per year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Management Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Infrastructure & Management
          </h2>
          <div className={styles.threeColumnGrid}>
            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconPink}`}>
                <Target className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className={styles.strategyTitle}>Housing System</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>• Climate-controlled farrowing pens</li>
                <li className={styles.listItem}>• Nursery for weaned piglets</li>
                <li className={styles.listItem}>• Finishing pens with outdoor access</li>
                <li className={styles.listItem}>• Proper ventilation and waste management</li>
                <li className={styles.listItem}>• Biosecurity measures to prevent disease</li>
              </ul>
            </div>

            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconRed}`}>
                <Recycle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className={styles.strategyTitle}>Waste Integration</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>• Manure composting for crop fertilizer</li>
                <li className={styles.listItem}>• Feed kitchen scraps and farm byproducts</li>
                <li className={styles.listItem}>• Utilize whey from cheese production</li>
                <li className={styles.listItem}>• Garden and crop waste recycling</li>
                <li className={styles.listItem}>• Closed-loop sustainability system</li>
              </ul>
            </div>

            <div className={styles.strategyCard}>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className={styles.strategyTitle}>Cost Management</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>• Feed costs are 65-75% of expenses</li>
                <li className={styles.listItem}>• Supplement with farm-grown crops</li>
                <li className={styles.listItem}>• Bulk feed purchasing for savings</li>
                <li className={styles.listItem}>• Strategic breeding timing</li>
                <li className={styles.listItem}>• Healthcare and vaccination programs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Growth Timeline Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Development Timeline
          </h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineList}>
              <div className={styles.timelineItem}>
                <div className={`${styles.timelineIconContainer} ${styles.timelineIconPink}`}>
                  <Calendar className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Year 1: Setup & Foundation</h3>
                  <p className={styles.timelineDescription}>
                    Build infrastructure, acquire breeding stock (5 sows, 1 boar), establish feed supply chains, 
                    and implement biosecurity protocols. First litters born by Q3.
                  </p>
                  <div className={styles.progressBarDescription}>
                    Expected output: 40-60 market pigs
                  </div>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={`${styles.timelineIconContainer} ${styles.timelineIconRed}`}>
                  <Calendar className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Year 2: Ramp-Up</h3>
                  <p className={styles.timelineDescription}>
                    Increase to 8 sows, optimize breeding schedules for year-round production. Establish direct 
                    sales channels and wholesale relationships. Integrate waste streams.
                  </p>
                  <div className={styles.progressBarDescription}>
                    Expected output: 120-150 market pigs
                  </div>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>Year 3-5: Full Production</h3>
                  <p className={styles.timelineDescription}>
                    Reach 10 sows at full capacity with optimized breeding program. Diversify product offerings 
                    (fresh pork, bacon, sausages). Strong brand presence in local markets.
                  </p>
                  <div className={styles.progressBarDescription}>
                    Expected output: 180-220+ market pigs per year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market & Sales Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Market Opportunities
          </h2>
          <div className={styles.twoColumnGrid}>
            <div className={styles.featureList}>
              <div className={styles.card}>
                <h3 className={styles.strategyTitle}>Direct Sales</h3>
                <p className={styles.strategyDescription}>
                  Whole, half, or quarter pig sales direct to consumers. Premium pricing for pasture-raised, 
                  antibiotic-free pork.
                </p>
                <div className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                  Target: 40% of revenue | Highest margin
                </div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.strategyTitle}>Butchery & Retail</h3>
                <p className={styles.strategyDescription}>
                  Supply local butcheries, supermarkets, and specialty food stores with fresh and processed pork products.
                </p>
                <div className="text-sm font-semibold text-red-600 dark:text-red-400">
                  Target: 30% of revenue | Steady volume
                </div>
              </div>
            </div>

            <div className={styles.featureList}>
              <div className={styles.card}>
                <h3 className={styles.strategyTitle}>Restaurants & Chefs</h3>
                <p className={styles.strategyDescription}>
                  Supply high-quality pork cuts to restaurants emphasizing locally-sourced ingredients. 
                  Build relationships with chefs.
                </p>
                <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  Target: 20% of revenue | Premium pricing
                </div>
              </div>

              <div className={styles.card}>
                <h3 className={styles.strategyTitle}>Processed Products</h3>
                <p className={styles.strategyDescription}>
                  Value-added products: bacon, sausages, ham, biltong. Retail at farmers markets and farm shop.
                </p>
                <div className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                  Target: 10% of revenue | Future growth area
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Pig Farming?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Rapid ROI</h4>
                <p className={styles.benefitDescription}>First revenue within 9-10 months, fastest return of all livestock</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>High Efficiency</h4>
                <p className={styles.benefitDescription}>Best feed conversion ratio (3:1) of major livestock species</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Waste Integration</h4>
                <p className={styles.benefitDescription}>Converts farm byproducts and kitchen waste into high-value protein</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Strong Demand</h4>
                <p className={styles.benefitDescription}>Pork is widely consumed with consistent local and regional markets</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Scalable Model</h4>
                <p className={styles.benefitDescription}>Easy to start small and expand based on market demand</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Space Efficient</h4>
                <p className={styles.benefitDescription}>Higher production per square meter than most other livestock</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
