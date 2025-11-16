'use client';

import { useState, useEffect } from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import styles from './ControlsPanel.module.css';
import { Card } from './UIComponents';
import { ReusableSlider } from './ReusableSlider';

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

  const updateRangeField = <K extends keyof PartnershipData>(
    field: K,
    index: 0 | 1,
    value: number
  ) => {
    const currentRange = data[field] as [number, number];
    const newRange: [number, number] = [...currentRange];
    newRange[index] = value;

    if (index === 0 && value > newRange[1]) {
      newRange[1] = value;
    }
    if (index === 1 && value < newRange[0]) {
      newRange[0] = value;
    }

    const newData = { ...data, [field]: newRange };
    onUpdate(newData);
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

          <ReusableSlider
            label="Land Size"
            value={data.landSize}
            defaultValue={600}
            onChange={(v) => updateField('landSize', v)}
            min={100}
            max={2000}
            step={50}
            suffix="ha"
            tooltip="Total size of the farm in hectares."
          />

          <ReusableSlider
            label="Current LSU"
            value={data.currentLSU}
            defaultValue={72}
            onChange={(v) => updateField('currentLSU', v)}
            min={10}
            max={200}
            step={1}
            suffix="cattle"
            tooltip="Current number of Large Stock Units on the farm."
          />

          <ReusableSlider
            label="Target LSU"
            value={data.targetLSU}
            defaultValue={110}
            onChange={(v) => updateField('targetLSU', v)}
            min={10}
            max={300}
            step={1}
            suffix="cattle"
            tooltip="Target number of Large Stock Units after sekelbos clearance."
          />

          <ReusableSlider
            label="Sekelbos Encroachment"
            value={data.sekelbosEncroachment}
            defaultValue={70}
            onChange={(v) => updateField('sekelbosEncroachment', v)}
            min={0}
            max={100}
            step={1}
            suffix="%"
            tooltip="Percentage of the farm affected by sekelbos encroachment."
          />
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Livestock Options</h4>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={data.includeChickens}
                onChange={(e) => updateField('includeChickens', e.target.checked)}
              />
              Include Chickens
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={data.includeRabbits}
                onChange={(e) => updateField('includeRabbits', e.target.checked)}
              />
              Include Rabbits
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Sekelbos Clearance Schedule (ha/year)</h4>
          {data.yearlyTargets.map((year, index) => (
            <ReusableSlider
              key={index}
              label={`Year ${index + 1}`}
              value={year.sekelbosCleared}
              defaultValue={year.sekelbosCleared}
              onChange={(v) => {
                const newYearlyTargets = [...data.yearlyTargets];
                newYearlyTargets[index] = { ...newYearlyTargets[index], sekelbosCleared: v };
                updateField('yearlyTargets', newYearlyTargets);
              }}
              min={0}
              max={200}
              step={10}
              suffix="ha"
              tooltip="Adjust the number of hectares of sekelbos to be cleared each year."
            />
          ))}
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Land Allocation</h4>

          <ReusableSlider
            label="Cattle Hectares"
            value={data.cattleHectares}
            defaultValue={500}
            onChange={(v) => updateField('cattleHectares', v)}
            min={0}
            max={data.landSize}
            step={10}
            suffix="ha"
            tooltip="Area allocated for cattle grazing."
          />

          <ReusableSlider
            label="Goats Hectares"
            value={data.goatsHectares}
            defaultValue={0}
            onChange={(v) => updateField('goatsHectares', v)}
            min={0}
            max={data.landSize}
            step={10}
            suffix="ha"
            tooltip="Area allocated for goat browsing."
          />

          <ReusableSlider
            label="Pigs Hectares"
            value={data.pigsHectares}
            defaultValue={0}
            onChange={(v) => updateField('pigsHectares', v)}
            min={0}
            max={data.landSize}
            step={10}
            suffix="ha"
            tooltip="Area allocated for pig rooting."
          />

          {data.includeChickens && <ReusableSlider
            label="Chickens Hectares"
            value={data.chickensHectares}
            defaultValue={0}
            onChange={(v) => updateField('chickensHectares', v)}
            min={0}
            max={data.landSize}
            step={10}
            suffix="ha"
            tooltip="Area allocated for chicken scratching."
          />}

          <ReusableSlider
            label="Crops Hectares"
            value={data.cropsHectares}
            defaultValue={0}
            onChange={(v) => updateField('cropsHectares', v)}
            min={0}
            max={data.landSize}
            step={10}
            suffix="ha"
            tooltip="Area allocated for crop cultivation."
          />
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Cattle Financials</h4>
          <ReusableSlider
            label="Cattle per Hectare"
            value={data.cattlePerHectare}
            defaultValue={0.2}
            min={0} max={1} step={0.01}
            onChange={v => updateField('cattlePerHectare', v)}
            suffix="head/ha" tooltip="Number of cattle per hectare."
          />
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Market Price"
              value={data.cattleMarketPrice[0]}
              defaultValue={8000}
              min={5000} max={20000} step={500}
              onChange={v => updateRangeField('cattleMarketPrice', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum sale price per head."
            />
            <ReusableSlider
              label=""
              value={data.cattleMarketPrice[1]}
              defaultValue={12000}
              min={5000} max={20000} step={500}
              onChange={v => updateRangeField('cattleMarketPrice', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum sale price per head."
            />
          </div>
          <ReusableSlider
            label="Offtake Rate"
            value={data.cattleOfftakeRate}
            defaultValue={25}
            min={0} max={100} step={1}
            onChange={v => updateField('cattleOfftakeRate', v)}
            suffix="%"
            tooltip="Percentage of herd sold annually."
          />
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Hectare"
              value={data.cattleCostPerHectare[0]}
              defaultValue={100}
              min={0} max={1000} step={50}
              onChange={v => updateRangeField('cattleCostPerHectare', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per hectare for cattle."
            />
            <ReusableSlider
              label=""
              value={data.cattleCostPerHectare[1]}
              defaultValue={200}
              min={0} max={1000} step={50}
              onChange={v => updateRangeField('cattleCostPerHectare', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per hectare for cattle."
            />
          </div>
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Animal"
              value={data.cattleCostPerAnimal[0]}
              defaultValue={500}
              min={0} max={2000} step={50}
              onChange={v => updateRangeField('cattleCostPerAnimal', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per animal."
            />
            <ReusableSlider
              label=""
              value={data.cattleCostPerAnimal[1]}
              defaultValue={800}
              min={0} max={2000} step={50}
              onChange={v => updateRangeField('cattleCostPerAnimal', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per animal."
            />
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Goats Financials</h4>
          <ReusableSlider
            label="Goats per Hectare"
            value={data.goatsPerHectare}
            defaultValue={1}
            min={0} max={10} step={0.1}
            onChange={v => updateField('goatsPerHectare', v)}
            suffix="head/ha" tooltip="Number of goats per hectare."
          />
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Market Price"
              value={data.goatsMarketPrice[0]}
              defaultValue={1000}
              min={500} max={3000} step={100}
              onChange={v => updateRangeField('goatsMarketPrice', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum sale price per goat."
            />
            <ReusableSlider
              label=""
              value={data.goatsMarketPrice[1]}
              defaultValue={1500}
              min={500} max={3000} step={100}
              onChange={v => updateRangeField('goatsMarketPrice', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum sale price per goat."
            />
          </div>
          <ReusableSlider
            label="Offtake Rate"
            value={data.goatsOfftakeRate}
            defaultValue={50}
            min={0} max={100} step={1}
            onChange={v => updateField('goatsOfftakeRate', v)}
            suffix="%"
            tooltip="Percentage of herd sold annually."
          />
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Hectare"
              value={data.goatsCostPerHectare[0]}
              defaultValue={50}
              min={0} max={500} step={25}
              onChange={v => updateRangeField('goatsCostPerHectare', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per hectare for goats."
            />
            <ReusableSlider
              label=""
              value={data.goatsCostPerHectare[1]}
              defaultValue={100}
              min={0} max={500} step={25}
              onChange={v => updateRangeField('goatsCostPerHectare', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per hectare for goats."
            />
          </div>
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Animal"
              value={data.goatsCostPerAnimal[0]}
              defaultValue={100}
              min={0} max={500} step={10}
              onChange={v => updateRangeField('goatsCostPerAnimal', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per animal."
            />
            <ReusableSlider
              label=""
              value={data.goatsCostPerAnimal[1]}
              defaultValue={150}
              min={0} max={500} step={10}
              onChange={v => updateRangeField('goatsCostPerAnimal', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per animal."
            />
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Pigs Financials</h4>
          <ReusableSlider
            label="Pigs per Hectare"
            value={data.pigsPerHectare}
            defaultValue={2}
            min={0} max={20} step={0.1}
            onChange={v => updateField('pigsPerHectare', v)}
            suffix="head/ha" tooltip="Number of pigs per hectare."
          />
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Market Price"
              value={data.pigsMarketPrice[0]}
              defaultValue={1500}
              min={1000} max={4000} step={100}
              onChange={v => updateRangeField('pigsMarketPrice', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum sale price per pig."
            />
            <ReusableSlider
              label=""
              value={data.pigsMarketPrice[1]}
              defaultValue={2500}
              min={1000} max={4000} step={100}
              onChange={v => updateRangeField('pigsMarketPrice', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum sale price per pig."
            />
          </div>
          <ReusableSlider
            label="Offtake Rate"
            value={data.pigsOfftakeRate}
            defaultValue={80}
            min={0} max={200} step={5}
            onChange={v => updateField('pigsOfftakeRate', v)}
            suffix="%"
            tooltip="Percentage of herd sold annually."
          />
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Hectare"
              value={data.pigsCostPerHectare[0]}
              defaultValue={200}
              min={0} max={1000} step={50}
              onChange={v => updateRangeField('pigsCostPerHectare', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per hectare for pigs."
            />
            <ReusableSlider
              label=""
              value={data.pigsCostPerHectare[1]}
              defaultValue={400}
              min={0} max={1000} step={50}
              onChange={v => updateRangeField('pigsCostPerHectare', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per hectare for pigs."
            />
          </div>
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Animal"
              value={data.pigsCostPerAnimal[0]}
              defaultValue={300}
              min={0} max={1000} step={25}
              onChange={v => updateRangeField('pigsCostPerAnimal', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per animal."
            />
            <ReusableSlider
              label=""
              value={data.pigsCostPerAnimal[1]}
              defaultValue={500}
              min={0} max={1000} step={25}
              onChange={v => updateRangeField('pigsCostPerAnimal', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per animal."
            />
          </div>
        </div>

        {data.includeChickens && <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Chickens Financials</h4>
          <ReusableSlider
            label="Chickens per Hectare"
            value={data.chickensPerHectare}
            defaultValue={10}
            min={0} max={50} step={1}
            onChange={v => updateField('chickensPerHectare', v)}
            suffix="birds/ha" tooltip="Number of chickens per hectare."
          />
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Market Price"
              value={data.chickensMarketPrice[0]}
              defaultValue={80}
              min={50} max={200} step={5}
              onChange={v => updateRangeField('chickensMarketPrice', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum sale price per chicken."
            />
            <ReusableSlider
              label=""
              value={data.chickensMarketPrice[1]}
              defaultValue={120}
              min={50} max={200} step={5}
              onChange={v => updateRangeField('chickensMarketPrice', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum sale price per chicken."
            />
          </div>
          <ReusableSlider
            label="Offtake Rate"
            value={data.chickensOfftakeRate}
            defaultValue={90}
            min={0} max={200} step={5}
            onChange={v => updateField('chickensOfftakeRate', v)}
            suffix="%"
            tooltip="Percentage of flock sold annually."
          />
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Hectare"
              value={data.chickensCostPerHectare[0]}
              defaultValue={100}
              min={0} max={500} step={10}
              onChange={v => updateRangeField('chickensCostPerHectare', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per hectare for chickens."
            />
            <ReusableSlider
              label=""
              value={data.chickensCostPerHectare[1]}
              defaultValue={200}
              min={0} max={500} step={10}
              onChange={v => updateRangeField('chickensCostPerHectare', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per hectare for chickens."
            />
          </div>
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Animal"
              value={data.chickensCostPerAnimal[0]}
              defaultValue={20}
              min={0} max={100} step={5}
              onChange={v => updateRangeField('chickensCostPerAnimal', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per animal."
            />
            <ReusableSlider
              label=""
              value={data.chickensCostPerAnimal[1]}
              defaultValue={40}
              min={0} max={100} step={5}
              onChange={v => updateRangeField('chickensCostPerAnimal', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per animal."
            />
          </div>
        </div>}

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Crops Financials</h4>
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Revenue per Hectare"
              value={data.cropsRevenuePerHectare[0]}
              defaultValue={2000}
              min={0} max={10000} step={250}
              onChange={v => updateRangeField('cropsRevenuePerHectare', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual revenue per hectare of crops."
            />
            <ReusableSlider
              label=""
              value={data.cropsRevenuePerHectare[1]}
              defaultValue={5000}
              min={0} max={10000} step={250}
              onChange={v => updateRangeField('cropsRevenuePerHectare', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual revenue per hectare of crops."
            />
          </div>
          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Cost per Hectare"
              value={data.cropsCostPerHectare[0]}
              defaultValue={1000}
              min={0} max={5000} step={100}
              onChange={v => updateRangeField('cropsCostPerHectare', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum annual cost per hectare of crops."
            />
            <ReusableSlider
              label=""
              value={data.cropsCostPerHectare[1]}
              defaultValue={2000}
              min={0} max={5000} step={100}
              onChange={v => updateRangeField('cropsCostPerHectare', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum annual cost per hectare of crops."
            />
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Hans's Investment</h4>

          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Livestock Value"
              value={data.hansLivestockValue[0]}
              defaultValue={50000}
              min={0} max={200000} step={1000}
              onChange={v => updateRangeField('hansLivestockValue', 0, v)}
              suffix="ZAR (min)"
              tooltip="Minimum initial value of livestock invested by Hans."
            />
            <ReusableSlider
              label=""
              value={data.hansLivestockValue[1]}
              defaultValue={100000}
              min={0} max={200000} step={1000}
              onChange={v => updateRangeField('hansLivestockValue', 1, v)}
              suffix="ZAR (max)"
              tooltip="Maximum initial value of livestock invested by Hans."
            />
          </div>

          <div className={styles.rangeContainer}>
            <ReusableSlider
              label="Monthly Salary"
              value={data.hansMonthlySalary[0]}
              defaultValue={8000}
              min={0} max={25000} step={500}
              onChange={v => updateRangeField('hansMonthlySalary', 0, v)}
              suffix="ZAR/month (min)"
              tooltip="Minimum monthly salary for Hans."
            />
            <ReusableSlider
              label=""
              value={data.hansMonthlySalary[1]}
              defaultValue={12000}
              min={0} max={25000} step={500}
              onChange={v => updateRangeField('hansMonthlySalary', 1, v)}
              suffix="ZAR/month (max)"
              tooltip="Maximum monthly salary for Hans."
            />
          </div>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Equity Structure - Year 1</h4>
            <ReusableSlider
              label="Oom Willie"
              value={data.equityStructure[0].oomWillie}
              defaultValue={60}
              min={0} max={100} step={1}
              onChange={v => {
                const newEquity = [...data.equityStructure];
                newEquity[0] = { ...newEquity[0], oomWillie: v };
                updateField('equityStructure', newEquity);
              }}
              suffix="%"
              tooltip="Oom Willie's equity share in Year 1."
            />
            <ReusableSlider
              label="Eben"
              value={data.equityStructure[0].eben}
              defaultValue={20}
              min={0} max={100} step={1}
              onChange={v => {
                const newEquity = [...data.equityStructure];
                newEquity[0] = { ...newEquity[0], eben: v };
                updateField('equityStructure', newEquity);
              }}
              suffix="%"
              tooltip="Eben's equity share in Year 1."
            />
            <ReusableSlider
              label="Hans"
              value={data.equityStructure[0].hans}
              defaultValue={20}
              min={0} max={100} step={1}
              onChange={v => {
                const newEquity = [...data.equityStructure];
                newEquity[0] = { ...newEquity[0], hans: v };
                updateField('equityStructure', newEquity);
              }}
              suffix="%"
              tooltip="Hans's equity share in Year 1."
            />
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Equity Structure - Year 5</h4>
            <ReusableSlider
              label="Oom Willie"
              value={data.equityStructure[4].oomWillie}
              defaultValue={50}
              min={0} max={100} step={1}
              onChange={v => {
                const newEquity = [...data.equityStructure];
                newEquity[4] = { ...newEquity[4], oomWillie: v };
                updateField('equityStructure', newEquity);
              }}
              suffix="%"
              tooltip="Oom Willie's equity share in Year 5."
            />
            <ReusableSlider
              label="Eben"
              value={data.equityStructure[4].eben}
              defaultValue={25}
              min={0} max={100} step={1}
              onChange={v => {
                const newEquity = [...data.equityStructure];
                newEquity[4] = { ...newEquity[4], eben: v };
                updateField('equityStructure', newEquity);
              }}
              suffix="%"
              tooltip="Eben's equity share in Year 5."
            />
            <ReusableSlider
              label="Hans"
              value={data.equityStructure[4].hans}
              defaultValue={25}
              min={0} max={100} step={1}
              onChange={v => {
                const newEquity = [...data.equityStructure];
                newEquity[4] = { ...newEquity[4], hans: v };
                updateField('equityStructure', newEquity);
              }}
              suffix="%"
              tooltip="Hans's equity share in Year 5."
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
