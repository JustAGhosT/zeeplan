import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  Milk,
  TrendingUp,
  Package,
  DollarSign,
  Users,
  CheckCircle,
  Target,
  Dna,
  Leaf,
  Calendar,
  Award,
} from 'lucide-react';
import { HeroSection, StrategyCard, BenefitsSection, FeatureCard } from '@/components/shared';
import type { Strategy, Benefit, FeatureItem } from '@/components/shared';
import styles from './page.module.css';

export default function GoatsPage() {
  const dualPurposeStrategies: Strategy[] = [
    {
      icon: Leaf,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Meat-Focused Does (70%)',
      description:
        '63 does browse sekelbos extensively, raise kids to market weight (15-20kg @ 4-5 months). Natural kidding in spring, 160% kidding rate, 86 kids sold annually @ R900-1,600 each. Revenue: R77K-138K per year.',
    },
    {
      icon: Milk,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Dairy-Focused Does (30%)',
      description:
        '27 does hand-milked daily, staggered breeding for year-round milk (840-1,620L monthly). Produce fresh chèvre cheese (150-200g per liter). Revenue: R114K-261K per year (milk + cheese + kids).',
    },
    {
      icon: Award,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Strategic Flexibility',
      description:
        'Same indigenous/Rooikop genetics for all does—shift between meat/dairy roles based on market demand. Best milkers selected for dairy, others for meat production. Adjust herd composition dynamically.',
    },
  ];

  const indigenousAdvantages: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Rooikop 100% Indigenous',
      description:
        'Red Head Afrikaner: 300+ years evolution in 200-600mm rainfall zones, 35-45kg does, 140-180% kidding rate',
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Drought Tolerance',
      description:
        '2-4L water per day (vs 5-8L commercial), 80% browse diet (sekelbos), tail fat reserves, thrive on low-quality forage',
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Dual-Purpose Genetics',
      description:
        '1-2L milk per day (120-180 day lactation), 4-5% butterfat (ideal for cheese), twins/triplets common',
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Disease Resistance',
      description: 'Minimal veterinary inputs, 95%+ kid survival, productive to 8-10 years, natural parasite tolerance',
    },
  ];

  const sekelbosIntegration: FeatureItem[] = [
    {
      icon: Leaf,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Phase 2: Goat Browsing',
      description:
        'High-density browsing (100-150 goats per 15ha, 7-14 days). Strip 60-80% of sekelbos leaves, damage bark, destroy seedlings.',
    },
    {
      icon: Target,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Revenue-Generating Clearance',
      description:
        'Goats gain weight while browsing (0.08-0.12kg/day). Earn R40K-80K annually as living lawnmowers + meat/milk sales.',
    },
    {
      icon: TrendingUp,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Selective Browsing',
      description:
        '80/20 browse-to-grass ratio: goats target sekelbos over pasture, access steep slopes/dense thickets cattle cannot reach.',
    },
    {
      icon: Award,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Nutrient Cycling',
      description:
        'Goat manure fertilizes soil (high nitrogen). Reduce fuel load before mechanical cutting. 60-90 day rest periods.',
    },
  ];

  const chevreProduction: FeatureItem[] = [
    {
      icon: Milk,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Fresh Chèvre (Soft Cheese)',
      description:
        'Creamy, tangy spreadable cheese. 1L milk = 150-200g cheese. Sell @ R180-280/kg (9-14x value vs raw milk @ R20/L).',
    },
    {
      icon: Package,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Production Capacity',
      description:
        'Year 5: 810-1,620L milk monthly from 27 dairy does. Yields 122-324kg chèvre monthly. Revenue: R22K-91K/month.',
    },
    {
      icon: DollarSign,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Premium Positioning',
      description:
        'Target restaurants, specialty stores, farm shop. Add herbs (chives, dill), roll in ash/nuts. Lactose-intolerant market.',
    },
    {
      icon: Calendar,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Year-Round Production',
      description:
        'Staggered breeding (3 groups × 9 does kid every 4 months). 18 does in milk at any time. Daily cash flow.',
    },
  ];

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
      ),
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
      ),
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
      ),
    },
  ];

  const marketStrategies: Strategy[] = [
    {
      icon: DollarSign,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Direct-to-Consumer',
      description:
        'On-farm shop, farmers markets, and delivery subscriptions for fresh milk and cheese. Build loyal customer base with farm visits and tastings.',
      footer: <strong>Target: 60% of revenue</strong>,
    },
    {
      icon: Package,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Restaurant & Retail',
      description:
        'Supply artisan cheeses to high-end restaurants, specialty food stores, and gourmet shops. Position as premium local product.',
      footer: <strong>Target: 25% of revenue</strong>,
    },
    {
      icon: TrendingUp,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Agri-Tourism',
      description:
        'Farm tours, cheese-making workshops, and farm-to-table dining experiences. Educational programs attract urban consumers.',
      footer: <strong>Target: 10% of revenue</strong>,
    },
    {
      icon: Users,
      iconColor: 'text-purple-600 dark:text-purple-400',
      iconBgColor: 'bg-purple-100 dark:bg-purple-900',
      title: 'Meat Sales',
      description:
        'Sell live animals and butchered meat locally. Strong demand for halal and cultural celebrations. Managed breeding ensures consistent supply.',
      footer: <strong>Target: 5% of revenue</strong>,
    },
  ];

  const benefits: Benefit[] = [
    {
      title: 'Multiple Revenue Streams',
      description: 'Meat, milk, and cheese provide diversified income from single livestock system',
    },
    {
      title: 'Lower Entry Cost',
      description: 'Smaller initial investment compared to cattle, faster reproduction cycles',
    },
    {
      title: 'Premium Pricing',
      description: 'Artisan cheese commands 3-5x higher prices than raw milk',
    },
    {
      title: 'Growing Market',
      description: 'Increasing demand for goat products due to health benefits and lactose intolerance',
    },
    {
      title: 'Land Efficiency',
      description: 'Goats thrive on marginal land and help control brush',
    },
    {
      title: 'Year-Round Income',
      description: 'Managed breeding enables consistent milk and cheese production',
    },
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

        {/* Dual-Purpose Strategy Section */}
        <StrategyCard title="Dual-Purpose Management Strategy" strategies={dualPurposeStrategies} columns={3} />

        {/* Indigenous Genetics Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Indigenous Rooikop Genetics & Advantages</h2>
          <div className={styles.geneticsContainer}>
            <div className={styles.geneticsIntro}>
              <div className={styles.geneticsIconWrapper}>
                <Dna className={styles.geneticsIcon} />
              </div>
              <p className={styles.geneticsDescription}>
                Rooikop (Red Head Afrikaner) goats evolved over 300+ years in South Africa's harshest conditions
                (200-600mm rainfall). Indigenous genetics deliver superior drought tolerance, browse preference for
                sekelbos, dual-purpose milk/meat production, and 40-60% lower operating costs than commercial breeds.
              </p>
            </div>
            <FeatureCard title="Indigenous vs Commercial Comparison" features={indigenousAdvantages} />
            <div className={styles.comparisonTable}>
              <h3 className={styles.cardTitle}>Performance Comparison</h3>
              <div className={styles.tableContainer}>
                <table className={styles.financialTable}>
                  <thead>
                    <tr>
                      <th>Trait</th>
                      <th>Indigenous/Rooikop</th>
                      <th>Commercial (Saanen/Boer)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Drought tolerance</td>
                      <td className={styles.highlightCell}>Excellent (200-400mm)</td>
                      <td>Poor (requires 400mm+)</td>
                    </tr>
                    <tr>
                      <td>Browse utilization</td>
                      <td className={styles.highlightCell}>80% browse, 20% grass</td>
                      <td>20% browse, 80% grass</td>
                    </tr>
                    <tr>
                      <td>Water requirements</td>
                      <td className={styles.highlightCell}>2-4L/day</td>
                      <td>5-8L/day</td>
                    </tr>
                    <tr>
                      <td>Feed cost</td>
                      <td className={styles.highlightCell}>R200-400/doe/year</td>
                      <td>R800-1,500/doe/year</td>
                    </tr>
                    <tr>
                      <td>Kidding rate</td>
                      <td className={styles.highlightCell}>140-180%</td>
                      <td>120-150%</td>
                    </tr>
                    <tr>
                      <td>Milk butterfat</td>
                      <td className={styles.highlightCell}>4-5% (ideal for cheese)</td>
                      <td>3-4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Sekelbos Integration Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sekelbos Browsing Integration</h2>
          <div className={styles.grazingContainer}>
            <div className={styles.grazingIntro}>
              <div className={styles.grazingIconWrapper}>
                <Leaf className={styles.grazingIcon} />
              </div>
              <p className={styles.grazingDescription}>
                Goats are Phase 2 of the sekelbos clearance system—browsing before mechanical cutting. High-density
                browsing (100-150 goats per 15ha for 7-14 days) strips leaves, damages bark, and destroys seedlings
                while generating revenue through weight gain and meat/milk production.
              </p>
            </div>
            <FeatureCard title="Goat Browsing Strategy" features={sekelbosIntegration} />
            <div className={styles.grazingPhases}>
              <h3 className={styles.cardTitle}>Phased Integration (Following Sekelbos Clearance)</h3>
              <div className={styles.phaseGrid}>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 1: 50ha (35 goats)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    3-4 paddocks × 15ha. Foundation herd (6 current + 29 purchased/born). Revenue: R64K-124K (meat +
                    dairy + breeding).
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 2: 100ha (60 goats)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    6-7 paddocks. 25 kids retained for herd growth. Revenue: R120K-231K.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 3: 150ha (90 goats)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    10 paddocks. Dairy operation scales to 21 does in milk. Revenue: R204K-357K.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Years 4-5: 300ha (115 goats)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    20 paddocks (full system). Herd stabilized at 115 goats. Revenue: R267K-500K.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chèvre Production Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Chèvre (Fresh Goat Cheese) Production</h2>
          <div className={styles.geneticsContainer}>
            <div className={styles.geneticsIntro}>
              <div className={styles.geneticsIconWrapper}>
                <Package className={styles.geneticsIcon} />
              </div>
              <p className={styles.geneticsDescription}>
                Transform raw goat milk into premium chèvre cheese: creamy, tangy, spreadable soft cheese commanding
                R180-280/kg (vs R20/L raw milk). Add herbs (chives, dill), roll in ash/nuts for visual appeal. Target
                lactose-intolerant consumers, restaurants, specialty stores.
              </p>
            </div>
            <div className={styles.twoColumnGrid}>
              <FeatureCard title="Chèvre Production System" features={chevreProduction} />
              <div className={styles.geneticsCard}>
                <h3 className={styles.cardTitle}>Production Process</h3>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Step 1: Pasteurization</h4>
                      <p className={styles.benefitDescription}>
                        Heat milk to 63°C for 30 minutes, cool to 30°C. Equipment: R5K-15K.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Step 2: Culture Addition</h4>
                      <p className={styles.benefitDescription}>
                        Add mesophilic culture (0.02%), let sit 12-18 hours @ 22-25°C. Milk thickens, acidifies.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Step 3: Draining & Molding</h4>
                      <p className={styles.benefitDescription}>
                        Ladle curds into muslin-lined molds, drain 6-12 hours. Yield: 1L = 150-200g cheese.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Step 4: Flavoring & Packaging</h4>
                      <p className={styles.benefitDescription}>
                        Add herbs/spices, roll in ash/nuts. Package in 100-250g containers. Shelf life: 21 days.
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
                    <th>Meat Revenue</th>
                    <th>Dairy Revenue</th>
                    <th>Breeding Stock</th>
                    <th>Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>35</td>
                    <td>R38K-98K</td>
                    <td>R26K</td>
                    <td>R2K</td>
                    <td className={styles.totalCell}>R64K-124K</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>60</td>
                    <td>R70K-147K</td>
                    <td>R62K</td>
                    <td>R8K</td>
                    <td className={styles.totalCell}>R120K-231K</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>90</td>
                    <td>R106K-259K</td>
                    <td>R98K</td>
                    <td>R15.7K</td>
                    <td className={styles.totalCell}>R204K-357K</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>105</td>
                    <td>R143K-320K</td>
                    <td>R136K</td>
                    <td>R28.5K</td>
                    <td className={styles.totalCell}>R267K-427K</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>115</td>
                    <td>R137K-334K</td>
                    <td>R165K</td>
                    <td>R39.6K</td>
                    <td className={styles.totalCell}>R302K-499K</td>
                  </tr>
                  <tr className={styles.totalRow}>
                    <td>
                      <strong>TOTAL</strong>
                    </td>
                    <td>
                      <strong>-</strong>
                    </td>
                    <td>
                      <strong>R498K-841K</strong>
                    </td>
                    <td>
                      <strong>R502K</strong>
                    </td>
                    <td>
                      <strong>R93.8K</strong>
                    </td>
                    <td className={styles.grandTotal}>
                      <strong>R1.05M-1.47M</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.financialNotes}>
              <div className={styles.noteItem}>
                <DollarSign className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Operating Costs (Year 5):</strong> R80K-160K (R696-1,391 per goat) - 40-60% lower than
                  commercial breeds
                </p>
              </div>
              <div className={styles.noteItem}>
                <TrendingUp className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Net Profit (5-Year):</strong> R592K-1.02M | ROI: 310-281% | Profit Margin: 65-70%
                </p>
              </div>
              <div className={styles.noteItem}>
                <Award className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Dairy Impact:</strong> +91% revenue increase vs meat-only operation (chèvre at R180-280/kg vs
                  R20/L raw milk = 9-14x value)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Revenue Streams Section */}
        <StrategyCard title="Triple Revenue Stream Approach" strategies={revenueStreams} columns={3} />

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
                  <p className={styles.progressBarDescription}>First cheese sales, expanding dairy operation</p>
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
        <StrategyCard title="Market & Revenue Strategy" strategies={marketStrategies} columns={4} />

        {/* Key Benefits Section */}
        <BenefitsSection title="Why Goats, Dairy & Cheese?" benefits={benefits} />
      </main>

      <Footer />
    </div>
  );
}
