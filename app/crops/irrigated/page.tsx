import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Droplets, TrendingUp, Target, DollarSign, Calendar, CheckCircle, Leaf, Sprout } from 'lucide-react';
import { HeroSection, StrategyCard, TimelineSection, BenefitsSection, FeatureCard } from '@/components/shared';
import type { Strategy, TimelineItem, Benefit, FeatureItem } from '@/components/shared';
import styles from '../page.module.css';

export default function IrrigatedCropsPage() {
  const currentFeatures: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Irrigated Area',
      description: 'No current irrigation (0ha)'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Water Source',
      description: 'Borehole available, underutilized'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Current Production',
      description: 'No intensive vegetable production'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Market Access',
      description: 'Local markets, farm shop potential'
    }
  ];

  const targetFeatures: FeatureItem[] = [
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Expanded Area',
      description: '2ha irrigated (lucerne 2ha + vegetables 1ha)'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'High-Value Production',
      description: 'Lucerne, leafy greens, root vegetables, tomatoes'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Year 5 Value',
      description: 'R45K-60K (lucerne R30K + vegetables R15K-30K)'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Water Management',
      description: 'Borehole + rainwater harvesting + drip irrigation'
    }
  ];

  const strategies: Strategy[] = [
    {
      icon: Droplets,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Lucerne Perennial Pasture',
      description: 'High-protein feed (18-22%) on 2ha, 3-5 year stand. Yield: 4-8t/ha/year (3-4 cuts). Deep roots (3-5m) once established. Nitrogen fixation 150-250kg N/ha/year. Requires good establishment irrigation (100-150mm first 3 months), then drought-tolerant. Hay or rotational grazing. Value: R10,000-15,000/ha/year feed savings.'
    },
    {
      icon: Leaf,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'High-Value Vegetables',
      description: 'Intensive production on 1ha: leafy greens (spinach, kale, chard), root vegetables (carrots, beetroot, turnips), tomatoes, onions. Borehole + drip irrigation required. Farm shop + local market sales. Year-round production possible. Requires intensive management but high returns: R15,000-30,000/ha/year.'
    },
    {
      icon: Sprout,
      iconColor: 'text-purple-600 dark:text-purple-400',
      iconBgColor: 'bg-purple-100 dark:bg-purple-900',
      title: 'Seedling Nursery',
      description: 'Protected nursery for vegetable seedlings, herb starts, and annual crop seeds. Rainwater harvesting for backup. Sales to local farmers + own use. Low water requirement. Extends growing season. Additional revenue: R5,000-10,000/year. Critical for spring planting preparation.'
    }
  ];

  const irrigatedCrops: FeatureItem[] = [
    {
      icon: Droplets,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Lucerne/Alfalfa (2ha) - Premium Feed',
      description: 'Perennial 3-5 year stand, high-protein (18-22%), deep roots 3-5m. Establishment: March-April, needs 100-150mm irrigation first 3 months. Maintenance: cutting every 30-40 days at 10% flowering. Fertilizer: 2:3:2 at 200-300kg/ha planting. Yield: 6t/ha/year hay or equivalent grazing. Value: R15,000/ha/year (R2,500/ton × 6t).'
    },
    {
      icon: Leaf,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Leafy Greens (0.3ha) - Year-Round',
      description: 'Spinach, kale, Swiss chard, lettuce. Sequential planting every 2-3 weeks for continuous harvest. Drip irrigation + shade cloth in summer. Varieties: local adapted + hybrid. Yield: 15-25t/ha/year. Market: farm shop R25-40/kg, wholesale R15-25/kg. Revenue: R10,000-18,000/year.'
    },
    {
      icon: Target,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Root Vegetables (0.2ha) - Storage Crops',
      description: 'Carrots, beetroot, turnips, radishes. Good storage (2-4 months). Plant: autumn-winter (cooler temps). Drip irrigation. Varieties: local + hybrid. Yield: 20-40t/ha. Market: farm shop R8-15/kg. Revenue: R8,000-15,000/year. Extends food availability beyond harvest.'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-red-600 dark:text-red-400',
      title: 'Tomatoes (0.3ha) - High-Value Cash',
      description: 'Open-pollinated varieties (seed-saving), staking system. Plant: spring-summer, drip irrigation essential. Varieties: Roma, cherry, local. Yield: 30-60t/ha. Market: farm shop R15-30/kg, processing R8-12/kg. Revenue: R15,000-35,000/year. Labor-intensive but high returns.'
    },
    {
      icon: Sprout,
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Onions & Herbs (0.2ha) - Long Storage',
      description: 'Onions for storage (4-6 months), herbs (basil, coriander, parsley) for fresh sales. Plant onions: autumn. Drip irrigation. Varieties: local adapted. Yield: onions 25-40t/ha, herbs continuous. Revenue: R8,000-15,000/year. Low water vs other vegetables.'
    },
    {
      icon: Leaf,
      iconColor: 'text-teal-600 dark:text-teal-400',
      title: 'Seedling Nursery (0.1ha) - Infrastructure',
      description: 'Protected structure (shade net, greenhouse optional). Propagate vegetables, herbs, annual crop seeds. Rainwater + borehole backup. Sales to local farmers + own use. Start seeds 6-8 weeks before planting. Revenue: R5,000-10,000/year. Critical for extending season.'
    }
  ];

  const waterManagement: FeatureItem[] = [
    {
      icon: Droplets,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Borehole System',
      description: 'Primary water source. Test yield: ~2,000-5,000L/hour typical. Solar pump option (reduce electricity costs). Storage tank: 5,000-10,000L for daily use. Drip irrigation main lines to all zones.'
    },
    {
      icon: Target,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Drip Irrigation',
      description: 'Water-efficient (40-70% vs flood irrigation). Vegetables: 2-3mm/day summer, 1-2mm/day winter. Lucerne: 4-6mm/day growing season. Fertigation capability (liquid fertilizer through system). Filters essential.'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Rainwater Harvesting',
      description: 'Nursery roof catchment: 50m² × 315mm = 15,750L/year. Storage tanks: 2 × 5,000L. Backup for seedlings during dry spells. Reduces borehole pumping costs. Simple gravity-fed system.'
    },
    {
      icon: Sprout,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      title: 'Seasonal Scheduling',
      description: 'High water use: October-March (vegetables, lucerne establishment). Low water use: April-September (leafy greens, lucerne maintenance). Match crops to water availability. Prioritize lucerne establishment Year 2-3.'
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      icon: Calendar,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Year 1: Infrastructure Setup',
      description: 'Install drip irrigation system (main lines + filters). Build seedling nursery with rainwater catchment. Start small vegetable trials (0.3ha). Test borehole yield and water quality. No lucerne yet (focus Year 2). Value: R5K-10K.'
    },
    {
      icon: Calendar,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Year 2-3: Lucerne Establishment',
      description: 'Plant lucerne 1ha Year 2, additional 1ha Year 3 (March-April planting). Requires 100-150mm irrigation first 3 months establishment. Expand vegetables to 0.7ha. First lucerne cuts Year 3. Year 3 value: R25K-40K.'
    },
    {
      icon: Calendar,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Year 4-5: Full Production',
      description: 'Lucerne 2ha mature stands (6t/ha/year hay). Vegetables 1ha year-round rotation. Seedling nursery supplying own farm + local sales. Solar pump consideration. Premium livestock feed self-sufficiency. Year 5 value: R45K-60K.'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Premium Livestock Feed',
      description: 'Lucerne provides 18-22% protein high-quality feed for dairy goats and cattle. 12t/year (2ha × 6t/ha) worth R30,000 vs purchased hay. Critical for dairy goat milk production.'
    },
    {
      title: 'Farm Shop Vegetable Sales',
      description: 'Fresh vegetables year-round for direct farm shop sales. Premium pricing R15-40/kg vs wholesale. Builds customer loyalty with consistent weekly availability.'
    },
    {
      title: 'Water-Efficient System',
      description: 'Drip irrigation uses 40-70% less water than flood. Small scale (2ha) manageable with borehole. Rainwater backup for nursery. Strategic high-value crops justify water investment.'
    },
    {
      title: 'Extended Growing Season',
      description: 'Seedling nursery allows 6-8 week head start. Winter vegetable production when dryland dormant. Lucerne perennial (year-round growth). Consistent household food + market supply.'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        <HeroSection
          icon={Droplets}
          title="Irrigated Crop Production"
          subtitle="High-value vegetables and premium livestock feed - 2ha borehole irrigation for feed independence and market sales"
        />

        {/* Current State & Target Section */}
        <section className={styles.section}>
          <div className={styles.twoColumnGrid}>
            <FeatureCard 
              title="Current Irrigated Operations" 
              features={currentFeatures}
            />
            <FeatureCard 
              title="Year 5 Irrigated Target" 
              features={targetFeatures}
              variant="target"
            />
          </div>
        </section>

        {/* Strategy Section */}
        <StrategyCard
          title="Irrigated Crop Strategy"
          strategies={strategies}
          columns={3}
        />

        {/* Irrigated Crops Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Irrigated Crop Portfolio (2ha)</h2>
          <div className={styles.cropContainer}>
            <div className={styles.cropIntro}>
              <div className={styles.cropIconWrapper}>
                <Droplets className={styles.cropIcon} />
              </div>
              <p className={styles.cropDescription}>
                Small-scale strategic irrigation (2ha = 10% of total cropping area) focused on high-value returns. 
                Lucerne provides premium livestock feed worth R30,000/year. Vegetables generate R15,000-30,000/year 
                farm shop sales. Water-efficient drip irrigation with borehole + rainwater backup.
              </p>
            </div>
            <FeatureCard 
              title="Six Irrigated Crop Types" 
              features={irrigatedCrops}
            />
          </div>
        </section>

        {/* Water Management Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Water Management System</h2>
          <div className={styles.seasonalContainer}>
            <div className={styles.seasonalIntro}>
              <div className={styles.seasonalIconWrapper}>
                <Droplets className={styles.seasonalIcon} />
              </div>
              <p className={styles.seasonalDescription}>
                Efficient water use is critical in 315mm rainfall zone. Borehole provides primary supply. 
                Drip irrigation reduces water use 40-70% vs flood. Rainwater harvesting backs up seedling 
                nursery. Strategic scheduling matches crops to seasonal water availability.
              </p>
            </div>
            <FeatureCard 
              title="Water Infrastructure & Scheduling" 
              features={waterManagement}
            />
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineSection
          title="5-Year Irrigated Development Timeline"
          items={timelineItems}
        />

        {/* Key Benefits Section */}
        <BenefitsSection
          title="Why Strategic Irrigation?"
          benefits={benefits}
        />
      </main>

      <Footer />
    </div>
  );
}
