'use client';

import React from 'react';
import { PartnershipData, Enterprise } from '@/lib/partnershipData';
import { formatCurrency } from '@/lib/formatting';
import { Section, Card } from './UIComponents';
import styles from './TransformationPlan.module.css';

interface TransformationPlanProps {
  data: PartnershipData;
}

// Helper function to calculate revenue for a single enterprise
function calculateEnterpriseRevenue(enterprise: Enterprise): [number, number] {
  if (!enterprise.enabled) return [0, 0];
  
  if (enterprise.type === 'livestock') {
    const totalAnimals = enterprise.hectares * (enterprise.density ?? 0);
    const animalsSold = totalAnimals * ((enterprise.offtakeRate ?? 0) / 100);
    return [
      animalsSold * (enterprise.marketPrice?.[0] ?? 0),
      animalsSold * (enterprise.marketPrice?.[1] ?? 0)
    ];
  } else if (enterprise.type === 'crop') {
    return [
      enterprise.hectares * (enterprise.revenuePerHectare?.[0] ?? 0),
      enterprise.hectares * (enterprise.revenuePerHectare?.[1] ?? 0)
    ];
  }
  return [0, 0];
}

// Helper to get enterprise revenue by id
function getEnterpriseRevenueById(enterprises: Enterprise[], id: string): [number, number] {
  const enterprise = enterprises.find(e => e.id === id);
  return enterprise ? calculateEnterpriseRevenue(enterprise) : [0, 0];
}

export function TransformationPlan({ data }: TransformationPlanProps) {
  const years = [
    { index: 0, key: 'year1', title: 'Year 1: Foundation', phase: 'Prove-It Phase' },
    { index: 1, key: 'year2', title: 'Year 2: Expansion', phase: 'Earn-In Phase' },
    { index: 2, key: 'year3', title: 'Year 3: Maturity', phase: 'Transition Phase' },
    { index: 3, key: 'year4', title: 'Year 4: Optimization', phase: 'Full Partnership' },
    { index: 4, key: 'year5', title: 'Year 5: Steady State', phase: 'Full Partnership' },
  ];

  // Calculate enterprise revenues
  const cattleRevenue = getEnterpriseRevenueById(data.enterprises, 'cattle');
  const goatsRevenue = getEnterpriseRevenueById(data.enterprises, 'goats');
  const pigsRevenue = getEnterpriseRevenueById(data.enterprises, 'pigs');
  const chickensRevenue = getEnterpriseRevenueById(data.enterprises, 'chickens');
  const cropsRevenue = getEnterpriseRevenueById(data.enterprises, 'crops');

  return (
    <Section
      title="5-Year Transformation Plan"
      subtitle="Phased approach to regenerative agriculture and capacity expansion"
    >
      <div className={styles.yearsContainer}>
        {years.map(({ key, title, phase }, i) => {
          const yearData = data.yearlyTargets[i];
          const equity = data.equityStructure[i];
          
          // Calculate sekelbos revenue for this year
          const sekelbosRevenue: [number, number] = [
            yearData.sekelbosCleared * data.sekelbosRevenuePerHectare[0],
            yearData.sekelbosCleared * data.sekelbosRevenuePerHectare[1]
          ];

          return (
            <Card key={key} title={title} className={styles.yearCard}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseBadge}>{phase}</span>
                <span className={styles.equityText}>Hans Equity: {equity.hans}%</span>
              </div>

              <div className={styles.objectivesGrid}>
                <div>
                  <h5 className={styles.sectionTitle}>Key Objectives</h5>
                  <ul className={styles.objectivesList}>
                    <li>• Clear {yearData.sekelbosCleared}ha sekelbos</li>
                    <li>• Target stocking: {data.targetLSU} LSU</li>
                    <li>
                      • Sekelbos revenue: {formatCurrency(sekelbosRevenue[0])}-
                      {formatCurrency(sekelbosRevenue[1])}
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className={styles.sectionTitle}>Revenue Streams</h5>
                  <ul className={styles.objectivesList}>
                    <li>
                      • Cattle: {formatCurrency(cattleRevenue[0])}-{formatCurrency(cattleRevenue[1])}
                    </li>
                    <li>
                      • Goats: {formatCurrency(goatsRevenue[0])}-{formatCurrency(goatsRevenue[1])}
                    </li>
                    <li>
                      • Pigs: {formatCurrency(pigsRevenue[0])}-{formatCurrency(pigsRevenue[1])}
                    </li>
                    <li>
                      • Chickens: {formatCurrency(chickensRevenue[0])}-
                      {formatCurrency(chickensRevenue[1])}
                    </li>
                    <li>
                      • Crops: {formatCurrency(cropsRevenue[0])}-{formatCurrency(cropsRevenue[1])}
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.costsBox}>
                <p className={styles.costsText}>
                  <strong>Costs:</strong> {formatCurrency(yearData.otherCosts[0])}-{formatCurrency(yearData.otherCosts[1])}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <Card title="Core Strategy" className={styles.coreStrategyCard}>
        <div className={styles.strategyGrid}>
          <div className={`${styles.strategyBox} ${styles.strategyBoxGreen}`}>
            <h5 className={`${styles.strategyTitle} ${styles.strategyTitleGreen}`}>🌿 Sekelbos Clearing</h5>
            <p className={styles.strategyText}>50ha/year removal generates revenue + capacity expansion</p>
          </div>

          <div className={`${styles.strategyBox} ${styles.strategyBoxBlue}`}>
            <h5 className={`${styles.strategyTitle} ${styles.strategyTitleBlue}`}>📊 Diversification</h5>
            <p className={styles.strategyText}>
              8+ revenue streams: cattle, goats (meat + dairy), pigs, chickens, crops, wood
            </p>
          </div>

          <div className={`${styles.strategyBox} ${styles.strategyBoxPurple}`}>
            <h5 className={`${styles.strategyTitle} ${styles.strategyTitlePurple}`}>💼 Systems</h5>
            <p className={styles.strategyText}>Financial tracking, production optimization, KPI management</p>
          </div>

          <div className={`${styles.strategyBox} ${styles.strategyBoxOrange}`}>
            <h5 className={`${styles.strategyTitle} ${styles.strategyTitleOrange}`}>🎯 Marketing</h5>
            <p className={styles.strategyText}>Direct-to-consumer, premium pricing, farm shop, branding</p>
          </div>

          <div className={`${styles.strategyBox} ${styles.strategyBoxRed}`}>
            <h5 className={`${styles.strategyTitle} ${styles.strategyTitleRed}`}>⚡ Efficiency</h5>
            <p className={styles.strategyText}>Process optimization, cost savings, strategic planning</p>
          </div>

          <div className={`${styles.strategyBox} ${styles.strategyBoxTeal}`}>
            <h5 className={`${styles.strategyTitle} ${styles.strategyTitleTeal}`}>🤝 Partnership</h5>
            <p className={styles.strategyText}>Performance-based milestones, family control maintained</p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
