'use client';

import React from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import { calculateFinancialSummary } from '@/lib/calculations';
import { formatRange, formatCurrency } from '@/lib/formatting';
import { Section, Card, Table, Slider } from './UIComponents';
import styles from './FinancialProjections.module.css';

interface FinancialProjectionsProps {
  data: PartnershipData;
}

function Controls({ data, setData }: { data: PartnershipData; setData: (data: PartnershipData) => void }) {
  return (
    <Card title="Scenario Controls">
      <Slider
        label="Sekelbos Revenue (per ton)"
        value={data.yearlyTargets[0].sekelbosRevenue[0]}
        onChange={(value) => {
          const newData = { ...data };
          const newYearlyTargets = [...data.yearlyTargets];
          newYearlyTargets[0] = { ...newYearlyTargets[0], sekelbosRevenue: [value, newYearlyTargets[0].sekelbosRevenue[1]] };
          newData.yearlyTargets = newYearlyTargets;
          setData(newData);
        }}
        min={500}
        max={1500}
        step={50}
      />
    </Card>
  );
}

export function FinancialProjections({ data }: FinancialProjectionsProps) {
  const [localData, setLocalData] = React.useState(data);
  const summary = calculateFinancialSummary(localData);

  return (
    <Section title="Financial Projections" subtitle="5-year revenue, costs, and profit breakdown by partner">
      <Controls data={localData} setData={setLocalData} />
      <Card title="5-Year Cumulative Summary">
        <Table
          headers={['Year', 'Revenue', 'Costs', 'Profit', 'Oom Willie', 'Eben', 'Hans']}
          rows={[
            [
              'Year 1',
              formatRange(summary.yearly[0].revenue),
              formatRange(summary.yearly[0].costs),
              formatRange(summary.yearly[0].profit),
              formatRange(summary.yearly[0].oomWillieIncome),
              formatRange(summary.yearly[0].ebenIncome),
              formatRange(summary.yearly[0].hansTotalIncome),
            ],
            [
              'Year 2',
              formatRange(summary.yearly[1].revenue),
              formatRange(summary.yearly[1].costs),
              formatRange(summary.yearly[1].profit),
              formatRange(summary.yearly[1].oomWillieIncome),
              formatRange(summary.yearly[1].ebenIncome),
              formatRange(summary.yearly[1].hansTotalIncome),
            ],
            [
              'Year 3',
              formatRange(summary.yearly[2].revenue),
              formatRange(summary.yearly[2].costs),
              formatRange(summary.yearly[2].profit),
              formatRange(summary.yearly[2].oomWillieIncome),
              formatRange(summary.yearly[2].ebenIncome),
              formatRange(summary.yearly[2].hansTotalIncome),
            ],
            [
              'Year 4',
              formatRange(summary.yearly[3].revenue),
              formatRange(summary.yearly[3].costs),
              formatRange(summary.yearly[3].profit),
              formatRange(summary.yearly[3].oomWillieIncome),
              formatRange(summary.yearly[3].ebenIncome),
              formatRange(summary.yearly[3].hansTotalIncome),
            ],
            [
              'Year 5',
              formatRange(summary.yearly[4].revenue),
              formatRange(summary.yearly[4].costs),
              formatRange(summary.yearly[4].profit),
              formatRange(summary.yearly[4].oomWillieIncome),
              formatRange(summary.yearly[4].ebenIncome),
              formatRange(summary.yearly[4].hansTotalIncome),
            ],
            [
              <strong key="total">TOTAL</strong>,
              <strong key="rev">{formatRange(summary.cumulative.revenue)}</strong>,
              <strong key="costs">{formatRange(summary.cumulative.costs)}</strong>,
              <strong key="profit">{formatRange(summary.cumulative.profit)}</strong>,
              <strong key="oom">{formatRange(summary.cumulative.oomWillie)}</strong>,
              <strong key="eben">{formatRange(summary.cumulative.eben)}</strong>,
              <strong key="hans">{formatRange(summary.cumulative.hans)}</strong>,
            ],
          ]}
        />
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
              <p className={styles.itemValue}>
                {formatCurrency(summary.cumulative.hans[0] - data.hansLivestockValue[1])}-
                {formatCurrency(summary.cumulative.hans[1] - data.hansLivestockValue[0])}
              </p>
            </div>
            <div className={styles.investmentItem}>
              <p className={styles.itemLabel}>ROI (5-year)</p>
              <p className={styles.itemValueGreen}>1,870-3,400%</p>
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
            rows={[
              [
                'Year 1',
                formatRange(summary.yearly[0].hansEquityIncome),
                formatRange(summary.yearly[0].hansSalary),
                formatRange(summary.yearly[0].hansTotalIncome),
              ],
              [
                'Year 2',
                formatRange(summary.yearly[1].hansEquityIncome),
                formatRange(summary.yearly[1].hansSalary),
                formatRange(summary.yearly[1].hansTotalIncome),
              ],
              [
                'Year 3',
                formatRange(summary.yearly[2].hansEquityIncome),
                formatRange(summary.yearly[2].hansSalary),
                formatRange(summary.yearly[2].hansTotalIncome),
              ],
              [
                'Year 4',
                formatRange(summary.yearly[3].hansEquityIncome),
                formatRange(summary.yearly[3].hansSalary),
                formatRange(summary.yearly[3].hansTotalIncome),
              ],
              [
                'Year 5',
                formatRange(summary.yearly[4].hansEquityIncome),
                formatRange(summary.yearly[4].hansSalary),
                formatRange(summary.yearly[4].hansTotalIncome),
              ],
            ]}
          />
        </Card>
      </div>
    </Section>
  );
}
