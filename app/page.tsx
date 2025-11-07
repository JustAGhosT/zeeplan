'use client';

import { useState } from 'react';
import { defaultPartnershipData, PartnershipData } from '@/lib/partnershipData';
import { ExecutiveSummary } from '@/components/ExecutiveSummary';
import { FinancialProjections } from '@/components/FinancialProjections';
import { TransformationPlan } from '@/components/TransformationPlan';
import { ControlsPanel } from '@/components/ControlsPanel';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { FinancialCharts } from '@/components/FinancialCharts';

export default function Home() {
  const [data, setData] = useState<PartnershipData>(defaultPartnershipData);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Header */}
      <Header 
        onToggleControls={() => setShowControls(!showControls)}
        showControls={showControls}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Left Sidebar - Navigation (Desktop only) */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <Navigation />
          </aside>

          {/* Content Area */}
          <div className={`flex-1 min-w-0 transition-all duration-300`}>
            <div id="executive-summary">
              <ExecutiveSummary data={data} />
            </div>
            
            <div id="financial-projections">
              <FinancialProjections data={data} />
              
              {/* Enhanced Charts */}
              <div className="mt-6">
                <FinancialCharts data={data} />
              </div>
            </div>
            
            <div id="transformation-plan">
              <TransformationPlan data={data} />
            </div>
            
            {/* Footer */}
            <footer className="mt-12 pt-8 border-t dark:border-gray-700 print:mt-6">
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p className="mb-2">
                  <strong>Document Version:</strong> 4.0 | <strong>Date:</strong> November 7, 2025
                </p>
                <p className="print:hidden">
                  This is an interactive version of the Zeerust Partnership Proposal. 
                  Adjust values using the controls to see how different scenarios affect the projections.
                </p>
                <p className="hidden print:block">
                  Zeerust Regenerative Agriculture Partnership Proposal
                </p>
              </div>
            </footer>
          </div>

          {/* Right Sidebar - Controls (Desktop only) */}
          {showControls && (
            <aside className="hidden lg:block w-80 xl:w-96 flex-shrink-0">
              <ControlsPanel data={data} onUpdate={setData} />
            </aside>
          )}
        </div>

        {/* Mobile Controls Modal */}
        {showControls && (
          <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full my-8">
              <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h3 className="text-lg font-semibold">Adjust Values</h3>
                <button
                  onClick={() => setShowControls(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <ControlsPanel data={data} onUpdate={setData} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
