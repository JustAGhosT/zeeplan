'use client';

import React from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import { Card, InputGroup, RangeInputGroup } from './UIComponents';
import styles from './ControlsPanel.module.css';

interface ControlsPanelProps {
  data: PartnershipData;
  onUpdate: (data: PartnershipData) => void;
}

export function ControlsPanel({ data, onUpdate }: ControlsPanelProps) {
  const updateField = <K extends keyof PartnershipData>(
    field: K,
    value: PartnershipData[K]
  ) => {
    onUpdate({ ...data, [field]: value });
  };

  const updateRangeField = <
    K extends keyof Pick<PartnershipData, 'hansLivestockValue' | 'hansMonthlySalary' | 'baselineCosts'>
  >(
    field: K,
    index: 0 | 1,
    value: number
  ) => {
    const currentValue = [...data[field]] as [number, number];
    currentValue[index] = value;
    onUpdate({ ...data, [field]: currentValue });
  };

  return (
    <Card title="⚙️ Adjustable Parameters" className={styles.stickyCard}>
      <div className={styles.controlsContainer}>
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Farm Basics</h4>
          
          <InputGroup
            label="Land Size"
            value={data.landSize}
            onChange={(v) => updateField('landSize', v)}
            min={100}
            max={2000}
            suffix="ha"
          />
          
          <InputGroup
            label="Current LSU"
            value={data.currentLSU}
            onChange={(v) => updateField('currentLSU', v)}
            min={10}
            max={200}
            suffix="cattle"
          />
          
          <InputGroup
            label="Target LSU"
            value={data.targetLSU}
            onChange={(v) => updateField('targetLSU', v)}
            min={10}
            max={300}
            suffix="cattle"
          />
          
          <InputGroup
            label="Sekelbos Encroachment"
            value={data.sekelbosEncroachment}
            onChange={(v) => updateField('sekelbosEncroachment', v)}
            min={0}
            max={100}
            suffix="%"
          />
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Hans's Investment</h4>
          
          <RangeInputGroup
            label="Livestock Value"
            min={data.hansLivestockValue[0]}
            max={data.hansLivestockValue[1]}
            onChangeMin={(v) => updateRangeField('hansLivestockValue', 0, v)}
            onChangeMax={(v) => updateRangeField('hansLivestockValue', 1, v)}
            step={1000}
            suffix="ZAR"
          />
          
          <RangeInputGroup
            label="Monthly Salary"
            min={data.hansMonthlySalary[0]}
            max={data.hansMonthlySalary[1]}
            onChangeMin={(v) => updateRangeField('hansMonthlySalary', 0, v)}
            onChangeMax={(v) => updateRangeField('hansMonthlySalary', 1, v)}
            step={1000}
            suffix="ZAR/month"
          />
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Equity Structure - Year 1</h4>
          
          <InputGroup
            label="Oom Willie Equity"
            value={data.equityStructure.year1.oomWillie}
            onChange={(v) => {
              const newEquity = { ...data.equityStructure };
              newEquity.year1.oomWillie = v;
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />
          
          <InputGroup
            label="Eben Equity"
            value={data.equityStructure.year1.eben}
            onChange={(v) => {
              const newEquity = { ...data.equityStructure };
              newEquity.year1.eben = v;
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />
          
          <InputGroup
            label="Hans Equity"
            value={data.equityStructure.year1.hans}
            onChange={(v) => {
              const newEquity = { ...data.equityStructure };
              newEquity.year1.hans = v;
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Equity Structure - Year 5</h4>
          
          <InputGroup
            label="Oom Willie Equity"
            value={data.equityStructure.year5.oomWillie}
            onChange={(v) => {
              const newEquity = { ...data.equityStructure };
              newEquity.year5.oomWillie = v;
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />
          
          <InputGroup
            label="Eben Equity"
            value={data.equityStructure.year5.eben}
            onChange={(v) => {
              const newEquity = { ...data.equityStructure };
              newEquity.year5.eben = v;
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />
          
          <InputGroup
            label="Hans Equity"
            value={data.equityStructure.year5.hans}
            onChange={(v) => {
              const newEquity = { ...data.equityStructure };
              newEquity.year5.hans = v;
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />
        </div>

        <div>
          <button
            onClick={() => {
              if (confirm('Reset all values to defaults?')) {
                window.location.reload();
              }
            }}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </Card>
  );
}
