import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Egg, TrendingUp, Target, DollarSign, Calendar, CheckCircle, Package } from 'lucide-react';
import { HeroSection, StrategyCard, TimelineSection, BenefitsSection } from '@/components/shared';
import type { Strategy, TimelineItem, Benefit } from '@/components/shared';
import styles from './page.module.css';

export default function ChickenPage() {
  const productionStreams: Strategy[] = [
    {
      icon: Egg,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Layer Operation',
      description: (
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
      )
    },
    {
      icon: Package,
      iconColor: 'text-orange-600 dark:text-orange-400',
      iconBgColor: 'bg-orange-100 dark:bg-orange-900',
      title: 'Broiler/Meat Operation',
      description: (
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
      )
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      icon: Calendar,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Year 1: Launch',
      description: 'Build coops and infrastructure, acquire 100-200 layers and start first broiler batch. Establish egg collection system, develop customer base through farmers markets and farm shop.',
      subtext: 'Target: 200 layers, 300 broilers | Revenue: R80K-150K'
    },
    {
      icon: Calendar,
      iconColor: 'text-orange-600 dark:text-orange-400',
      iconBgColor: 'bg-orange-100 dark:bg-orange-900',
      title: 'Year 2-3: Expansion',
      description: 'Scale to 300-500 layers, increase broiler batches to 3-4 per year. Add mobile coops for rotational grazing. Develop wholesale accounts (restaurants, stores). Brand establishment.',
      subtext: 'Target: 400 layers, 800 broilers | Revenue: R250K-450K'
    },
    {
      icon: Calendar,
      iconColor: 'text-red-600 dark:text-red-400',
      iconBgColor: 'bg-red-100 dark:bg-red-900',
      title: 'Year 4-5: Maturity',
      description: 'Optimize at 500+ layers with possibility to scale to 1,000. Year-round broiler production (5-6 batches). Value-added products (smoked chicken, prepared meals). Agri-tourism integration.',
      subtext: 'Target: 500-1,000 layers, 1,200 broilers | Revenue: R420K-930K+'
    }
  ];

  const marketStrategies: Strategy[] = [
    {
      icon: DollarSign,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Farm Shop',
      description: 'Daily fresh egg sales, weekly fresh chicken. Premium pricing for farm-direct convenience.'
    },
    {
      icon: Package,
      iconColor: 'text-orange-600 dark:text-orange-400',
      iconBgColor: 'bg-orange-100 dark:bg-orange-900',
      title: 'Subscription Box',
      description: 'Weekly egg delivery subscriptions to local homes. Predictable revenue and customer loyalty.'
    },
    {
      icon: Target,
      iconColor: 'text-red-600 dark:text-red-400',
      iconBgColor: 'bg-red-100 dark:bg-red-900',
      title: 'Restaurants',
      description: 'Supply fresh eggs and whole chickens to quality restaurants. Regular orders, consistent volume.'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Retail Partners',
      description: 'Local butcheries and specialty stores. Branded packaging emphasizes free-range, local quality.'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Low Entry Cost',
      description: 'Lowest capital investment of all livestock operations'
    },
    {
      title: 'Quick Returns',
      description: 'Eggs start at 5-6 months, broilers ready in 8-12 weeks'
    },
    {
      title: 'Daily Cash Flow',
      description: 'Fresh eggs provide reliable daily income stream'
    },
    {
      title: 'High Demand',
      description: 'Premium for free-range eggs and pasture-raised chicken'
    },
    {
      title: 'Scalable',
      description: 'Easy to start small and expand incrementally based on demand'
    },
    {
      title: 'Regenerative Benefits',
      description: 'Chickens improve soil, control pests, and integrate with other operations'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        <HeroSection
          icon={Egg}
          title="Chicken & Egg Production"
          subtitle="Dual-purpose operation producing premium free-range eggs and quality chicken meat"
        />

        {/* Dual Stream Section */}
        <StrategyCard
          title="Dual Revenue Approach"
          strategies={productionStreams}
          columns={2}
        />

        {/* Timeline Section */}
        <TimelineSection
          title="Development Timeline"
          items={timelineItems}
        />

        {/* Market Strategy Section */}
        <StrategyCard
          title="Market Strategy"
          strategies={marketStrategies}
          columns={4}
        />

        {/* Key Benefits Section */}
        <BenefitsSection
          title="Why Chicken & Egg Production?"
          benefits={benefits}
        />
      </main>

      <Footer />
    </div>
  );
}
