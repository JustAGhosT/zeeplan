'use client';

import React from 'react';
import { useDarkMode } from '@/lib/useDarkMode';
import styles from './ReusableSlider.module.css';

interface ReusableSliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  defaultValue: number;
  onChange: (value: number) => void;
  step?: number;
  suffix?: string;
  tooltip?: string;
}

export function ReusableSlider({
  label,
  min,
  max,
  value,
  defaultValue,
  onChange,
  step = 1,
  suffix = '',
  tooltip = '',
}: ReusableSliderProps) {
  const isDark = useDarkMode();

  const toLog = (value: number) => {
    const skewed = Math.pow(value, 1 / 3);
    return skewed;
  };

  const fromLog = (value: number) => {
    const unskewed = Math.pow(value, 3);
    return unskewed;
  };

  // Handle undefined or NaN values
  const safeValue = value ?? defaultValue ?? 0;
  const minLog = toLog(min);
  const maxLog = toLog(max);
  const valueLog = toLog(safeValue);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const logValue = parseFloat(e.target.value);
    const linearValue = fromLog(logValue);
    onChange(Math.round(linearValue / step) * step);
  };

  const defaultPosition = ((toLog(defaultValue) - minLog) / (maxLog - minLog)) * 100;

  return (
    <div className={`${styles.sliderContainer} ${isDark ? styles.dark : ''}`} data-testid={`slider-${label}`}>
      <div className={styles.labelContainer}>
        <label className={styles.label}>
          {label}
          {tooltip && (
            <span className={styles.tooltip}>
              ?
              <span className={styles.tooltiptext}>{tooltip}</span>
            </span>
          )}
        </label>
        <span className={styles.valueDisplay}>
          {safeValue.toLocaleString()} {suffix}
        </span>
      </div>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={minLog}
          max={maxLog}
          step={(maxLog - minLog) / 100}
          value={valueLog}
          onChange={handleSliderChange}
          className={styles.slider}
          aria-label={`${label} slider`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={safeValue}
          aria-valuetext={`${safeValue.toLocaleString()} ${suffix}`}
        />
        <div className={styles.defaultValueIndicator} style={{ left: `${defaultPosition}%` }}>
          ▼
        </div>
      </div>
    </div>
  );
}
