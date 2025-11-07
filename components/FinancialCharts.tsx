'use client';

import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PartnershipData } from '@/lib/partnershipData';
import { calculateFiveYearSummary, formatCurrency } from '@/lib/calculations';

interface FinancialChartsProps {
  data: PartnershipData;
}

export function FinancialCharts({ data }: FinancialChartsProps) {
  const summary = calculateFiveYearSummary(data);
  
  // Prepare revenue growth data
  const revenueData = [
    {
      year: 'Year 1',
      revenue: (summary.year1.revenue[0] + summary.year1.revenue[1]) / 2,
      profit: (summary.year1.profit[0] + summary.year1.profit[1]) / 2,
    },
    {
      year: 'Year 2',
      revenue: (summary.year2.revenue[0] + summary.year2.revenue[1]) / 2,
      profit: (summary.year2.profit[0] + summary.year2.profit[1]) / 2,
    },
    {
      year: 'Year 3',
      revenue: (summary.year3.revenue[0] + summary.year3.revenue[1]) / 2,
      profit: (summary.year3.profit[0] + summary.year3.profit[1]) / 2,
    },
    {
      year: 'Year 4',
      revenue: (summary.year4.revenue[0] + summary.year4.revenue[1]) / 2,
      profit: (summary.year4.profit[0] + summary.year4.profit[1]) / 2,
    },
    {
      year: 'Year 5',
      revenue: (summary.year5.revenue[0] + summary.year5.revenue[1]) / 2,
      profit: (summary.year5.profit[0] + summary.year5.profit[1]) / 2,
    },
  ];

  // Prepare partner income data
  const partnerIncomeData = [
    {
      year: 'Year 1',
      oomWillie: (summary.year1.oomWillieIncome[0] + summary.year1.oomWillieIncome[1]) / 2,
      eben: (summary.year1.ebenIncome[0] + summary.year1.ebenIncome[1]) / 2,
      hans: (summary.year1.hansTotalIncome[0] + summary.year1.hansTotalIncome[1]) / 2,
    },
    {
      year: 'Year 2',
      oomWillie: (summary.year2.oomWillieIncome[0] + summary.year2.oomWillieIncome[1]) / 2,
      eben: (summary.year2.ebenIncome[0] + summary.year2.ebenIncome[1]) / 2,
      hans: (summary.year2.hansTotalIncome[0] + summary.year2.hansTotalIncome[1]) / 2,
    },
    {
      year: 'Year 3',
      oomWillie: (summary.year3.oomWillieIncome[0] + summary.year3.oomWillieIncome[1]) / 2,
      eben: (summary.year3.ebenIncome[0] + summary.year3.ebenIncome[1]) / 2,
      hans: (summary.year3.hansTotalIncome[0] + summary.year3.hansTotalIncome[1]) / 2,
    },
    {
      year: 'Year 4',
      oomWillie: (summary.year4.oomWillieIncome[0] + summary.year4.oomWillieIncome[1]) / 2,
      eben: (summary.year4.ebenIncome[0] + summary.year4.ebenIncome[1]) / 2,
      hans: (summary.year4.hansTotalIncome[0] + summary.year4.hansTotalIncome[1]) / 2,
    },
    {
      year: 'Year 5',
      oomWillie: (summary.year5.oomWillieIncome[0] + summary.year5.oomWillieIncome[1]) / 2,
      eben: (summary.year5.ebenIncome[0] + summary.year5.ebenIncome[1]) / 2,
      hans: (summary.year5.hansTotalIncome[0] + summary.year5.hansTotalIncome[1]) / 2,
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Revenue & Profit Growth */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Revenue & Profit Growth (5-Year Projection)
        </h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
            <XAxis 
              dataKey="year" 
              className="text-xs"
              stroke="#9ca3af"
            />
            <YAxis 
              className="text-xs"
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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Partner Income Distribution (5-Year Projection)
        </h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={partnerIncomeData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
            <XAxis 
              dataKey="year" 
              className="text-xs"
              stroke="#9ca3af"
            />
            <YAxis 
              className="text-xs"
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
