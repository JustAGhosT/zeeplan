import React from 'react';

interface CropRotationDiagramProps {
  width?: number;
  height?: number;
}

/**
 * Crop Rotation Cycle Diagram
 * Shows the nitrogen and organic matter loop
 * Lucerne → Soil N → Maize → Sunflower → Sorghum → Residue → Livestock → Manure → Lucerne
 * Color palette: Earth #4C3F2F, Green #5DAA68, Gold #C69B3A
 */
export const CropRotationDiagram: React.FC<CropRotationDiagramProps> = ({ 
  width = 800, 
  height = 600 
}) => {
  const crops = [
    { name: 'Lucerne', x: 400, y: 100, color: '#5DAA68', benefit: 'Nitrogen Fixation' },
    { name: 'Soil N', x: 600, y: 200, color: '#8B7355', benefit: 'Enriched Soil' },
    { name: 'Maize', x: 600, y: 350, color: '#C69B3A', benefit: 'Feed Grain' },
    { name: 'Sunflower', x: 400, y: 450, color: '#E6B84D', benefit: 'Oil + Protein' },
    { name: 'Sorghum', x: 200, y: 350, color: '#8B6F47', benefit: 'Drought Resistant' },
    { name: 'Residue', x: 200, y: 200, color: '#6B5D4F', benefit: 'Organic Matter' },
    { name: 'Livestock', x: 150, y: 100, color: '#4C9F70', benefit: 'Grazing' },
    { name: 'Manure', x: 250, y: 50, color: '#8B7355', benefit: 'Fertilizer' },
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
    >
      {/* Title */}
      <text x="400" y="30" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#4C3F2F">
        Crop Rotation & Nitrogen Cycle
      </text>
      <text x="400" y="50" textAnchor="middle" fontSize="14" fill="#4C3F2F">
        Sustainable nutrient loop for regenerative agriculture
      </text>

      {/* Central concept circle */}
      <circle cx="400" cy="275" r="80" fill="#F5F5F0" stroke="#4C3F2F" strokeWidth="3" strokeDasharray="5,5" />
      <text x="400" y="265" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#4C3F2F">
        Regenerative
      </text>
      <text x="400" y="285" textAnchor="middle" fontSize="14" fill="#4C3F2F">
        Nutrient Cycle
      </text>
      <text x="400" y="305" textAnchor="middle" fontSize="12" fill="#5DAA68" fontWeight="bold">
        180ha Rotation
      </text>

      {/* Arrows connecting nodes */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#4C3F2F" />
        </marker>
      </defs>

      {arrows.map((arrow, index) => {
        const from = crops[arrow.from];
        const to = crops[arrow.to];
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        
        return (
          <g key={index}>
            <path
              d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
              stroke="#4C3F2F"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            <text
              x={midX}
              y={midY - 10}
              textAnchor="middle"
              fontSize="10"
              fill="#4C3F2F"
              fontStyle="italic"
            >
              {arrow.label}
            </text>
          </g>
        );
      })}

      {/* Crop nodes */}
      {crops.map((crop, index) => (
        <g key={index}>
          <circle 
            cx={crop.x} 
            cy={crop.y} 
            r="50" 
            fill={crop.color} 
            stroke="#4C3F2F" 
            strokeWidth="3"
          />
          <text
            x={crop.x}
            y={crop.y - 5}
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#FFFFFF"
          >
            {crop.name}
          </text>
          <text
            x={crop.x}
            y={crop.y + 10}
            textAnchor="middle"
            fontSize="10"
            fill="#FFFFFF"
          >
            {crop.benefit}
          </text>
        </g>
      ))}

      {/* Key benefits box */}
      <g transform="translate(50, 480)">
        <rect width="700" height="50" fill="#F5F5F0" stroke="#4C3F2F" strokeWidth="2" rx="5" />
        <text x="350" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4C3F2F">
          Key Benefits:
        </text>
        <text x="350" y="35" textAnchor="middle" fontSize="11" fill="#4C3F2F">
          ⚡ Reduced fertilizer costs • 🌱 Improved soil health • 💧 Better water retention • 🔄 Pest/disease break
        </text>
      </g>
    </svg>
  );
};

export default CropRotationDiagram;
