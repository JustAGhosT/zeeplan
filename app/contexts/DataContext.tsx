'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { PartnershipData, defaultPartnershipData } from '@/lib/partnershipData';

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
    try {
      const savedVersion = localStorage.getItem(VERSION_KEY);
      
      // If version doesn't match, clear old data and use defaults
      if (savedVersion !== CURRENT_VERSION) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
        return defaultPartnershipData;
      }
      
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      return savedData ? JSON.parse(savedData) : defaultPartnershipData;
    } catch (error) {
      console.error('Error loading data from localStorage', error);
      return defaultPartnershipData;
    }
  });
  const [isControlsOpen, setControlsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      } catch (error) {
        console.error('Error saving data to localStorage', error);
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
