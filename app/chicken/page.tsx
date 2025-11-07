import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Egg, TrendingUp, Target, DollarSign, Calendar, CheckCircle, Package } from 'lucide-react';

import styles from './page.module.css';

export default function ChickenPage() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.iconContainer}>
            <Egg className="w-10 h-10 text-white" />
          </div>
          <h1 className={styles.heroTitle}>
            Chicken & Egg Production
          </h1>
          <p className={styles.heroSubtitle}>
            Dual-purpose operation producing premium free-range eggs and quality chicken meat
          </p>
        </div>

        {/* Dual Stream Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Dual Revenue Approach
          </h2>
          <div className={styles.twoColumnGrid}>
            <div className={styles.card}>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <Egg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Layer Operation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Flock Size</h4>
                    <p className="text-gray-600 dark:text-gray-400">200-500 laying hens (expandable to 1,000+)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Production Rate</h4>
                    <p className="text-gray-600 dark:text-gray-400">250-300 eggs per hen per year</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Breeds</h4>
                    <p className="text-gray-600 dark:text-gray-400">Rhode Island Red, Black Australorp, Leghorn</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">System</h4>
                    <p className="text-gray-600 dark:text-gray-400">Free-range with mobile coops, pasture rotation</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Annual Output</h4>
                    <p className="text-gray-600 dark:text-gray-400">50,000-150,000 eggs per year at full capacity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Broiler/Meat Operation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Batch Size</h4>
                    <p className="text-gray-600 dark:text-gray-400">100-300 birds per batch, multiple batches/year</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Time to Market</h4>
                    <p className="text-gray-600 dark:text-gray-400">8-12 weeks for broilers, 12-16 weeks for heritage</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Breeds</h4>
                    <p className="text-gray-600 dark:text-gray-400">Cornish Cross, Freedom Rangers, Boschveld</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">System</h4>
                    <p className="text-gray-600 dark:text-gray-400">Pasture-raised with day-range mobile pens</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Annual Output</h4>
                    <p className="text-gray-600 dark:text-gray-400">500-1,500 birds per year across batches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Economics Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Production Economics
          </h2>
          <div className={styles.threeColumnGrid}>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Egg Economics</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-50">Premium Free-Range Eggs</div>
                  <div className="text-gray-600 dark:text-gray-400">R40-60 per dozen</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-50">Feed Cost per Dozen</div>
                  <div className="text-gray-600 dark:text-gray-400">R15-20</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-50">Gross Margin</div>
                  <div className="text-green-600 dark:text-green-400 font-bold">R20-40 per dozen (50-67%)</div>
                </div>
                <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
                  <div className="font-semibold text-gray-900 dark:text-gray-50">500 Hens Annual Revenue</div>
                  <div className="text-gray-600 dark:text-gray-400">R420K-750K potential</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Meat Economics</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-50">Pasture-Raised Chicken</div>
                  <div className="text-gray-600 dark:text-gray-400">R120-180 per bird</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-50">Feed + Chick Cost</div>
                  <div className="text-gray-600 dark:text-gray-400">R60-80 per bird</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-50">Gross Margin</div>
                  <div className="text-green-600 dark:text-green-400 font-bold">R40-100 per bird (33-56%)</div>
                </div>
                <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
                  <div className="font-semibold text-gray-900 dark:text-gray-50">1,000 Birds Annual Revenue</div>
                  <div className="text-gray-600 dark:text-gray-400">R120K-180K potential</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">Combined Benefits</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Diversified income reduces risk</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Year-round cash flow from eggs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Seasonal broiler production flexibility</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Shared infrastructure reduces costs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-400">Cross-marketing opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Development Timeline
          </h2>
          <div className={styles.card}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 1: Launch</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Build coops and infrastructure, acquire 100-200 layers and start first broiler batch. 
                    Establish egg collection system, develop customer base through farmers markets and farm shop.
                  </p>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                    Target: 200 layers, 300 broilers | Revenue: R80K-150K
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 2-3: Expansion</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Scale to 300-500 layers, increase broiler batches to 3-4 per year. Add mobile coops for 
                    rotational grazing. Develop wholesale accounts (restaurants, stores). Brand establishment.
                  </p>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                    Target: 400 layers, 800 broilers | Revenue: R250K-450K
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 4-5: Maturity</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Optimize at 500+ layers with possibility to scale to 1,000. Year-round broiler production 
                    (5-6 batches). Value-added products (smoked chicken, prepared meals). Agri-tourism integration.
                  </p>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                    Target: 500-1,000 layers, 1,200 broilers | Revenue: R420K-930K+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Strategy Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Market Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={styles.strategyCard}>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Farm Shop</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Daily fresh egg sales, weekly fresh chicken. Premium pricing for farm-direct convenience.
              </p>
            </div>

            <div className={styles.strategyCard}>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Subscription Box</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Weekly egg delivery subscriptions to local homes. Predictable revenue and customer loyalty.
              </p>
            </div>

            <div className={styles.strategyCard}>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Restaurants</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Supply fresh eggs and whole chickens to quality restaurants. Regular orders, consistent volume.
              </p>
            </div>

            <div className={styles.strategyCard}>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Retail Partners</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Local butcheries and specialty stores. Branded packaging emphasizes free-range, local quality.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2 className="text-3xl font-bold mb-6 text-center">Why Chicken & Egg Production?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Low Entry Cost</h4>
                <p className="text-white/90 text-sm">Lowest capital investment of all livestock operations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Quick Returns</h4>
                <p className="text-white/90 text-sm">Eggs start at 5-6 months, broilers ready in 8-12 weeks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Daily Cash Flow</h4>
                <p className="text-white/90 text-sm">Fresh eggs provide reliable daily income stream</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">High Demand</h4>
                <p className="text-white/90 text-sm">Premium for free-range eggs and pasture-raised chicken</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Scalable</h4>
                <p className="text-white/90 text-sm">Easy to start small and expand incrementally based on demand</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Regenerative Benefits</h4>
                <p className="text-white/90 text-sm">Chickens improve soil, control pests, and integrate with other operations</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
