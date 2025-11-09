'use client';

import React from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import { calculateFiveYearSummary, formatRange, formatCurrency } from '@/lib/calculations';
import { Section, Card, Table, Slider } from './UIComponents';
import styles from './FinancialProjections.module.css';

interface FinancialProjectionsProps {
  data: PartnershipData;
}

function Controls({ data, setData }: { data: PartnershipData, setData: (data: PartnershipData) => void }) {
  return (
    <Card title="Scenario Controls">
      <Slider
        label="Sekelbos Revenue (per ton)"
        value={data.yearlyTargets.year1.sekelbosRevenue[0]}
        onChange={(value) => {
          const newData = { ...data };
          newData.yearlyTargets.year1.sekelbosRevenue[0] = value;
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
  const summary = calculateFiveYearSummary(localData);
  
  return (
    <Section
      title="Financial Projections"
      subtitle="5-year revenue, costs, and profit breakdown by partner"
    >
      <Controls data={localData} setData={setLocalData} />
      <Card title="5-Year Cumulative Summary">
        <Table
          headers={['Year', 'Revenue', 'Costs', 'Profit', 'Oom Willie', 'Eben', 'Hans']}
          rows={[
            [
              'Year 1',
              formatRange(summary.year1.revenue),
              formatRange(summary.year1.costs),
              formatRange(summary.year1.profit),
              formatRange(summary.year1.oomWillieIncome),
              formatRange(summary.year1.ebenIncome),
              formatRange(summary.year1.hansTotalIncome)
            ],
            [
              'Year 2',
              formatRange(summary.year2.revenue),
              formatRange(summary.year2.costs),
              formatRange(summary.year2.profit),
              formatRange(summary.year2.oomWillieIncome),
              formatRange(summary.year2.ebenIncome),
              formatRange(summary.year2.hansTotalIncome)
            ],
            [
              'Year 3',
              formatRange(summary.year3.revenue),
              formatRange(summary.year3.costs),
              formatRange(summary.year3.profit),
              formatRange(summary.year3.oomWillieIncome),
              formatRange(summary.year3.ebenIncome),
              formatRange(summary.year3.hansTotalIncome)
            ],
            [
              'Year 4',
              formatRange(summary.year4.revenue),
              formatRange(summary.year4.costs),
              formatRange(summary.year4.profit),
              formatRange(summary.year4.oomWillieIncome),
              formatRange(summary.year4.ebenIncome),
              formatRange(summary.year4.hansTotalIncome)
            ],
            [
              'Year 5',
              formatRange(summary.year5.revenue),
              formatRange(summary.year5.costs),
              formatRange(summary.year5.profit),
              formatRange(summary.year5.oomWillieIncome),
              formatRange(summary.year5.ebenIncome),
              formatRange(summary.year5.hansTotalIncome)
            ],
            [
              <strong key="total">TOTAL</strong>,
              <strong key="rev">{formatRange(summary.cumulative.revenue)}</strong>,
              <strong key="costs">{formatRange(summary.cumulative.costs)}</strong>,
              <strong key="profit">{formatRange(summary.cumulative.profit)}</strong>,
              <strong key="oom">{formatRange(summary.cumulative.oomWillie)}</strong>,
              <strong key="eben">{formatRange(summary.cumulative.eben)}</strong>,
              <strong key="hans">{formatRange(summary.cumulative.hans)}</strong>
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
                formatRange(summary.year1.hansEquityIncome),
                formatRange(summary.year1.hansSalary),
                formatRange(summary.year1.hansTotalIncome)
              ],
              [
                'Year 2',
                formatRange(summary.year2.hansEquityIncome),
                formatRange(summary.year2.hansSalary),
                formatRange(summary.year2.hansTotalIncome)
              ],
              [
                'Year 3',
                formatRange(summary.year3.hansEquityIncome),
                formatRange(summary.year3.hansSalary),
                formatRange(summary.year3.hansTotalIncome)
              ],
              [
                'Year 4',
                formatRange(summary.year4.hansEquityIncome),
                formatRange(summary.year4.hansSalary),
                formatRange(summary.year4.hansTotalIncome)
              ],
              [
                'Year 5',
                formatRange(summary.year5.hansEquityIncome),
                formatRange(summary.year5.hansSalary),
                formatRange(summary.year5.hansTotalIncome)
              ],
            ]}
          />
        </Card>
      </div>
    </Section>
  );
}
