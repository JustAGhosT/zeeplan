'use client';
import React from 'react';
import styles from './ControlsPanel.module.css';
import { useData } from '@/app/contexts/DataContext';
import { Enterprise } from '@/lib/partnershipData';
import ReusableSlider from './ReusableSlider';

export const ControlsPanel: React.FC = () => {
  const { data, setData, isControlsOpen, closeControls } = useData();

  if (!isControlsOpen) {
    return null;
  }

  const handleEnterpriseChange = (id: string, key: keyof Enterprise, value: any) => {
    const newEnterprises = data.enterprises.map(e => (e.id === id ? { ...e, [key]: value } : e));
    setData({ ...data, enterprises: newEnterprises });
  };

  return (
    <div className={styles.panelOverlay}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <h2>Adjust Scenarios</h2>
          <button onClick={closeControls} className={styles.closeButton}>&times;</button>
        </div>
        <div className={styles.content}>
          {data.enterprises.map(enterprise => (
            <div key={enterprise.id} className={styles.enterpriseSection}>
              <div className={styles.enterpriseHeader}>
                <h3 className={styles.enterpriseTitle}>{enterprise.name}</h3>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={enterprise.enabled}
                    onChange={e => handleEnterpriseChange(enterprise.id, 'enabled', e.target.checked)}
                  />
                  <span>Enabled</span>
                </label>
              </div>

              {enterprise.enabled && (
                <div className={styles.slidersContainer}>
                  {enterprise.marketPrice && (
                    <ReusableSlider
                      label="Market Price"
                      min={enterprise.marketPrice[0] * 0.5}
                      max={enterprise.marketPrice[1] * 1.5}
                      value={enterprise.marketPrice}
                      onChange={value => handleEnterpriseChange(enterprise.id, 'marketPrice', value)}
                    />
                  )}
                  {enterprise.density !== undefined && (
                    <ReusableSlider
                      label="Density (animals/ha)"
                      min={0}
                      max={(enterprise.density || 1) * 2}
                      value={[enterprise.density, enterprise.density]}
                      onChange={value => handleEnterpriseChange(enterprise.id, 'density', value[0])}
                      isSingleValue
                    />
                  )}
                  {enterprise.offtakeRate !== undefined && (
                     <ReusableSlider
                      label="Offtake Rate (%)"
                      min={0}
                      max={100}
                      value={[enterprise.offtakeRate, enterprise.offtakeRate]}
                      onChange={value => handleEnterpriseChange(enterprise.id, 'offtakeRate', value[0])}
                      isSingleValue
                    />
                  )}
                  {enterprise.costPerHecatare && (
                    <ReusableSlider
                      label="Cost per Hectare"
                      min={0}
                      max={enterprise.costPerHecatare[1] * 2}
                      value={enterprise.costPerHecatare}
                      onChange={value => handleEnterpriseChange(enterprise.id, 'costPerHecatare', value)}
                    />
                  )}
                  {enterprise.costPerAnimal && (
                    <ReusableSlider
                      label="Cost per Animal"
                      min={0}
                      max={enterprise.costPerAnimal[1] * 2}
                      value={enterprise.costPerAnimal}
                      onChange={value => handleEnterpriseChange(enterprise.id, 'costPerAnimal', value)}
                    />
                  )}
                   {enterprise.revenuePerHectare && (
                    <ReusableSlider
                      label="Revenue per Hectare"
                      min={0}
                      max={enterprise.revenuePerHectare[1] * 2}
                      value={enterprise.revenuePerHectare}
                      onChange={value => handleEnterpriseChange(enterprise.id, 'revenuePerHectare', value)}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
