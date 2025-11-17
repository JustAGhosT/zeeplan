'use client';

import React from 'react';
import styles from './SekelbosClearance.module.css';
import { Section, Card, Table } from './UIComponents';

export function SekelbosExecutiveSummary() {
  return (
    <Section
      title="SEKELBOS CLEARANCE & WOOD SALES BUSINESS PLAN"
      subtitle="Zeerust 600ha Property - Biological Clearance System"
    >
      <div className={styles.grid4}>
        <Card title="Property">
          <p className={styles.textSm}>600 hectares, Zeerust, North West Province</p>
          <p className={`${styles.textSm} ${styles.textGray}`}>Rainfall: 315mm annually</p>
        </Card>

        <Card title="Current Problem">
          <p className={styles.textSm}>60-70% heavy sekelbos encroachment</p>
          <p className={`${styles.textSm} ${styles.textGray}`}>360-420ha heavily affected</p>
        </Card>

        <Card title="Solution">
          <p className={styles.textSm}>Multi-species biological clearance</p>
          <p className={`${styles.textSm} ${styles.textGray}`}>+ wood revenue</p>
        </Card>

        <Card title="Timeline">
          <p className={styles.textSm}>5 years to complete clearance</p>
          <p className={`${styles.textSm} ${styles.textGray}`}>Direct investment (equipment & infrastructure): R598K–954K</p>
        </Card>
      </div>

      <Card title="Key Assumptions" className={styles.cardSpacing}>
        <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
          <li>Property size: 600 ha Bushveld</li>
          <li>Heavy sekelbos encroachment: 360–420 ha (60–70%)</li>
          <li>Usable wood density: 3–5 m³/ha (farm-wide average)</li>
          <li>Labour rate: R200–300/day, 2–3 workers</li>
          <li>Clearing rate: 2–3 labour days per hectare</li>
        </ul>
      </Card>

      <div className={styles.grid2}>
        <Card title="The Problem">
          <div className={styles.spaceY4}>
            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>
                Sekelbos (Dichrostachys cinerea) Impact:
              </h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>360-420ha heavily affected (60-70% of property)</li>
                <li>Lost grazing capacity: 30-50 Large Stock Units (current 72 LSU → potential 104-120 LSU)</li>
                <li>Annual revenue loss: R200K-400K</li>
                <li>Property value reduction: R2M-4M</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Conventional Clearance Costs:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Mechanical: R5,000-10,000 per hectare</li>
                <li>Chemical: R3,000-5,000 per hectare</li>
                <li>Total for 600ha: R1.8M-6M</li>
                <li>Regrowth: 2-3 years (requires repeated treatment)</li>
              </ul>
              <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.textRed} ${styles.mt2}`}>
                Conclusion: Economically unfeasible
              </p>
            </div>
          </div>
        </Card>

        <Card title="The Solution">
          <div className={styles.spaceY4}>
            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Biological Clearance System:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Goat browsing (60-80% canopy reduction)</li>
                <li>Mechanical cutting + wood harvesting (revenue generation)</li>
                <li>Pig rooting (80-90% root destruction)</li>
                <li>Chicken scratching (40-60% seed bank reduction)</li>
                <li>Cattle maintenance grazing (prevent regrowth)</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Financial Advantage:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Direct investment (equipment & infrastructure): R598K–954K</li>
                <li>Total 5-year project cost including labour: R723K–1.42M</li>
                <li>Revenue: R1.08M-3M (wood sales)</li>
                <li>Net positive: R486K-2.05M</li>
                <li>Plus avoided cost: R1.8M-6M</li>
              </ul>
              <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.textGreen} ${styles.mt2}`}>
                Total value: R2.29M-8.05M
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

