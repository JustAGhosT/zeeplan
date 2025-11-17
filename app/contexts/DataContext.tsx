'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { PartnershipData, defaultPartnershipData } from '@/lib/partnershipData';
import { getStorageItem, setStorageItem, removeStorageItem } from '@/lib/storage';

interface DataContextProps {
  data: PartnershipData;
  updateData: (newData: PartnershipData) => void;
  openControls: () => void;
  closeControls: () => void;
  isControlsOpen: boolean;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'partnershipData';
const VERSION_KEY = 'partnershipDataVersion';
const CURRENT_VERSION = '2.0'; // Increment this to reset to defaults

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PartnershipData>(() => {
    if (typeof window === 'undefined') {
      return defaultPartnershipData;
    }
    
    const savedVersion = getStorageItem<string>(VERSION_KEY, '');
    
    // If version doesn't match, clear old data and use defaults
    if (savedVersion !== CURRENT_VERSION) {
      removeStorageItem(LOCAL_STORAGE_KEY);
      setStorageItem(VERSION_KEY, CURRENT_VERSION);
      return defaultPartnershipData;
    }
    
    return getStorageItem<PartnershipData>(LOCAL_STORAGE_KEY, defaultPartnershipData);
  });
  const [isControlsOpen, setControlsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const success = setStorageItem(LOCAL_STORAGE_KEY, data);
      if (!success) {
        console.warn('Failed to save data to localStorage. Changes may not persist.');
      }
    }
  }, [data]);

  const updateData = (newData: PartnershipData) => {
    setData(newData);
  };

  const openControls = () => setControlsOpen(true);
  const closeControls = () => setControlsOpen(false);

  return (
    <DataContext.Provider value={{ data, updateData, isControlsOpen, openControls, closeControls }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
