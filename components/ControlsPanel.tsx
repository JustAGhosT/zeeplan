'use client';

import { useState, useEffect } from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import styles from './ControlsPanel.module.css';
import { Card, InputGroup, RangeInputGroup } from './UIComponents';

interface ControlsPanelProps {
  data: PartnershipData;
  onUpdate: (data: PartnershipData) => void;
}

export function ControlsPanel({ data, onUpdate }: ControlsPanelProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const calculateTotalHectares = (data: PartnershipData) => {
    return data.cattleHectares + data.goatsHectares + 
           data.pigsHectares + data.chickensHectares + 
           data.cropsHectares;
  };

  const updateField = <K extends keyof PartnershipData>(field: K, value: PartnershipData[K]) => {
    const newData = { ...data, [field]: value };
    
    // Validate landSize: prevent reducing below current total allocations
    if (field === 'landSize' && typeof value === 'number') {
      const currentTotalHectares = calculateTotalHectares(data);
      if (value < currentTotalHectares) {
        const remaining = currentTotalHectares - value;
        showToast(
          `Cannot reduce land size to ${value}ha. Current allocations total ${currentTotalHectares}ha. Please reduce allocations by ${remaining}ha first.`
        );
        return;
      }
    }
    
    // Validate total hectares don't exceed land size
    if (['cattleHectares', 'goatsHectares', 'pigsHectares', 'chickensHectares', 'cropsHectares'].includes(field as string)) {
      const totalHectares = calculateTotalHectares(newData);
      
      if (totalHectares > newData.landSize) {
        const overAllocation = totalHectares - newData.landSize;
        // Calculate remaining available for this specific field
        const otherHectares = totalHectares - (newData[field as keyof PartnershipData] as number);
        const maxAvailable = newData.landSize - otherHectares;
        showToast(
          `Total hectares (${totalHectares}ha) exceeds land size (${newData.landSize}ha) by ${overAllocation}ha. Maximum available: ${Math.max(0, maxAvailable)}ha.`
        );
        return;
      }
    }
    
    onUpdate(newData);
  };

  const updateRangeField = <
    K extends keyof Pick<
      PartnershipData,
      | 'hansLivestockValue'
      | 'hansMonthlySalary'
      | 'baselineCosts'
      | 'cattleMarketPrice'
      | 'cattleCostPerHectare'
      | 'cattleCostPerAnimal'
      | 'goatsMarketPrice'
      | 'goatsCostPerHectare'
      | 'goatsCostPerAnimal'
      | 'pigsMarketPrice'
      | 'pigsCostPerHectare'
      | 'pigsCostPerAnimal'
      | 'chickensMarketPrice'
      | 'chickensCostPerHectare'
      | 'chickensCostPerAnimal'
      | 'cropsRevenuePerHectare'
      | 'cropsCostPerHectare'
    >,
  >(
    field: K,
    index: 0 | 1,
    value: number,
  ) => {
    const currentValue = [...data[field]] as [number, number];
    currentValue[index] = value;
    onUpdate({ ...data, [field]: currentValue });
  };

  return (
    <>
      {toastMessage && (
        <div className={styles.toast}>
          <div className={styles.toastContent}>
            <span className={styles.toastIcon}>⚠️</span>
            <span className={styles.toastMessage}>{toastMessage}</span>
            <button
              className={styles.toastClose}
              onClick={() => setToastMessage(null)}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}
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
          <h4 className={styles.sectionTitle}>Land & Crop Management</h4>

          <InputGroup
            label="Cattle Hectares"
            value={data.cattleHectares}
            onChange={(v) => updateField('cattleHectares', v)}
            min={0}
            max={data.landSize}
            suffix="ha"
          />

          <InputGroup
            label="Goats Hectares"
            value={data.goatsHectares}
            onChange={(v) => updateField('goatsHectares', v)}
            min={0}
            max={data.landSize}
            suffix="ha"
          />

          <InputGroup
            label="Pigs Hectares"
            value={data.pigsHectares}
            onChange={(v) => updateField('pigsHectares', v)}
            min={0}
            max={data.landSize}
            suffix="ha"
          />

          <InputGroup
            label="Chickens Hectares"
            value={data.chickensHectares}
            onChange={(v) => updateField('chickensHectares', v)}
            min={0}
            max={data.landSize}
            suffix="ha"
          />

          <InputGroup
            label="Crops Hectares"
            value={data.cropsHectares}
            onChange={(v) => updateField('cropsHectares', v)}
            min={0}
            max={data.landSize}
            suffix="ha"
          />
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Livestock Density & Financials</h4>

          {/* Cattle Section */}
          <h5 className={styles.subSectionTitle}>Cattle</h5>
          <InputGroup
            label="Cattle per Hectare"
            tooltip="Number of cattle per hectare of allocated grazing land."
            value={data.cattlePerHectare}
            onChange={(v) => updateField('cattlePerHectare', v)}
            min={0}
            max={10}
            step={0.1}
            suffix="head/ha"
          />

          <RangeInputGroup
            label="Market Price"
            tooltip="Expected sale price per animal."
            min={data.cattleMarketPrice[0]}
            max={data.cattleMarketPrice[1]}
            onChangeMin={(v) => updateRangeField('cattleMarketPrice', 0, v)}
            onChangeMax={(v) => updateRangeField('cattleMarketPrice', 1, v)}
            step={100}
            suffix="ZAR"
          />
          <InputGroup
            label="Offtake Rate"
            tooltip="Percentage of the herd sold annually."
            value={data.cattleOfftakeRate}
            onChange={(v) => updateField('cattleOfftakeRate', v)}
            min={0}
            max={100}
            suffix="%"
          />
          <RangeInputGroup
            label="Cost per Hectare"
            tooltip="Annual cost to maintain one hectare of grazing land for cattle."
            min={data.cattleCostPerHectare[0]}
            max={data.cattleCostPerHectare[1]}
            onChangeMin={(v) => updateRangeField('cattleCostPerHectare', 0, v)}
            onChangeMax={(v) => updateRangeField('cattleCostPerHectare', 1, v)}
            step={50}
            suffix="ZAR"
          />
          <RangeInputGroup
            label="Cost per Animal"
            tooltip="Annual cost per head of cattle (vet, feed, etc.)."
            min={data.cattleCostPerAnimal[0]}
            max={data.cattleCostPerAnimal[1]}
            onChangeMin={(v) => updateRangeField('cattleCostPerAnimal', 0, v)}
            onChangeMax={(v) => updateRangeField('cattleCostPerAnimal', 1, v)}
            step={50}
            suffix="ZAR"
          />

          {/* Goats Section */}
          <h5 className={styles.subSectionTitle}>Goats</h5>
          <InputGroup
            label="Goats per Hectare"
            tooltip="Number of goats per hectare of allocated grazing land."
            value={data.goatsPerHectare}
            onChange={(v) => updateField('goatsPerHectare', v)}
            min={0}
            max={20}
            step={0.1}
            suffix="head/ha"
          />
          <RangeInputGroup
            label="Market Price"
            tooltip="Expected sale price per goat."
            min={data.goatsMarketPrice[0]}
            max={data.goatsMarketPrice[1]}
            onChangeMin={(v) => updateRangeField('goatsMarketPrice', 0, v)}
            onChangeMax={(v) => updateRangeField('goatsMarketPrice', 1, v)}
            step={50}
            suffix="ZAR"
          />
          <InputGroup
            label="Offtake Rate"
            tooltip="Percentage of the herd sold annually."
            value={data.goatsOfftakeRate}
            onChange={(v) => updateField('goatsOfftakeRate', v)}
            min={0}
            max={100}
            suffix="%"
          />
          <RangeInputGroup
            label="Cost per Hectare"
            tooltip="Annual cost to maintain one hectare of grazing land for goats."
            min={data.goatsCostPerHectare[0]}
            max={data.goatsCostPerHectare[1]}
            onChangeMin={(v) => updateRangeField('goatsCostPerHectare', 0, v)}
            onChangeMax={(v) => updateRangeField('goatsCostPerHectare', 1, v)}
            step={50}
            suffix="ZAR"
          />
          <RangeInputGroup
            label="Cost per Animal"
            tooltip="Annual cost per goat (vet, feed, etc.)."
            min={data.goatsCostPerAnimal[0]}
            max={data.goatsCostPerAnimal[1]}
            onChangeMin={(v) => updateRangeField('goatsCostPerAnimal', 0, v)}
            onChangeMax={(v) => updateRangeField('goatsCostPerAnimal', 1, v)}
            step={50}
            suffix="ZAR"
          />

          {/* Pigs Section */}
          <h5 className={styles.subSectionTitle}>Pigs</h5>
          <InputGroup
            label="Pigs per Hectare"
            tooltip="Number of pigs per hectare of allocated land."
            value={data.pigsPerHectare}
            onChange={(v) => updateField('pigsPerHectare', v)}
            min={0}
            max={50}
            step={0.1}
            suffix="head/ha"
          />
          <RangeInputGroup
            label="Market Price"
            tooltip="Expected sale price per pig."
            min={data.pigsMarketPrice[0]}
            max={data.pigsMarketPrice[1]}
            onChangeMin={(v) => updateRangeField('pigsMarketPrice', 0, v)}
            onChangeMax={(v) => updateRangeField('pigsMarketPrice', 1, v)}
            step={100}
            suffix="ZAR"
          />
          <InputGroup
            label="Offtake Rate"
            tooltip="Percentage of the herd sold annually."
            value={data.pigsOfftakeRate}
            onChange={(v) => updateField('pigsOfftakeRate', v)}
            min={0}
            max={100}
            suffix="%"
          />
          <RangeInputGroup
            label="Cost per Hectare"
            tooltip="Annual cost to maintain one hectare of land for pigs."
            min={data.pigsCostPerHectare[0]}
            max={data.pigsCostPerHectare[1]}
            onChangeMin={(v) => updateRangeField('pigsCostPerHectare', 0, v)}
            onChangeMax={(v) => updateRangeField('pigsCostPerHectare', 1, v)}
            step={50}
            suffix="ZAR"
          />
          <RangeInputGroup
            label="Cost per Animal"
            tooltip="Annual cost per pig (vet, feed, etc.)."
            min={data.pigsCostPerAnimal[0]}
            max={data.pigsCostPerAnimal[1]}
            onChangeMin={(v) => updateRangeField('pigsCostPerAnimal', 0, v)}
            onChangeMax={(v) => updateRangeField('pigsCostPerAnimal', 1, v)}
            step={50}
            suffix="ZAR"
          />

          {/* Chickens Section */}
          <h5 className={styles.subSectionTitle}>Chickens</h5>
          <InputGroup
            label="Chickens per Hectare"
            tooltip="Number of chickens per hectare of allocated land."
            value={data.chickensPerHectare}
            onChange={(v) => updateField('chickensPerHectare', v)}
            min={0}
            max={100}
            step={0.1}
            suffix="birds/ha"
          />
          <RangeInputGroup
            label="Market Price"
            tooltip="Expected sale price per chicken."
            min={data.chickensMarketPrice[0]}
            max={data.chickensMarketPrice[1]}
            onChangeMin={(v) => updateRangeField('chickensMarketPrice', 0, v)}
            onChangeMax={(v) => updateRangeField('chickensMarketPrice', 1, v)}
            step={10}
            suffix="ZAR"
          />
          <InputGroup
            label="Offtake Rate"
            tooltip="Percentage of the flock sold annually."
            value={data.chickensOfftakeRate}
            onChange={(v) => updateField('chickensOfftakeRate', v)}
            min={0}
            max={100}
            suffix="%"
          />
          <RangeInputGroup
            label="Cost per Hectare"
            tooltip="Annual cost to maintain one hectare of land for chickens."
            min={data.chickensCostPerHectare[0]}
            max={data.chickensCostPerHectare[1]}
            onChangeMin={(v) => updateRangeField('chickensCostPerHectare', 0, v)}
            onChangeMax={(v) => updateRangeField('chickensCostPerHectare', 1, v)}
            step={50}
            suffix="ZAR"
          />
          <RangeInputGroup
            label="Cost per Animal"
            tooltip="Annual cost per chicken (vet, feed, etc.)."
            min={data.chickensCostPerAnimal[0]}
            max={data.chickensCostPerAnimal[1]}
            onChangeMin={(v) => updateRangeField('chickensCostPerAnimal', 0, v)}
            onChangeMax={(v) => updateRangeField('chickensCostPerAnimal', 1, v)}
            step={5}
            suffix="ZAR"
          />
        </div>

        {/* Crops Section */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Crops Financials</h4>
          <RangeInputGroup
            label="Revenue per Hectare"
            tooltip="Expected annual revenue from one hectare of crops."
            min={data.cropsRevenuePerHectare[0]}
            max={data.cropsRevenuePerHectare[1]}
            onChangeMin={(v) => updateRangeField('cropsRevenuePerHectare', 0, v)}
            onChangeMax={(v) => updateRangeField('cropsRevenuePerHectare', 1, v)}
            step={500}
            suffix="ZAR"
          />
          <RangeInputGroup
            label="Cost per Hectare"
            tooltip="Annual cost to cultivate one hectare of crops."
            min={data.cropsCostPerHectare[0]}
            max={data.cropsCostPerHectare[1]}
            onChangeMin={(v) => updateRangeField('cropsCostPerHectare', 0, v)}
            onChangeMax={(v) => updateRangeField('cropsCostPerHectare', 1, v)}
            step={250}
            suffix="ZAR"
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
            value={data.equityStructure[0].oomWillie}
            onChange={(v) => {
              const newEquity = [...data.equityStructure];
              newEquity[0] = { ...newEquity[0], oomWillie: v };
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />

          <InputGroup
            label="Eben Equity"
            value={data.equityStructure[0].eben}
            onChange={(v) => {
              const newEquity = [...data.equityStructure];
              newEquity[0] = { ...newEquity[0], eben: v };
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />

          <InputGroup
            label="Hans Equity"
            value={data.equityStructure[0].hans}
            onChange={(v) => {
              const newEquity = [...data.equityStructure];
              newEquity[0] = { ...newEquity[0], hans: v };
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
            value={data.equityStructure[4].oomWillie}
            onChange={(v) => {
              const newEquity = [...data.equityStructure];
              newEquity[4] = { ...newEquity[4], oomWillie: v };
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />

          <InputGroup
            label="Eben Equity"
            value={data.equityStructure[4].eben}
            onChange={(v) => {
              const newEquity = [...data.equityStructure];
              newEquity[4] = { ...newEquity[4], eben: v };
              updateField('equityStructure', newEquity);
            }}
            min={0}
            max={100}
            suffix="%"
          />

          <InputGroup
            label="Hans Equity"
            value={data.equityStructure[4].hans}
            onChange={(v) => {
              const newEquity = [...data.equityStructure];
              newEquity[4] = { ...newEquity[4], hans: v };
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
    </>
  );
}
