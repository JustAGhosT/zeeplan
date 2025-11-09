'use client';

import React, { useState } from 'react';
import { LandUseMap } from './LandUseMap';
import { Slider } from './UIComponents';
import { PartnershipData } from '@/lib/partnershipData';

interface DynamicLandUseMapProps {
  data: PartnershipData;
}

export function DynamicLandUseMap({ data }: DynamicLandUseMapProps) {
  const [year, setYear] = useState(1);

  return (
    <div>
      <Slider
        label="Year"
        value={year}
        onChange={setYear}
        min={1}
        max={5}
        step={1}
      />
      <LandUseMap year={year} />
    </div>
  );
}
