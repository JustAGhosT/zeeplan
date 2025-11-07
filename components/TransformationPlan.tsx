'use client';

import React from 'react';
import { PartnershipData } from '@/lib/partnershipData';
import { formatCurrency } from '@/lib/calculations';
import { Section, Card, Table } from './UIComponents';

interface TransformationPlanProps {
  data: PartnershipData;
}

export function TransformationPlan({ data }: TransformationPlanProps) {
  const years = [
    { key: 'year1' as const, title: 'Year 1: Foundation', phase: 'Prove-It Phase' },
    { key: 'year2' as const, title: 'Year 2: Expansion', phase: 'Earn-In Phase' },
    { key: 'year3' as const, title: 'Year 3: Maturity', phase: 'Transition Phase' },
    { key: 'year4' as const, title: 'Year 4: Optimization', phase: 'Full Partnership' },
    { key: 'year5' as const, title: 'Year 5: Steady State', phase: 'Full Partnership' },
  ];

  return (
    <Section
      title="5-Year Transformation Plan"
      subtitle="Phased approach to regenerative agriculture and capacity expansion"
    >
      <div className="space-y-6">
        {years.map(({ key, title, phase }) => {
          const yearData = data.yearlyTargets[key];
          const equity = data.equityStructure[key];
          
          return (
            <Card key={key} title={title} className="border-l-4 border-green-500">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900 rounded-full">
                  {phase}
                </span>
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                  Hans Equity: {equity.hans}%
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">Key Objectives</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Clear {yearData.sekelbosCleared}ha sekelbos</li>
                    <li>• Target stocking: {yearData.targetLSU} LSU</li>
                    <li>• Sekelbos revenue: {formatCurrency(yearData.sekelbosRevenue[0])}-{formatCurrency(yearData.sekelbosRevenue[1])}</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">Revenue Streams</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Cattle: {formatCurrency(yearData.cattleRevenue[0])}-{formatCurrency(yearData.cattleRevenue[1])}</li>
                    {'goatsRevenue' in yearData && (
                      <li>• Goats: {formatCurrency(yearData.goatsRevenue[0])}-{formatCurrency(yearData.goatsRevenue[1])}</li>
                    )}
                    {'goatsMeatRevenue' in yearData && (
                      <>
                        <li>• Goats (meat): {formatCurrency(yearData.goatsMeatRevenue[0])}-{formatCurrency(yearData.goatsMeatRevenue[1])}</li>
                        <li>• Goats (dairy): {formatCurrency(yearData.goatsDairyRevenue[0])}-{formatCurrency(yearData.goatsDairyRevenue[1])}</li>
                      </>
                    )}
                    <li>• Pigs: {formatCurrency(yearData.pigsRevenue[0])}-{formatCurrency(yearData.pigsRevenue[1])}</li>
                    <li>• Chickens: {formatCurrency(yearData.chickensRevenue[0])}-{formatCurrency(yearData.chickensRevenue[1])}</li>
                    <li>• Crops: {formatCurrency(yearData.cropsRevenue[0])}-{formatCurrency(yearData.cropsRevenue[1])}</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                <p className="text-sm">
                  <strong>Costs:</strong> {formatCurrency(yearData.costs[0])}-{formatCurrency(yearData.costs[1])}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <Card title="Core Strategy" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
            <h5 className="font-semibold text-green-800 dark:text-green-400 mb-2">🌿 Sekelbos Clearing</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              50ha/year removal generates revenue + capacity expansion
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
            <h5 className="font-semibold text-blue-800 dark:text-blue-400 mb-2">📊 Diversification</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              8+ revenue streams: cattle, goats (meat + dairy), pigs, chickens, crops, wood
            </p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
            <h5 className="font-semibold text-purple-800 dark:text-purple-400 mb-2">💼 Systems</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Financial tracking, production optimization, KPI management
            </p>
          </div>
          
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
            <h5 className="font-semibold text-orange-800 dark:text-orange-400 mb-2">🎯 Marketing</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Direct-to-consumer, premium pricing, farm shop, branding
            </p>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
            <h5 className="font-semibold text-red-800 dark:text-red-400 mb-2">⚡ Efficiency</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Process optimization, cost savings, strategic planning
            </p>
          </div>
          
          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded">
            <h5 className="font-semibold text-teal-800 dark:text-teal-400 mb-2">🤝 Partnership</h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Performance-based milestones, family control maintained
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
