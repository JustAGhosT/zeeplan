import React from 'react';

interface LivestockIntegrationFlowProps {
  width?: number;
  height?: number;
}

/**
 * Livestock Integration Flow Chart
 * Shows the integrated livestock system and material flows
 * Sekelbos → Goats → Manure → Crops → Lucerne → Feed → Cattle/Pigs/Chickens → Compost → Soil Health
 * Color palette: Earth #4C3F2F, Green #5DAA68, Gold #C69B3A
 */
export const LivestockIntegrationFlow: React.FC<LivestockIntegrationFlowProps> = ({ 
  width = 900, 
  height = 700 
}) => {
  const nodes = [
    { id: 'sekelbos', name: 'Sekelbos', subtitle: '240-300ha', x: 450, y: 80, color: '#C69B3A', type: 'input' },
    { id: 'goats', name: 'Goats', subtitle: '115 head', x: 450, y: 200, color: '#8B7355', type: 'livestock' },
    { id: 'manure1', name: 'Goat Manure', subtitle: '', x: 300, y: 300, color: '#6B5D4F', type: 'byproduct' },
    { id: 'crops', name: 'Crops', subtitle: '180ha dryland', x: 300, y: 400, color: '#5DAA68', type: 'crop' },
    { id: 'lucerne', name: 'Lucerne', subtitle: '2-5ha irrigated', x: 600, y: 300, color: '#4C9F70', type: 'crop' },
    { id: 'feed', name: 'Feed Mix', subtitle: '', x: 600, y: 400, color: '#8B6F47', type: 'process' },
    { id: 'cattle', name: 'Cattle', subtitle: '104 LSU', x: 200, y: 520, color: '#8B4513', type: 'livestock' },
    { id: 'pigs', name: 'Pigs', subtitle: '250 finishers', x: 450, y: 520, color: '#CD853F', type: 'livestock' },
    { id: 'chickens', name: 'Chickens', subtitle: '500 layers', x: 700, y: 520, color: '#DEB887', type: 'livestock' },
    { id: 'manure2', name: 'Mixed Manure', subtitle: '', x: 450, y: 620, color: '#6B5D4F', type: 'byproduct' },
    { id: 'soil', name: 'Soil Health', subtitle: 'Organic matter ↑', x: 150, y: 400, color: '#4C3F2F', type: 'outcome' },
  ];

  const flows = [
    { from: 'sekelbos', to: 'goats', label: 'Browse', color: '#C69B3A' },
    { from: 'goats', to: 'manure1', label: 'Waste', color: '#6B5D4F' },
    { from: 'manure1', to: 'crops', label: 'Fertilize', color: '#5DAA68' },
    { from: 'manure1', to: 'soil', label: 'Enrich', color: '#4C3F2F' },
    { from: 'crops', to: 'feed', label: 'Grain', color: '#8B6F47' },
    { from: 'lucerne', to: 'feed', label: 'Protein', color: '#4C9F70' },
    { from: 'feed', to: 'cattle', label: 'Ration', color: '#8B4513' },
    { from: 'feed', to: 'pigs', label: 'Ration', color: '#CD853F' },
    { from: 'feed', to: 'chickens', label: 'Ration', color: '#DEB887' },
    { from: 'cattle', to: 'manure2', label: 'Waste', color: '#6B5D4F' },
    { from: 'pigs', to: 'manure2', label: 'Waste', color: '#6B5D4F' },
    { from: 'chickens', to: 'manure2', label: 'Waste', color: '#6B5D4F' },
    { from: 'manure2', to: 'soil', label: 'Compost', color: '#4C3F2F' },
    { from: 'soil', to: 'crops', label: 'Grow', color: '#5DAA68', dashed: true },
  ];

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 900 720" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: 'system-ui, sans-serif' }}
    >
      {/* Title */}
      <text x="450" y="30" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#4C3F2F">
        Livestock Integration System
      </text>
      <text x="450" y="52" textAnchor="middle" fontSize="14" fill="#4C3F2F">
        Multi-species regenerative loop - Year 5 targets
      </text>

      {/* Define arrow markers */}
      <defs>
        <marker
          id="arrow-solid"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <polygon points="0 0, 8 4, 0 8" fill="#4C3F2F" />
        </marker>
        <marker
          id="arrow-dashed"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <polygon points="0 0, 8 4, 0 8" fill="#5DAA68" />
        </marker>
      </defs>

      {/* Draw flows first (behind nodes) */}
      {flows.map((flow, index) => {
        const fromNode = nodes.find(n => n.id === flow.from);
        const toNode = nodes.find(n => n.id === flow.to);
        if (!fromNode || !toNode) return null;

        const midX = (fromNode.x + toNode.x) / 2;
        const midY = (fromNode.y + toNode.y) / 2;
        
        return (
          <g key={index}>
            <path
              d={`M ${fromNode.x} ${fromNode.y + 40} L ${toNode.x} ${toNode.y - 40}`}
              stroke={flow.dashed ? flow.color : '#4C3F2F'}
              strokeWidth="2"
              fill="none"
              strokeDasharray={flow.dashed ? "5,5" : "none"}
              markerEnd={flow.dashed ? "url(#arrow-dashed)" : "url(#arrow-solid)"}
              opacity="0.7"
            />
            <text
              x={midX}
              y={midY}
              textAnchor="middle"
              fontSize="10"
              fill="#4C3F2F"
              fontWeight="600"
              style={{ 
                backgroundColor: 'white',
                padding: '2px 4px'
              }}
            >
              {flow.label}
            </text>
          </g>
        );
      })}

      {/* Draw nodes */}
      {nodes.map((node, index) => {
        const radius = node.type === 'livestock' ? 55 : 
                       node.type === 'outcome' ? 60 : 50;
        
        return (
          <g key={index}>
            {/* Shadow */}
            <ellipse
              cx={node.x + 3}
              cy={node.y + 43}
              rx={radius + 2}
              ry="8"
              fill="#000000"
              opacity="0.1"
            />
            
            {/* Node circle */}
            <circle 
              cx={node.x} 
              cy={node.y} 
              r={radius} 
              fill={node.color} 
              stroke="#4C3F2F" 
              strokeWidth="3"
            />
            
            {/* Icon/emoji overlay based on type */}
            <text
              x={node.x}
              y={node.y - 18}
              textAnchor="middle"
              fontSize="20"
            >
              {node.type === 'livestock' ? '🐄' :
               node.type === 'crop' ? '🌾' :
               node.type === 'input' ? '🌳' :
               node.type === 'byproduct' ? '💩' :
               node.type === 'outcome' ? '🌱' : '⚙️'}
            </text>
            
            {/* Name */}
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="#FFFFFF"
            >
              {node.name}
            </text>
            
            {/* Subtitle */}
            {node.subtitle && (
              <text
                x={node.x}
                y={node.y + 22}
                textAnchor="middle"
                fontSize="11"
                fill="#FFFFFF"
              >
                {node.subtitle}
              </text>
            )}
          </g>
        );
      })}

      {/* Revenue boxes */}
      <g transform="translate(50, 660)">
        <rect width="800" height="50" fill="#F5F5F0" stroke="#4C3F2F" strokeWidth="2" rx="5" />
        <text x="400" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#4C3F2F">
          Year 5 Revenue Targets:
        </text>
        <text x="100" y="38" textAnchor="middle" fontSize="11" fill="#8B4513">
          🐄 Cattle: R432-584K
        </text>
        <text x="280" y="38" textAnchor="middle" fontSize="11" fill="#CD853F">
          🐷 Pigs: R220-375K
        </text>
        <text x="460" y="38" textAnchor="middle" fontSize="11" fill="#8B7355">
          🐐 Goats: R302-499K
        </text>
        <text x="640" y="38" textAnchor="middle" fontSize="11" fill="#DEB887">
          🐔 Chickens: R296-348K
        </text>
      </g>

      {/* Legend */}
      <g transform="translate(720, 100)">
        <text x="0" y="0" fontSize="12" fontWeight="bold" fill="#4C3F2F">System Key:</text>
        <line x1="0" y1="15" x2="30" y2="15" stroke="#4C3F2F" strokeWidth="2" />
        <text x="35" y="19" fontSize="10" fill="#4C3F2F">Material flow</text>
        
        <line x1="0" y1="35" x2="30" y2="35" stroke="#5DAA68" strokeWidth="2" strokeDasharray="5,5" />
        <text x="35" y="39" fontSize="10" fill="#4C3F2F">Growth cycle</text>
      </g>
    </svg>
  );
};

export default LivestockIntegrationFlow;
