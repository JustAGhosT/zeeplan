'use client';

import React from 'react';

interface CropRotationDiagramProps {
  width?: number;
  height?: number;
  showAnimation?: boolean;
  interactive?: boolean;
}

/**
 * Crop Rotation Cycle Diagram
 * Shows the nitrogen and organic matter loop
 * Lucerne → Soil N → Maize → Sunflower → Sorghum → Residue → Livestock → Manure → Lucerne
 * Color palette: Earth #4C3F2F, Green #5DAA68, Gold #C69B3A
 * Enhanced with animations, interactivity, and accessibility
 */
export const CropRotationDiagram: React.FC<CropRotationDiagramProps> = ({
  width = 800,
  height = 600,
  showAnimation = true,
  interactive = true,
}) => {
  const [hoveredCrop, setHoveredCrop] = React.useState<number | null>(null);
  const [animationProgress, setAnimationProgress] = React.useState(0);
  const [flowAnimation, setFlowAnimation] = React.useState(0);

  // Initial animation
  React.useEffect(() => {
    if (showAnimation) {
      const timer = setInterval(() => {
        setAnimationProgress((prev) => {
          if (prev >= 1) {
            clearInterval(timer);
            return 1;
          }
          return prev + 0.025;
        });
      }, 25);
      return () => clearInterval(timer);
    } else {
      setAnimationProgress(1);
    }
  }, [showAnimation]);

  // Flow animation (continuous)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setFlowAnimation((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const crops = [
    {
      name: 'Lucerne',
      x: 400,
      y: 100,
      color: '#5DAA68',
      benefit: 'Nitrogen Fixation',
      detail: 'Fixes 150-200kg N/ha/year naturally',
    },
    {
      name: 'Soil N',
      x: 600,
      y: 200,
      color: '#8B7355',
      benefit: 'Enriched Soil',
      detail: 'Organic nitrogen available for crops',
    },
    {
      name: 'Maize',
      x: 600,
      y: 350,
      color: '#C69B3A',
      benefit: 'Feed Grain',
      detail: '4-6 tons/ha with reduced fertilizer',
    },
    {
      name: 'Sunflower',
      x: 400,
      y: 450,
      color: '#E6B84D',
      benefit: 'Oil + Protein',
      detail: 'Deep roots break soil compaction',
    },
    {
      name: 'Sorghum',
      x: 200,
      y: 350,
      color: '#8B6F47',
      benefit: 'Drought Resistant',
      detail: 'Uses 35% less water than maize',
    },
    {
      name: 'Residue',
      x: 200,
      y: 200,
      color: '#6B5D4F',
      benefit: 'Organic Matter',
      detail: 'Returns 2-3 tons/ha biomass',
    },
    { name: 'Livestock', x: 150, y: 100, color: '#4C9F70', benefit: 'Grazing', detail: 'Converts residue to protein' },
    { name: 'Manure', x: 250, y: 50, color: '#8B7355', benefit: 'Fertilizer', detail: 'Completes the nutrient cycle' },
  ];

  const arrows = [
    { from: 0, to: 1, label: 'Adds N to soil' },
    { from: 1, to: 2, label: 'Feeds growth' },
    { from: 2, to: 3, label: 'Crop rotation' },
    { from: 3, to: 4, label: 'Continues cycle' },
    { from: 4, to: 5, label: 'Plant residue' },
    { from: 5, to: 6, label: 'Feed source' },
    { from: 6, to: 7, label: 'Natural fertilizer' },
    { from: 7, to: 0, label: 'Closes loop' },
  ];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 800 550"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'system-ui, sans-serif' }}
      role="img"
      aria-label="Crop rotation and nitrogen cycle diagram showing sustainable nutrient loop"
    >
      <title>Crop Rotation & Nitrogen Cycle</title>
      <desc>
        Interactive diagram showing the 8-stage regenerative crop rotation: Lucerne fixes nitrogen, which enriches soil,
        feeds maize growth, rotates to sunflower, continues to sorghum, produces residue for livestock, generates manure
        as fertilizer, completing the cycle back to lucerne
      </desc>

      {/* Enhanced definitions */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#4C3F2F" />
        </marker>

        {/* Animated flow marker */}
        <marker id="flowDot" markerWidth="8" markerHeight="8" refX="4" refY="4">
          <circle cx="4" cy="4" r="3" fill="#5DAA68" opacity="0.8" />
        </marker>

        {/* Gradient for nodes */}
        {crops.map((crop, i) => (
          <linearGradient key={`grad-${i}`} id={`cropGrad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={crop.color} stopOpacity="1" />
            <stop offset="100%" stopColor={crop.color} stopOpacity="0.8" />
          </linearGradient>
        ))}

        {/* Glow filter for hover */}
        <filter id="cropGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Title with animation */}
      <text
        x="400"
        y="30"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fill="#4C3F2F"
        opacity={animationProgress}
      >
        Crop Rotation & Nitrogen Cycle
      </text>
      <text x="400" y="50" textAnchor="middle" fontSize="14" fill="#4C3F2F" opacity={animationProgress}>
        Sustainable nutrient loop for regenerative agriculture
      </text>

      {/* Central concept circle with pulse animation */}
      <circle
        cx="400"
        cy="275"
        r={80 + Math.sin(flowAnimation / 10) * 2}
        fill="#F5F5F0"
        stroke="#4C3F2F"
        strokeWidth="3"
        strokeDasharray="5,5"
        opacity={animationProgress * 0.9}
      />
      <text
        x="400"
        y="265"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#4C3F2F"
        opacity={animationProgress}
      >
        Regenerative
      </text>
      <text x="400" y="285" textAnchor="middle" fontSize="14" fill="#4C3F2F" opacity={animationProgress}>
        Nutrient Cycle
      </text>
      <text
        x="400"
        y="305"
        textAnchor="middle"
        fontSize="12"
        fill="#5DAA68"
        fontWeight="bold"
        opacity={animationProgress}
      >
        180ha Rotation
      </text>

      {/* Arrows connecting nodes with animation */}
      {arrows.map((arrow, index) => {
        const from = crops[arrow.from];
        const to = crops[arrow.to];
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const pathLength = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
        const dashOffset = pathLength - (flowAnimation / 100) * pathLength;

        return (
          <g key={index} opacity={animationProgress}>
            {/* Main arrow path */}
            <path
              d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              stroke="#4C3F2F"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            {/* Animated flow indicator */}
            <path
              d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              stroke="#5DAA68"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,90"
              strokeDashoffset={-dashOffset}
              opacity="0.6"
              strokeLinecap="round"
            />
            {/* Label with background */}
            <rect x={midX - 40} y={midY - 20} width="80" height="18" fill="white" opacity="0.9" rx="3" />
            <text
              x={midX}
              y={midY - 8}
              textAnchor="middle"
              fontSize="10"
              fill="#4C3F2F"
              fontStyle="italic"
              fontWeight="500"
            >
              {arrow.label}
            </text>
          </g>
        );
      })}

      {/* Crop nodes with enhanced interactivity */}
      {crops.map((crop, index) => {
        const isHovered = hoveredCrop === index;
        const scale = isHovered ? 1.1 : 1;
        const nodeOpacity = animationProgress * (isHovered ? 1 : 0.95);

        return (
          <g
            key={index}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
            onMouseEnter={interactive ? () => setHoveredCrop(index) : undefined}
            onMouseLeave={interactive ? () => setHoveredCrop(null) : undefined}
            opacity={nodeOpacity}
          >
            {/* Shadow */}
            <ellipse cx={crop.x + 2} cy={crop.y + 52} rx="52" ry="8" fill="#000000" opacity="0.15" />

            {/* Node circle */}
            <circle
              cx={crop.x}
              cy={crop.y}
              r={50 * scale}
              fill={`url(#cropGrad-${index})`}
              stroke={isHovered ? '#2D5016' : '#4C3F2F'}
              strokeWidth={isHovered ? '4' : '3'}
              filter={isHovered ? 'url(#cropGlow)' : 'none'}
              style={{ transition: 'all 0.3s ease' }}
            />

            {/* Icon/emoji */}
            <text
              x={crop.x}
              y={crop.y - 15}
              textAnchor="middle"
              fontSize={isHovered ? '24' : '20'}
              style={{ transition: 'font-size 0.3s ease' }}
            >
              {index === 0
                ? '🌿'
                : index === 1
                  ? '🌍'
                  : index === 2
                    ? '🌽'
                    : index === 3
                      ? '🌻'
                      : index === 4
                        ? '🌾'
                        : index === 5
                          ? '♻️'
                          : index === 6
                            ? '🐄'
                            : '💩'}
            </text>

            <text
              x={crop.x}
              y={crop.y + 5}
              textAnchor="middle"
              fontSize={isHovered ? '15' : '14'}
              fontWeight="bold"
              fill="#FFFFFF"
              stroke="#4C3F2F"
              strokeWidth="0.5"
              style={{ transition: 'font-size 0.3s ease' }}
            >
              {crop.name}
            </text>
            <text
              x={crop.x}
              y={crop.y + 20}
              textAnchor="middle"
              fontSize={isHovered ? '11' : '10'}
              fill="#FFFFFF"
              stroke="#4C3F2F"
              strokeWidth="0.3"
              style={{ transition: 'font-size 0.3s ease' }}
            >
              {crop.benefit}
            </text>

            {/* Detailed tooltip on hover */}
            {isHovered && (
              <g>
                <rect
                  x={crop.x - 80}
                  y={crop.y + 60}
                  width="160"
                  height="30"
                  fill="white"
                  stroke="#4C3F2F"
                  strokeWidth="2"
                  rx="5"
                  filter="url(#cropGlow)"
                />
                <text x={crop.x} y={crop.y + 78} textAnchor="middle" fontSize="11" fill="#4C3F2F" fontWeight="500">
                  {crop.detail}
                </text>
              </g>
            )}
          </g>
        );
      })}

      {/* Key benefits box with improved styling */}
      <g transform="translate(50, 480)" opacity={animationProgress}>
        <rect width="700" height="55" fill="#F5F5F0" stroke="#4C3F2F" strokeWidth="2" rx="8" />
        <text x="350" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#4C3F2F">
          Key Benefits of This System:
        </text>
        <text x="350" y="38" textAnchor="middle" fontSize="11" fill="#4C3F2F">
          ⚡ Reduced fertilizer costs by R50-80K/year • 🌱 Improved soil health +2-3% OM
        </text>
        <text x="350" y="50" textAnchor="middle" fontSize="11" fill="#4C3F2F">
          💧 Better water retention +30% • 🔄 Pest/disease break • 🌍 Carbon sequestration
        </text>
      </g>

      {/* Interaction hint */}
      {interactive && (
        <text x="400" y="545" textAnchor="middle" fontSize="9" fill="#9CA3AF" opacity={animationProgress * 0.7}>
          💡 Hover over crops for detailed information
        </text>
      )}
    </svg>
  );
};

export default CropRotationDiagram;
