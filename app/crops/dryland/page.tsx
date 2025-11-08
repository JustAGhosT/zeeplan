import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Wheat, TrendingUp, Target, DollarSign, Calendar, CheckCircle, Sprout, Sun, CloudRain } from 'lucide-react';
import { HeroSection, StrategyCard, TimelineSection, BenefitsSection, FeatureCard } from '@/components/shared';
import type { Strategy, TimelineItem, Benefit, FeatureItem } from '@/components/shared';
import styles from '../page.module.css';

export default function DrylandCropsPage() {
  const currentFeatures: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Dryland Area',
      description: 'Minimal dryland cultivation (0-1ha)'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Current Production',
      description: 'Small-scale subsistence grains'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Rainfall Challenge',
      description: '315mm annual average'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'System',
      description: 'Traditional, minimal inputs'
    }
  ];

  const targetFeatures: FeatureItem[] = [
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Expanded Area',
      description: '18ha dryland cultivation'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Drought-Adapted System',
      description: 'Sorghum, millet, cowpeas, sunflower, pumpkins, lablab'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Total Value Year 5',
      description: 'R105K-235K (cash + feed savings)'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Risk Management',
      description: 'Opportunistic planting, skip drought years'
    }
  ];

  const strategies: Strategy[] = [
    {
      icon: Wheat,
      iconColor: 'text-amber-600 dark:text-amber-400',
      iconBgColor: 'bg-amber-100 dark:bg-amber-900',
      title: 'Proven Dryland Grains',
      description: 'Sorghum (800-1,500kg/ha, R3.50-6.00/kg) as primary grain: deep roots (2-3m), heat-resistant, animal feed + human consumption. Pearl millet (600-1,200kg/ha) as backup: shorter season (75-90 days), even better drought tolerance, plant when late rains.'
    },
    {
      icon: Sprout,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Nitrogen-Fixing Legumes',
      description: 'Cowpeas (400-800kg/ha grain, 1-2t/ha hay) fix 80-120kg N/ha, benefit following crops. Lablab (3-5t/ha dry matter) for rotational grazing and nitrogen fixation (100-150kg N/ha). Both provide high-protein livestock supplement.'
    },
    {
      icon: Sun,
      iconColor: 'text-orange-600 dark:text-orange-400',
      iconBgColor: 'bg-orange-100 dark:bg-orange-900',
      title: 'Cash & Food Security Crops',
      description: 'Sunflower (600-1,200kg/ha, R6,000-9,000/ton) oilseed cash crop with deep roots. Pumpkins (10-20t/ha, R3-4/kg) for household consumption, livestock feed, and sales. Both drought-moderate, store 3-6 months.'
    }
  ];

  const drylandCrops: FeatureItem[] = [
    {
      icon: Wheat,
      iconColor: 'text-amber-600 dark:text-amber-400',
      title: 'Sorghum (8ha) - Primary Grain',
      description: 'Deep roots 2-3m, heat-resistant 35-40°C, 100-130 day season. Varieties: PAN 8816 (short-season), NS 5511 (high-yield). Yield: 800-1,500kg/ha. Uses: livestock feed (chickens, pigs, cattle), human consumption, stover (2-3t/ha) for cattle feed. Revenue: R4,600-10,650/ha.'
    },
    {
      icon: Sprout,
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Pearl Millet (2ha) - Backup Grain',
      description: 'Extreme drought tolerance, short season 75-90 days, plant later than sorghum. Variety: Babala. Yield: 600-1,200kg/ha. Higher protein (12-15% vs 10-12%). Best for severe drought years. Revenue: R3,750-9,200/ha.'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Cowpeas (4ha) - Protein + N-Fixer',
      description: 'Nitrogen fixation 80-120kg N/ha benefits next crop. Dual-purpose: grain (400-800kg/ha) + leaves/hay (1-2t/ha). Varieties: Bechuana White, Mamlaka. High-protein livestock supplement. Revenue: R9,450/ha (grain + hay).'
    },
    {
      icon: Sun,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Sunflower (2ha) - Cash Crop',
      description: 'Oilseed market R6,000-9,000/ton. Deep roots 2m, breaks cereal cycles. Bird risk 10-30% loss. Variety: PAN 7033 (drought-tolerant). Yield: 600-1,200kg/ha. Requires more water than sorghum. Revenue: R4,200-10,200/ha.'
    },
    {
      icon: Target,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Pumpkins (2ha) - Food Security',
      description: 'Stores 3-6 months, human consumption + livestock feed. Low-input, drought-moderate. Varieties: Boerpampoen (traditional), Butternut (market). Yield: 10-20t/ha. High value per hectare. Revenue: R30,000-80,000/ha.'
    },
    {
      icon: Sprout,
      iconColor: 'text-teal-600 dark:text-teal-400',
      title: 'Lablab (2ha) - Annual Forage',
      description: 'Dual-purpose: rotational grazing (60-90 days) or grain (500-1,000kg/ha). Nitrogen fixation 100-150kg N/ha. Excellent drought tolerance. Grazing value: R5,000-8,000/ha. Soil builder for crop rotation.'
    }
  ];

  const rotationSystem: FeatureItem[] = [
    {
      icon: Calendar,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Year 1 Rotation',
      description: 'Field A: Cowpeas → Field B: Sorghum → Field C: Lablab → Field D: Pumpkins. Establish baseline, test drought-adapted varieties.'
    },
    {
      icon: Calendar,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Year 2 Rotation',
      description: 'Field A: Sorghum (benefits from cowpea N) → Field B: Sunflower (break cereal) → Field C: Sorghum (benefits from lablab N) → Field D: Cowpeas.'
    },
    {
      icon: Calendar,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      title: 'Year 3 Rotation',
      description: 'Field A: Lablab (forage, rest from cereals) → Field B: Sorghum → Field C: Pumpkins → Field D: Sorghum (benefits from cowpea N).'
    },
    {
      icon: Calendar,
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Year 4 Rotation',
      description: 'Field A: Sorghum (benefits from lablab N) → Field B: Cowpeas → Field C: Sunflower (break cereal) → Field D: Lablab. Cycle repeats.'
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      icon: Calendar,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Year 1: Foundation (5ha Dryland)',
      description: 'Plant on newly cleared sekelbos (50ha cleared, select best 5ha). Sorghum 2ha, cowpeas 1.5ha, pumpkins 1ha, lablab 0.5ha. Test varieties. Establish 4-year rotation system. Value: R35K-55K.'
    },
    {
      icon: Calendar,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Year 2-3: Expansion (10-15ha Dryland)',
      description: 'Expand to 10ha Year 2, 15ha Year 3 on cleared land. Add sunflower (2ha) and millet backup. Scale up rotation system. Tractor purchase consideration Year 3. Year 3 value: R80K-135K.'
    },
    {
      icon: Calendar,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Year 4-5: Maturity (18ha Dryland)',
      description: 'Full 18ha dryland rotation. Sorghum 8ha, cowpeas 4ha, pumpkins 2ha, sunflower 2ha, lablab 2ha. Feed self-sufficiency for livestock. Seed-saving system established. Year 5 value: R105K-235K.'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Feed Production (R40K-85K/year savings)',
      description: 'Sorghum grain for chickens/pigs, cowpeas for protein supplement, stover/lablab for cattle/goats. Reduces purchased feed 40-60%.'
    },
    {
      title: 'Opportunistic Risk Management',
      description: 'Only plant when 50-80mm rainfall accumulated. Skip drought years. Small scale (3% of property) limits downside. Insurance option Year 3+.'
    },
    {
      title: 'Soil Building on Cleared Land',
      description: 'Cowpeas fix 80-120kg N/ha, lablab 100-150kg N/ha. Crop residues add organic matter. Prepares sekelbos-cleared areas for improved grazing.'
    },
    {
      title: 'Proven 315mm Crops',
      description: 'Sorghum, millet, cowpeas evolved for low-rainfall Africa. Achievable yields: sorghum 800-1,500kg/ha, millet 600-1,200kg/ha, cowpeas 400-800kg/ha.'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        <HeroSection
          icon={Wheat}
          title="Dryland Crop Production"
          subtitle="Drought-adapted grain and forage crops for 315mm rainfall zone - 18ha providing feed independence and cash income"
        />

        {/* Current State & Target Section */}
        <section className={styles.section}>
          <div className={styles.twoColumnGrid}>
            <FeatureCard 
              title="Current Dryland Operations" 
              features={currentFeatures}
            />
            <FeatureCard 
              title="Year 5 Dryland Target" 
              features={targetFeatures}
              variant="target"
            />
          </div>
        </section>

        {/* Strategy Section */}
        <StrategyCard
          title="Dryland Crop Strategy"
          strategies={strategies}
          columns={3}
        />

        {/* Dryland Crops Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Dryland Crop Portfolio (18ha)</h2>
          <div className={styles.cropContainer}>
            <div className={styles.cropIntro}>
              <div className={styles.cropIconWrapper}>
                <Wheat className={styles.cropIcon} />
              </div>
              <p className={styles.cropDescription}>
                All dryland crops selected for proven performance in 300-400mm rainfall zones. Focus on grain 
                production (sorghum, millet), nitrogen fixation (cowpeas, lablab), cash crops (sunflower), 
                and food security (pumpkins). Integrated with livestock through residue grazing and manure application.
              </p>
            </div>
            <FeatureCard 
              title="Six Dryland Crop Types" 
              features={drylandCrops}
            />
          </div>
        </section>

        {/* Rotation System Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4-Year Dryland Rotation System</h2>
          <div className={styles.seasonalContainer}>
            <div className={styles.seasonalIntro}>
              <div className={styles.seasonalIconWrapper}>
                <CloudRain className={styles.seasonalIcon} />
              </div>
              <p className={styles.seasonalDescription}>
                Systematic rotation ensures legumes (cowpeas, lablab) precede cereals (sorghum, millet) to 
                transfer nitrogen. Sunflower breaks pest/disease cycles. Pumpkins provide cash flow and food 
                security. Rotation prevents soil degradation and maintains yields.
              </p>
            </div>
            <FeatureCard 
              title="4-Year Rotation Sequence" 
              features={rotationSystem}
            />
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineSection
          title="5-Year Dryland Development Timeline"
          items={timelineItems}
        />

        {/* Key Benefits Section */}
        <BenefitsSection
          title="Why Dryland Crops?"
          benefits={benefits}
        />
      </main>

      <Footer />
    </div>
  );
}
