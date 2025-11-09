'use client';

import React, { useState } from 'react';
import { LandUseMap } from './LandUseMap';
import { Slider } from './UIComponents';
export function DynamicLandUseMap() {
  const [year, setYear] = useState(1);

  return (
    <div>
      <Slider label="Year" value={year} onChange={setYear} min={1} max={5} step={1} />
      <LandUseMap year={year} />
    </div>
  );
}
