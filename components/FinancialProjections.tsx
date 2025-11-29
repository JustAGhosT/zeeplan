'use client';

import { calculateFinancialSummary, calculateROI } from '@/lib/calculations';
import { formatCurrency, formatRange } from '@/lib/formatting';
import React from 'react';
import styles from './FinancialProjections.module.css';
import { Card, Section, Table } from './UIComponents';
import { useStore } from '@/lib/store';

export function FinancialProjections() {
  const data = useStore((state) => state.data);
  const summary = calculateFinancialSummary(data);
  
  // Calculate net gain and ROI
  const netGain: [number, number] = [
    summary.cumulative.hans[0] - data.hansLivestockValue[1],
    summary.cumulative.hans[1] - data.hansLivestockValue[0]
  ];
  const roi = calculateROI(data.hansLivestockValue, netGain);

  return (
    <Section title="Financial Projections" subtitle="5-year revenue, costs, and profit breakdown by partner">
      {/* The button to open controls is now part of the FloatingControls component */}
      <Card title="5-Year Cumulative Summary">
        <Table
          headers={['Year', 'Revenue', 'Costs', 'Profit', 'Oom Hein', 'Eben', 'Hans']}
          rows={[
            ...summary.yearly.map((year, i) => [
              `Year ${i + 1}`,
              formatRange(year.revenue),
              formatRange(year.costs),
              formatRange(year.profit),
              formatRange(year.oomHeinIncome),
              formatRange(year.ebenIncome),
              formatRange(year.hansTotalIncome),
            ]),
            [
              <strong key="total">TOTAL</strong>,
              <strong key="rev">{formatRange(summary.cumulative.revenue)}</strong>,
              <strong key="costs">{formatRange(summary.cumulative.costs)}</strong>,
              <strong key="profit">{formatRange(summary.cumulative.profit)}</strong>,
              <strong key="oom">{formatRange(summary.cumulative.oomHein)}</strong>,
              <strong key="eben">{formatRange(summary.cumulative.eben)}</strong>,
              <strong key="hans">{formatRange(summary.cumulative.hans)}</strong>,
            ],
          ]}
        />
        <p className={styles.tableNote}>
          Figures shown assume goats + pigs
          {data.includeChickens ? ' + chickens' : ''}.
          {data.includeRabbits ? ' Rabbits are an optional add-on.' : ''}
        </p>
      </Card>

      <div className={styles.cardsGrid}>
        <Card title="Hans's Investment & Returns">
          <div className={styles.investmentDetails}>
            <div className={styles.investmentItem}>
              <p className={styles.itemLabel}>Livestock Investment</p>
              <p className={styles.itemValue}>{formatRange(data.hansLivestockValue)}</p>
            </div>
            <div className={styles.investmentItem}>
              <p className={styles.itemLabel}>Cash Investment</p>
              <p className={styles.itemValueGreen}>R0 (zero cash)</p>
            </div>
            <div className={styles.totalSection}>
              <p className={styles.totalLabel}>Total 5-Year Returns</p>
              <p className={styles.totalValue}>{formatRange(summary.cumulative.hans)}</p>
            </div>
            <div className={styles.investmentItem}>
              <p className={styles.itemLabel}>Net Gain</p>
              <p className={styles.itemValue}>{formatRange(netGain)}</p>
            </div>
            <div className={styles.investmentItem}>
              <p className={styles.itemLabel}>ROI (5-year)</p>
              <p className={styles.itemValueGreen}>{roi}</p>
            </div>
            <div className={styles.investmentItem}>
              <p className={styles.itemLabel}>Average Annual Income</p>
              <p className={styles.itemValue}>
                {formatCurrency(Math.round(summary.cumulative.hans[0] / 5))}-
                {formatCurrency(Math.round(summary.cumulative.hans[1] / 5))}
              </p>
            </div>
          </div>
        </Card>

        <Card title="Hans's Income Breakdown">
          <Table
            headers={['Year', 'Equity Income', 'Salary', 'Total']}
            rows={summary.yearly.map((year, i) => [
              `Year ${i + 1}`,
              formatRange(year.hansEquityIncome),
              formatRange(year.hansSalary),
              formatRange(year.hansTotalIncome),
            ])}
          />
        </Card>
      </div>
    </Section>
  );
}
