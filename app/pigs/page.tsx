import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Salad, TrendingUp, Recycle, DollarSign, Calendar, CheckCircle, Target, Heart, Award, Sprout } from 'lucide-react';
import { HeroSection, FeatureCard, StrategyCard, TimelineSection, BenefitsSection } from '@/components/shared';
import type { FeatureItem, Strategy, TimelineItem, Benefit } from '@/components/shared';
import styles from './page.module.css';

export default function PigsPage() {
  const rareGeneticsStrategy: Strategy[] = [
    {
      icon: Heart,
      iconColor: 'text-rose-600 dark:text-rose-400',
      iconBgColor: 'bg-rose-100 dark:bg-rose-900',
      title: 'Mukota Indigenous Breed',
      description: 'Critically endangered Zimbabwe breed (<500 globally). Extreme heat tolerance (35-45°C), exceptional foraging (40-60% diet from pasture), disease resistance. Market premium: R6,000-9,100 per pig vs R4,000-6,000 commercial. Conservation value.'
    },
    {
      icon: Award,
      iconColor: 'text-pink-600 dark:text-pink-400',
      iconBgColor: 'bg-pink-100 dark:bg-pink-900',
      title: 'Three-Way Cross (Mukota/Duroc/Large White)',
      description: 'Hybrid vigor: 25% Mukota (hardiness) + 37.5% Duroc (carcass quality) + 37.5% Large White (litter size). +15-25% growth rate, +20-30% litter size, retained disease resistance. Best of all three breeds.'
    },
    {
      icon: Sprout,
      iconColor: 'text-purple-600 dark:text-purple-400',
      iconBgColor: 'bg-purple-100 dark:bg-purple-900',
      title: 'Miniature Line (Large White)',
      description: 'Niche market: 40-70kg mature weight, pet/educational farms. R3,000-6,000 per weaner (pets), R6,000-10,000 breeding pairs. Separate line prevents crossbreeding. 50-60% lower feed costs than standard pigs.'
    }
  ];

  const breedComparison: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-rose-600 dark:text-rose-400',
      title: 'Mukota: 6-10 piglets/litter',
      description: 'Foraging 40-60%, R1,000-1,500 feed/pig, extreme heat tolerance, 90-95% survival, rare genetics premium'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Three-Way Cross: 8-12 piglets/litter',
      description: 'Foraging 30-50%, R1,500-2,000 feed/pig, hybrid vigor +20-30%, Duroc carcass quality, Large White prolific'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Miniature: 4-8 piglets/litter',
      description: '40-70kg mature weight, R500-800 feed/pig to market, pet/educational market R3,000-6,000/weaner'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Dual-Line Benefits',
      description: 'Production line (Mukota cross) for meat + breeding, miniature line for niche pet market, genetic diversity'
    }
  ];

  const sekelbosIntegration: FeatureItem[] = [
    {
      icon: Recycle,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Phase 3: Pig Rooting',
      description: 'High-intensity rooting (10-15 pigs per 5ha, 4-8 weeks). Root 20-30cm depth, expose/break root systems, 80-90% root destruction vs 40-60% mechanical cutting alone.'
    },
    {
      icon: Target,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Mobile Paddock System',
      description: '8-10 mobile paddocks (5ha each). Pig arks (2.4m × 3.6m, 5-8 pigs each), electric fencing (polywire, moved every 4-8 weeks), portable troughs.'
    },
    {
      icon: Award,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Revenue-Generating Clearance',
      description: 'Pigs fatten on sekelbos pods/roots while clearing. Bonus: soil aeration (rooting loosens compacted soil), manure fertilization (3-4% N content).'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Root Destruction',
      description: 'Pigs target root systems (20-30cm depth), break root structure, prevent resprouting. More effective than mechanical methods (precision targeting).'
    }
  ];

  const marketingRevenue: FeatureItem[] = [
    {
      icon: DollarSign,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Meat Sales (70% - 35 pigs)',
      description: 'Live sales to abattoirs: R45-55/kg live weight (80-100kg pigs) = R3,600-5,500 per pig. Annual: R157,500 (Year 5).'
    },
    {
      icon: DollarSign,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Direct Sales (20% - 10 pigs)',
      description: 'Whole/half pigs: R60-80/kg dressed weight (60-75kg dressed) = R3,600-6,000 per pig. Higher margins, customer relationships.'
    },
    {
      icon: Award,
      iconColor: 'text-rose-600 dark:text-rose-400',
      title: 'Mukota Premium (10% - 5 pigs)',
      description: 'Heritage pork: R80-120/kg (rare breed premium) = R4,800-9,000 per pig. Conservation value, extreme genetic rarity.'
    },
    {
      icon: Heart,
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Breeding Stock Sales',
      description: 'Mukota weaners R1,500-2,500, gilts R3,000-5,000, boars R4,000-8,000. Miniature weaners R2,000-4,000, breeding pairs R6,000-10,000. Annual: R36K-70K.'
    }
  ];

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
          subtitle="Rare Mukota genetics combined with hybrid vigor for sekelbos root destruction and premium pork production"
        />

        {/* Rare Genetics Strategy Section */}
        <StrategyCard
          title="Rare Genetics & Dual-Line Strategy"
          strategies={rareGeneticsStrategy}
          columns={3}
        />

        {/* Breed Comparison Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Genetics & Breed Strategy</h2>
          <div className={styles.geneticsContainer}>
            <div className={styles.geneticsIntro}>
              <div className={styles.geneticsIconWrapper}>
                <Heart className={styles.geneticsIcon} />
              </div>
              <p className={styles.geneticsDescription}>
                Strategic dual-line system combines rare Mukota indigenous genetics (critically endangered, &lt;500 globally) 
                crossed with Duroc and Large White for hybrid vigor, plus separate miniature line for pet/educational market. 
                Mukota provides extreme heat tolerance, foraging ability (40-60% diet from pasture), and disease resistance 
                adapted to 315mm rainfall zones.
              </p>
            </div>
            <FeatureCard 
              title="Breed Performance Comparison" 
              features={breedComparison}
            />
            <div className={styles.comparisonTable}>
              <h3 className={styles.cardTitle}>Detailed Breed Comparison</h3>
              <div className={styles.tableContainer}>
                <table className={styles.financialTable}>
                  <thead>
                    <tr>
                      <th>Trait</th>
                      <th>Mukota</th>
                      <th>Three-Way Cross</th>
                      <th>Miniature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Litter size</td>
                      <td>6-10 piglets</td>
                      <td className={styles.highlightCell}>8-12 piglets</td>
                      <td>4-8 piglets</td>
                    </tr>
                    <tr>
                      <td>Foraging ability</td>
                      <td className={styles.highlightCell}>40-60% diet</td>
                      <td>30-50% diet</td>
                      <td>30-40% diet</td>
                    </tr>
                    <tr>
                      <td>Feed cost to market</td>
                      <td className={styles.highlightCell}>R1,000-1,500</td>
                      <td>R1,500-2,000</td>
                      <td className={styles.highlightCell}>R500-800</td>
                    </tr>
                    <tr>
                      <td>Market weight</td>
                      <td>80-100kg</td>
                      <td className={styles.highlightCell}>80-100kg</td>
                      <td>40-70kg (mature)</td>
                    </tr>
                    <tr>
                      <td>Heat tolerance</td>
                      <td className={styles.highlightCell}>Extreme (35-45°C)</td>
                      <td>Good</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>Market price</td>
                      <td className={styles.highlightCell}>R6,000-9,100</td>
                      <td>R4,000-5,500</td>
                      <td>R2,000-4,000 (pet)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Sekelbos Integration Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sekelbos Root Destruction Integration</h2>
          <div className={styles.grazingContainer}>
            <div className={styles.grazingIntro}>
              <div className={styles.grazingIconWrapper}>
                <Recycle className={styles.grazingIcon} />
              </div>
              <p className={styles.grazingDescription}>
                Pigs are Phase 3 of the sekelbos clearance system—rooting after goat browsing and before chicken scratching. 
                High-intensity rooting (10-15 pigs per 5ha for 4-8 weeks) destroys root systems at 20-30cm depth, achieving 
                80-90% root destruction vs 40-60% from mechanical cutting alone while generating revenue and providing 
                soil aeration and manure fertilization.
              </p>
            </div>
            <FeatureCard 
              title="Pig Rooting Strategy" 
              features={sekelbosIntegration}
            />
            <div className={styles.grazingPhases}>
              <h3 className={styles.cardTitle}>Phased Integration (Following Sekelbos Clearance)</h3>
              <div className={styles.phaseGrid}>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 1: 30ha (21 pigs)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    3-4 mobile paddocks (4 sows, 1 boar, 16 growers). Foundation herd, establish systems. 
                    Revenue: R90K-180K (meat + breeding).
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 2: 80ha (32 pigs)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    5-6 mobile paddocks. Herd expands, increase clearance capacity. 
                    Revenue: R158K-310.5K.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 3: 150ha (42 pigs)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    8-10 mobile paddocks (full system). Value-added processing begins. 
                    Revenue: R255K-510K.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Years 4-5: 300ha (42 pigs)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    Herd stabilized (10 sows, 2 boars, 30 growers). Systematic rotation, value-added mature. 
                    Revenue: R276K-535K.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing & Revenue Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Marketing Strategy & Revenue Streams</h2>
          <div className={styles.geneticsContainer}>
            <div className={styles.geneticsIntro}>
              <div className={styles.geneticsIconWrapper}>
                <DollarSign className={styles.geneticsIcon} />
              </div>
              <p className={styles.geneticsDescription}>
                Diversified revenue model: Live sales to abattoirs (70%, R157.5K), direct whole/half pig sales (20%, R48K), 
                premium Mukota heritage pork (10%, R32.5K), breeding stock sales (Mukota genetics R36K-70K annually), 
                and value-added products (bacon, ham, sausages R50K-100K from Year 3).
              </p>
            </div>
            <div className={styles.twoColumnGrid}>
              <FeatureCard 
                title="Revenue Streams (Year 5)" 
                features={marketingRevenue}
              />
              <div className={styles.geneticsCard}>
                <h3 className={styles.cardTitle}>Value-Added Products (Year 3+)</h3>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Bacon: R150-220/kg</h4>
                      <p className={styles.benefitDescription}>
                        Premium smoked bacon from Mukota cross genetics. Equipment: smoker R3K-8K, vacuum sealer R2K-5K.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Ham: R120-180/kg</h4>
                      <p className={styles.benefitDescription}>
                        Cured and smoked ham. Longer shelf life, higher margins than fresh pork.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Sausages/Boerewors: R80-120/kg</h4>
                      <p className={styles.benefitDescription}>
                        Fresh and smoked sausages. Utilize all cuts, minimize waste. Grinder/mixer R5K-10K.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Additional Margin: R25K-50K</h4>
                      <p className={styles.benefitDescription}>
                        Process 10 pigs annually: R70K revenue vs R45K live sale = R25K additional margin.
                      </p>
                    </div>
                  </div>
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
                    <th>Herd Size</th>
                    <th>Pigs Sold</th>
                    <th>Meat Revenue</th>
                    <th>Breeding Revenue</th>
                    <th>Value-Added</th>
                    <th>Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>21</td>
                    <td>20</td>
                    <td>R80K-150K</td>
                    <td>R10K-30K</td>
                    <td>R0</td>
                    <td className={styles.totalCell}>R90K-180K</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>32</td>
                    <td>35</td>
                    <td>R140K-262.5K</td>
                    <td>R18K-48K</td>
                    <td>R0</td>
                    <td className={styles.totalCell}>R158K-310.5K</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>42</td>
                    <td>50</td>
                    <td>R200K-375K</td>
                    <td>R30K-60K</td>
                    <td>R25K-75K</td>
                    <td className={styles.totalCell}>R255K-510K</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>42</td>
                    <td>50</td>
                    <td>R200K-375K</td>
                    <td>R36K-70K</td>
                    <td>R40K-90K</td>
                    <td className={styles.totalCell}>R276K-535K</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>42</td>
                    <td>50</td>
                    <td>R200K-275K</td>
                    <td>R36K-70K</td>
                    <td>R50K-100K</td>
                    <td className={styles.totalCell}>R286K-445K</td>
                  </tr>
                  <tr className={styles.totalRow}>
                    <td><strong>TOTAL</strong></td>
                    <td><strong>-</strong></td>
                    <td><strong>205</strong></td>
                    <td><strong>R820K-1.44M</strong></td>
                    <td><strong>R130K-278K</strong></td>
                    <td><strong>R115K-265K</strong></td>
                    <td className={styles.grandTotal}><strong>R1.07M-1.98M</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.financialNotes}>
              <div className={styles.noteItem}>
                <DollarSign className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Operating Costs (Year 5):</strong> R156K-250K (R3,724-5,948 per pig) - 30-40% lower than commercial due to Mukota foraging
                </p>
              </div>
              <div className={styles.noteItem}>
                <TrendingUp className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Net Profit (5-Year):</strong> R520K-950K | ROI: 509-606% | Profit Margin: 40-50%
                </p>
              </div>
              <div className={styles.noteItem}>
                <Award className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Rare Genetics Premium:</strong> Mukota breeding stock R6K-9.1K/pig vs R4K-6K commercial, payback period 1.5-2.5 years
                </p>
              </div>
            </div>
          </div>
        </section>

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
