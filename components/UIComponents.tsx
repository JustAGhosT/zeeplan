'use client';

import React, { useEffect, useState } from 'react';
import styles from './UIComponents.module.css';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = '' }: CardProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.card} ${isDark ? styles.dark : ''} ${className}`}>
      {title && <h3 className={`${styles.cardTitle} ${isDark ? styles.dark : ''}`}>{title}</h3>}
      {children}
    </div>
  );
}

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  className = ''
}: SliderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.sliderGroup} ${className}`}>
      <label className={`${styles.sliderLabel} ${isDark ? styles.dark : ''}`}>
        {label}
      </label>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className={`${styles.slider} ${isDark ? styles.dark : ''}`}
      />
      <span className={`${styles.sliderValue} ${isDark ? styles.dark : ''}`}>{value}</span>
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.section} ${className}`}>
      <h2 className={`${styles.sectionTitle} ${isDark ? styles.dark : ''}`}>{title}</h2>
      {subtitle && <p className={`${styles.sectionSubtitle} ${isDark ? styles.dark : ''}`}>{subtitle}</p>}
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.tableWrapper} ${className}`}>
      <table className={styles.table}>
        <thead className={`${styles.tableHead} ${isDark ? styles.dark : ''}`}>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className={`${styles.tableHeader} ${isDark ? styles.dark : ''}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`${styles.tableBody} ${isDark ? styles.dark : ''}`}>
          {rows.map((row, i) => (
            <tr key={i} className={`${styles.tableRow} ${isDark ? styles.dark : ''}`}>
              {row.map((cell, j) => (
                <td key={j} className={`${styles.tableCell} ${isDark ? styles.dark : ''}`}>
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.metricCard} ${isDark ? styles.dark : ''} ${className}`}>
      <p className={`${styles.metricLabel} ${isDark ? styles.dark : ''}`}>{label}</p>
      <p className={`${styles.metricValue} ${isDark ? styles.dark : ''}`}>{value}</p>
      {change && (
        <p className={`${styles.metricChange} ${isDark ? styles.dark : ''}`}>{change}</p>
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <label className={`${styles.inputLabel} ${isDark ? styles.dark : ''}`}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className={`${styles.input} ${isDark ? styles.dark : ''}`}
        />
        {suffix && (
          <span className={`${styles.inputSuffix} ${isDark ? styles.dark : ''}`}>{suffix}</span>
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.rangeInputGroup} ${className}`}>
      <label className={`${styles.inputLabel} ${isDark ? styles.dark : ''}`}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          type="number"
          value={min}
          onChange={(e) => onChangeMin(Number(e.target.value))}
          step={step}
          className={`${styles.input} ${isDark ? styles.dark : ''}`}
          placeholder="Min"
        />
        <span className={`${styles.rangeSeparator} ${isDark ? styles.dark : ''}`}>-</span>
        <input
          type="number"
          value={max}
          onChange={(e) => onChangeMax(Number(e.target.value))}
          step={step}
          className={`${styles.input} ${isDark ? styles.dark : ''}`}
          placeholder="Max"
        />
        {suffix && (
          <span className={`${styles.rangeSuffix} ${isDark ? styles.dark : ''}`}>{suffix}</span>
        )}
      </div>
    </div>
  );
}