export function SekelbosSection1() {
  return (
    <Section
      title="SECTION 1: SEKELBOS BIOLOGY & CLEARANCE STRATEGY"
      subtitle="Understanding the problem and the five-phase biological solution"
    >
      <Card title="1.1 Understanding Sekelbos">
        <div className={styles.spaceY4}>
          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>
              Dichrostachys cinerea Characteristics:
            </h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Growth: Thorny shrub/small tree, 2-7m height</li>
              <li>Root system: Extensive lateral spread (5-10m), deep taproot (3-5m)</li>
              <li>Reproduction: Seeds (viable 5-10 years) + root suckers</li>
              <li>Adaptation: Thrives in degraded, compacted soils, 200-600mm rainfall</li>
              <li>Encroachment causes: Overgrazing, fire suppression, soil degradation</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Why Conventional Methods Fail:</h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Mechanical clearing: Cuts above-ground, roots resprout within months</li>
              <li>Chemical control: Expensive, environmental concerns, regrowth from seed bank</li>
              <li>Fire: Stimulates germination, doesn't kill established roots</li>
              <li>Single-method approach: Doesn't address seeds, roots, and regrowth simultaneously</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="1.2 Five-Phase Biological Clearance" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <div className={`${styles.phaseBox} ${styles.phaseGreen}`}>
            <h4 className={`${styles.sectionHeading}`}>Phase 1: Goat Browsing (Weeks 1-4)</h4>
            <ul className={styles.enhancedList}>
              <li>
                <strong>Stocking:</strong> 30-50 goats per 10ha section
              </li>
              <li>
                <strong>Duration:</strong> 2-4 weeks (intensive browsing)
              </li>
              <li>
                <strong>Target:</strong> Leaves, young stems, seed pods, bark
              </li>
              <li>
                <strong>Result:</strong> 60-80% canopy reduction, stress on plant
              </li>
              <li>
                <strong>Timing:</strong> Spring/summer (active growth, maximum impact)
              </li>
              <li>
                <strong>Mechanism:</strong> Repeated defoliation depletes root reserves
              </li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseBlue}`}>
            <h4 className={`${styles.sectionHeading}`}>Phase 2: Mechanical Cutting + Wood Harvesting (Week 4-6)</h4>
            <ul className={styles.enhancedList}>
              <li>
                <strong>Method:</strong> Chainsaw cutting at ground level
              </li>
              <li>
                <strong>Sorting:</strong> By size for different markets
              </li>
              <li>Large stems (greater than 10cm diameter): Firewood, poles</li>
              <li>Medium stems (5-10cm): Braai wood, fence posts</li>
              <li>Small branches (less than 5cm): Chipping for mulch</li>
              <li>
                <strong>Revenue generation:</strong> Immediate cash flow
              </li>
              <li>
                <strong>Site preparation:</strong> Clear area for pig access
              </li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseOrange}`}>
            <h4 className={`${styles.sectionHeading}`}>Phase 3: Pig Rooting (Weeks 6-14)</h4>
            <ul className={styles.enhancedList}>
              <li>
                <strong>Stocking:</strong> 10-15 pigs per 5ha section
              </li>
              <li>
                <strong>Duration:</strong> 4-8 weeks (intensive rooting)
              </li>
              <li>
                <strong>Target:</strong> Root systems (20-30cm depth)
              </li>
              <li>
                <strong>Mechanism:</strong> Pigs dig for roots, expose to air, break into pieces
              </li>
              <li>
                <strong>Result:</strong> 80-90% root destruction, prevents resprouting
              </li>
              <li>
                <strong>Bonus:</strong> Soil aeration, organic matter incorporation
              </li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseYellow}`}>
            <h4 className={`${styles.sectionHeading}`}>Phase 4: Chicken Scratching (Weeks 14-16)</h4>
            <ul className={styles.enhancedList}>
              <li>
                <strong>Stocking:</strong> 200-300 chickens per 10ha
              </li>
              <li>
                <strong>Duration:</strong> 2-4 weeks (systematic coverage)
              </li>
              <li>
                <strong>Target:</strong> Exposed sekelbos seeds in soil
              </li>
              <li>
                <strong>Mechanism:</strong> Chickens scratch, consume seeds
              </li>
              <li>
                <strong>Result:</strong> 40-60% seed bank reduction
              </li>
              <li>
                <strong>Bonus:</strong> High-nitrogen fertilization (manure)
              </li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phasePurple}`}>
            <h4 className={`${styles.sectionHeading}`}>Phase 5: Cattle Maintenance (Ongoing)</h4>
            <ul className={styles.enhancedList}>
              <li>
                <strong>Method:</strong> High-density mob grazing
              </li>
              <li>
                <strong>Duration:</strong> 2-5 days per paddock, return every 40-60 days
              </li>
              <li>
                <strong>Target:</strong> Trample any seedlings, promote grass competition
              </li>
              <li>
                <strong>Result:</strong> Prevent regrowth, maintain cleared state
              </li>
              <li>
                <strong>Long-term:</strong> Grass establishment outcompetes sekelbos
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="1.3 Why This System Works" className={styles.cardSpacing}>
        <div className={styles.gridAuto}>
          <div>
            <h4 className={`${styles.sectionHeading}`}>Addresses All Regeneration Pathways:</h4>
            <ul className={styles.enhancedList}>
              <li>Above-ground biomass: Goats + mechanical cutting</li>
              <li>Root system: Pig rooting</li>
              <li>Seed bank: Chicken scratching</li>
              <li>Regrowth prevention: Cattle trampling + grass competition</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>Economic Advantages:</h4>
            <ul className={styles.enhancedList}>
              <li>Revenue generation (wood sales) vs pure cost</li>
              <li>Livestock productivity (meat, milk, eggs) while clearing</li>
              <li>Permanent solution (vs repeated treatments)</li>
              <li>Soil improvement (vs degradation from chemicals)</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>Ecological Benefits:</h4>
            <ul className={styles.enhancedList}>
              <li>Diverse manure inputs (4 species)</li>
              <li>Soil aeration and organic matter</li>
              <li>Grass species recovery</li>
              <li>Carbon sequestration (20-30% increase)</li>
            </ul>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export function SekelbosSection2() {
  return (
    <Section
      title="SECTION 2: WOOD PRODUCTS & MARKETS"
      subtitle="Revenue generation through sustainable wood harvesting"
    >
      <Card title="2.1 Sekelbos Wood Properties">
        <div className={styles.gridAuto}>
          <div>
            <h4 className={`${styles.sectionHeading}`}>Physical Characteristics:</h4>
            <ul className={styles.enhancedList}>
              <li>Density: 900-1,100 kg/m³ (very dense hardwood)</li>
              <li>Burning properties: High heat output, long burn time, minimal smoke</li>
              <li>Durability: Termite resistant, rot resistant</li>
              <li>Color: Dark brown heartwood, attractive grain</li>
              <li>Workability: Hard (requires sharp tools), takes polish well</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>Market Advantages:</h4>
            <ul className={styles.enhancedList}>
              <li>Excellent firewood (comparable to mopane, kameeldoring)</li>
              <li>Premium braai wood (high heat, good flavor)</li>
              <li>Durable fence posts (10-15 year lifespan)</li>
              <li>Attractive poles for construction/landscaping</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="2.2 Product Lines & Pricing" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <div>
            <h4 className={`${styles.sectionHeading}`}>Product 1: Firewood (Primary Market - 60% of volume)</h4>
            <div className={styles.productBox}>
              <div className={styles.spaceY2}>
                <div>
                  <p className={`${styles.textSm} ${styles.fontSemibold}`}>Specifications:</p>
                  <ul className={styles.enhancedList}>
                    <li>Cut to 30-40cm lengths</li>
                    <li>Split pieces 10-15cm diameter</li>
                    <li>Stacked in 1m³ units (loose or crated)</li>
                  </ul>
                </div>
                <div>
                  <p className={`${styles.textSm} ${styles.fontSemibold}`}>Pricing:</p>
                  <ul className={styles.enhancedList}>
                    <li>Fresh wood: R600-750 per m³</li>
                    <li>Seasoned (6-12 months): R800-900 per m³</li>
                    <li>Delivered (50km radius): +R150-250 per m³</li>
                  </ul>
                </div>
                <div>
                  <p className={`${styles.textSm} ${styles.fontSemibold}`}>Target Markets:</p>
                  <ul className={styles.enhancedList}>
                    <li>Households (winter heating)</li>
                    <li>Restaurants (pizza ovens, grills)</li>
                    <li>Lodges/game farms (fireplaces, bomas)</li>
                    <li>Butcheries (braai areas)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>Product 2: Braai Wood (Premium Market - 15% of volume)</h4>
            <div className={styles.productBox}>
              <div className={styles.spaceY2}>
                <div>
                  <p className={`${styles.textSm} ${styles.fontSemibold}`}>Specifications:</p>
                  <ul className={styles.enhancedList}>
                    <li>Cut to 20-30cm lengths</li>
                    <li>Split to 5-8cm diameter</li>
                    <li>Packaged in 10kg bags or 20kg boxes</li>
                  </ul>
                </div>
                <div>
                  <p className={`${styles.textSm} ${styles.fontSemibold}`}>Pricing:</p>
                  <ul className={styles.enhancedList}>
                    <li>10kg bags: R25-40 each (R2.50-4.00/kg)</li>
                    <li>20kg boxes: R45-70 each (R2.25-3.50/kg)</li>
                    <li>Bulk (100kg+): R2.00-3.00/kg</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>
              Product 3: Lapa/Boma Poles (Specialty Market - 10% of volume)
            </h4>
            <div className={styles.productBox}>
              <div>
                <p className={`${styles.textSm} ${styles.fontSemibold}`}>Pricing:</p>
                <ul className={styles.enhancedList}>
                  <li>2m poles (5-7cm): R30-45 each</li>
                  <li>3m poles (7-9cm): R45-60 each</li>
                  <li>4m poles (9-12cm): R60-90 each</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>Product 4: Fence Posts (Agricultural Market - 10% of volume)</h4>
            <div className={styles.productBox}>
              <div>
                <p className={`${styles.textSm} ${styles.fontSemibold}`}>Pricing:</p>
                <ul className={styles.enhancedList}>
                  <li>Untreated: R15-25 per post</li>
                  <li>Treated: R20-30 per post</li>
                  <li>Bulk (100+ posts): R12-20 per post</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>
              Product 5: Wood Chips/Mulch (Secondary Market - 5% of volume)
            </h4>
            <div className={styles.productBox}>
              <div>
                <p className={`${styles.textSm} ${styles.fontSemibold}`}>Pricing:</p>
                <ul className={styles.enhancedList}>
                  <li>Fresh chips: R150-250 per m³</li>
                  <li>Composted mulch: R250-350 per m³</li>
                  <li>Delivered (bulk loads): +R100-200 per m³</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card title="2.3 Revenue Projections by Product" className={styles.cardSpacing}>
        <p className={`${styles.textSm} ${styles.mb4}`}>
          The Year 1 projection of 150-250 m³ is based on clearing 50 hectares with an estimated usable wood density of
          3-5 m³/ha.
        </p>
        <Table
          headers={['Product', 'Volume', 'Price', 'Revenue']}
          rows={[
            ['Firewood', '90-150 m³', 'R700/m³', 'R63K-105K'],
            ['Braai wood', '23-38 m³', 'R3,000/m³', 'R69K-114K'],
            ['Poles', '15-25 m³', 'R600/m³', 'R9K-15K'],
            ['Fence posts', '15-25 m³', 'R400/m³', 'R6K-10K'],
            ['Wood chips', '8-13 m³', 'R200/m³', 'R2K-3K'],
            ['TOTAL Year 1', '150-250 m³', '', 'R149K-247K'],
          ]}
        />

        <div className={styles.tableSpacing}>
          <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>5-Year Revenue Projection:</h4>
          <Table
            headers={['Year', 'Ha Cleared', 'Wood Volume', 'Conservative', 'Optimistic']}
            rows={[
              ['1', '50ha', '150-250 m³', 'R90K-150K', 'R150K-250K'],
              ['2', '100ha', '300-500 m³', 'R180K-300K', 'R300K-500K'],
              ['3', '120ha', '360-600 m³', 'R216K-360K', 'R360K-600K'],
              ['4', '165ha', '495-825 m³', 'R297K-495K', 'R495K-825K'],
              ['5', '165ha', '495-825 m³', 'R297K-495K', 'R495K-825K'],
              ['TOTAL', '600ha', '1,800-3,000 m³', 'R1.08M-1.8M', 'R1.8M-3M'],
            ]}
          />
        </div>
      </Card>
    </Section>
  );
}

