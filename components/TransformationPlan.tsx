'use client';

import React from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import { formatCurrency } from '@/lib/formatting';
import { Section, Card } from './UIComponents';
import styles from './TransformationPlan.module.css';

interface TransformationPlanProps {
  data: PartnershipData;
}

export function TransformationPlan({ data }: TransformationPlanProps) {
  const years = [
    { index: 0, key: 'year1', title: 'Year 1: Foundation', phase: 'Prove-It Phase' },
    { index: 1, key: 'year2', title: 'Year 2: Expansion', phase: 'Earn-In Phase' },
    { index: 2, key: 'year3', title: 'Year 3: Maturity', phase: 'Transition Phase' },
    { index: 3, key: 'year4', title: 'Year 4: Optimization', phase: 'Full Partnership' },
    { index: 4, key: 'year5', title: 'Year 5: Steady State', phase: 'Full Partnership' },
  ];

  return (
    <Section
      title="5-Year Transformation Plan"
      subtitle="Phased approach to regenerative agriculture and capacity expansion"
    >
      <div className={styles.yearsContainer}>
        {years.map(({ index, key, title, phase }) => {
          const yearData = data.yearlyTargets[index];
          const equity = data.equityStructure[index];

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
                    <li>• Target stocking: {yearData.targetLSU} LSU</li>
                    <li>
                      • Sekelbos revenue: {formatCurrency(yearData.sekelbosRevenue[0])}-
                      {formatCurrency(yearData.sekelbosRevenue[1])}
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className={styles.sectionTitle}>Revenue Streams</h5>
                  <ul className={styles.objectivesList}>
                    <li>
                      • Cattle: {formatCurrency(yearData.cattleRevenue[0])}-{formatCurrency(yearData.cattleRevenue[1])}
                    </li>
                    <li>
                      • Goats: {formatCurrency(yearData.goatsRevenue[0])}-{formatCurrency(yearData.goatsRevenue[1])}
                    </li>
                    <li>
                      • Pigs: {formatCurrency(yearData.pigsRevenue[0])}-{formatCurrency(yearData.pigsRevenue[1])}
                    </li>
                    <li>
                      • Chickens: {formatCurrency(yearData.chickensRevenue[0])}-
                      {formatCurrency(yearData.chickensRevenue[1])}
                    </li>
                    <li>
                      • Crops: {formatCurrency(yearData.cropsRevenue[0])}-{formatCurrency(yearData.cropsRevenue[1])}
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.costsBox}>
                <p className={styles.costsText}>
                  <strong>Costs:</strong> {formatCurrency(yearData.costs[0])}-{formatCurrency(yearData.costs[1])}
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
