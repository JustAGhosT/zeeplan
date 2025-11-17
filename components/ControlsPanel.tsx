'use client';

import { useState, useEffect } from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import styles from './ControlsPanel.module.css';
import { ReusableSlider } from './ReusableSlider';
import { RangeSlider } from './RangeSlider';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ControlsPanelProps {
  data: PartnershipData;
  onUpdate: (data: PartnershipData) => void;
}

export function ControlsPanel({ data, onUpdate }: ControlsPanelProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(
    new Set([
      'farm-basics',
      'options',
      'sekelbos-clearance',
      'land-allocation',
      'cattle',
      'goats',
      'pigs',
      'chickens',
      'crops',
      'hans-investment',
      'equity-y1',
      'equity-y5',
    ])
  );

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
    min: number,
    max: number
  ) => {
    const newData = { ...data, [field]: [min, max] as [number, number] };
    onUpdate(newData);
  };

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const getSectionSummary = (sectionId: string): string => {
    switch (sectionId) {
      case 'farm-basics':
        return `${data.landSize}ha, ${data.currentLSU}→${data.targetLSU} LSU, ${data.sekelbosEncroachment}% Sekelbos`;
      case 'options':
        return `🐔 ${data.includeChickens ? 'Yes' : 'No'}, 🐰 ${data.includeRabbits ? 'Yes' : 'No'}`;
      case 'sekelbos-clearance':
        return `${data.yearlyTargets.reduce((sum, year) => sum + year.sekelbosCleared, 0)}ha total`;
      case 'land-allocation':
        const total = data.cattleHectares + data.goatsHectares + data.pigsHectares + data.chickensHectares + data.cropsHectares;
        return `${total}ha / ${data.landSize}ha`;
      case 'cattle':
        return `${data.cattlePerHectare}/ha, ${data.cattleOfftakeRate}% offtake`;
      case 'goats':
        return `${data.goatsPerHectare}/ha, ${data.goatsOfftakeRate}% offtake`;
      case 'pigs':
        return `${data.pigsPerHectare}/ha, ${data.pigsOfftakeRate}% offtake`;
      case 'chickens':
        return `${data.chickensPerHectare}/ha, ${data.chickensOfftakeRate}% offtake`;
      case 'crops':
        return `R${data.cropsRevenuePerHectare[0]}-${data.cropsRevenuePerHectare[1]}/ha`;
      case 'hans-investment':
        return `R${data.hansLivestockValue[0]}-${data.hansLivestockValue[1]} livestock`;
      case 'equity-y1':
        return `${data.equityStructure[0].oomHein}% / ${data.equityStructure[0].eben}% / ${data.equityStructure[0].hans}%`;
      case 'equity-y5':
        return `${data.equityStructure[4].oomHein}% / ${data.equityStructure[4].eben}% / ${data.equityStructure[4].hans}%`;
      default:
        return '';
    }
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
      <div className={styles.controlsContainer}>
        {/* Farm Basics Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('farm-basics')}
            aria-expanded={!collapsedSections.has('farm-basics')}
          >
            {collapsedSections.has('farm-basics') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>🏞️ Farm Basics</h4>
            {collapsedSections.has('farm-basics') && (
              <span className={styles.sectionSummary}>{getSectionSummary('farm-basics')}</span>
            )}
          </button>
          {!collapsedSections.has('farm-basics') && (
            <div className={styles.sectionContent}>
              <ReusableSlider
                label="Land Size"
                value={data.landSize}
                defaultValue={600}
                onChange={(v) => updateField('landSize', v)}
                min={100}
                max={2000}
                step={50}
                suffix="ha"
                tooltip="Total farm size."
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
                tooltip="Current livestock units."
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
                tooltip="Target livestock units."
              />
              <ReusableSlider
                label="Sekelbos"
                value={data.sekelbosEncroachment}
                defaultValue={70}
                onChange={(v) => updateField('sekelbosEncroachment', v)}
                min={0}
                max={100}
                step={1}
                suffix="%"
                tooltip="Farm area affected."
              />
            </div>
          )}
        </div>

        {/* Options Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('options')}
            aria-expanded={!collapsedSections.has('options')}
          >
            {collapsedSections.has('options') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>🐾 Options</h4>
            {collapsedSections.has('options') && (
              <span className={styles.sectionSummary}>{getSectionSummary('options')}</span>
            )}
          </button>
          {!collapsedSections.has('options') && (
            <div className={styles.sectionContent}>
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={data.includeChickens}
                    onChange={(e) => updateField('includeChickens', e.target.checked)}
                  />
                  🐔 Chickens
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={data.includeRabbits}
                    onChange={(e) => updateField('includeRabbits', e.target.checked)}
                  />
                  🐰 Rabbits
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Sekelbos Clearance Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('sekelbos-clearance')}
            aria-expanded={!collapsedSections.has('sekelbos-clearance')}
          >
            {collapsedSections.has('sekelbos-clearance') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>🌳 Sekelbos Clearance</h4>
            {collapsedSections.has('sekelbos-clearance') && (
              <span className={styles.sectionSummary}>{getSectionSummary('sekelbos-clearance')}</span>
            )}
          </button>
          {!collapsedSections.has('sekelbos-clearance') && (
            <div className={styles.sectionContent}>
              {data.yearlyTargets.map((year, index) => (
                <ReusableSlider
                  key={index}
                  label={`Y${index + 1}`}
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
                  tooltip={`Year ${index + 1} clearance.`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Land Allocation Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('land-allocation')}
            aria-expanded={!collapsedSections.has('land-allocation')}
          >
            {collapsedSections.has('land-allocation') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>📏 Land Allocation</h4>
            {collapsedSections.has('land-allocation') && (
              <span className={styles.sectionSummary}>{getSectionSummary('land-allocation')}</span>
            )}
          </button>
          {!collapsedSections.has('land-allocation') && (
            <div className={styles.sectionContent}>
              <ReusableSlider
                label="Cattle"
                value={data.cattleHectares}
                defaultValue={500}
                onChange={(v) => updateField('cattleHectares', v)}
                min={0}
                max={data.landSize}
                step={10}
                suffix="ha"
                tooltip="Cattle grazing area."
              />
              <ReusableSlider
                label="Goats"
                value={data.goatsHectares}
                defaultValue={0}
                onChange={(v) => updateField('goatsHectares', v)}
                min={0}
                max={data.landSize}
                step={10}
                suffix="ha"
                tooltip="Goat browsing area."
              />
              <ReusableSlider
                label="Pigs"
                value={data.pigsHectares}
                defaultValue={0}
                onChange={(v) => updateField('pigsHectares', v)}
                min={0}
                max={data.landSize}
                step={10}
                suffix="ha"
                tooltip="Pig rooting area."
              />
              {data.includeChickens && <ReusableSlider
                label="Chickens"
                value={data.chickensHectares}
                defaultValue={0}
                onChange={(v) => updateField('chickensHectares', v)}
                min={0}
                max={data.landSize}
                step={10}
                suffix="ha"
                tooltip="Chicken scratching area."
              />}
              <ReusableSlider
                label="Crops"
                value={data.cropsHectares}
                defaultValue={0}
                onChange={(v) => updateField('cropsHectares', v)}
                min={0}
                max={data.landSize}
                step={10}
                suffix="ha"
                tooltip="Crop cultivation area."
              />
            </div>
          )}
        </div>

        {/* Cattle Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('cattle')}
            aria-expanded={!collapsedSections.has('cattle')}
          >
            {collapsedSections.has('cattle') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>🐄 Cattle</h4>
            {collapsedSections.has('cattle') && (
              <span className={styles.sectionSummary}>{getSectionSummary('cattle')}</span>
            )}
          </button>
          {!collapsedSections.has('cattle') && (
            <div className={styles.sectionContent}>
              <ReusableSlider
                label="Density"
                value={data.cattlePerHectare}
                defaultValue={0.2}
                min={0} max={1} step={0.01}
                onChange={v => updateField('cattlePerHectare', v)}
                suffix="head/ha" tooltip="Number of cattle per hectare."
              />
              <RangeSlider
                label="Market Price"
                valueMin={data.cattleMarketPrice[0]}
                valueMax={data.cattleMarketPrice[1]}
                defaultMin={8000}
                defaultMax={12000}
                min={5000} max={20000} step={500}
                onChange={(min, max) => updateRangeField('cattleMarketPrice', min, max)}
                suffix="ZAR"
                tooltip="Sale price range per head."
              />
              <ReusableSlider
                label="Offtake"
                value={data.cattleOfftakeRate}
                defaultValue={25}
                min={0} max={100} step={1}
                onChange={v => updateField('cattleOfftakeRate', v)}
                suffix="%"
                tooltip="Percentage of herd sold annually."
              />
              <RangeSlider
                label="Cost/ha"
                valueMin={data.cattleCostPerHectare[0]}
                valueMax={data.cattleCostPerHectare[1]}
                defaultMin={100}
                defaultMax={200}
                min={0} max={1000} step={50}
                onChange={(min, max) => updateRangeField('cattleCostPerHectare', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per hectare."
              />
              <RangeSlider
                label="Cost/Animal"
                valueMin={data.cattleCostPerAnimal[0]}
                valueMax={data.cattleCostPerAnimal[1]}
                defaultMin={500}
                defaultMax={800}
                min={0} max={2000} step={50}
                onChange={(min, max) => updateRangeField('cattleCostPerAnimal', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per animal."
              />
            </div>
          )}
        </div>

        {/* Goats Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('goats')}
            aria-expanded={!collapsedSections.has('goats')}
          >
            {collapsedSections.has('goats') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>🐐 Goats</h4>
            {collapsedSections.has('goats') && (
              <span className={styles.sectionSummary}>{getSectionSummary('goats')}</span>
            )}
          </button>
          {!collapsedSections.has('goats') && (
            <div className={styles.sectionContent}>
              <ReusableSlider
                label="Density"
                value={data.goatsPerHectare}
                defaultValue={1}
                min={0} max={10} step={0.1}
                onChange={v => updateField('goatsPerHectare', v)}
                suffix="head/ha" tooltip="Number of goats per hectare."
              />
              <RangeSlider
                label="Market Price"
                valueMin={data.goatsMarketPrice[0]}
                valueMax={data.goatsMarketPrice[1]}
                defaultMin={1000}
                defaultMax={1500}
                min={500} max={3000} step={100}
                onChange={(min, max) => updateRangeField('goatsMarketPrice', min, max)}
                suffix="ZAR"
                tooltip="Sale price range per goat."
              />
              <ReusableSlider
                label="Offtake"
                value={data.goatsOfftakeRate}
                defaultValue={50}
                min={0} max={100} step={1}
                onChange={v => updateField('goatsOfftakeRate', v)}
                suffix="%"
                tooltip="Percentage of herd sold annually."
              />
              <RangeSlider
                label="Cost/ha"
                valueMin={data.goatsCostPerHectare[0]}
                valueMax={data.goatsCostPerHectare[1]}
                defaultMin={50}
                defaultMax={100}
                min={0} max={500} step={25}
                onChange={(min, max) => updateRangeField('goatsCostPerHectare', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per hectare."
              />
              <RangeSlider
                label="Cost/Animal"
                valueMin={data.goatsCostPerAnimal[0]}
                valueMax={data.goatsCostPerAnimal[1]}
                defaultMin={100}
                defaultMax={150}
                min={0} max={500} step={10}
                onChange={(min, max) => updateRangeField('goatsCostPerAnimal', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per animal."
              />
            </div>
          )}
        </div>

        {/* Pigs Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('pigs')}
            aria-expanded={!collapsedSections.has('pigs')}
          >
            {collapsedSections.has('pigs') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>🐷 Pigs</h4>
            {collapsedSections.has('pigs') && (
              <span className={styles.sectionSummary}>{getSectionSummary('pigs')}</span>
            )}
          </button>
          {!collapsedSections.has('pigs') && (
            <div className={styles.sectionContent}>
              <ReusableSlider
                label="Density"
                value={data.pigsPerHectare}
                defaultValue={2}
                min={0} max={20} step={0.1}
                onChange={v => updateField('pigsPerHectare', v)}
                suffix="head/ha" tooltip="Number of pigs per hectare."
              />
              <RangeSlider
                label="Market Price"
                valueMin={data.pigsMarketPrice[0]}
                valueMax={data.pigsMarketPrice[1]}
                defaultMin={1500}
                defaultMax={2500}
                min={1000} max={4000} step={100}
                onChange={(min, max) => updateRangeField('pigsMarketPrice', min, max)}
                suffix="ZAR"
                tooltip="Sale price range per pig."
              />
              <ReusableSlider
                label="Offtake"
                value={data.pigsOfftakeRate}
                defaultValue={80}
                min={0} max={200} step={5}
                onChange={v => updateField('pigsOfftakeRate', v)}
                suffix="%"
                tooltip="Percentage of herd sold annually."
              />
              <RangeSlider
                label="Cost/ha"
                valueMin={data.pigsCostPerHectare[0]}
                valueMax={data.pigsCostPerHectare[1]}
                defaultMin={200}
                defaultMax={400}
                min={0} max={1000} step={50}
                onChange={(min, max) => updateRangeField('pigsCostPerHectare', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per hectare."
              />
              <RangeSlider
                label="Cost/Animal"
                valueMin={data.pigsCostPerAnimal[0]}
                valueMax={data.pigsCostPerAnimal[1]}
                defaultMin={300}
                defaultMax={500}
                min={0} max={1000} step={25}
                onChange={(min, max) => updateRangeField('pigsCostPerAnimal', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per animal."
              />
            </div>
          )}
        </div>

        {/* Chickens Section */}
        {data.includeChickens && <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('chickens')}
            aria-expanded={!collapsedSections.has('chickens')}
          >
            {collapsedSections.has('chickens') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>🐔 Chickens</h4>
            {collapsedSections.has('chickens') && (
              <span className={styles.sectionSummary}>{getSectionSummary('chickens')}</span>
            )}
          </button>
          {!collapsedSections.has('chickens') && (
            <div className={styles.sectionContent}>
              <ReusableSlider
                label="Density"
                value={data.chickensPerHectare}
                defaultValue={10}
                min={0} max={50} step={1}
                onChange={v => updateField('chickensPerHectare', v)}
                suffix="birds/ha" tooltip="Number of chickens per hectare."
              />
              <RangeSlider
                label="Market Price"
                valueMin={data.chickensMarketPrice[0]}
                valueMax={data.chickensMarketPrice[1]}
                defaultMin={80}
                defaultMax={120}
                min={50} max={200} step={5}
                onChange={(min, max) => updateRangeField('chickensMarketPrice', min, max)}
                suffix="ZAR"
                tooltip="Sale price range per chicken."
              />
              <ReusableSlider
                label="Offtake"
                value={data.chickensOfftakeRate}
                defaultValue={90}
                min={0} max={200} step={5}
                onChange={v => updateField('chickensOfftakeRate', v)}
                suffix="%"
                tooltip="Percentage of flock sold annually."
              />
              <RangeSlider
                label="Cost/ha"
                valueMin={data.chickensCostPerHectare[0]}
                valueMax={data.chickensCostPerHectare[1]}
                defaultMin={100}
                defaultMax={200}
                min={0} max={500} step={10}
                onChange={(min, max) => updateRangeField('chickensCostPerHectare', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per hectare."
              />
              <RangeSlider
                label="Cost/Animal"
                valueMin={data.chickensCostPerAnimal[0]}
                valueMax={data.chickensCostPerAnimal[1]}
                defaultMin={20}
                defaultMax={40}
                min={0} max={100} step={5}
                onChange={(min, max) => updateRangeField('chickensCostPerAnimal', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per animal."
              />
            </div>
          )}
        </div>}

        {/* Crops Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('crops')}
            aria-expanded={!collapsedSections.has('crops')}
          >
            {collapsedSections.has('crops') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>🌾 Crops</h4>
            {collapsedSections.has('crops') && (
              <span className={styles.sectionSummary}>{getSectionSummary('crops')}</span>
            )}
          </button>
          {!collapsedSections.has('crops') && (
            <div className={styles.sectionContent}>
              <RangeSlider
                label="Revenue/ha"
                valueMin={data.cropsRevenuePerHectare[0]}
                valueMax={data.cropsRevenuePerHectare[1]}
                defaultMin={2000}
                defaultMax={5000}
                min={0} max={10000} step={250}
                onChange={(min, max) => updateRangeField('cropsRevenuePerHectare', min, max)}
                suffix="ZAR"
                tooltip="Annual revenue per hectare."
              />
              <RangeSlider
                label="Cost/ha"
                valueMin={data.cropsCostPerHectare[0]}
                valueMax={data.cropsCostPerHectare[1]}
                defaultMin={1000}
                defaultMax={2000}
                min={0} max={5000} step={100}
                onChange={(min, max) => updateRangeField('cropsCostPerHectare', min, max)}
                suffix="ZAR"
                tooltip="Annual cost per hectare."
              />
            </div>
          )}
        </div>

        {/* Hans's Investment Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('hans-investment')}
            aria-expanded={!collapsedSections.has('hans-investment')}
          >
            {collapsedSections.has('hans-investment') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>💼 Hans's Investment</h4>
            {collapsedSections.has('hans-investment') && (
              <span className={styles.sectionSummary}>{getSectionSummary('hans-investment')}</span>
            )}
          </button>
          {!collapsedSections.has('hans-investment') && (
            <div className={styles.sectionContent}>
              <RangeSlider
                label="Livestock Value"
                valueMin={data.hansLivestockValue[0]}
                valueMax={data.hansLivestockValue[1]}
                defaultMin={50000}
                defaultMax={100000}
                min={0} max={200000} step={1000}
                onChange={(min, max) => updateRangeField('hansLivestockValue', min, max)}
                suffix="ZAR"
                tooltip="Initial value of livestock."
              />
              <RangeSlider
                label="Monthly Salary"
                valueMin={data.hansMonthlySalary[0]}
                valueMax={data.hansMonthlySalary[1]}
                defaultMin={8000}
                defaultMax={12000}
                min={0} max={25000} step={500}
                onChange={(min, max) => updateRangeField('hansMonthlySalary', min, max)}
                suffix="ZAR/month"
                tooltip="Monthly salary range."
              />
            </div>
          )}
        </div>

        {/* Equity Y1 Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('equity-y1')}
            aria-expanded={!collapsedSections.has('equity-y1')}
          >
            {collapsedSections.has('equity-y1') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>📊 Equity Y1</h4>
            {collapsedSections.has('equity-y1') && (
              <span className={styles.sectionSummary}>{getSectionSummary('equity-y1')}</span>
            )}
          </button>
          {!collapsedSections.has('equity-y1') && (
            <div className={styles.sectionContent}>
              <ReusableSlider
                label="Oom Hein"
                value={data.equityStructure[0].oomHein}
                defaultValue={60}
                min={0} max={100} step={1}
                onChange={v => {
                  const newEquity = [...data.equityStructure];
                  newEquity[0] = { ...newEquity[0], oomHein: v };
                  updateField('equityStructure', newEquity);
                }}
                suffix="%"
                tooltip="Year 1 equity."
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
                tooltip="Year 1 equity."
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
                tooltip="Year 1 equity."
              />
            </div>
          )}
        </div>

        {/* Equity Y5 Section */}
        <div className={styles.section}>
          <button
            className={styles.sectionHeader}
            onClick={() => toggleSection('equity-y5')}
            aria-expanded={!collapsedSections.has('equity-y5')}
          >
            {collapsedSections.has('equity-y5') ? (
              <ChevronRight className={styles.chevron} size={16} />
            ) : (
              <ChevronDown className={styles.chevron} size={16} />
            )}
            <h4 className={styles.sectionTitle}>📊 Equity Y5</h4>
            {collapsedSections.has('equity-y5') && (
              <span className={styles.sectionSummary}>{getSectionSummary('equity-y5')}</span>
            )}
          </button>
          {!collapsedSections.has('equity-y5') && (
            <div className={styles.sectionContent}>
              <ReusableSlider
                label="Oom Hein"
                value={data.equityStructure[4].oomHein}
                defaultValue={50}
                min={0} max={100} step={1}
                onChange={v => {
                  const newEquity = [...data.equityStructure];
                  newEquity[4] = { ...newEquity[4], oomHein: v };
                  updateField('equityStructure', newEquity);
                }}
                suffix="%"
                tooltip="Year 5 equity."
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
                tooltip="Year 5 equity."
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
                tooltip="Year 5 equity."
              />
            </div>
          )}
        </div>

        <div className={styles.resetButtonContainer}>
          <button
            onClick={() => {
              if (confirm('Reset all values to defaults?')) {
                window.location.reload();
              }
            }}
            className={styles.resetButton}
          >
            Reset to Defaults
          </button>
        </div>
      </div>
    </>
  );
}