export function SekelbosSection3() {
  return (
    <Section
      title="SECTION 3: OPERATIONS & EQUIPMENT"
      subtitle="Infrastructure and tools required for efficient operations"
    >
      <Card title="3.1 Wood Harvesting Equipment">
        <div className={styles.spaceY4}>
          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Essential Equipment (Year 1):</h4>
            <Table
              headers={['Item', 'Specification', 'Cost', 'Lifespan']}
              rows={[
                ['Chainsaw', 'Stihl MS 362 or equivalent (59cc, professional)', 'R8,000-12,000', '5-7 years'],
                ['Spare chain', '3 chains (rotation for sharpening)', 'R800-1,200', '1 year each'],
                ['Safety gear', 'Helmet, visor, chaps, gloves, boots', 'R3,000-5,000', '2-3 years'],
                ['Fuel/oil', '2-stroke mix, bar oil (monthly supply)', 'R500-800/month', 'Ongoing'],
                ['Sharpening kit', 'Files, depth gauge, vise', 'R500-800', '3-5 years'],
                ['Splitting tools', 'Maul, wedges, sledgehammer', 'R2,000-3,000', '10+ years'],
                ['Measuring tape', '50m tape for stacking', 'R300-500', '5+ years'],
                ['TOTAL YEAR 1', '', 'R15K-24K', ''],
              ]}
            />
          </div>

          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Additional Equipment (Year 2+):</h4>
            <Table
              headers={['Item', 'Specification', 'Cost', 'Timeline']}
              rows={[
                ['Wood chipper', 'PTO-driven or engine (10-15cm capacity)', 'R35K-60K', 'Year 2'],
                ['Trailer', '2-ton capacity for wood transport', 'R25K-40K', 'Year 1-2'],
                ['Tractor/bakkie', 'For hauling (may already exist on farm)', 'Existing', 'N/A'],
                ['Packaging supplies', 'Bags, labels, strapping for braai wood', 'R5K-10K', 'Year 2'],
                ['Moisture meter', 'Digital meter for wood quality control', 'R800-1,500', 'Year 2'],
                ['TOTAL YEAR 2+', '', 'R66K-112K', ''],
              ]}
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              <strong>Total Equipment Investment:</strong> R81K-136K (phased over 2 years)
            </p>
          </div>
        </div>
      </Card>

      <Card title="3.2 Labor Requirements" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Clearing Crew (Per Hectare):</h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>2-3 laborers</li>
              <li>2-3 days per hectare (cutting, sorting, stacking)</li>
              <li>R200-300 per laborer per day</li>
              <li>Cost per hectare: R800-2,700</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Annual Labor Costs:</h4>
            <Table
              headers={['Year', 'Hectares', 'Labor Days', 'Cost']}
              rows={[
                ['1', '50ha', '100-150 days', 'R20K-45K'],
                ['2', '100ha', '200-300 days', 'R40K-90K'],
                ['3', '120ha', '240-360 days', 'R48K-108K'],
                ['4-5', '165ha', '330-495 days', 'R66K-149K'],
                ['5-Year Total', '', '', 'R214K-542K'],
              ]}
            />
          </div>
        </div>
      </Card>

      <Card title="3.3 Operational Workflow" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <div className={`${styles.phaseBox} ${styles.phaseGreen}`}>
            <h4 className={`${styles.sectionHeading}`}>Month 1-2: Site Selection & Preparation</h4>
            <ul className={styles.enhancedList}>
              <li>Identify 50ha target area (Year 1)</li>
              <li>Assess sekelbos density and accessibility</li>
              <li>Plan access routes for wood removal</li>
              <li>Deploy goats for initial browsing (2-4 weeks)</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseBlue}`}>
            <h4 className={`${styles.sectionHeading}`}>Month 2-3: Cutting & Primary Processing</h4>
            <ul className={styles.enhancedList}>
              <li>Chainsaw cutting (after goat browsing)</li>
              <li>Sort wood by size/quality</li>
              <li>Stack firewood (1m³ units)</li>
              <li>Select poles and fence posts</li>
              <li>Chip small branches (if chipper available)</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseOrange}`}>
            <h4 className={`${styles.sectionHeading}`}>Month 3-4: Seasoning & Storage</h4>
            <ul className={styles.enhancedList}>
              <li>Stack firewood for seasoning (6-12 months for premium pricing)</li>
              <li>Store poles under cover (prevent checking)</li>
              <li>Immediate sales: Fresh firewood, poles, posts</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phasePurple}`}>
            <h4 className={`${styles.sectionHeading}`}>Month 4-6: Pig Rooting Phase</h4>
            <ul className={styles.enhancedList}>
              <li>Deploy pigs to cleared sections (4-8 weeks)</li>
              <li>Monitor root destruction progress</li>
              <li>Plan next clearing section</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseYellow}`}>
            <h4 className={`${styles.sectionHeading}`}>Ongoing: Sales & Marketing</h4>
            <ul className={styles.enhancedList}>
              <li>Farm gate sales (immediate cash flow)</li>
              <li>Delivery service (scheduled routes)</li>
              <li>Build bulk contracts (lodges, restaurants)</li>
              <li>Social media marketing (Facebook, WhatsApp groups)</li>
            </ul>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export function SekelbosSection4() {
  return (
    <Section
      title="SECTION 4: CLEARANCE TIMELINE & TARGETS"
      subtitle="Five-year phased approach to complete property clearance"
    >
      <div className={styles.cardContainer}>
        <Card title="Year 1: Proof of Concept (50ha)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Target Areas:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Easiest access (near roads, water points)</li>
                <li>Moderate sekelbos density (not too thick)</li>
                <li>Good soil potential (rapid grass recovery)</li>
                <li>Visible from main areas (demonstrate progress)</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Livestock Deployment:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Goats: 20-30 (purchase 15-25 + existing 6)</li>
                <li>Pigs: 10-15 (breed from existing 4)</li>
                <li>Chickens: 100-150 (purchase 87-137 + existing 13)</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Expected Results:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>50ha cleared (8% of property)</li>
                <li>150-250 m³ wood harvested</li>
                <li>R90K-250K wood revenue</li>
                <li>System proven, lessons learned</li>
                <li>Grass establishing on cleared areas</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Key Success Factors:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Goat browsing effectiveness (60-80% canopy reduction)</li>
                <li>Pig rooting thoroughness (80-90% root destruction)</li>
                <li>Wood sales channels established</li>
                <li>Cash flow positive by Month 6</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="Year 2: Scaling (100ha)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Target Areas:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Expand from Year 1 success zones</li>
                <li>Moderate to heavy sekelbos density</li>
                <li>Mix of easy and challenging terrain</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Expected Results:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>100ha cleared (cumulative 150ha, 25% of property)</li>
                <li>300-500 m³ wood harvested</li>
                <li>R180K-500K wood revenue</li>
                <li>Return to Year 1 areas (maintenance browsing)</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Key Milestones:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Purchase wood chipper (value-added products)</li>
                <li>Establish bulk contracts (3-5 customers)</li>
                <li>Train additional labor (seasonal crew)</li>
                <li>Documented regrowth rate less than 10% (Year 1 areas)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="Year 3: Optimization (120ha)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Expected Results:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>120ha cleared (cumulative 270ha, 45% of property)</li>
                <li>360-600 m³ wood harvested</li>
                <li>R216K-600K wood revenue</li>
                <li>Revenue streams mature, cash flow strong</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Key Achievements:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Value-added products (braai wood bags, treated posts)</li>
                <li>Premium pricing (seasoned firewood)</li>
                <li>Established brand recognition</li>
                <li>Repeat customers (lodges, restaurants)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card title="Year 4-5: Completion (165ha each year)">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Year 4 Results:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>165ha cleared (cumulative 435ha, 73% of property)</li>
                <li>495-825 m³ wood harvested</li>
                <li>R297K-825K wood revenue</li>
              </ul>
            </div>

            <div>
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Year 5 Results:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>165ha cleared (cumulative 600ha, 100% complete)</li>
                <li>495-825 m³ wood harvested</li>
                <li>R297K-825K wood revenue</li>
                <li>Entire property cleared and maintained</li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Final Status:</h4>
              <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
                <li>Sekelbos controlled permanently (rotational grazing maintains)</li>
                <li>Wood sales transition to maintenance volume (50-100 m³/year)</li>
                <li>Property value increased R2M-4M (cleared vs degraded)</li>
                <li>Cattle carrying capacity increased 40-70%</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Card title="4.2 Clearance Cost Summary" className={styles.cardSpacing}>
        <Table
          headers={['Category', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Total']}
          rows={[
            ['Equipment', 'R15K-24K', 'R66K-112K', 'R5K-10K', 'R5K-10K', 'R5K-10K', 'R96K-166K'],
            ['Labor (clearing)', 'R20K-45K', 'R40K-90K', 'R48K-108K', 'R66K-149K', 'R66K-149K', 'R240K-541K'],
            ['Infrastructure', 'R50K-75K', 'R30K-50K', 'R20K-35K', 'R10K-20K', 'R10K-20K', 'R120K-200K'],
            ['ANNUAL TOTAL', 'R148K-288K', 'R192K-354K', 'R125K-247K', 'R129K-265K', 'R129K-265K', 'R723K-1.42M'],
          ]}
        />

        <div className={`${styles.highlightBox} ${styles.highlightSuccess}`}>
          <h4 className={`${styles.sectionHeading}`}>Revenue vs Cost:</h4>
          <ul className={styles.enhancedList}>
            <li>Total investment: R723K-1.42M</li>
            <li>Total wood revenue: R1.08M-3M</li>
            <li>Net profit (wood only): R357K-1.58M</li>
            <li>Plus avoided clearing cost: R1.8M-6M</li>
            <li className={`${styles.fontBold} ${styles.textGreen}`}>Total value created: R2.16M-7.58M</li>
          </ul>
        </div>
      </Card>

      <Card title="Note on Clearance Schedules" className={styles.cardSpacing}>
        <p className={`${styles.textSm}`}>
          The 5-year, 600ha schedule presented in this document is an illustrative model designed to show the full potential of the biological clearance system over the entire property. In total, 600 ha is treated over 5 years – 360–420 ha heavy sekelbos plus lighter follow‑up and maintenance passes on remaining areas.
        </p>
        <p className={`${styles.textSm} ${styles.mt4}`}>
          The interactive proposal uses a more conservative 420ha schedule for its financial projections. You can adjust the yearly clearance rates in the floating controls panel to model different scenarios.
        </p>
      </Card>
    </Section>
  );
}

export function SekelbosSection5() {
  return (
    <Section
      title="SECTION 5: MARKETING & SALES STRATEGY"
      subtitle="Building sustainable revenue through diverse sales channels"
    >
      <Card title="5.1 Target Markets">
        <div className={styles.grid2}>
          <div className={`${styles.phaseBox} ${styles.phaseGreen}`}>
            <h4 className={`${styles.sectionHeading}`}>Primary Market: Residential (40% of sales)</h4>
            <ul className={styles.enhancedList}>
              <li>Households within 50km radius</li>
              <li>Winter heating demand (May-August peak)</li>
              <li>Fireplace, indoor wood stoves</li>
              <li>Price sensitivity: Moderate (R700-850/m³)</li>
              <li>Volume: 1-3 m³ per customer per season</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseBlue}`}>
            <h4 className={`${styles.sectionHeading}`}>Secondary Market: Hospitality (30% of sales)</h4>
            <ul className={styles.enhancedList}>
              <li>Lodges, game farms, guesthouses</li>
              <li>Year-round demand (fireplaces, bomas, braais)</li>
              <li>Premium quality expectations</li>
              <li>Price sensitivity: Low (R800-900/m³)</li>
              <li>Volume: 10-50 m³ per customer per year</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseOrange}`}>
            <h4 className={`${styles.sectionHeading}`}>Tertiary Market: Commercial (20% of sales)</h4>
            <ul className={styles.enhancedList}>
              <li>Restaurants (pizza ovens, grills, braai areas)</li>
              <li>Butcheries (in-store braai demonstrations)</li>
              <li>Bakeries (wood-fired ovens)</li>
              <li>Volume: 5-20 m³ per customer per year</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phasePurple}`}>
            <h4 className={`${styles.sectionHeading}`}>Niche Market: Agricultural/Construction (10% of sales)</h4>
            <ul className={styles.enhancedList}>
              <li>Farmers (fence posts)</li>
              <li>Landscaping companies (poles, mulch)</li>
              <li>Construction (lapa poles)</li>
              <li>Volume: Variable (project-based)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="5.2 Sales Channels" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <div>
            <h4 className={`${styles.sectionHeading}`}>Channel 1: Farm Gate Sales (30% of revenue)</h4>
            <div className={styles.productBox}>
              <ul className={styles.enhancedList}>
                <li>Customer pickup at farm</li>
                <li>Cash/EFT payment</li>
                <li>No delivery cost</li>
                <li>Immediate cash flow</li>
                <li>Pricing: Standard (R700-800/m³ firewood)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>Channel 2: Delivery Service (40% of revenue)</h4>
            <div className={styles.productBox}>
              <ul className={styles.enhancedList}>
                <li>Bakkie/trailer delivery within 50km</li>
                <li>Scheduled routes (Wednesdays, Saturdays)</li>
                <li>Minimum order: 0.5 m³ or R500</li>
                <li>Delivery fee: R150-250 (depending on distance)</li>
                <li>Pricing: Standard + delivery fee</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>Channel 3: Bulk Contracts (25% of revenue)</h4>
            <div className={styles.productBox}>
              <ul className={styles.enhancedList}>
                <li>Annual supply agreements</li>
                <li>Lodges, restaurants, large consumers</li>
                <li>Scheduled deliveries (monthly/quarterly)</li>
                <li>Volume discounts (10-20% off retail)</li>
                <li>Pricing: R600-700/m³ (bulk discount)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className={`${styles.sectionHeading}`}>Channel 4: Retail Partnerships (5% of revenue)</h4>
            <div className={styles.productBox}>
              <ul className={styles.enhancedList}>
                <li>Hardware stores, butcheries, farm co-ops</li>
                <li>Consignment or wholesale</li>
                <li>Braai wood bags (10kg, 20kg)</li>
                <li>Fence posts, poles</li>
                <li>Pricing: Wholesale (40-50% of retail)</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card title="5.3 Marketing Tactics" className={styles.cardSpacing}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>
              Online Marketing (Low Cost, High Reach):
            </h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Facebook page: "Zeerust Sekelbos Firewood"</li>
              <li>WhatsApp Business: Broadcast lists, status updates</li>
              <li>Facebook Marketplace: Individual listings</li>
              <li>Community groups: Zeerust, Rustenburg, Mafikeng</li>
              <li>Instagram: Visual content (stacked wood, delivery photos)</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>
              Offline Marketing (Local Presence):
            </h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Roadside signage: R49/R52 highways</li>
              <li>Flyers: Hardware stores, co-ops, community boards</li>
              <li>Word-of-mouth: Referral discounts (R50 off)</li>
              <li>Local newspapers: Classified ads (seasonal, winter peak)</li>
              <li>Community events: Farmers markets, agricultural shows</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Branding & Messaging:</h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Brand name: "[Farm Name] Indigenous Hardwood"</li>
              <li>Tagline: "Sustainable Bush Clearing, Premium Firewood"</li>
              <li>Key messages: Indigenous hardwood, sustainable land management, high heat output</li>
            </ul>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export function SekelbosSection6() {
  return (
    <Section title="SECTION 6: RISK MANAGEMENT" subtitle="Identifying and mitigating potential challenges">
      <Card title="6.1 Operational Risks">
        <div className={styles.spaceY4}>
          <div className={`${styles.phaseBox} ${styles.phaseRed}`}>
            <h4 className={`${styles.sectionHeading}`}>Risk 1: Equipment Breakdown</h4>
            <p className={styles.textSm}>
              <strong>Impact:</strong> Lost clearing days, delayed wood sales
            </p>
            <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.mt2}`}>Mitigation:</p>
            <ul className={styles.enhancedList}>
              <li>Spare chainsaw chain (3 chains in rotation)</li>
              <li>Regular maintenance schedule</li>
              <li>Backup chainsaw (Year 2+)</li>
              <li>Local repair contacts identified</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseOrange}`}>
            <h4 className={`${styles.sectionHeading}`}>Risk 2: Labor Availability</h4>
            <p className={styles.textSm}>
              <strong>Impact:</strong> Clearing delays, missed sales opportunities
            </p>
            <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.mt2}`}>Mitigation:</p>
            <ul className={styles.enhancedList}>
              <li>Build reliable crew (2-3 regular laborers)</li>
              <li>Pay competitive wages (R250-300/day)</li>
              <li>Seasonal planning (avoid planting/harvest times)</li>
              <li>Train multiple people (cross-training)</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseYellow}`}>
            <h4 className={`${styles.sectionHeading}`}>Risk 3: Livestock Health Issues</h4>
            <p className={styles.textSm}>
              <strong>Impact:</strong> Reduced clearing effectiveness, mortality losses
            </p>
            <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.mt2}`}>Mitigation:</p>
            <ul className={styles.enhancedList}>
              <li>Preventative veterinary care (vaccinations, deworming)</li>
              <li>Quarantine new animals (disease prevention)</li>
              <li>Indigenous breeds (disease resistance)</li>
              <li>Backup livestock sources identified</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="6.2 Market Risks" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <div className={`${styles.phaseBox} ${styles.phaseBlue}`}>
            <h4 className={`${styles.sectionHeading}`}>Risk 1: Seasonal Demand Fluctuation</h4>
            <p className={styles.textSm}>
              <strong>Impact:</strong> Cash flow gaps in summer months
            </p>
            <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.mt2}`}>Mitigation:</p>
            <ul className={styles.enhancedList}>
              <li>Build seasoned wood inventory (sell in winter at premium)</li>
              <li>Diversify products (braai wood year-round demand)</li>
              <li>Bulk contracts (smooth revenue throughout year)</li>
              <li>Alternative income (livestock sales)</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phasePurple}`}>
            <h4 className={`${styles.sectionHeading}`}>Risk 2: Competition (Other Firewood Suppliers)</h4>
            <p className={styles.textSm}>
              <strong>Impact:</strong> Price pressure, lost market share
            </p>
            <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.mt2}`}>Mitigation:</p>
            <ul className={styles.enhancedList}>
              <li>Differentiation (indigenous hardwood, sustainability story)</li>
              <li>Quality focus (superior burning properties)</li>
              <li>Customer service (reliable delivery, consistent quality)</li>
              <li>Bulk contracts (lock in customers)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="6.3 Environmental Risks" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <div className={`${styles.phaseBox} ${styles.phaseGreen}`}>
            <h4 className={`${styles.sectionHeading}`}>Risk 1: Drought (Below 315mm Rainfall)</h4>
            <p className={styles.textSm}>
              <strong>Impact:</strong> Slow grass recovery, livestock stress, reduced clearing pace
            </p>
            <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.mt2}`}>Mitigation:</p>
            <ul className={styles.enhancedList}>
              <li>Drought-adapted livestock (indigenous breeds)</li>
              <li>Flexible clearing schedule (pause in severe drought)</li>
              <li>Focus on wood sales (less dependent on grass recovery)</li>
              <li>Emergency fodder reserves</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseRed}`}>
            <h4 className={`${styles.sectionHeading}`}>Risk 2: Fire</h4>
            <p className={styles.textSm}>
              <strong>Impact:</strong> Loss of stacked wood inventory, infrastructure damage
            </p>
            <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.mt2}`}>Mitigation:</p>
            <ul className={styles.enhancedList}>
              <li>Firebreaks around wood storage areas</li>
              <li>Separate stacks (limit fire spread)</li>
              <li>Insurance coverage</li>
              <li>Wet wood storage areas (reduce fire risk)</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseAmber}`}>
            <h4 className={`${styles.sectionHeading}`}>Risk 3: Sekelbos Regrowth</h4>
            <p className={styles.textSm}>
              <strong>Impact:</strong> Clearing failure, repeated costs, lost value
            </p>
            <p className={`${styles.textSm} ${styles.fontSemibold} ${styles.mt2}`}>Mitigation:</p>
            <ul className={styles.enhancedList}>
              <li>Thorough root destruction (pig rooting)</li>
              <li>Seed bank reduction (chicken scratching)</li>
              <li>Maintenance grazing (cattle, goats)</li>
              <li>Monitor regrowth (early intervention if greater than 10%)</li>
            </ul>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export function SekelbosSection7() {
  return (
    <Section title="SECTION 7: SUCCESS METRICS & MONITORING" subtitle="Key performance indicators and tracking systems">
      <Card title="7.1 Key Performance Indicators (KPIs)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Biological Metrics:</h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Sekelbos canopy cover reduction: Target 80-90% per treated area</li>
              <li>Root destruction effectiveness: Target 80-90%</li>
              <li>Grass species recovery: Target 30-50% increase in diversity</li>
              <li>Regrowth rate: Target less than 10% on cleared areas</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Operational Metrics:</h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Hectares cleared per year: Target 50-165ha annually</li>
              <li>Wood volume harvested: Target 150-825 m³ annually</li>
              <li>Clearing cost per hectare: Target less than R2,000</li>
              <li>Labor efficiency: Target 2-3 days per hectare</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Financial Metrics:</h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Revenue per hectare cleared: Target R1,800-5,000</li>
              <li>Gross margin: Target 60-70%</li>
              <li>Cash flow positive: Target Month 6</li>
              <li>ROI: Target 300-500% over 5 years</li>
            </ul>
          </div>

          <div>
            <h4 className={`${styles.fontSemibold} ${styles.textSm} ${styles.mb2}`}>Customer Metrics:</h4>
            <ul className={`${styles.spaceY1} ${styles.textSm} ${styles.listDisc}`}>
              <li>Customer acquisition: Target 20-30 customers Year 1</li>
              <li>Repeat customer rate: Target 60-70%</li>
              <li>Bulk contracts: Target 3-5 by Year 2</li>
              <li>Customer satisfaction: Target greater than 90%</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="7.2 Monitoring Schedule" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <div className={`${styles.phaseBox} ${styles.phaseGreen}`}>
            <h4 className={`${styles.sectionHeading}`}>Weekly:</h4>
            <ul className={styles.enhancedList}>
              <li>Wood sales volume and revenue</li>
              <li>Customer inquiries and orders</li>
              <li>Livestock health checks</li>
              <li>Equipment condition</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseBlue}`}>
            <h4 className={`${styles.sectionHeading}`}>Monthly:</h4>
            <ul className={styles.enhancedList}>
              <li>Hectares cleared (cumulative)</li>
              <li>Wood inventory levels (stacked, seasoned)</li>
              <li>Cash flow analysis</li>
              <li>Customer acquisition and retention</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phaseOrange}`}>
            <h4 className={`${styles.sectionHeading}`}>Quarterly:</h4>
            <ul className={styles.enhancedList}>
              <li>Regrowth assessment (cleared areas)</li>
              <li>Grass recovery progress</li>
              <li>Cost per hectare analysis</li>
              <li>Marketing effectiveness review</li>
            </ul>
          </div>

          <div className={`${styles.phaseBox} ${styles.phasePurple}`}>
            <h4 className={`${styles.sectionHeading}`}>Annually:</h4>
            <ul className={styles.enhancedList}>
              <li>Full financial review (revenue, costs, profit)</li>
              <li>Clearing progress vs targets</li>
              <li>Customer satisfaction survey</li>
              <li>Strategic planning (next year targets)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Conclusion" className={styles.cardSpacing}>
        <div className={styles.spaceY4}>
          <p className={styles.textSm}>
            The Sekelbos Clearance & Wood Sales Enterprise offers a unique opportunity to:
          </p>

          <ul className={styles.enhancedList}>
            <li>Solve a major land degradation problem (240-360ha sekelbos encroachment)</li>
            <li>Generate significant revenue (R1.08M-3M over 5 years from wood sales)</li>
            <li>Avoid massive conventional costs (R1.8M-6M mechanical/chemical clearing)</li>
            <li>Create permanent solution (biological system prevents regrowth)</li>
            <li>Improve property value (R2M-4M increase from cleared land)</li>
            <li>Build sustainable business (ongoing maintenance wood sales after Year 5)</li>
          </ul>

          <div className={`${styles.highlightBox} ${styles.highlightSuccess}`}>
            <p className={`${styles.textSm} ${styles.fontBold} ${styles.textGreen}`}>
              Total Value Creation: R2.16M-7.58M (net wood profit + avoided costs)
            </p>
            <p className={`${styles.textSm} ${styles.mt2}`}>
              This is not just bush clearing—it's a profitable, sustainable land restoration enterprise that pays for
              itself while solving a critical environmental problem.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
