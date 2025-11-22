'use client';

import React, { useState } from 'react';
import { useStore } from '../lib/store';
import { Enterprise } from '../lib/partnershipData';
import styles from './ConsolidatedControls.module.css'; // We'll create a new CSS module
import { ReusableSlider } from './ReusableSlider'; // Reuse existing slider component
import { ChevronDown, ChevronRight, Settings, Tractor, HelpCircle } from 'lucide-react';

export function ConsolidatedControls() {
  const { data, updateGlobal, updateEnterprise, toggleEnterprise, resetData } = useStore();
  const [activeTab, setActiveTab] = useState('global'); // 'global' or an enterprise id

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all values to their defaults? This action cannot be undone.')) {
      resetData();
    }
  };

  const renderGlobalSettings = () => (
    <div className={styles.controlSection}>
      <h3 className={styles.sectionTitle}>Global Farm Settings</h3>
      <ReusableSlider
        label="Total Land Size"
        value={data.landSize}
        onChange={(v) => updateGlobal('landSize', v)}
        min={100}
        max={2000}
        step={50}
        suffix="ha"
        tooltip="The total size of the farm."
      />
       <ReusableSlider
        label="Sekelbos Revenue per Ha"
        value={data.sekelbosRevenuePerHectare[0]} // Simplified for POC
        onChange={(v) => updateGlobal('sekelbosRevenuePerHectare', [v, v + 2000])}
        min={1000}
        max={10000}
        step={500}
        suffix="ZAR/ha"
        tooltip="Estimated revenue from clearing one hectare of Sekelbos."
      />
    </div>
  );

  const renderEnterpriseSettings = (enterprise: Enterprise) => (
    <div key={enterprise.id} className={styles.controlSection}>
       <div className={styles.enterpriseHeader}>
        <h3 className={styles.sectionTitle}>{enterprise.name}</h3>
        <label className={styles.toggleSwitch}>
            <input type="checkbox" checked={enterprise.enabled} onChange={() => toggleEnterprise(enterprise.id)} />
            <span className={styles.slider}></span>
        </label>
       </div>
       {enterprise.enabled && (
        <div className={styles.enterpriseControls}>
          <ReusableSlider
              label="Allocated Land"
              value={enterprise.hectares}
              onChange={(v) => updateEnterprise(enterprise.id, { hectares: v })}
              min={0}
              max={data.landSize}
              step={10}
              suffix="ha"
          />
          {enterprise.type === 'livestock' && (
            <>
              <ReusableSlider
                label="Density"
                value={enterprise.density}
                onChange={(v) => updateEnterprise(enterprise.id, { density: v })}
                min={0} max={50} step={0.1} suffix="head/ha"
              />
               <ReusableSlider
                label="Market Price (Min)"
                value={enterprise.marketPrice[0]}
                onChange={(v) => updateEnterprise(enterprise.id, { marketPrice: [v, enterprise.marketPrice[1]] })}
                min={0} max={20000} step={100} suffix="ZAR"
              />
               <ReusableSlider
                label="Offtake Rate"
                value={enterprise.offtakeRate}
                onChange={(v) => updateEnterprise(enterprise.id, { offtakeRate: v })}
                min={0} max={200} step={1} suffix="%"
              />
            </>
          )}
          {enterprise.type === 'crop' && (
             <ReusableSlider
                label="Revenue per Ha (Min)"
                value={enterprise.revenuePerHectare[0]}
                onChange={(v) => updateEnterprise(enterprise.id, { revenuePerHectare: [v, enterprise.revenuePerHectare[1]] })}
                min={0} max={10000} step={250} suffix="ZAR/ha"
              />
          )}
        </div>
       )}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.tabs}>
            <button onClick={() => setActiveTab('global')} className={activeTab === 'global' ? styles.activeTab : ''}>
                <Settings size={18} />
                <span>Global Settings</span>
            </button>
            <h4 className={styles.enterpriseListHeader}>Enterprises</h4>
            {data.enterprises.map(e => (
                 <button key={e.id} onClick={() => setActiveTab(e.id)} className={activeTab === e.id ? styles.activeTab : ''}>
                    <Tractor size={18} />
                    <span>{e.name}</span>
                </button>
            ))}
        </div>
        <div className={styles.footer}>
            <button onClick={handleReset} className={styles.resetButton}>Reset All</button>
        </div>
      </div>
      <div className={styles.content}>
        {activeTab === 'global' && renderGlobalSettings()}
        {data.enterprises.map(e => activeTab === e.id && renderEnterpriseSettings(e))}
      </div>
    </div>
  );
}
