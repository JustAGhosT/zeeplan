'use client';

import React from 'react';
import Link from 'next/link';

interface LandUseMapProps {
  width?: number;
  height?: number;
  interactive?: boolean;
  clickable?: boolean;
  showAnimation?: boolean;
  year?: number;
}

/**
 * Interactive Land Use Map Component
 * Shows the 5 zones of the 600ha Zeeplan farm with percentages
 * Color palette: Earth #4C3F2F, Green #5DAA68, Gold #C69B3A
 * Enhanced with animations, accessibility, and clickable zones
 */
export const LandUseMap: React.FC<LandUseMapProps> = ({ 
  width = 800, 
  height = 600,
  interactive = true,
  clickable = true,
  showAnimation = true,
  year = 1
}) => {
  const [hoveredZone, setHoveredZone] = React.useState<string | null>(null);
  const [selectedZone, setSelectedZone] = React.useState<string | null>(null);
  const [animationProgress, setAnimationProgress] = React.useState(0);

  // Animation effect on mount
  React.useEffect(() => {
    if (showAnimation) {
      const timer = setInterval(() => {
        setAnimationProgress(prev => {
          if (prev >= 1) {
            clearInterval(timer);
            return 1;
          }
          return prev + 0.02;
        });
      }, 20);
      return () => clearInterval(timer);
    } else {
      setAnimationProgress(1);
    }
  }, [showAnimation]);

  const calculateZonesForYear = (year: number) => {
    const clearedLand = Math.min(240, 50 * year);
    const sekelbosLand = 240 - clearedLand;
    const grazingLand = 150 + clearedLand;

    return [
      {
        id: 'western-ridge',
        name: 'Western Ridge',
        area: `${sekelbosLand}ha`,
        percentage: `${((sekelbosLand / 600) * 100).toFixed(0)}%`,
        use: 'Sekelbos clearance + goat browsing',
        link: '/sekelbos',
        color: '#C69B3A',
        path: 'M 50 100 Q 100 80 150 100 L 150 350 Q 100 370 50 350 Z',
        description: `Year ${year}: ${sekelbosLand}ha of Sekelbos remaining. Cleared land is converted to grazing.`
      },
      {
        id: 'central-plateau',
        name: 'Central Plateau',
        area: `${grazingLand}ha`,
        percentage: `${((grazingLand / 600) * 100).toFixed(0)}%`,
        use: 'Cattle + pigs feedlot corridor',
        link: '/livestock',
        color: '#5DAA68',
        path: 'M 170 120 Q 280 100 390 120 L 390 340 Q 280 360 170 340 Z',
        description: `Year ${year}: ${grazingLand}ha of rotational grazing.`
      },
      {
        id: 'eastern-corridor',
        name: 'Eastern Corridor',
        area: '120ha',
        percentage: '20%',
        use: 'Dryland rotation (maize/sorghum/sunflower)',
        link: '/crops',
        color: '#8B7355',
        path: 'M 410 130 L 500 130 L 500 330 L 410 330 Z',
        description: 'Dryland crop rotation providing feed independence and cash crops with drought-adapted varieties'
      },
      {
        id: 'southern-foot',
        name: 'Southern Foot (Mbewa)',
        area: '60ha',
        percentage: '10%',
        use: 'Irrigated veg + lucerne + homestead',
        link: '/crops/irrigated',
        color: '#4C9F70',
        path: 'M 170 360 L 390 360 L 390 420 L 170 420 Z',
        description: 'Solar-powered irrigation hub with high-value vegetables, lucerne for livestock feed, and homestead area'
      },
      {
        id: 'northern-slope',
        name: 'Northern Slope',
        area: '30ha',
        percentage: '5%',
        use: 'Rehabilitation / buffer',
        link: '/about',
        color: '#6B8E6B',
        path: 'M 170 80 L 390 80 L 390 100 L 170 100 Z',
        description: 'Conservation and rehabilitation buffer zone for biodiversity corridors and ecosystem services'
      }
    ];
  };

  const zones = calculateZonesForYear(year);

  const handleZoneClick = (zone: typeof zones[0]) => {
    if (clickable) {
      setSelectedZone(zone.id);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent, zone: typeof zones[0]) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleZoneClick(zone);
    }
  };

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 600 500" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'system-ui, sans-serif' }}
      role="img"
      aria-label="Zeeplan 600 hectare land use map showing 5 operational zones"
    >
      <title>Zeeplan 600ha Land Use Map</title>
      <desc>Interactive map showing the allocation of 600 hectares into 5 zones: Western Ridge (40-50%), Central Plateau (25%), Eastern Corridor (20%), Southern Foot (10%), and Northern Slope (5%)</desc>

      {/* Gradient definitions for enhanced visuals */}
      <defs>
        <linearGradient id="zoneGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C69B3A" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#A67C1A" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="zoneGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5DAA68" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#4A8A55" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="zoneGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#6B5340" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="zoneGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4C9F70" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#3C7F60" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="zoneGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B8E6B" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#5B7E5B" stopOpacity="0.9"/>
        </linearGradient>
        
        {/* Drop shadow filter */}
        <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="2" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge> 
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/> 
          </feMerge>
        </filter>

        {/* Glow effect for hover */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Title with animation */}
      <text 
        x="300" 
        y="30" 
        textAnchor="middle" 
        fontSize="24" 
        fontWeight="bold" 
        fill="#4C3F2F"
        opacity={animationProgress}
      >
        Zeeplan 600ha Land Use Map
      </text>

      {/* Legend with improved styling */}
      <g transform="translate(520, 100)" opacity={animationProgress}>
        <rect x="-5" y="-5" width="75" height="135" fill="#F9FAFB" stroke="#4C3F2F" strokeWidth="1" rx="5" opacity="0.9"/>
        <text x="0" y="0" fontSize="14" fontWeight="bold" fill="#4C3F2F">Legend</text>
        
        <rect x="0" y="10" width="15" height="15" fill="#C69B3A" rx="2" />
        <text x="20" y="22" fontSize="11" fill="#4C3F2F">Sekelbos</text>
        
        <rect x="0" y="35" width="15" height="15" fill="#5DAA68" rx="2" />
        <text x="20" y="47" fontSize="11" fill="#4C3F2F">Grazing</text>
        
        <rect x="0" y="60" width="15" height="15" fill="#8B7355" rx="2" />
        <text x="20" y="72" fontSize="11" fill="#4C3F2F">Crops</text>
        
        <rect x="0" y="85" width="15" height="15" fill="#4C9F70" rx="2" />
        <text x="20" y="97" fontSize="11" fill="#4C3F2F">Irrigation</text>
        
        <rect x="0" y="110" width="15" height="15" fill="#6B8E6B" rx="2" />
        <text x="20" y="122" fontSize="11" fill="#4C3F2F">Buffer</text>
      </g>

      {/* Zones with enhanced interactivity */}
      {zones.map((zone, index) => {
        const gradientId = `zoneGradient${index + 1}`;
        const isHovered = hoveredZone === zone.id;
        const isSelected = selectedZone === zone.id;
        const zoneOpacity = animationProgress * (isHovered ? 1 : isSelected ? 0.95 : 0.85);
        
        return (
          <g key={zone.id}>
            {clickable && zone.link ? (
              <Link href={zone.link} aria-label={`Go to ${zone.name} details`}>
                <path
                  d={zone.path}
                  fill={`url(#${gradientId})`}
                  stroke={isHovered || isSelected ? "#2D5016" : "#4C3F2F"}
                  strokeWidth={isHovered || isSelected ? "3" : "2"}
                  opacity={zoneOpacity}
                  filter={isHovered ? "url(#glow)" : isSelected ? "url(#dropShadow)" : "none"}
                  style={{
                    cursor: interactive ? 'pointer' : 'default',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                    transformOrigin: 'center'
                  }}
                  onMouseEnter={interactive ? () => setHoveredZone(zone.id) : undefined}
                  onMouseLeave={interactive ? () => setHoveredZone(null) : undefined}
                  onClick={() => handleZoneClick(zone)}
                  onKeyDown={(e: any) => handleKeyPress(e, zone)}
                  tabIndex={interactive ? 0 : -1}
                  role="button"
                  aria-label={`${zone.name}: ${zone.area} (${zone.percentage}) - ${zone.use}. Click to learn more.`}
                />
              </Link>
            ) : (
              <path
                d={zone.path}
                fill={`url(#${gradientId})`}
                stroke={isHovered ? "#2D5016" : "#4C3F2F"}
                strokeWidth={isHovered ? "3" : "2"}
                opacity={zoneOpacity}
                filter={isHovered ? "url(#glow)" : "none"}
                style={{
                  cursor: interactive ? 'pointer' : 'default',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={interactive ? () => setHoveredZone(zone.id) : undefined}
                onMouseLeave={interactive ? () => setHoveredZone(null) : undefined}
                aria-label={`${zone.name}: ${zone.area} (${zone.percentage}) - ${zone.use}`}
              />
            )}
            
            {/* Zone labels with improved readability */}
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
              stroke="#4C3F2F"
              strokeWidth="0.5"
              style={{ pointerEvents: 'none' }}
              opacity={animationProgress}
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
              stroke="#4C3F2F"
              strokeWidth="0.3"
              style={{ pointerEvents: 'none' }}
              opacity={animationProgress}
            >
              {zone.area} ({zone.percentage})
            </text>
          </g>
        );
      })}

      {/* Enhanced tooltip with more information */}
      {hoveredZone && (
        <g opacity={animationProgress}>
          <rect 
            x="50" 
            y="440" 
            width="500" 
            height="50" 
            fill="#FFFFFF" 
            stroke="#4C3F2F" 
            strokeWidth="2" 
            rx="8"
            filter="url(#dropShadow)"
          />
          <text x="60" y="460" fontSize="13" fill="#4C3F2F" fontWeight="bold">
            {zones.find(z => z.id === hoveredZone)?.name}
          </text>
          <text x="60" y="475" fontSize="10" fill="#666">
            {zones.find(z => z.id === hoveredZone)?.description}
          </text>
          <text x="540" y="485" fontSize="9" fill="#5DAA68" fontWeight="600" textAnchor="end">
            {clickable ? "Click to explore →" : ""}
          </text>
        </g>
      )}

      {/* Compass with improved design */}
      <g transform="translate(560, 450)" opacity={animationProgress}>
        <circle cx="0" cy="0" r="22" fill="#F9FAFB" stroke="#4C3F2F" strokeWidth="2" />
        <circle cx="0" cy="0" r="18" fill="none" stroke="#4C3F2F" strokeWidth="1" strokeDasharray="2,2" />
        <path d="M 0 -15 L 4 0 L 0 -4 L -4 0 Z" fill="#C69B3A" stroke="#4C3F2F" strokeWidth="1" />
        <path d="M 0 15 L 4 0 L 0 4 L -4 0 Z" fill="#E5E7EB" stroke="#4C3F2F" strokeWidth="1" />
        <text x="0" y="-28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4C3F2F">N</text>
      </g>

      {/* Mobile-friendly tap hint */}
      {interactive && clickable && (
        <text 
          x="300" 
          y="495" 
          textAnchor="middle" 
          fontSize="9" 
          fill="#9CA3AF"
          opacity={animationProgress * 0.7}
        >
          💡 Hover or tap zones for details • Click to explore
        </text>
      )}
    </svg>
  );
};

export default LandUseMap;
