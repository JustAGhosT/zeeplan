'use client';
import React, { useState, useEffect } from 'react';
import styles from './ReusableSlider.module.css';

interface ReusableSliderProps {
  label: string;
  min: number;
  max: number;
  value: number | [number, number];
  onChange: (value: [number, number] | number) => void;
  step?: number;
  suffix?: string;
  tooltip?: string;
  isSingleValue?: boolean;
}

const ReusableSlider: React.FC<ReusableSliderProps> = ({ label, min, max, value, onChange, step = 1, suffix = '', tooltip, isSingleValue }) => {
  // Determine if this is a single value slider
  const isRange = Array.isArray(value);
  const [minVal, setMinVal] = useState(isRange ? value[0] : value as number);
  const [maxVal, setMaxVal] = useState(isRange ? value[1] : value as number);

  useEffect(() => {
    if (isRange) {
      setMinVal((value as [number, number])[0]);
      setMaxVal((value as [number, number])[1]);
    } else {
      setMinVal(value as number);
      setMaxVal(value as number);
    }
  }, [value, isRange]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinVal = isRange && !isSingleValue ? Math.min(Number(e.target.value), maxVal - 1) : Number(e.target.value);
    setMinVal(newMinVal);
    if (!isRange || isSingleValue) {
      onChange(newMinVal);
    } else {
      onChange([newMinVal, maxVal]);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxVal = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(newMaxVal);
    onChange([minVal, newMaxVal]);
  };

  return (
    <div className={styles.sliderContainer}>
      <label title={tooltip}>{label}{suffix && ` (${suffix})`}</label>
      <div className={styles.rangeValues}>
        <span>{minVal}</span>
        {isRange && !isSingleValue && <span>{maxVal}</span>}
      </div>
      <div className={styles.slider}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          className={styles.thumb}
        />
        {isRange && !isSingleValue && (
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={handleMaxChange}
            className={styles.thumb}
          />
        )}
      </div>
    </div>
  );
};

export default ReusableSlider;
