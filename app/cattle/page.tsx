import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Beef, TrendingUp, Target, Calendar, DollarSign, CheckCircle, Dna, Grid3x3, Droplets, Fence } from 'lucide-react';
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
      icon: Dna,
      iconColor: 'text-red-600 dark:text-red-400',
      iconBgColor: 'bg-red-100 dark:bg-red-900',
      title: 'Composite Genetics',
      description: 'Maintain hybrid vigor through composite herd (Brahman/Santa Gertrudis/Bonsmara/Nguni) delivering 15-25% performance advantage in fertility, growth, and disease resistance.'
    },
    {
      icon: Grid3x3,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Rotational Grazing',
      description: 'Implement 40-paddock system (15ha each) with high-density mob grazing: 3-5 days per paddock, 40-60 day rest periods for optimal pasture regeneration.'
    },
    {
      icon: DollarSign,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Premium Weaners',
      description: 'Santa Gertrudis bull program produces 200-250kg weaners commanding R8,000-12,000 premium (vs R6,000-9,000 indigenous), targeting autumn sales for peak demand.'
    }
  ];

  const geneticsFeatures: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-red-600 dark:text-red-400',
      title: 'Brahman 25-35%',
      description: 'Zebu hardiness: large frame, heat/disease tolerance, 450-600kg mature cows, hybrid vigor boost'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-red-600 dark:text-red-400',
      title: 'Santa Gertrudis 15-25%',
      description: '5/8 Shorthorn × 3/8 Brahman: excellent muscling, marbling, carcass quality, premium weaner prices'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-red-600 dark:text-red-400',
      title: 'Bonsmara 10-20%',
      description: 'SA composite: high fertility, calm temperament, adapted to 200-600mm rainfall, optimal for Zeerust'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-red-600 dark:text-red-400',
      title: 'Nguni 30-40%',
      description: 'Indigenous genetics: tick/heat resistance, 85-95% calving rate, easy calving, maternal efficiency'
    }
  ];

  const grazingFeatures: FeatureItem[] = [
    {
      icon: Grid3x3,
      iconColor: 'text-green-600 dark:text-green-400',
      title: '40 Paddocks × 15ha',
      description: 'Systematic rotation across 600ha with electric fencing (permanent or temporary)'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'High-Density Stocking',
      description: '80-120 cows per 15ha for 3-5 days: even grazing, trampling, manure distribution'
    },
    {
      icon: Calendar,
      iconColor: 'text-green-600 dark:text-green-400',
      title: '40-60 Day Rest',
      description: 'Long recovery periods allow full grass regrowth, soil regeneration, weed control'
    },
    {
      icon: Droplets,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Water Infrastructure',
      description: 'Portable troughs (Year 1-2) transitioning to piped system (Year 3+) for every paddock'
    }
  ];

  const hybridVigorBenefits: Benefit[] = [
    {
      title: 'Fertility Boost +10-15%',
      description: '75-85% calving rate (composite) vs 65-75% (purebred in harsh conditions), 13-15 month calving intervals'
    },
    {
      title: 'Growth Performance +8-12%',
      description: '220kg weaners at 7-9 months with improved survival rates and disease resistance'
    },
    {
      title: 'Drought Adaptation',
      description: 'Multiple genetic pathways: Brahman fat storage, Afrikaner evolution for 200-400mm rainfall, indigenous efficiency'
    },
    {
      title: 'Heat Tolerance',
      description: 'Productive in 35-40°C with lower water needs (8-12L/day), no summer slump, minimal shade requirements'
    },
    {
      title: 'Disease Resistance',
      description: 'Genetic tick/parasite resistance saves R15K-30K annually on dipping/deworming, <3% mortality rate'
    },
    {
      title: 'Optimal Frame Size',
      description: '400-500kg mature cows: perfect balance for 315mm rainfall, adequate weaner weights without excessive feed costs'
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
          title="Three-Pillar Management Strategy"
          strategies={strategies}
          columns={3}
        />

        {/* Composite Genetics Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Composite Herd Genetics Analysis</h2>
          <div className={styles.geneticsContainer}>
            <div className={styles.geneticsIntro}>
              <div className={styles.geneticsIconWrapper}>
                <Dna className={styles.geneticsIcon} />
              </div>
              <p className={styles.geneticsDescription}>
                Our composite herd combines four complementary breeds to maximize performance in Zeerust's 
                315mm rainfall environment. This strategic genetic mix delivers 15-25% hybrid vigor advantage 
                while preserving drought adaptation, heat tolerance, and disease resistance.
              </p>
            </div>
            <div className={styles.twoColumnGrid}>
              <div className={styles.geneticsCard}>
                <h3 className={styles.cardTitle}>Breed Contributions</h3>
                <div className={styles.featureList}>
                  {geneticsFeatures.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <feature.icon className={`${styles.featureIcon} ${feature.iconColor}`} />
                      <div>
                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                        <p className={styles.featureDescription}>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.geneticsCard}>
                <h3 className={styles.cardTitle}>Hybrid Vigor Benefits</h3>
                <div className={styles.benefitsList}>
                  {hybridVigorBenefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className={styles.benefitItem}>
                      <CheckCircle className={styles.benefitIcon} />
                      <div>
                        <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                        <p className={styles.benefitDescription}>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.geneticsHighlight}>
              <h3 className={styles.highlightTitle}>Strategic Value: Santa Gertrudis Bull Program</h3>
              <p className={styles.highlightText}>
                Current Santa Gertrudis bull (5/8 Shorthorn × 3/8 Brahman) ensures continued improvement 
                in muscling, marbling, and carcass quality. SG-cross weaners command 20-40% premium 
                (R8,000-12,000 vs R6,000-9,000 indigenous) due to excellent feedlot finishing and 
                meat quality. Plan: Add additional SG bulls in Years 2-5 to strengthen influence and 
                maximize weaner premiums.
              </p>
            </div>
          </div>
        </section>

        {/* Rotational Grazing Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Rotational Grazing System</h2>
          <div className={styles.grazingContainer}>
            <div className={styles.grazingIntro}>
              <div className={styles.grazingIconWrapper}>
                <Grid3x3 className={styles.grazingIcon} />
              </div>
              <p className={styles.grazingDescription}>
                Transition from continuous grazing to high-density mob grazing system across 40 paddocks. 
                This regenerative approach improves pasture health, increases carrying capacity by 60-70%, 
                and integrates with sekelbos clearance program for optimal land recovery.
              </p>
            </div>
            <FeatureCard 
              title="System Design & Infrastructure" 
              features={grazingFeatures}
            />
            <div className={styles.grazingPhases}>
              <h3 className={styles.cardTitle}>Phased Implementation (Following Sekelbos Clearance)</h3>
              <div className={styles.phaseGrid}>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 1: 50ha Cleared</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    3-4 paddocks (12-15ha each). Graze cleared areas first for best grass recovery. 
                    Start with temporary electric fencing (R15K-25K) and portable troughs (R12K-24K).
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 2: 150ha Cleared</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    10 paddocks (15ha each). Systematic rotation on cleared paddocks. Carrying capacity 
                    increases 20-30%. Begin transition to permanent infrastructure.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 3: 270ha Cleared</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    18 paddocks (15ha each). Full rotational system on cleared areas. Carrying capacity 
                    increases 40-50%. Install permanent fencing and piped water system.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Years 4-5: 600ha Cleared</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    Full 40-paddock system across entire property. Systematic rotation prevents sekelbos 
                    regrowth. Carrying capacity increases 60-70% vs Year 0. Maintenance grazing only.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.grazingBenefits}>
              <h3 className={styles.cardTitle}>Seasonal Management & Drought Adaptation</h3>
              <div className={styles.seasonGrid}>
                <div className={styles.seasonCard}>
                  <h4 className={styles.seasonTitle}>Spring/Summer (Sept-Feb)</h4>
                  <p className={styles.seasonText}>Peak growth (300-600kg DM/ha/month). Short grazing periods (3-5 days), 40-60 day rest. Full herd + calves.</p>
                </div>
                <div className={styles.seasonCard}>
                  <h4 className={styles.seasonTitle}>Autumn/Winter (Mar-Aug)</h4>
                  <p className={styles.seasonText}>Declining/dormant growth (50-400kg DM/ha/month). Longer grazing (5-7 days), 60-80 day rest. Supplement if needed.</p>
                </div>
                <div className={styles.seasonCard}>
                  <h4 className={styles.seasonTitle}>Moderate Drought (250-300mm)</h4>
                  <p className={styles.seasonText}>Reduce stocking, extend rest (70-90 days), supplement with lucerne/lick blocks. Prioritize pregnant/young cows.</p>
                </div>
                <div className={styles.seasonCard}>
                  <h4 className={styles.seasonTitle}>Severe Drought (&lt;250mm)</h4>
                  <p className={styles.seasonText}>Aggressive destocking (20-30%), focus best paddocks only, heavy supplementation. Composite genetics critical for survival.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Projections Section */}
        <section className={styles.section}>
          <div className={styles.financialContainer}>
            <h2 className={styles.sectionTitle}>5-Year Financial Projections</h2>
            <div className={styles.tableContainer}>
              <table className={styles.financialTable}>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Breeding Cows</th>
                    <th>Weaners Sold</th>
                    <th>Weaner Revenue</th>
                    <th>Cull Cow Revenue</th>
                    <th>Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>52</td>
                    <td>17</td>
                    <td>R136K-204K</td>
                    <td>R16K-24K</td>
                    <td className={styles.totalCell}>R152K-228K</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>60</td>
                    <td>20</td>
                    <td>R180K-300K</td>
                    <td>R24K-36K</td>
                    <td className={styles.totalCell}>R204K-336K</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>70</td>
                    <td>24</td>
                    <td>R240K-360K</td>
                    <td>R30K-45K</td>
                    <td className={styles.totalCell}>R270K-405K</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>80</td>
                    <td>28</td>
                    <td>R308K-448K</td>
                    <td>R40K-60K</td>
                    <td className={styles.totalCell}>R348K-508K</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>90</td>
                    <td>32</td>
                    <td>R384K-512K</td>
                    <td>R48K-72K</td>
                    <td className={styles.totalCell}>R432K-584K</td>
                  </tr>
                  <tr className={styles.totalRow}>
                    <td><strong>TOTAL</strong></td>
                    <td><strong>-</strong></td>
                    <td><strong>121</strong></td>
                    <td><strong>R1.25M-1.82M</strong></td>
                    <td><strong>R158K-237K</strong></td>
                    <td className={styles.grandTotal}><strong>R1.41M-2.06M</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.financialNotes}>
              <div className={styles.noteItem}>
                <DollarSign className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Additional Value:</strong> Increased grazing capacity generates R200K-400K annually post-clearance
                </p>
              </div>
              <div className={styles.noteItem}>
                <TrendingUp className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Property Appreciation:</strong> Cleared land increases property value by R2M-4M
                </p>
              </div>
            </div>
          </div>
        </section>

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
