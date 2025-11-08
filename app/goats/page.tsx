import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Milk, TrendingUp, Package, DollarSign, Users, CheckCircle, Target } from 'lucide-react';
import { HeroSection, StrategyCard, BenefitsSection } from '@/components/shared';
import type { Strategy, Benefit } from '@/components/shared';
import styles from './page.module.css';

export default function GoatsPage() {
  const revenueStreams: Strategy[] = [
    {
      icon: Target,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Meat Goats',
      description: (
        <div className="space-y-2 text-sm">
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span>Boer goats for high-quality meat production</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span>Fast growth rates and excellent feed conversion</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span>Strong local demand for chevon (goat meat)</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <span>Multiple harvests per year with managed breeding</span>
          </p>
        </div>
      )
    },
    {
      icon: Milk,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Dairy Goats',
      description: (
        <div className="space-y-2 text-sm">
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <span>Saanen and Toggenburg breeds for milk production</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <span>Year-round milk production with managed breeding</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <span>Premium pricing for fresh goat milk (health benefits)</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <span>Direct sales and farm shop opportunities</span>
          </p>
        </div>
      )
    },
    {
      icon: Package,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Artisan Cheese',
      description: (
        <div className="space-y-2 text-sm">
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>Value-added products from goat milk</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>Chèvre, feta, and aged cheese varieties</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>Premium pricing in restaurants and specialty stores</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>Farm tourism and cheese-tasting experiences</span>
          </p>
        </div>
      )
    }
  ];

  const marketStrategies: Strategy[] = [
    {
      icon: DollarSign,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Direct-to-Consumer',
      description: 'On-farm shop, farmers markets, and delivery subscriptions for fresh milk and cheese. Build loyal customer base with farm visits and tastings.',
      footer: <strong>Target: 60% of revenue</strong>
    },
    {
      icon: Package,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Restaurant & Retail',
      description: 'Supply artisan cheeses to high-end restaurants, specialty food stores, and gourmet shops. Position as premium local product.',
      footer: <strong>Target: 25% of revenue</strong>
    },
    {
      icon: TrendingUp,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Agri-Tourism',
      description: 'Farm tours, cheese-making workshops, and farm-to-table dining experiences. Educational programs attract urban consumers.',
      footer: <strong>Target: 10% of revenue</strong>
    },
    {
      icon: Users,
      iconColor: 'text-purple-600 dark:text-purple-400',
      iconBgColor: 'bg-purple-100 dark:bg-purple-900',
      title: 'Meat Sales',
      description: 'Sell live animals and butchered meat locally. Strong demand for halal and cultural celebrations. Managed breeding ensures consistent supply.',
      footer: <strong>Target: 5% of revenue</strong>
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Multiple Revenue Streams',
      description: 'Meat, milk, and cheese provide diversified income from single livestock system'
    },
    {
      title: 'Lower Entry Cost',
      description: 'Smaller initial investment compared to cattle, faster reproduction cycles'
    },
    {
      title: 'Premium Pricing',
      description: 'Artisan cheese commands 3-5x higher prices than raw milk'
    },
    {
      title: 'Growing Market',
      description: 'Increasing demand for goat products due to health benefits and lactose intolerance'
    },
    {
      title: 'Land Efficiency',
      description: 'Goats thrive on marginal land and help control brush'
    },
    {
      title: 'Year-Round Income',
      description: 'Managed breeding enables consistent milk and cheese production'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        <HeroSection
          icon={Milk}
          title="Goats, Dairy & Cheese Production"
          subtitle="Diversified revenue stream combining meat goats, dairy production, and artisan cheese making"
        />

        {/* Three Revenue Streams Section */}
        <StrategyCard
          title="Triple Revenue Stream Approach"
          strategies={revenueStreams}
          columns={3}
        />

        {/* Operations & Infrastructure Section - keeping custom content */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Operations & Infrastructure</h2>
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
        <StrategyCard
          title="Market & Revenue Strategy"
          strategies={marketStrategies}
          columns={4}
        />

        {/* Key Benefits Section */}
        <BenefitsSection
          title="Why Goats, Dairy & Cheese?"
          benefits={benefits}
        />
      </main>

      <Footer />
    </div>
  );
}
