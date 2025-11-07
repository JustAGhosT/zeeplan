import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h3>}
      {children}
    </div>
  );
}

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-50">{title}</h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 mb-6">{subtitle}</p>}
      {children}
    </section>
  );
}

interface TableProps {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  className?: string;
}

export function Table({ headers, rows, className = '' }: TableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  className?: string;
}

export function MetricCard({ label, value, change, className = '' }: MetricCardProps) {
  return (
    <div className={`bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg p-4 ${className}`}>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">{value}</p>
      {change && (
        <p className="text-xs text-green-600 dark:text-green-400 mt-1">{change}</p>
      )}
    </div>
  );
}

interface InputGroupProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  className?: string;
}

export function InputGroup({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
  className = ''
}: InputGroupProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
        />
        {suffix && (
          <span className="text-sm text-gray-600 dark:text-gray-400">{suffix}</span>
        )}
      </div>
    </div>
  );
}

interface RangeInputGroupProps {
  label: string;
  min: number;
  max: number;
  onChangeMin: (value: number) => void;
  onChangeMax: (value: number) => void;
  step?: number;
  suffix?: string;
  className?: string;
}

export function RangeInputGroup({
  label,
  min,
  max,
  onChangeMin,
  onChangeMax,
  step = 1,
  suffix,
  className = ''
}: RangeInputGroupProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={min}
          onChange={(e) => onChangeMin(Number(e.target.value))}
          step={step}
          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
          placeholder="Min"
        />
        <span className="text-gray-500 dark:text-gray-400">-</span>
        <input
          type="number"
          value={max}
          onChange={(e) => onChangeMax(Number(e.target.value))}
          step={step}
          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
          placeholder="Max"
        />
        {suffix && (
          <span className="text-sm text-gray-600 dark:text-gray-400 min-w-fit">{suffix}</span>
        )}
      </div>
    </div>
  );
}
