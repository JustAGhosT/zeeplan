'use client';

import React from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import { calculateFiveYearSummary, formatRange, formatCurrency } from '@/lib/calculations';
import { Section, Card, Table } from './UIComponents';

interface FinancialProjectionsProps {
  data: PartnershipData;
}

export function FinancialProjections({ data }: FinancialProjectionsProps) {
  const summary = calculateFiveYearSummary(data);
  
  return (
    <Section
      title="Financial Projections"
      subtitle="5-year revenue, costs, and profit breakdown by partner"
    >
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card title="Hans's Investment & Returns">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Livestock Investment</p>
              <p className="text-lg font-semibold">{formatRange(data.hansLivestockValue)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cash Investment</p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">R0 (zero cash)</p>
            </div>
            <div className="border-t pt-3 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total 5-Year Returns</p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">{formatRange(summary.cumulative.hans)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Net Gain</p>
              <p className="text-lg font-semibold">
                {formatCurrency(summary.cumulative.hans[0] - data.hansLivestockValue[1])}-
                {formatCurrency(summary.cumulative.hans[1] - data.hansLivestockValue[0])}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">ROI (5-year)</p>
              <p className="text-lg font-semibold text-green-600 dark:text-green-400">1,870-3,400%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Annual Income</p>
              <p className="text-lg font-semibold">
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
