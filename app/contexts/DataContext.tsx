'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { PartnershipData, defaultPartnershipData } from '@/lib/partnershipData';

interface DataContextProps {
  data: PartnershipData;
  updateData: (newData: PartnershipData) => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PartnershipData>(defaultPartnershipData);

  const updateData = (newData: PartnershipData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
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
