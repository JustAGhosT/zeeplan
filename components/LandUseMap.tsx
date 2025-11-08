'use client';

import React from 'react';

interface LandUseMapProps {
  width?: number;
  height?: number;
  interactive?: boolean;
}

/**
 * Interactive Land Use Map Component
 * Shows the 5 zones of the 600ha Zeeplan farm with percentages
 * Color palette: Earth #4C3F2F, Green #5DAA68, Gold #C69B3A
 */
export const LandUseMap: React.FC<LandUseMapProps> = ({ 
  width = 800, 
  height = 600,
  interactive = true 
}) => {
  const [hoveredZone, setHoveredZone] = React.useState<string | null>(null);

  const zones = [
    { 
      id: 'western-ridge', 
      name: 'Western Ridge', 
      area: '240-300ha', 
      percentage: '40-50%', 
      use: 'Sekelbos clearance + goat browsing',
      color: '#C69B3A',
      path: 'M 50 100 Q 100 80 150 100 L 150 350 Q 100 370 50 350 Z'
    },
    { 
      id: 'central-plateau', 
      name: 'Central Plateau', 
      area: '150ha', 
      percentage: '25%', 
      use: 'Cattle + pigs feedlot corridor',
      color: '#5DAA68',
      path: 'M 170 120 Q 280 100 390 120 L 390 340 Q 280 360 170 340 Z'
    },
    { 
      id: 'eastern-corridor', 
      name: 'Eastern Corridor', 
      area: '120ha', 
      percentage: '20%', 
      use: 'Dryland rotation (maize/sorghum/sunflower)',
      color: '#8B7355',
      path: 'M 410 130 L 500 130 L 500 330 L 410 330 Z'
    },
    { 
      id: 'southern-foot', 
      name: 'Southern Foot (Mbewa)', 
      area: '60ha', 
      percentage: '10%', 
      use: 'Irrigated veg + lucerne + homestead',
      color: '#4C9F70',
      path: 'M 170 360 L 390 360 L 390 420 L 170 420 Z'
    },
    { 
      id: 'northern-slope', 
      name: 'Northern Slope', 
      area: '30ha', 
      percentage: '5%', 
      use: 'Rehabilitation / buffer',
      color: '#6B8E6B',
      path: 'M 170 80 L 390 80 L 390 100 L 170 100 Z'
    }
  ];

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 600 500" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'system-ui, sans-serif' }}
    >
      {/* Title */}
      <text x="300" y="30" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#4C3F2F">
        Zeeplan 600ha Land Use Map
      </text>

      {/* Legend */}
      <g transform="translate(520, 100)">
        <text x="0" y="0" fontSize="14" fontWeight="bold" fill="#4C3F2F">Legend</text>
        <rect x="0" y="10" width="15" height="15" fill="#C69B3A" />
        <text x="20" y="22" fontSize="11" fill="#4C3F2F">Sekelbos</text>
        
        <rect x="0" y="35" width="15" height="15" fill="#5DAA68" />
        <text x="20" y="47" fontSize="11" fill="#4C3F2F">Grazing</text>
        
        <rect x="0" y="60" width="15" height="15" fill="#8B7355" />
        <text x="20" y="72" fontSize="11" fill="#4C3F2F">Crops</text>
        
        <rect x="0" y="85" width="15" height="15" fill="#4C9F70" />
        <text x="20" y="97" fontSize="11" fill="#4C3F2F">Irrigation</text>
        
        <rect x="0" y="110" width="15" height="15" fill="#6B8E6B" />
        <text x="20" y="122" fontSize="11" fill="#4C3F2F">Buffer</text>
      </g>

      {/* Zones */}
      {zones.map((zone) => (
        <g key={zone.id}>
          <path
            d={zone.path}
            fill={zone.color}
            stroke="#4C3F2F"
            strokeWidth="2"
            opacity={hoveredZone === zone.id ? 0.9 : 0.7}
            style={{
              cursor: interactive ? 'pointer' : 'default',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={interactive ? () => setHoveredZone(zone.id) : undefined}
            onMouseLeave={interactive ? () => setHoveredZone(null) : undefined}
          />
          
          {/* Zone labels */}
          <text
            x={zone.id === 'western-ridge' ? 100 : 
               zone.id === 'central-plateau' ? 280 : 
               zone.id === 'eastern-corridor' ? 455 :
               zone.id === 'southern-foot' ? 280 : 280}
            y={zone.id === 'western-ridge' ? 220 : 
               zone.id === 'central-plateau' ? 230 : 
               zone.id === 'eastern-corridor' ? 230 :
               zone.id === 'southern-foot' ? 390 : 90}
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fill="#FFFFFF"
            style={{ pointerEvents: 'none' }}
          >
            {zone.name}
          </text>
          <text
            x={zone.id === 'western-ridge' ? 100 : 
               zone.id === 'central-plateau' ? 280 : 
               zone.id === 'eastern-corridor' ? 455 :
               zone.id === 'southern-foot' ? 280 : 280}
            y={zone.id === 'western-ridge' ? 240 : 
               zone.id === 'central-plateau' ? 250 : 
               zone.id === 'eastern-corridor' ? 250 :
               zone.id === 'southern-foot' ? 405 : 105}
            textAnchor="middle"
            fontSize="11"
            fill="#FFFFFF"
            style={{ pointerEvents: 'none' }}
          >
            {zone.area} ({zone.percentage})
          </text>
        </g>
      ))}

      {/* Tooltip */}
      {hoveredZone && (
        <g>
          <rect x="50" y="450" width="500" height="40" fill="#FFFFFF" stroke="#4C3F2F" strokeWidth="2" rx="5" />
          <text x="60" y="470" fontSize="12" fill="#4C3F2F" fontWeight="bold">
            {zones.find(z => z.id === hoveredZone)?.name}:
          </text>
          <text x="60" y="485" fontSize="11" fill="#4C3F2F">
            {zones.find(z => z.id === hoveredZone)?.use}
          </text>
        </g>
      )}

      {/* Compass */}
      <g transform="translate(560, 450)">
        <circle cx="0" cy="0" r="20" fill="none" stroke="#4C3F2F" strokeWidth="2" />
        <path d="M 0 -15 L 5 0 L 0 -5 L -5 0 Z" fill="#4C3F2F" />
        <text x="0" y="-25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4C3F2F">N</text>
      </g>
    </svg>
  );
};

export default LandUseMap;
