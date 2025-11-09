'use client';

import React from 'react';
import LandUseMap from '@/components/LandUseMap';
import CropRotationDiagram from '@/components/CropRotationDiagram';
import LivestockIntegrationFlow from '@/components/LivestockIntegrationFlow';
import styles from './operations.module.css';

export default function OperationsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Zeeplan Operations Overview</h1>
        <p>Interactive visualizations of our 600ha regenerative agriculture system</p>
      </header>

      <section className={styles.section}>
        <h2>1. Land Use Allocation</h2>
        <p className={styles.description}>
          Our 600 hectares are strategically divided into five operational zones, each optimized for specific
          agricultural activities that work together in an integrated system.
        </p>
        <div className={styles.diagramContainer}>
          <LandUseMap width={800} height={600} interactive={true} />
        </div>
        <div className={styles.zoneDetails}>
          <div className={styles.zoneCard}>
            <h3>🌳 Western Ridge (40-50%)</h3>
            <p>
              <strong>240-300ha:</strong> Primary focus on sekelbos clearance using biological methods. Goat browsing
              reduces canopy cover while generating wood sales revenue of R1.08-3M over 5 years.
            </p>
          </div>
          <div className={styles.zoneCard}>
            <h3>🐄 Central Plateau (25%)</h3>
            <p>
              <strong>150ha:</strong> Rotational grazing core supporting cattle and pigs. High-density mob grazing with
              104 LSU capacity creates resilient pasture systems.
            </p>
          </div>
          <div className={styles.zoneCard}>
            <h3>🌾 Eastern Corridor (20%)</h3>
            <p>
              <strong>120ha:</strong> Dryland crop rotation (maize, sorghum, sunflower) providing feed independence and
              cash crops with drought-adapted varieties.
            </p>
          </div>
          <div className={styles.zoneCard}>
            <h3>💧 Southern Foot - Mbewa (10%)</h3>
            <p>
              <strong>60ha:</strong> Irrigated vegetable production and lucerne with solar pump hub. High-value crops
              for direct sales and premium livestock feed.
            </p>
          </div>
          <div className={styles.zoneCard}>
            <h3>🌱 Northern Slope (5%)</h3>
            <p>
              <strong>30ha:</strong> Conservation and rehabilitation buffer zone. Biodiversity corridors and ecosystem
              services protection.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>2. Crop Rotation System</h2>
        <p className={styles.description}>
          Our regenerative crop rotation creates a closed-loop nitrogen cycle that reduces fertilizer costs by 40-60%
          while improving soil health. The 180ha rotation integrates with livestock systems for maximum resource
          efficiency.
        </p>
        <div className={styles.diagramContainer}>
          <CropRotationDiagram width={800} height={600} />
        </div>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h4>⚡ Reduced Input Costs</h4>
            <p>Lucerne fixes nitrogen naturally, reducing fertilizer needs by R50-80K annually</p>
          </div>
          <div className={styles.benefitCard}>
            <h4>🌱 Soil Health</h4>
            <p>Organic matter increases 2-3% over 5 years, improving water retention 30%</p>
          </div>
          <div className={styles.benefitCard}>
            <h4>💧 Water Efficiency</h4>
            <p>Better soil structure reduces irrigation needs and drought vulnerability</p>
          </div>
          <div className={styles.benefitCard}>
            <h4>🔄 Pest Management</h4>
            <p>Crop diversity breaks pest and disease cycles, reducing chemical use 70%</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>3. Livestock Integration Flow</h2>
        <p className={styles.description}>
          Four livestock species work together in a regenerative system where waste from one becomes input for another.
          This integration achieves R1.25-1.81M in annual livestock revenue by Year 5 while building soil health.
        </p>
        <div className={styles.diagramContainer}>
          <LivestockIntegrationFlow width={900} height={720} />
        </div>
        <div className={styles.livestockStats}>
          <div className={styles.statCard}>
            <h3>🐄 Cattle</h3>
            <p className={styles.statNumber}>104 LSU</p>
            <p className={styles.statDetail}>+44% capacity increase</p>
            <p className={styles.statRevenue}>R432-584K/year</p>
          </div>
          <div className={styles.statCard}>
            <h3>🐐 Goats</h3>
            <p className={styles.statNumber}>115 head</p>
            <p className={styles.statDetail}>+28% herd growth</p>
            <p className={styles.statRevenue}>R302-499K/year</p>
          </div>
          <div className={styles.statCard}>
            <h3>🐷 Pigs</h3>
            <p className={styles.statNumber}>250 finishers</p>
            <p className={styles.statDetail}>15 sows breeding</p>
            <p className={styles.statRevenue}>R220-375K/year</p>
          </div>
          <div className={styles.statCard}>
            <h3>🐔 Chickens</h3>
            <p className={styles.statNumber}>500 layers</p>
            <p className={styles.statDetail}>300 → 500 growth</p>
            <p className={styles.statRevenue}>R296-348K/year</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Learn More?</h2>
        <p>Explore detailed enterprise plans for each component of our integrated system</p>
        <div className={styles.ctaButtons}>
          <a href="/proposal" className={styles.primaryButton}>
            Full Proposal
          </a>
          <a href="/financials" className={styles.secondaryButton}>
            Financial Projections
          </a>
          <a href="/livestock" className={styles.secondaryButton}>
            Livestock Details
          </a>
          <a href="/crops" className={styles.secondaryButton}>
            Crop Systems
          </a>
        </div>
      </section>
    </div>
  );
}
