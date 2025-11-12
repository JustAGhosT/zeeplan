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
  const revenueData = [
    {
      year: 'Year 1',
      revenue: (summary.yearly[0].revenue[0] + summary.yearly[0].revenue[1]) / 2,
      profit: (summary.yearly[0].profit[0] + summary.yearly[0].profit[1]) / 2,
    },
    {
      year: 'Year 2',
      revenue: (summary.yearly[1].revenue[0] + summary.yearly[1].revenue[1]) / 2,
      profit: (summary.yearly[1].profit[0] + summary.yearly[1].profit[1]) / 2,
    },
    {
      year: 'Year 3',
      revenue: (summary.yearly[2].revenue[0] + summary.yearly[2].revenue[1]) / 2,
      profit: (summary.yearly[2].profit[0] + summary.yearly[2].profit[1]) / 2,
    },
    {
      year: 'Year 4',
      revenue: (summary.yearly[3].revenue[0] + summary.yearly[3].revenue[1]) / 2,
      profit: (summary.yearly[3].profit[0] + summary.yearly[3].profit[1]) / 2,
    },
    {
      year: 'Year 5',
      revenue: (summary.yearly[4].revenue[0] + summary.yearly[4].revenue[1]) / 2,
      profit: (summary.yearly[4].profit[0] + summary.yearly[4].profit[1]) / 2,
    },
  ];

  // Prepare partner income data
  const partnerIncomeData = [
    {
      year: 'Year 1',
      oomWillie: (summary.yearly[0].oomWillieIncome[0] + summary.yearly[0].oomWillieIncome[1]) / 2,
      eben: (summary.yearly[0].ebenIncome[0] + summary.yearly[0].ebenIncome[1]) / 2,
      hans: (summary.yearly[0].hansTotalIncome[0] + summary.yearly[0].hansTotalIncome[1]) / 2,
    },
    {
      year: 'Year 2',
      oomWillie: (summary.yearly[1].oomWillieIncome[0] + summary.yearly[1].oomWillieIncome[1]) / 2,
      eben: (summary.yearly[1].ebenIncome[0] + summary.yearly[1].ebenIncome[1]) / 2,
      hans: (summary.yearly[1].hansTotalIncome[0] + summary.yearly[1].hansTotalIncome[1]) / 2,
    },
    {
      year: 'Year 3',
      oomWillie: (summary.yearly[2].oomWillieIncome[0] + summary.yearly[2].oomWillieIncome[1]) / 2,
      eben: (summary.yearly[2].ebenIncome[0] + summary.yearly[2].ebenIncome[1]) / 2,
      hans: (summary.yearly[2].hansTotalIncome[0] + summary.yearly[2].hansTotalIncome[1]) / 2,
    },
    {
      year: 'Year 4',
      oomWillie: (summary.yearly[3].oomWillieIncome[0] + summary.yearly[3].oomWillieIncome[1]) / 2,
      eben: (summary.yearly[3].ebenIncome[0] + summary.yearly[3].ebenIncome[1]) / 2,
      hans: (summary.yearly[3].hansTotalIncome[0] + summary.yearly[3].hansTotalIncome[1]) / 2,
    },
    {
      year: 'Year 5',
      oomWillie: (summary.yearly[4].oomWillieIncome[0] + summary.yearly[4].oomWillieIncome[1]) / 2,
      eben: (summary.yearly[4].ebenIncome[0] + summary.yearly[4].ebenIncome[1]) / 2,
      hans: (summary.yearly[4].hansTotalIncome[0] + summary.yearly[4].hansTotalIncome[1]) / 2,
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltipContainer}>
          <p className={styles.tooltipLabel}>{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className={styles.tooltipValue} style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
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
            <Bar dataKey="oomWillie" fill="#f59e0b" name="Oom Willie" />
            <Bar dataKey="eben" fill="#8b5cf6" name="Eben" />
            <Bar dataKey="hans" fill="#10b981" name="Hans" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
