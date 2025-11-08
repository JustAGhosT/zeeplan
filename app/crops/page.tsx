import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Wheat, TrendingUp, Target, DollarSign, Calendar, CheckCircle, Droplets, Sprout, Sun, CloudRain, Leaf } from 'lucide-react';
import { HeroSection, StrategyCard, TimelineSection, BenefitsSection, FeatureCard } from '@/components/shared';
import type { Strategy, TimelineItem, Benefit, FeatureItem } from '@/components/shared';
import styles from './page.module.css';

export default function CropsPage() {
  const currentFeatures: FeatureItem[] = [
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Crop Area',
      description: 'Minimal cultivation (0-1ha subsistence)'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Current Production',
      description: 'Small-scale traditional farming'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Current Revenue',
      description: 'R0-5K annually'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'System',
      description: 'Dryland only, limited inputs'
    }
  ];

  const targetFeatures: FeatureItem[] = [
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Expanded Area',
      description: '20ha cultivated (18ha dryland + 2ha irrigated)'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Diversified System',
      description: 'Sorghum, millet, cowpeas, sunflower, pumpkins, vegetables'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Total Value',
      description: 'R120K-280K annually (cash + feed savings)'
    },
    {
      icon: Target,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Integrated System',
      description: 'Dryland + borehole irrigation + livestock integration'
    }
  ];

  const strategies: Strategy[] = [
    {
      icon: Sprout,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Drought-Adapted Dryland System',
      description: 'Primary focus on proven 315mm rainfall crops: sorghum (800-1,500kg/ha), pearl millet (600-1,200kg/ha), cowpeas (400-800kg/ha grain), sunflower (600-1,200kg/ha), pumpkins (10-20 tons/ha). Opportunistic planting only when 50-80mm accumulated rainfall. Skip drought years to minimize risk.'
    },
    {
      icon: Droplets,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Strategic Irrigation Component',
      description: 'Dryland cultivation on 18ha (90% of area) with conservation tillage and mulching. Borehole irrigation on 1-2ha (10%) for high-value vegetables, seedling nursery, and lucerne establishment during critical periods. Rainwater harvesting for backup.'
    },
    {
      icon: DollarSign,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Triple Value Stream',
      description: 'Cash crops (sorghum, sunflower, pumpkins) generate R70K-180K/year direct revenue. Livestock feed production (grain, stover, forage) saves R50K-100K/year in purchased feed. Household food security (grains, protein, vegetables) worth R5K-12K/year.'
    }
  ];

  const cropTypes: FeatureItem[] = [
    {
      icon: Wheat,
      iconColor: 'text-amber-600 dark:text-amber-400',
      title: 'Sorghum (Primary Grain - 8ha)',
      description: 'Drought-tolerant, 800-1,500kg/ha yield, R3.50-6.00/kg. Deep roots (2-3m), heat-resistant. Uses: livestock feed, human consumption. Stover: 2-3 tons/ha cattle feed. Varieties: PAN 8816, NS 5511, landraces'
    },
    {
      icon: Sprout,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Pearl Millet (Backup Grain - 2ha)',
      description: 'Extreme drought tolerance, 600-1,200kg/ha, short season (75-90 days). Better than sorghum in severe drought. Higher protein (12-15%). Plant when late rains or drought conditions. Variety: Babala'
    },
    {
      icon: CheckCircle,
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Cowpeas (Protein + N-Fixer - 4ha)',
      description: 'Nitrogen fixation (80-120kg N/ha), dual-purpose grain + leaves. 400-800kg/ha grain, 1-2 tons/ha hay. Benefits following crop. High-protein livestock supplement. Varieties: Bechuana White, Mamlaka'
    },
    {
      icon: Sun,
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Sunflower (Cash Crop - 2ha)',
      description: 'Oilseed market R6,000-9,000/ton, 600-1,200kg/ha. Deep roots (2m), breaks cereal cycles. Bird risk (10-30% loss). Varieties: PAN 7033 (drought-tolerant). Rotation benefit for soil health'
    },
    {
      icon: Target,
      iconColor: 'text-pink-600 dark:text-pink-400',
      title: 'Pumpkins (Food Security - 2ha)',
      description: '10-20 tons/ha, R3-4/kg, stores 3-6 months. Livestock feed + human consumption. Low-input, drought-moderate. Varieties: Boerpampoen (traditional), Butternut (market demand). High value/ha'
    },
    {
      icon: Droplets,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Lucerne/Alfalfa (Irrigated - 2ha)',
      description: 'Perennial high-protein feed (18-22%), 4-8 tons/ha/year, 3-5 year stand. Requires irrigation establishment. Deep roots (3-5m) once established. Nitrogen fixation (150-250kg N/ha). Premium livestock feed'
    },
    {
      icon: Leaf,
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Vegetables (Irrigated - 1ha)',
      description: 'High-value market crops: leafy greens (spinach, kale), root vegetables (carrots, beetroot), tomatoes, onions. Borehole irrigation required. Farm shop + local market. Intensive management, high returns'
    },
    {
      icon: Sprout,
      iconColor: 'text-teal-600 dark:text-teal-400',
      title: 'Lablab (Annual Forage - 2ha)',
      description: 'Dual-purpose grazing + grain, nitrogen fixation (100-150kg N/ha). 3-5 tons/ha dry matter or 500-1,000kg/ha grain. Excellent drought tolerance. Rotational grazing at 60-90 days. Soil builder'
    }
  ];

  const seasonalPlanning: FeatureItem[] = [
    {
      icon: CloudRain,
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Summer Planting (Nov-Dec)',
      description: 'Main dryland season when rainfall >50-80mm accumulated. Plant sorghum, millet, sunflower, pumpkins, cowpeas, lablab. Critical: plant early with first rains. Skip if inadequate rainfall to reduce risk.'
    },
    {
      icon: Sun,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      title: 'Winter Production (May-Aug)',
      description: 'Irrigated vegetables only (leafy greens, roots, brassicas). Lucerne continues (perennial). Dryland crops dormant. Protected seedling nursery for spring planting. Minimal water use strategy.'
    },
    {
      icon: Sprout,
      iconColor: 'text-green-600 dark:text-green-400',
      title: '4-Year Rotation System',
      description: 'Year 1: Cowpeas→Sorghum→Lablab→Pumpkins. Year 2: Sorghum→Sunflower→Sorghum→Cowpeas. Year 3: Lablab→Sorghum→Pumpkins→Sorghum. Year 4: Sorghum→Cowpeas→Sunflower→Lablab. Legumes before cereals.'
    },
    {
      icon: Target,
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Livestock Integration',
      description: 'Graze crop residues: sorghum stover (2-3 t/ha), cowpea residues (1-1.5 t/ha), lablab (rotational). Apply manure: chicken (2-4 t/ha), pig (5-10 t/ha), cattle (10-20 t/ha). Feed savings: R30K-50K/year.'
    }
  ];

  const regenerativePractices: Benefit[] = [
    {
      title: 'Nitrogen Fixation (R15K-30K/year savings)',
      description: 'Cowpeas fix 80-120kg N/ha, lablab 100-150kg N/ha, lucerne 150-250kg N/ha. Benefits following cereal crops. Reduces fertilizer costs by 40-60%. Improves soil biology and structure.'
    },
    {
      title: 'Integrated Crop-Livestock System',
      description: 'Crop residues (stover, hay) feed cattle/goats. Livestock manure fertilizes crops (chicken 50-100kg N/ha, pig balanced NPK, cattle organic matter). Stubble grazing cleans fields. Closed-loop system.'
    },
    {
      title: 'Feed Independence (R50K-100K/year savings)',
      description: 'Sorghum/millet for chicken/pig grain. Cowpeas high-protein supplement. Stover/lablab/lucerne for cattle/goat forage. Reduces purchased feed 40-60%. Drought year insurance (stored grain).'
    },
    {
      title: 'Household Food Security (R5K-12K/year value)',
      description: 'Grain crops: 600-1,200kg/year family needs. Cowpeas: 80-180kg/year protein. Pumpkins: 400-900kg/year vegetables. Irrigated vegetables year-round. Reduces purchased food dependency.'
    },
    {
      title: 'Soil Building on Cleared Land',
      description: 'Plant on newly cleared sekelbos areas. Crop residues add organic matter 2-5 t/ha. Cover crops prevent erosion. Legumes rebuild fertility. Prepares land for improved grazing capacity.'
    },
    {
      title: 'Risk Management Strategy',
      description: 'Opportunistic planting (skip drought years). Multiple crops spread risk. Storage capacity (3-6 months grain, pumpkins). Insurance option Year 3+. Small scale (2-3% of property) limits downside.'
    }
  ];

  const timelineItems: TimelineItem[] = [
    {
      icon: Calendar,
      iconColor: 'text-green-600 dark:text-green-400',
      iconBgColor: 'bg-green-100 dark:bg-green-900',
      title: 'Year 1: Foundation (5ha)',
      description: 'Plant on newly cleared sekelbos (50ha cleared, select best 5ha). Sorghum 2ha, cowpeas 1.5ha, pumpkins 1ha, lablab 0.5ha. Establish seedling nursery. Test drought-adapted varieties. Total value: R40.5K-60.5K (R30.5K-40.5K net + R10K-20K feed savings).'
    },
    {
      icon: Calendar,
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBgColor: 'bg-blue-100 dark:bg-blue-900',
      title: 'Year 2-3: Expansion (10-15ha)',
      description: 'Expand to 10ha Year 2, 15ha Year 3 on cleared land. Add sunflower cash crop, millet backup grain. Establish lucerne (2ha irrigated). 4-year rotation established. Tractor purchase consideration. Year 3 value: R114.5K-169.5K (R79.5K-109.5K net + R35K-60K feed savings).'
    },
    {
      icon: Calendar,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
      title: 'Year 4-5: Maturity (20ha)',
      description: 'Full 20ha rotation (18ha dryland + 2ha irrigated). Sorghum 8ha, cowpeas 4ha, pumpkins 2ha, sunflower 2ha, lablab 2ha, lucerne 2ha, vegetables 1ha. Feed self-sufficiency. Insurance coverage. Year 5 value: R166K-246K (R116K-156K net + R50K-90K feed savings).'
    }
  ];

  const benefits: Benefit[] = [
    {
      title: 'Feed Independence & Cost Savings',
      description: 'On-farm grain production reduces purchased feed costs by R50K-100K/year at full capacity. Sorghum for chickens/pigs, cowpeas for protein supplement, stover/hay for cattle/goats. Drought insurance through grain storage.'
    },
    {
      title: 'Proven 315mm Rainfall Crops',
      description: 'Sorghum, millet, cowpeas evolved for low-rainfall Africa. 800-1,500kg/ha yields achievable. Opportunistic planting (skip drought years) minimizes risk. Small scale (2-3% of property) manageable investment.'
    },
    {
      title: 'Soil Regeneration on Cleared Land',
      description: 'Planting on newly cleared sekelbos areas. Legume nitrogen fixation rebuilds fertility. Crop residues add organic matter. Prepares land for improved grazing. Livestock integration (manure, stubble grazing) closes loop.'
    },
    {
      title: 'Food Security + Cash Flow',
      description: 'Household food needs: grains, protein, vegetables (R5K-12K/year value). Cash crops (sorghum, sunflower, pumpkins) R70K-180K/year. Multiple income streams spread risk. Storage provides off-season sales opportunities.'
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        <HeroSection
          icon={Wheat}
          title="Crop Production & Food Security"
          subtitle="Drought-adapted crop rotation system expanding from 0-1ha to 20ha providing feed independence, food security, and cash crop income in 315mm rainfall zone"
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

        {/* Strategy Section */}
        <StrategyCard
          title="Three-Pillar Cropping Strategy"
          strategies={strategies}
          columns={3}
        />

        {/* Crop Types Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Diversified Crop Portfolio</h2>
          <div className={styles.cropContainer}>
            <div className={styles.cropIntro}>
              <div className={styles.cropIconWrapper}>
                <Wheat className={styles.cropIcon} />
              </div>
              <p className={styles.cropDescription}>
                Strategic crop selection focused on drought adaptation, feed production, and market demand. 
                The system balances subsistence needs, livestock feed requirements, and cash crop opportunities 
                while building soil health through regenerative practices.
              </p>
            </div>
            <FeatureCard 
              title="Crop Categories & Land Allocation" 
              features={cropTypes}
            />
          </div>
        </section>

        {/* Seasonal Planning Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Seasonal Planning & Water Management</h2>
          <div className={styles.seasonalContainer}>
            <div className={styles.seasonalIntro}>
              <div className={styles.seasonalIconWrapper}>
                <CloudRain className={styles.seasonalIcon} />
              </div>
              <p className={styles.seasonalDescription}>
                Success in Zeerust's 315mm rainfall environment requires precise seasonal planning, 
                drought-adapted varieties, and strategic water conservation. The cropping system follows 
                natural rainfall patterns while utilizing selective irrigation for high-value crops.
              </p>
            </div>
            <FeatureCard 
              title="Seasonal Crop Management" 
              features={seasonalPlanning}
            />
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
                    <th>Area (ha)</th>
                    <th>Gross Revenue</th>
                    <th>Net Revenue</th>
                    <th>Feed Savings</th>
                    <th>Total Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>5</td>
                    <td>R65K</td>
                    <td>R30.5K-40.5K</td>
                    <td>R10K-20K</td>
                    <td className={styles.totalCell}>R40.5K-60.5K</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>10</td>
                    <td>R118K</td>
                    <td>R47.5K-67.5K</td>
                    <td>R25K-40K</td>
                    <td className={styles.totalCell}>R72.5K-107.5K</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>15</td>
                    <td>R185K</td>
                    <td>R79.5K-109.5K</td>
                    <td>R35K-60K</td>
                    <td className={styles.totalCell}>R114.5K-169.5K</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>20</td>
                    <td>R256K</td>
                    <td>R116K-156K</td>
                    <td>R50K-90K</td>
                    <td className={styles.totalCell}>R166K-246K</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>20</td>
                    <td>R256K</td>
                    <td>R116K-156K</td>
                    <td>R50K-90K</td>
                    <td className={styles.totalCell}>R166K-246K</td>
                  </tr>
                  <tr className={styles.totalRow}>
                    <td><strong>TOTAL</strong></td>
                    <td><strong>-</strong></td>
                    <td><strong>R880K</strong></td>
                    <td><strong>R389.5K-529.5K</strong></td>
                    <td><strong>R170K-300K</strong></td>
                    <td className={styles.grandTotal}><strong>R559.5K-829.5K</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.financialNotes}>
              <div className={styles.noteItem}>
                <DollarSign className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Cash Crops:</strong> Sorghum, sunflower, pumpkins generate R389.5K-529.5K net revenue over 5 years
                </p>
              </div>
              <div className={styles.noteItem}>
                <TrendingUp className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Feed Savings:</strong> Home-produced grain, stover, and forage reduce livestock feed costs by R170K-300K over 5 years
                </p>
              </div>
              <div className={styles.noteItem}>
                <CheckCircle className={styles.noteIcon} />
                <p className={styles.noteText}>
                  <strong>Food Security:</strong> Household grain, protein, and vegetables worth R26K-58K over 5 years (not included in total above)
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

        {/* Regenerative Benefits Section */}
        <BenefitsSection
          title="Regenerative Agriculture Benefits"
          benefits={regenerativePractices}
        />

        {/* Key Benefits Section */}
        <BenefitsSection
          title="Why Crops Complement Livestock?"
          benefits={benefits}
        />
      </main>

      <Footer />
    </div>
  );
}
