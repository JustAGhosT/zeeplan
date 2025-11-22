'use client';
import { calculateFinancialSummary, calculateROI } from '@/lib/calculations';
import { formatCurrency, formatRange } from '@/lib/formatting';
import { PartnershipData } from '@/lib/partnershipData';
import React from 'react';
import { Card, Section, Table } from './UIComponents';
import { useStore } from '@/lib/store';

export function FinancialProjections({ data }: { data: PartnershipData }) {
  const { openControls } = useData();
  const data = useStore((state) => state.data);
  const summary = calculateFinancialSummary(data);

  return (
    <Section title="Financial Projections" subtitle="5-year revenue, costs, and profit breakdown by partner">
      <div className="text-right mb-4">
        <button
          onClick={openControls}
          className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark"
        >
          Adjust Scenarios
        </button>
      </div>
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
        <p className="mt-4 text-sm text-gray-600">
          {`Figures shown for enabled enterprises: ${data.enterprises
            .filter(e => e.enabled && e.type !== 'other')
            .map(e => e.name)
            .join(', ')}.`}
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card title="Hans's Investment & Returns">
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Livestock Investment</p>
              <p className="font-semibold">{formatRange(data.hansLivestockValue)}</p>
            </div>
            <div className="flex justify-between">
              <p>Cash Investment</p>
              <p className="font-semibold text-green-600">R0 (zero cash)</p>
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-bold text-lg">
                <p>Total 5-Year Returns</p>
                <p>{formatRange(summary.cumulative.hans)}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Net Gain</p>
              <p className="font-semibold">
                {formatRange([
                  summary.cumulative.hans[0] - data.hansLivestockValue[1],
                  summary.cumulative.hans[1] - data.hansLivestockValue[0],
                ])}
              </p>
            </div>
            <div className="flex justify-between">
              <p>ROI (5-year)</p>
              <p className="font-semibold text-green-600">
                {calculateROI(data.hansLivestockValue, [
                  summary.cumulative.hans[0] - data.hansLivestockValue[1],
                  summary.cumulative.hans[1] - data.hansLivestockValue[0],
                ])}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Average Annual Income</p>
              <p className="font-semibold">
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
