import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Milk, TrendingUp, Package, DollarSign, Users, CheckCircle, Target } from 'lucide-react';
import styles from './page.module.css';

export default function GoatsPage() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.iconContainer}>
            <Milk className="w-10 h-10 text-white" />
          </div>
          <h1 className={styles.heroTitle}>
            Goats, Dairy & Cheese Production
          </h1>
          <p className={styles.heroSubtitle}>
            Diversified revenue stream combining meat goats, dairy production, and artisan cheese making
          </p>
        </div>

        {/* Three Revenue Streams Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Triple Revenue Stream Approach
          </h2>
          <div className={styles.threeColumnGrid}>
            <div className={styles.card}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconGreen}`}>
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className={styles.cardTitle}>Meat Goats</h3>
              <div className={styles.featureList}>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Boer goats for high-quality meat production</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Fast growth rates and excellent feed conversion</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Strong local demand for chevon (goat meat)</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Multiple harvests per year with managed breeding</span>
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconBlue}`}>
                <Milk className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={styles.cardTitle}>Dairy Goats</h3>
              <div className={styles.featureList}>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Saanen and Toggenburg breeds for milk production</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Year-round milk production with managed breeding</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Premium pricing for fresh goat milk (health benefits)</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Direct sales and farm shop opportunities</span>
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconYellow}`}>
                <Package className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className={styles.cardTitle}>Artisan Cheese</h3>
              <div className={styles.featureList}>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Value-added products from goat milk</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Chèvre, feta, and aged cheese varieties</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Premium pricing in restaurants and specialty stores</span>
                </p>
                <p className={styles.featureItem}>
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className={styles.featureDescription}>Farm tourism and cheese-tasting experiences</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operations & Infrastructure Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Operations & Infrastructure
          </h2>
          <div className={styles.twoColumnGrid}>
            <div className={styles.card}>
              <h3 className={styles.strategyTitle}>Start-Up Requirements</h3>
              <div className={styles.featureList}>
                <div>
                  <h4 className={styles.listTitle}>Initial Herd</h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>• 20-30 meat goats (Boer breeding stock)</li>
                    <li className={styles.listItem}>• 10-15 dairy goats (Saanen/Toggenburg does)</li>
                    <li className={styles.listItem}>• 2-3 quality bucks for breeding</li>
                  </ul>
                </div>
                <div>
                  <h4 className={styles.listTitle}>Infrastructure</h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>• Secure housing and kidding pens</li>
                    <li className={styles.listItem}>• Rotational grazing paddocks with fencing</li>
                    <li className={styles.listItem}>• Milking parlor (simple hand-milking setup initially)</li>
                    <li className={styles.listItem}>• Small-scale cheese-making facility</li>
                  </ul>
                </div>
                <div>
                  <h4 className={styles.listTitle}>Equipment</h4>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>• Milk pasteurization and storage equipment</li>
                    <li className={styles.listItem}>• Cheese-making supplies and molds</li>
                    <li className={styles.listItem}>• Cooling/aging storage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.targetCard}>
              <h3 className={styles.strategyTitle}>Growth Trajectory</h3>
              <div className={styles.featureList}>
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBarHeader}>
                    <span className={styles.progressBarLabel}>Year 1</span>
                    <span className={styles.progressBarSubLabel}>Foundation</span>
                  </div>
                  <div className={styles.progressBarTrack}>
                    <div className={styles.progressBarFill} style={{ width: '20%' }}></div>
                  </div>
                  <p className={styles.progressBarDescription}>
                    Establish herd, build infrastructure, learn cheese-making
                  </p>
                </div>
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBarHeader}>
                    <span className={styles.progressBarLabel}>Year 2</span>
                    <span className={styles.progressBarSubLabel}>Development</span>
                  </div>
                  <div className={styles.progressBarTrack}>
                    <div className={styles.progressBarFill} style={{ width: '45%' }}></div>
                  </div>
                  <p className={styles.progressBarDescription}>
                    First cheese sales, expanding dairy operation
                  </p>
                </div>
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBarHeader}>
                    <span className={styles.progressBarLabel}>Year 3-5</span>
                    <span className={styles.progressBarSubLabel}>Maturity</span>
                  </div>
                  <div className={styles.progressBarTrack}>
                    <div className={styles.progressBarFill} style={{ width: '100%' }}></div>
                  </div>
                  <p className={styles.progressBarDescription}>
                    Full production capacity, established brand, premium pricing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Strategy Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Market & Revenue Strategy
          </h2>
          <div className={styles.fourColumnGrid}>
            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconGreen}`}>
                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className={styles.strategyTitle}>Direct-to-Consumer</h3>
              <p className={styles.strategyDescription}>
                On-farm shop, farmers markets, and delivery subscriptions for fresh milk and cheese. Build loyal customer base with farm visits and tastings.
              </p>
              <div className={styles.revenueTarget}>
                <strong>Target: 60% of revenue</strong>
              </div>
            </div>

            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconBlue}`}>
                <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={styles.strategyTitle}>Restaurant & Retail</h3>
              <p className={styles.strategyDescription}>
                Supply artisan cheeses to high-end restaurants, specialty food stores, and gourmet shops. Position as premium local product.
              </p>
              <div className={styles.revenueTarget}>
                <strong>Target: 25% of revenue</strong>
              </div>
            </div>

            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconYellow}`}>
                <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className={styles.strategyTitle}>Agri-Tourism</h3>
              <p className={styles.strategyDescription}>
                Farm tours, cheese-making workshops, and farm-to-table dining experiences. Educational programs attract urban consumers.
              </p>
              <div className={styles.revenueTarget}>
                <strong>Target: 10% of revenue</strong>
              </div>
            </div>

            <div className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${styles.strategyIconPurple}`}>
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className={styles.strategyTitle}>Meat Sales</h3>
              <p className={styles.strategyDescription}>
                Sell live animals and butchered meat locally. Strong demand for halal and cultural celebrations. Managed breeding ensures consistent supply.
              </p>
              <div className={styles.revenueTarget}>
                <strong>Target: 5% of revenue</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className={styles.benefitsTitle}>Why Goats, Dairy & Cheese?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Multiple Revenue Streams</h4>
                <p className={styles.benefitDescription}>Meat, milk, and cheese provide diversified income from single livestock system</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Lower Entry Cost</h4>
                <p className={styles.benefitDescription}>Smaller initial investment compared to cattle, faster reproduction cycles</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Premium Pricing</h4>
                <p className={styles.benefitDescription}>Artisan cheese commands 3-5x higher prices than raw milk</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Growing Market</h4>
                <p className={styles.benefitDescription}>Increasing demand for goat products due to health benefits and lactose intolerance</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Land Efficiency</h4>
                <p className={styles.benefitDescription}>Goats thrive on marginal land and help control brush</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className={styles.benefitTitle}>Year-Round Income</h4>
                <p className={styles.benefitDescription}>Managed breeding enables consistent milk and cheese production</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
