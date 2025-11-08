'use client';

import React from 'react';

interface LivestockIntegrationFlowProps {
  width?: number;
  height?: number;
  showAnimation?: boolean;
  interactive?: boolean;
}

/**
 * Livestock Integration Flow Chart
 * Shows the integrated livestock system and material flows
 * Sekelbos → Goats → Manure → Crops → Lucerne → Feed → Cattle/Pigs/Chickens → Compost → Soil Health
 * Color palette: Earth #4C3F2F, Green #5DAA68, Gold #C69B3A
 * Enhanced with animations, interactivity, and accessibility
 */
export const LivestockIntegrationFlow: React.FC<LivestockIntegrationFlowProps> = ({ 
  width = 900, 
  height = 700,
  showAnimation = true,
  interactive = true
}) => {
  const [hoveredNode, setHoveredNode] = React.useState<string | null>(null);
  const [animationProgress, setAnimationProgress] = React.useState(0);
  const [flowAnimation, setFlowAnimation] = React.useState(0);

  // Initial animation
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

  // Flow animation
  React.useEffect(() => {
    const timer = setInterval(() => {
      setFlowAnimation(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { id: 'sekelbos', name: 'Sekelbos', subtitle: '240-300ha', x: 450, y: 80, color: '#C69B3A', type: 'input', detail: 'Bush clearance generates R1.08-3M wood revenue while feeding goats' },
    { id: 'goats', name: 'Goats', subtitle: '115 head', x: 450, y: 200, color: '#8B7355', type: 'livestock', detail: 'Browse sekelbos reducing 60-80% canopy, producing meat & dairy' },
    { id: 'manure1', name: 'Goat Manure', subtitle: '', x: 300, y: 300, color: '#6B5D4F', type: 'byproduct', detail: 'High-nitrogen organic fertilizer for crops' },
    { id: 'crops', name: 'Crops', subtitle: '180ha dryland', x: 300, y: 400, color: '#5DAA68', type: 'crop', detail: 'Maize, sorghum, sunflower rotation providing feed grain' },
    { id: 'lucerne', name: 'Lucerne', subtitle: '2-5ha irrigated', x: 600, y: 300, color: '#4C9F70', type: 'crop', detail: 'Protein-rich feed fixing 150-200kg N/ha/year' },
    { id: 'feed', name: 'Feed Mix', subtitle: '', x: 600, y: 400, color: '#8B6F47', type: 'process', detail: 'Balanced rations optimized for each species' },
    { id: 'cattle', name: 'Cattle', subtitle: '104 LSU', x: 200, y: 520, color: '#8B4513', type: 'livestock', detail: 'Nguni×Brahman×Bosmara generating R432-584K/year' },
    { id: 'pigs', name: 'Pigs', subtitle: '250 finishers', x: 450, y: 520, color: '#CD853F', type: 'livestock', detail: '15 breeding sows producing R220-375K/year' },
    { id: 'chickens', name: 'Chickens', subtitle: '500 layers', x: 700, y: 520, color: '#DEB887', type: 'livestock', detail: 'Free-range layers producing R296-348K eggs/year' },
    { id: 'manure2', name: 'Mixed Manure', subtitle: '', x: 450, y: 620, color: '#6B5D4F', type: 'byproduct', detail: 'Diverse nutrient profile from 4 species' },
    { id: 'soil', name: 'Soil Health', subtitle: 'Organic matter ↑', x: 150, y: 400, color: '#4C3F2F', type: 'outcome', detail: 'Increases 2-3% OM, improves water retention 30%' },
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
      role="img"
      aria-label="Livestock integration system showing multi-species regenerative loops"
    >
      <title>Livestock Integration System</title>
      <desc>Flow chart showing how Sekelbos feeds goats, goat manure fertilizes crops, crops and lucerne create feed mix, which sustains cattle/pigs/chickens, whose manure improves soil health in a closed-loop system</desc>

      {/* Enhanced definitions */}
      <defs>
        {/* Gradient for each node type */}
        {nodes.map((node, i) => (
          <linearGradient key={`nodeGrad-${i}`} id={`nodeGrad-${node.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={node.color} stopOpacity="1"/>
            <stop offset="100%" stopColor={node.color} stopOpacity="0.85"/>
          </linearGradient>
        ))}

        <marker
          id="arrow-solid"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="5"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="#4C3F2F" />
        </marker>
        <marker
          id="arrow-dashed"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="5"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="#5DAA68" />
        </marker>

        {/* Glow filter */}
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Shadow filter */}
        <filter id="nodeShadow">
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
      </defs>

      {/* Title with animation */}
      <text 
        x="450" 
        y="30" 
        textAnchor="middle" 
        fontSize="26" 
        fontWeight="bold" 
        fill="#4C3F2F"
        opacity={animationProgress}
      >
        Livestock Integration System
      </text>
      <text 
        x="450" 
        y="52" 
        textAnchor="middle" 
        fontSize="14" 
        fill="#4C3F2F"
        opacity={animationProgress}
      >
        Multi-species regenerative loop - Year 5 targets
      </text>

      {/* Draw flows with animation */}
      {flows.map((flow, index) => {
        const fromNode = nodes.find(n => n.id === flow.from);
        const toNode = nodes.find(n => n.id === flow.to);
        if (!fromNode || !toNode) return null;

        const midX = (fromNode.x + toNode.x) / 2;
        const midY = (fromNode.y + toNode.y) / 2;
        const pathLength = Math.sqrt(Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2));
        const dashOffset = pathLength - (flowAnimation / 100 * pathLength);
        
        return (
          <g key={index} opacity={animationProgress}>
            {/* Main flow line */}
            <path
              d={`M ${fromNode.x} ${fromNode.y + 40} L ${toNode.x} ${toNode.y - 40}`}
              stroke={flow.dashed ? flow.color : '#4C3F2F'}
              strokeWidth="2.5"
              fill="none"
              strokeDasharray={flow.dashed ? "6,6" : "none"}
              markerEnd={flow.dashed ? "url(#arrow-dashed)" : "url(#arrow-solid)"}
              opacity="0.7"
            />
            {/* Animated flow indicator */}
            <path
              d={`M ${fromNode.x} ${fromNode.y + 40} L ${toNode.x} ${toNode.y - 40}`}
              stroke={flow.color}
              strokeWidth="4"
              fill="none"
              strokeDasharray="8,92"
              strokeDashoffset={-dashOffset}
              opacity="0.4"
              strokeLinecap="round"
            />
            {/* Flow label with background */}
            <rect
              x={midX - 30}
              y={midY - 12}
              width="60"
              height="20"
              fill="white"
              opacity="0.95"
              rx="4"
            />
            <text
              x={midX}
              y={midY + 2}
              textAnchor="middle"
              fontSize="10"
              fill="#4C3F2F"
              fontWeight="600"
            >
              {flow.label}
            </text>
          </g>
        );
      })}

      {/* Draw nodes with enhanced interactivity */}
      {nodes.map((node, index) => {
        const radius = node.type === 'livestock' ? 55 : 
                       node.type === 'outcome' ? 60 : 50;
        const isHovered = hoveredNode === node.id;
        const scale = isHovered ? 1.08 : 1;
        const nodeOpacity = animationProgress * (isHovered ? 1 : 0.95);
        
        return (
          <g 
            key={index}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
            onMouseEnter={interactive ? () => setHoveredNode(node.id) : undefined}
            onMouseLeave={interactive ? () => setHoveredNode(null) : undefined}
            opacity={nodeOpacity}
          >
            {/* Shadow */}
            <ellipse
              cx={node.x + 3}
              cy={node.y + 43}
              rx={radius * scale + 2}
              ry="9"
              fill="#000000"
              opacity="0.12"
            />
            
            {/* Node circle */}
            <circle 
              cx={node.x} 
              cy={node.y} 
              r={radius * scale} 
              fill={`url(#nodeGrad-${node.id})`} 
              stroke={isHovered ? "#2D5016" : "#4C3F2F"} 
              strokeWidth={isHovered ? "4" : "3"}
              filter={isHovered ? "url(#nodeGlow)" : "url(#nodeShadow)"}
              style={{ transition: 'all 0.3s ease' }}
            />
            
            {/* Icon/emoji overlay */}
            <text
              x={node.x}
              y={node.y - 18}
              textAnchor="middle"
              fontSize={isHovered ? "24" : "20"}
              style={{ transition: 'font-size 0.3s ease' }}
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
              fontSize={isHovered ? "15" : "14"}
              fontWeight="bold"
              fill="#FFFFFF"
              stroke="#4C3F2F"
              strokeWidth="0.5"
              style={{ transition: 'font-size 0.3s ease' }}
            >
              {node.name}
            </text>
            
            {/* Subtitle */}
            {node.subtitle && (
              <text
                x={node.x}
                y={node.y + 22}
                textAnchor="middle"
                fontSize={isHovered ? "12" : "11"}
                fill="#FFFFFF"
                stroke="#4C3F2F"
                strokeWidth="0.3"
                style={{ transition: 'font-size 0.3s ease' }}
              >
                {node.subtitle}
              </text>
            )}

            {/* Detailed tooltip on hover */}
            {isHovered && (
              <g>
                <rect
                  x={node.x - 120}
                  y={node.y + (radius * scale) + 10}
                  width="240"
                  height="35"
                  fill="white"
                  stroke="#4C3F2F"
                  strokeWidth="2"
                  rx="6"
                  filter="url(#nodeShadow)"
                />
                <text
                  x={node.x}
                  y={node.y + (radius * scale) + 30}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#4C3F2F"
                  fontWeight="500"
                >
                  {node.detail}
                </text>
              </g>
            )}
          </g>
        );
      })}

      {/* Revenue boxes with enhanced styling */}
      <g transform="translate(50, 660)" opacity={animationProgress}>
        <rect 
          width="800" 
          height="52" 
          fill="#F5F5F0" 
          stroke="#4C3F2F" 
          strokeWidth="2" 
          rx="8"
        />
        <text x="400" y="20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#4C3F2F">
          Year 5 Revenue Targets (Total: R1.25M-1.81M/year):
        </text>
        <text x="100" y="38" textAnchor="middle" fontSize="11" fill="#8B4513" fontWeight="600">
          🐄 Cattle: R432-584K
        </text>
        <text x="280" y="38" textAnchor="middle" fontSize="11" fill="#CD853F" fontWeight="600">
          🐷 Pigs: R220-375K
        </text>
        <text x="460" y="38" textAnchor="middle" fontSize="11" fill="#8B7355" fontWeight="600">
          🐐 Goats: R302-499K
        </text>
        <text x="640" y="38" textAnchor="middle" fontSize="11" fill="#DEB887" fontWeight="600">
          🐔 Chickens: R296-348K
        </text>
      </g>

      {/* Legend with improved design */}
      <g transform="translate(720, 100)" opacity={animationProgress}>
        <rect x="-5" y="-5" width="160" height="75" fill="#F9FAFB" stroke="#4C3F2F" strokeWidth="1" rx="5" opacity="0.95"/>
        <text x="0" y="0" fontSize="13" fontWeight="bold" fill="#4C3F2F">System Key:</text>
        <line x1="0" y1="18" x2="35" y2="18" stroke="#4C3F2F" strokeWidth="2.5" />
        <polygon points="35,15 43,18 35,21" fill="#4C3F2F" />
        <text x="48" y="22" fontSize="10" fill="#4C3F2F">Material flow</text>
        
        <line x1="0" y1="40" x2="35" y2="40" stroke="#5DAA68" strokeWidth="2.5" strokeDasharray="6,6" />
        <polygon points="35,37 43,40 35,43" fill="#5DAA68" />
        <text x="48" y="44" fontSize="10" fill="#4C3F2F">Growth cycle</text>
        
        <circle cx="8" cy="60" r="7" fill="#5DAA68" opacity="0.4" />
        <text x="18" y="64" fontSize="9" fill="#666">Animated flow</text>
      </g>

      {/* Interaction hint */}
      {interactive && (
        <text 
          x="450" 
          y="715" 
          textAnchor="middle" 
          fontSize="9" 
          fill="#9CA3AF"
          opacity={animationProgress * 0.7}
        >
          💡 Hover over nodes for detailed information about each component
        </text>
      )}
    </svg>
  );
};

export default LivestockIntegrationFlow;
