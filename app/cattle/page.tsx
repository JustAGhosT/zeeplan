import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Beef, TrendingUp, Target, Calendar, DollarSign, CheckCircle } from 'lucide-react';
import { HeroSection, FeatureCard, StrategyCard, TimelineSection, BenefitsSection } from '@/components/shared';
import type { FeatureItem, Strategy, TimelineItem, Benefit } from '@/components/shared';
import styles from './page.module.css';

export default function CattlePage() {
  const currentFeatures: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Herd Size',
      description: '72 LSU (Large Stock Units)'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Grazing Area',
      description: '600 hectares Bushveld farmland'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Current Revenue',
      description: 'R233K - R297K annually'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Production System',
      description: 'Traditional Bushveld cattle farming'
    }
  ];

  const targetFeatures: FeatureItem[] = [
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Expanded Herd',
      description: '104 LSU (+44% increase)'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Enhanced Grazing',
      description: '260ha cleared of sekelbos, improved carrying capacity'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Projected Revenue',
      description: 'Significant contribution to R1.13M - R1.78M total'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Regenerative System',
      description: 'Holistic management and rotational grazing'
    }
  ];

  const strategies: Strategy[] = [
    {
      icon: TrendingUp,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Capacity Expansion',
      description: 'Increase carrying capacity through sekelbos clearing (50ha/year), improving grazing quality and enabling herd growth from 72 to 104 LSU.'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Rotational Grazing',
      description: 'Implement regenerative grazing practices with planned rest periods to improve pasture health, soil quality, and long-term productivity.'
    },
    {
      icon: DollarSign,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Value Optimization',
      description: 'Strategic marketing, direct-to-consumer channels, and premium pricing for grass-fed, regeneratively-raised beef products.'
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      icon: Calendar,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Year 1: Foundation',
      description: 'Establish baseline tracking systems, implement initial sekelbos clearing (50ha), optimize existing herd management, and develop market channels.'
    },
    {
      icon: Calendar,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Year 2-3: Growth',
      description: 'Continue clearing operations (100ha total), begin gradual herd expansion, implement rotational grazing, and establish premium beef brand.'
    },
    {
      icon: Calendar,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Year 4-5: Maturity',
      description: 'Complete clearing program (260ha), reach target capacity of 104 LSU, establish stable direct-to-consumer relationships, and optimize profit margins.'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Proven Track Record',
      description: 'Existing operation provides stable baseline revenue and operational knowledge'
    },
    {
      title: 'Land Improvement',
      description: 'Cattle grazing aids in sekelbos management and pasture regeneration'
    },
    {
      title: 'Scalable Growth',
      description: 'Clear path to 44% capacity increase through systematic land clearing'
    },
    {
      title: 'Market Demand',
      description: 'Strong local and regional demand for quality grass-fed beef'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        <HeroSection
          icon={Beef}
          title="Cattle Ranging Operations"
          subtitle="Foundation of the regenerative agriculture system with planned expansion from 72 to 104 LSU"
        />

        {/* Current State & Target Section */}
        <section className={styles.section}>
          <div className={styles.twoColumnGrid}>
            <FeatureCard 
              title="Current Operations" 
              features={currentFeatures}
            />
            <FeatureCard 
              title="Year 5 Target" 
              features={targetFeatures}
              variant="target"
            />
          </div>
        </section>

        {/* Strategy & Management Section */}
        <StrategyCard
          title="Cattle Management Strategy"
          strategies={strategies}
          columns={3}
        />

        {/* Timeline Section */}
        <TimelineSection
          title="5-Year Development Timeline"
          items={timelineItems}
        />

        {/* Key Benefits Section */}
        <BenefitsSection
          title="Why Cattle as the Foundation?"
          benefits={benefits}
        />
      </main>

      <Footer />
    </div>
  );
}
