import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Salad, TrendingUp, Recycle, DollarSign, Calendar, CheckCircle, Target } from 'lucide-react';
import { HeroSection, FeatureCard, StrategyCard, TimelineSection, BenefitsSection } from '@/components/shared';
import type { FeatureItem, Strategy, TimelineItem, Benefit } from '@/components/shared';
import styles from './page.module.css';

export default function PigsPage() {
  const productionFeatures: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Breeding Stock',
      description: '5-10 sows with 1-2 boars (Large White, Landrace, or Duroc breeds)'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Production Cycle',
      description: '2.3 litters per sow per year, 8-12 piglets per litter'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Time to Market',
      description: '5-6 months from birth to market weight (100-120kg)'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Annual Production',
      description: '100-200+ market-ready pigs per year at full capacity'
    }
  ];

  const strategies: Strategy[] = [
    {
      icon: Target,
      iconColor: 'text-pink-600 dark:text-pink-400',
      iconBgColor: 'bg-pink-100 dark:bg-pink-900',
      title: 'Housing System',
      description: (
        <ul className={styles.list}>
          <li className={styles.listItem}>• Climate-controlled farrowing pens</li>
          <li className={styles.listItem}>• Nursery for weaned piglets</li>
          <li className={styles.listItem}>• Finishing pens with outdoor access</li>
          <li className={styles.listItem}>• Proper ventilation and waste management</li>
          <li className={styles.listItem}>• Biosecurity measures to prevent disease</li>
        </ul>
      )
    },
    {
      icon: Recycle,
      iconColor: 'text-red-600 dark:text-red-400',
      iconBgColor: 'bg-red-100 dark:bg-red-900',
      title: 'Waste Integration',
      description: (
        <ul className={styles.list}>
          <li className={styles.listItem}>• Manure composting for crop fertilizer</li>
          <li className={styles.listItem}>• Feed kitchen scraps and farm byproducts</li>
          <li className={styles.listItem}>• Utilize whey from cheese production</li>
          <li className={styles.listItem}>• Garden and crop waste recycling</li>
          <li className={styles.listItem}>• Closed-loop sustainability system</li>
        </ul>
      )
    },
    {
      icon: DollarSign,
      iconColor: 'text-orange-600 dark:text-orange-400',
      iconBgColor: 'bg-orange-100 dark:bg-orange-900',
      title: 'Cost Management',
      description: (
        <ul className={styles.list}>
          <li className={styles.listItem}>• Feed costs are 65-75% of expenses</li>
          <li className={styles.listItem}>• Supplement with farm-grown crops</li>
          <li className={styles.listItem}>• Bulk feed purchasing for savings</li>
          <li className={styles.listItem}>• Strategic breeding timing</li>
          <li className={styles.listItem}>• Healthcare and vaccination programs</li>
        </ul>
      )
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      icon: Calendar,
      iconColor: 'text-pink-600 dark:text-pink-400',
      iconBgColor: 'bg-pink-100 dark:bg-pink-900',
      title: 'Year 1: Setup & Foundation',
      description: 'Build infrastructure, acquire breeding stock (5 sows, 1 boar), establish feed supply chains, and implement biosecurity protocols. First litters born by Q3.',
      subtext: 'Expected output: 40-60 market pigs'
    },
    {
      icon: Calendar,
      iconColor: 'text-red-600 dark:text-red-400',
      iconBgColor: 'bg-red-100 dark:bg-red-900',
      title: 'Year 2: Ramp-Up',
      description: 'Increase to 8 sows, optimize breeding schedules for year-round production. Establish direct sales channels and wholesale relationships. Integrate waste streams.',
      subtext: 'Expected output: 120-150 market pigs'
    },
    {
      icon: Calendar,
      iconColor: 'text-orange-600 dark:text-orange-400',
      iconBgColor: 'bg-orange-100 dark:bg-orange-900',
      title: 'Year 3-5: Full Production',
      description: 'Reach 10 sows at full capacity with optimized breeding program. Diversify product offerings (fresh pork, bacon, sausages). Strong brand presence in local markets.',
      subtext: 'Expected output: 180-220+ market pigs per year'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Rapid ROI',
      description: 'First revenue within 9-10 months, fastest return of all livestock'
    },
    {
      title: 'High Efficiency',
      description: 'Best feed conversion ratio (3:1) of major livestock species'
    },
    {
      title: 'Waste Integration',
      description: 'Converts farm byproducts and kitchen waste into high-value protein'
    },
    {
      title: 'Strong Demand',
      description: 'Pork is widely consumed with consistent local and regional markets'
    },
    {
      title: 'Scalable Model',
      description: 'Easy to start small and expand based on market demand'
    },
    {
      title: 'Space Efficient',
      description: 'Higher production per square meter than most other livestock'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        <HeroSection
          icon={Salad}
          title="Pig Farming Operations"
          subtitle="High-efficiency protein production with waste recycling and rapid return on investment"
        />

        {/* System Overview Section */}
        <section className={styles.section}>
          <div className={styles.twoColumnGrid}>
            <FeatureCard 
              title="Production System" 
              features={productionFeatures}
            />
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
        <StrategyCard
          title="Infrastructure & Management"
          strategies={strategies}
          columns={3}
        />

        {/* Growth Timeline Section */}
        <TimelineSection
          title="Development Timeline"
          items={timelineItems}
        />

        {/* Market & Sales Section - keeping original structure for custom content */}
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
        <BenefitsSection
          title="Why Pig Farming?"
          benefits={benefits}
        />
      </main>

      <Footer />
    </div>
  );
}
