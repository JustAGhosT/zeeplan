'use client';

import React, { useState, useEffect } from 'react';
import styles from './RangeSlider.module.css';

interface RangeSliderProps {
  label: string;
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  defaultMin: number;
  defaultMax: number;
  onChange: (min: number, max: number) => void;
  step?: number;
  suffix?: string;
  tooltip?: string;
}

export function RangeSlider({
  label,
  min,
  max,
  valueMin,
  valueMax,
  defaultMin,
  defaultMax,
  onChange,
  step = 1,
  suffix = '',
  tooltip = '',
}: RangeSliderProps) {
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

  const toLog = (value: number) => Math.pow(value, 1 / 3);
  const fromLog = (value: number) => Math.pow(value, 3);

  const safeValueMin = valueMin ?? defaultMin ?? min;
  const safeValueMax = valueMax ?? defaultMax ?? max;
  
  const minLog = toLog(min);
  const maxLog = toLog(max);
  const valueMinLog = toLog(safeValueMin);
  const valueMaxLog = toLog(safeValueMax);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const logValue = parseFloat(e.target.value);
    const linearValue = Math.round(fromLog(logValue) / step) * step;
    onChange(Math.min(linearValue, safeValueMax), safeValueMax);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const logValue = parseFloat(e.target.value);
    const linearValue = Math.round(fromLog(logValue) / step) * step;
    onChange(safeValueMin, Math.max(linearValue, safeValueMin));
  };

  const defaultMinPosition = ((toLog(defaultMin) - minLog) / (maxLog - minLog)) * 100;
  const defaultMaxPosition = ((toLog(defaultMax) - minLog) / (maxLog - minLog)) * 100;

  const minPosition = ((valueMinLog - minLog) / (maxLog - minLog)) * 100;
  const maxPosition = ((valueMaxLog - minLog) / (maxLog - minLog)) * 100;

  return (
    <div className={`${styles.rangeSliderContainer} ${isDark ? styles.dark : ''}`}>
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
          {safeValueMin.toLocaleString()} - {safeValueMax.toLocaleString()} {suffix}
        </span>
      </div>
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={minLog}
          max={maxLog}
          step={(maxLog - minLog) / 100}
          value={valueMinLog}
          onChange={handleMinChange}
          className={`${styles.slider} ${styles.sliderMin}`}
        />
        <input
          type="range"
          min={minLog}
          max={maxLog}
          step={(maxLog - minLog) / 100}
          value={valueMaxLog}
          onChange={handleMaxChange}
          className={`${styles.slider} ${styles.sliderMax}`}
        />
        <div className={styles.rangeTrack}>
          <div 
            className={styles.rangeHighlight} 
            style={{ 
              left: `${minPosition}%`, 
              width: `${maxPosition - minPosition}%` 
            }}
          />
        </div>
        <div className={styles.defaultIndicators}>
          <div className={styles.defaultValueIndicator} style={{ left: `${defaultMinPosition}%` }}>▼</div>
          <div className={styles.defaultValueIndicator} style={{ left: `${defaultMaxPosition}%` }}>▼</div>
        </div>
      </div>
    </div>
  );
}
