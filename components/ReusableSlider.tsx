'use client';
import React, { useState, useEffect } from 'react';
import styles from './ReusableSlider.module.css';

interface ReusableSliderProps {
  label: string;
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number] | number) => void;
  isSingleValue?: boolean;
}

const ReusableSlider: React.FC<ReusableSliderProps> = ({ label, min, max, value, onChange, isSingleValue }) => {
  const [minVal, setMinVal] = useState(value[0]);
  const [maxVal, setMaxVal] = useState(value[1]);

  useEffect(() => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
  }, [value]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinVal = isSingleValue ? Number(e.target.value) : Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(newMinVal);
    if (isSingleValue) {
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
      <label>{label}</label>
      <div className={styles.rangeValues}>
        <span>{isSingleValue ? value[0] : minVal}</span>
        {!isSingleValue && <span>{maxVal}</span>}
      </div>
      <div className={styles.slider}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
          className={styles.thumb}
        />
        {!isSingleValue && (
          <input
            type="range"
            min={min}
            max={max}
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
