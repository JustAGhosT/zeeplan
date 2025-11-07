'use client';

import React from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import { calculateBaseline, calculateFiveYearSummary, formatRange, formatCurrency } from '@/lib/calculations';
import { Section, Card, MetricCard, Table } from './UIComponents';
import styles from './ExecutiveSummary.module.css';

interface ExecutiveSummaryProps {
  data: PartnershipData;
}

export function ExecutiveSummary({ data }: ExecutiveSummaryProps) {
  const baseline = calculateBaseline(data);
  const summary = calculateFiveYearSummary(data);
  
  const hansInvestment = data.hansLivestockValue;
  const hansReturns = summary.cumulative.hans;
  
  return (
    <Section
      title="Executive Summary"
      subtitle="Zero-cash entry, sweat equity partnership in 600ha regenerative agriculture venture"
    >
      <div className={styles.metricsGrid}>
        <MetricCard
          label="Land Size"
          value={`${data.landSize} ha`}
        />
        <MetricCard
          label="Current Baseline Revenue"
          value={formatRange(baseline.revenue)}
        />
        <MetricCard
          label="Year 5 Target Revenue"
          value={formatRange(summary.year5.revenue)}
          change={`+${Math.round(((summary.year5.revenue[0] / baseline.revenue[0]) - 1) * 100)}% growth`}
        />
        <MetricCard
          label="Hans's 5-Year Returns"
          value={formatRange(hansReturns)}
          change={`${formatCurrency(hansInvestment[0])}-${formatCurrency(hansInvestment[1])} invested`}
        />
      </div>

      <div className={styles.cardsGrid}>
        <Card title="The Farm (Current State)">
          <ul className={styles.list}>
            <li><strong>Location:</strong> Zeerust, North West Province, South Africa</li>
            <li><strong>Size:</strong> {data.landSize} hectares Bushveld</li>
            <li><strong>Current owners:</strong> Oom Willie (50%) + Eben (50%) - Family farm</li>
            <li><strong>Current stocking:</strong> {data.currentLSU} LSU cattle</li>
            <li><strong>Sekelbos encroachment:</strong> {data.sekelbosEncroachment}% of land</li>
            <li><strong>Current revenue:</strong> {formatRange(baseline.revenue)}/year</li>
          </ul>
        </Card>

        <Card title="The Opportunity">
          <ul className={styles.list}>
            <li><strong>Hans's Investment:</strong> {formatRange(hansInvestment)} livestock + R0 cash</li>
            <li><strong>5-Year Returns:</strong> {formatRange(hansReturns)}</li>
            <li><strong>ROI:</strong> 1,870-3,400%</li>
            <li><strong>Target Stocking:</strong> {data.targetLSU} LSU (+{Math.round(((data.targetLSU / data.currentLSU) - 1) * 100)}%)</li>
            <li><strong>Revenue Diversification:</strong> 8+ revenue streams</li>
            <li><strong>Partnership Model:</strong> Performance-based, phased equity earn-in</li>
          </ul>
        </Card>
      </div>

      <Card title="Phased Equity Structure">
        <Table
          headers={['Year', 'Hans Equity', 'Performance Milestone', 'Hans Income']}
          rows={[
            [
              'Year 1',
              `${data.equityStructure.year1.hans}% (Prove-It)`,
              `Revenue ≥${formatCurrency(summary.year1.revenue[0])}`,
              formatRange(summary.year1.hansTotalIncome)
            ],
            [
              'Year 2',
              `${data.equityStructure.year2.hans}% (Earned)`,
              `Revenue ≥${formatCurrency(summary.year2.revenue[0])}`,
              formatRange(summary.year2.hansTotalIncome)
            ],
            [
              'Year 3',
              `${data.equityStructure.year3.hans}% (Earned)`,
              `Revenue ≥${formatCurrency(summary.year3.revenue[0])}`,
              formatRange(summary.year3.hansTotalIncome)
            ],
            [
              'Year 4-5',
              `${data.equityStructure.year4.hans}% (Full Partner)`,
              `Revenue ≥${formatCurrency(summary.year4.revenue[0])}+`,
              `${formatRange(summary.year4.hansTotalIncome)} / ${formatRange(summary.year5.hansTotalIncome)}`
            ],
          ]}
        />
        <p className={styles.finalStructure}>
          <strong>Final Structure:</strong> Oom Willie {data.equityStructure.year5.oomWillie}%, 
          Eben {data.equityStructure.year5.eben}%, 
          Hans {data.equityStructure.year5.hans}%
        </p>
      </Card>

      <Card title="5-Year Income Comparison" className={styles.comparisonCard}>
        <Table
          headers={['Partner', 'Current Income (5yr)', 'Future Income (5yr)', 'Growth']}
          rows={[
            [
              'Oom Willie',
              formatRange([baseline.profit[0] * 2.5, baseline.profit[1] * 2.5]),
              formatRange(summary.cumulative.oomWillie),
              `+${Math.round(((summary.cumulative.oomWillie[0] / (baseline.profit[0] * 2.5)) - 1) * 100)}%`
            ],
            [
              'Eben',
              formatRange([baseline.profit[0] * 2.5, baseline.profit[1] * 2.5]),
              formatRange(summary.cumulative.eben),
              `+${Math.round(((summary.cumulative.eben[0] / (baseline.profit[0] * 2.5)) - 1) * 100)}%`
            ],
            [
              'Hans',
              'R0',
              formatRange(summary.cumulative.hans),
              'N/A (new partner)'
            ],
          ]}
        />
      </Card>
    </Section>
  );
}
