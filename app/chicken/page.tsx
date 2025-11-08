import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Egg, TrendingUp, Target, DollarSign, Calendar, CheckCircle, Package, Feather, Leaf, Award } from 'lucide-react';
import { HeroSection, StrategyCard, TimelineSection, BenefitsSection, FeatureCard } from '@/components/shared';
import type { Strategy, TimelineItem, Benefit, FeatureItem } from '@/components/shared';
import styles from './page.module.css';

export default function ChickenPage() {
  const multiBreedStrategy: Strategy[] = [
    {
      icon: Feather,
      iconColor: 'text-amber-600 dark:text-amber-400',
      iconBgColor: 'bg-amber-100 dark:bg-amber-900',
      title: 'Koekoek (60% - 300 birds)',
      description: 'Indigenous South African breed: 180-220 eggs/year, exceptional foraging (50-60% of diet from pasture), dual-purpose meat + eggs. Primary sekelbos seed control, 30-40% lower feed costs. Heritage breed premium pricing.'
    },
    {
      icon: Feather,
      iconColor: 'text-red-600 dark:text-red-400',
      iconBgColor: 'bg-red-100 dark:bg-red-900',
      title: 'Rhode Island Red (20% - 100 birds)',
      description: 'American heritage breed: 200-260 eggs/year, rich brown eggs with strong shells, excellent heat tolerance (35-40°C), good meat quality when culled. Premium brown egg market appeal, docile temperament.'
    },
    {
      icon: Feather,
      iconColor: 'text-gray-600 dark:text-gray-400',
      iconBgColor: 'bg-gray-100 dark:bg-gray-900',
      title: 'Australorp (20% - 100 birds)',
      description: 'Australian breed: 220-280 eggs/year (world record holders), calm temperament, black coloring (camouflage from predators). Maximum egg production, consistent high output, easy management.'
    }
  ];

  const breedComparison: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-amber-600 dark:text-amber-400',
      title: 'Koekoek: 180-220 eggs/year',
      description: 'Exceptional foraging (50-60%), R250-300/bird feed cost, light brown eggs, 2.0-2.5kg dressed weight'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-red-600 dark:text-red-400',
      title: 'Rhode Island Red: 200-260 eggs/year',
      description: 'Good foraging (20-30%), R300-350/bird feed cost, medium-dark brown eggs, 3.0-3.5kg dressed weight'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-gray-600 dark:text-gray-400',
      title: 'Australorp: 220-280 eggs/year',
      description: 'Moderate foraging (15-25%), R300-350/bird feed cost, light brown eggs, 2.5-3.0kg dressed weight'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Mixed Flock Benefits',
      description: 'Egg diversity (3 shades brown), disease resistance (genetic diversity), market flexibility, optimal resource use'
    }
  ];

  const sekelbosIntegration: FeatureItem[] = [
    {
      icon: Leaf,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Phase 4: Chicken Scratching',
      description: 'High-density scratching (200-300 chickens per 10ha, 2-4 weeks). Scratch 2-5cm deep, consume sekelbos seeds, 40-60% seed bank reduction.'
    },
    {
      icon: Target,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Mobile Housing System',
      description: '6 mobile chicken tractors (50-75 birds each). Moved daily or every 2-3 days for fresh ground, parasite control, even manure distribution.'
    },
    {
      icon: Award,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Revenue-Generating Clearance',
      description: 'Chickens produce eggs while clearing. Bonus: insect control (beetles, grasshoppers), high-nitrogen fertilization (4-5% N content).'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Weed Seed Control',
      description: 'Consume weed seeds + sekelbos seeds, soil aeration (scratching loosens compacted soil), germination prevention through seed exposure.'
    }
  ];

  const eggProduction: FeatureItem[] = [
    {
      icon: Egg,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      title: 'Year 5: 108,000 Eggs Annually',
      description: 'Koekoek 60,000 + RIR 23,000 + Australorp 25,000. Daily average: 295 eggs (24.5 dozen). Monthly: 9,000 eggs (750 dozen).'
    },
    {
      icon: Package,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      title: 'Grading & Packaging',
      description: 'Size grading: Small, Medium, Large, Extra Large. Heritage breed labeling (Koekoek), premium brown eggs (RIR). 6, 12, 18-egg cartons.'
    },
    {
      icon: DollarSign,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      title: 'Pricing Strategy',
      description: 'Farm shop/direct R30-40/dozen, wholesale R25-30/dozen, subscriptions R35-45/dozen. Heritage breed +R5-10/dozen premium.'
    },
    {
      icon: Calendar,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      title: 'Collection Schedule',
      description: '2-3 times daily (morning, midday, evening). Storage: 10-15°C refrigerated, 80% humidity, <21 days. Peak production: 18-72 weeks of age.'
    }
  ];
  
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

        {/* Multi-Breed Strategy Section */}
        <StrategyCard
          title="Multi-Breed Flock Strategy"
          strategies={multiBreedStrategy}
          columns={3}
        />

        {/* Breed Comparison Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Breed Selection & Performance Comparison</h2>
          <div className={styles.geneticsContainer}>
            <div className={styles.geneticsIntro}>
              <div className={styles.geneticsIconWrapper}>
                <Feather className={styles.geneticsIcon} />
              </div>
              <p className={styles.geneticsDescription}>
                Strategic multi-breed flock combines Koekoek (indigenous South African, exceptional foraging), 
                Rhode Island Red (American heritage, premium brown eggs), and Australorp (Australian, world-record 
                production). Mix provides egg diversity, genetic disease resistance, and optimal resource utilization 
                for Zeerust's 315mm rainfall environment.
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
                      <th>Koekoek</th>
                      <th>Rhode Island Red</th>
                      <th>Australorp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Egg production</td>
                      <td>180-220/year</td>
                      <td className={styles.highlightCell}>200-260/year</td>
                      <td className={styles.highlightCell}>220-280/year</td>
                    </tr>
                    <tr>
                      <td>Egg color</td>
                      <td>Light brown/cream</td>
                      <td className={styles.highlightCell}>Medium-dark brown</td>
                      <td>Light brown</td>
                    </tr>
                    <tr>
                      <td>Foraging ability</td>
                      <td className={styles.highlightCell}>Exceptional (50-60%)</td>
                      <td>Good (20-30%)</td>
                      <td>Moderate (15-25%)</td>
                    </tr>
                    <tr>
                      <td>Feed cost/year</td>
                      <td className={styles.highlightCell}>R250-300</td>
                      <td>R300-350</td>
                      <td>R300-350</td>
                    </tr>
                    <tr>
                      <td>Heat tolerance</td>
                      <td className={styles.highlightCell}>Excellent (indigenous)</td>
                      <td className={styles.highlightCell}>Excellent</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>Dressed weight</td>
                      <td>2.0-2.5kg</td>
                      <td className={styles.highlightCell}>3.0-3.5kg</td>
                      <td>2.5-3.0kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Sekelbos Integration Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sekelbos Clearance Integration</h2>
          <div className={styles.grazingContainer}>
            <div className={styles.grazingIntro}>
              <div className={styles.grazingIconWrapper}>
                <Leaf className={styles.grazingIcon} />
              </div>
              <p className={styles.grazingDescription}>
                Chickens are Phase 4 of the sekelbos clearance system—scratching after mechanical cutting. 
                High-density scratching (200-300 chickens per 10ha for 2-4 weeks) reduces seed bank by 40-60% 
                through seed consumption, exposure to predation, and desiccation while generating egg revenue 
                and providing high-nitrogen fertilization.
              </p>
            </div>
            <FeatureCard 
              title="Chicken Scratching Strategy" 
              features={sekelbosIntegration}
            />
            <div className={styles.grazingPhases}>
              <h3 className={styles.cardTitle}>Phased Integration (Following Sekelbos Clearance)</h3>
              <div className={styles.phaseGrid}>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 1: 30ha (113 birds)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    1-2 mobile tractors (60 Koekoek, 25 RIR, 25 Australorp). Foundation flock, establish systems. 
                    Revenue: R49.5K-82K (eggs + meat + breeding).
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 2: 80ha (225 birds)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    3 mobile tractors. Flock doubles, expand clearance capacity. 
                    Revenue: R94K-164K.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Year 3: 150ha (400 birds)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    4-5 mobile tractors. Egg production scales significantly. 
                    Revenue: R175K-329K.
                  </p>
                </div>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <Calendar className={styles.phaseIcon} />
                    <h4 className={styles.phaseTitle}>Years 4-5: 300ha (500 birds)</h4>
                  </div>
                  <p className={styles.phaseDescription}>
                    6 mobile tractors (full system). Flock stabilized, maximum egg production, breeding program mature. 
                    Revenue: R219K-412K.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Egg Production Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Egg Production & Management</h2>
          <div className={styles.geneticsContainer}>
            <div className={styles.geneticsIntro}>
              <div className={styles.geneticsIconWrapper}>
                <Egg className={styles.geneticsIcon} />
              </div>
              <p className={styles.geneticsDescription}>
                Year 5 target: 108,000 eggs annually (9,000 per month, 295 per day). Collection 2-3 times daily, 
                grading by size (Small, Medium, Large, Extra Large), refrigerated storage (10-15°C, 80% humidity, 
                &lt;21 days). Premium pricing for heritage breed (Koekoek +R5-10/dozen) and brown eggs (RIR).
              </p>
            </div>
            <div className={styles.twoColumnGrid}>
              <FeatureCard 
                title="Egg Production System" 
                features={eggProduction}
              />
              <div className={styles.geneticsCard}>
                <h3 className={styles.cardTitle}>Revenue Breakdown (Year 5)</h3>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Farm Shop/Direct (60%)</h4>
                      <p className={styles.benefitDescription}>
                        4,860 dozen @ R30-38 = R145,800-184,680. Daily fresh eggs, premium convenience pricing.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Wholesale/Restaurants (30%)</h4>
                      <p className={styles.benefitDescription}>
                        2,430 dozen @ R25 = R60,750. Consistent orders, volume pricing, quality premium.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Subscription/Delivery (10%)</h4>
                      <p className={styles.benefitDescription}>
                        810 dozen @ R40 = R32,400. Weekly subscriptions, convenience premium, loyal customers.
                      </p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <CheckCircle className={styles.benefitIcon} />
                    <div>
                      <h4 className={styles.benefitTitle}>Total Egg Revenue</h4>
                      <p className={styles.benefitDescription}>
                        R239,000-278,000 annually. Plus meat sales (R30,890) + breeding stock (R21,000-29,000).
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
                    <th>Flock Size</th>
                    <th>Egg Revenue</th>
                    <th>Meat Revenue</th>
                    <th>Breeding Revenue</th>
                    <th>Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>113</td>
                    <td>R37.5K-60K</td>
                    <td>R12K-22K</td>
                    <td>R3K-5K</td>
                    <td className={styles.totalCell}>R49.5K-82K</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>225</td>
                    <td>R72K-120K</td>
                    <td>R22K-44K</td>
                    <td>R8K-12K</td>
                    <td className={styles.totalCell}>R94K-164K</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>400</td>
                    <td>R135K-259K</td>
                    <td>R40K-70K</td>
                    <td>R15K-21K</td>
                    <td className={styles.totalCell}>R175K-329K</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>450</td>
                    <td>R187K-318K</td>
                    <td>R45K-79K</td>
                    <td>R18K-25K</td>
                    <td className={styles.totalCell}>R237K-388K</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>500</td>
                    <td>R239K-278K</td>
                    <td>R30.9K</td>
                    <td>R21K-29K</td>
                    <td className={styles.totalCell}>R295.9K-347.9K</td>
                  </tr>
                  <tr className={styles.totalRow}>
                    <td><strong>TOTAL</strong></td>
                    <td><strong>-</strong></td>
                    <td><strong>R670.5K-1.03M</strong></td>
                    <td><strong>R149.9K-237K</strong></td>
                    <td><strong>R65K-92K</strong></td>
                    <td className={styles.grandTotal}><strong>R851.4K-1.34M</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.financialNotes}>
              <div className={styles.noteItem}>
                <DollarSign className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Operating Costs (Year 5):</strong> R213K-312.5K (R426-625 per bird) - 40-50% lower than commercial confinement
                </p>
              </div>
              <div className={styles.noteItem}>
                <TrendingUp className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Net Profit (5-Year):</strong> R201K-257K | ROI: 207-151% | Profit Margin: 20-30%
                </p>
              </div>
              <div className={styles.noteItem}>
                <Award className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Quick Returns:</strong> Eggs start 18-20 weeks, daily cash flow, lowest entry cost (R78K-127K infrastructure)
                </p>
              </div>
            </div>
          </div>
        </section>

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
