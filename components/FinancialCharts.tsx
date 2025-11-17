'use client';

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { PartnershipData } from '@/lib/partnershipData';
import { calculateFinancialSummary } from '@/lib/calculations';
import { formatCurrency } from '@/lib/formatting';
import { useWindowSize } from '@/lib/hooks';
import styles from './FinancialCharts.module.css';
import commonStyles from '@/app/common.module.css';

interface FinancialChartsProps {
  data: PartnershipData;
}

export function FinancialCharts({ data }: FinancialChartsProps) {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;
  const summary = calculateFinancialSummary(data);

  // Prepare revenue growth data
  const revenueData = summary.yearly.map((year, i) => ({
    year: `Year ${i + 1}`,
    revenue: (year.revenue[0] + year.revenue[1]) / 2,
    profit: (year.profit[0] + year.profit[1]) / 2,
  }));

  // Prepare partner income data
  const partnerIncomeData = summary.yearly.map((year, i) => ({
    year: `Year ${i + 1}`,
    oomHein: (year.oomHeinIncome[0] + year.oomHeinIncome[1]) / 2,
    eben: (year.ebenIncome[0] + year.ebenIncome[1]) / 2,
    hans: (year.hansTotalIncome[0] + year.hansTotalIncome[1]) / 2,
  }));

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltipContainer}>
          <p className={styles.tooltipLabel}>{label}</p>
          {payload.map((entry, index: number) => (
            <p key={index} className={styles.tooltipValue} style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value as number)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.chartsContainer}>
      {/* Revenue & Profit Growth */}
      <div className={commonStyles.chartCard}>
        <h4 className={commonStyles.chartTitle}>Revenue & Profit Growth (5-Year Projection)</h4>
        <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
            <XAxis dataKey="year" className={isMobile ? 'text-xxs' : 'text-xs'} stroke="#9ca3af" />
            <YAxis
              className={isMobile ? 'text-xxs' : 'text-xs'}
              stroke="#9ca3af"
              tickFormatter={(value) => `R${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              strokeWidth={3}
              name="Revenue"
              dot={{ fill: '#10b981', r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Profit"
              dot={{ fill: '#3b82f6', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Partner Income Comparison */}
      <div className={commonStyles.chartCard}>
        <h4 className={commonStyles.chartTitle}>Partner Income Distribution (5-Year Projection)</h4>
        <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
          <BarChart data={partnerIncomeData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
            <XAxis dataKey="year" className={isMobile ? 'text-xxs' : 'text-xs'} stroke="#9ca3af" />
            <YAxis
              className={isMobile ? 'text-xxs' : 'text-xs'}
              stroke="#9ca3af"
              tickFormatter={(value) => `R${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="oomHein" fill="#f59e0b" name="Oom Hein" />
            <Bar dataKey="eben" fill="#8b5cf6" name="Eben" />
            <Bar dataKey="hans" fill="#10b981" name="Hans" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
