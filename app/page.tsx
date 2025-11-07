'use client';

import { useState } from 'react';
import { defaultPartnershipData, PartnershipData } from '@/lib/partnershipData';
import { ExecutiveSummary } from '@/components/ExecutiveSummary';
import { FinancialProjections } from '@/components/FinancialProjections';
import { TransformationPlan } from '@/components/TransformationPlan';
import { ControlsPanel } from '@/components/ControlsPanel';

export default function Home() {
  const [data, setData] = useState<PartnershipData>(defaultPartnershipData);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                🌱 Zeeplan
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Zeerust Regenerative Agriculture Partnership
              </p>
            </div>
            <button
              onClick={() => setShowControls(!showControls)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md"
            >
              {showControls ? 'Hide Controls' : 'Adjust Values'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Content Area */}
          <div className={`flex-1 transition-all duration-300 ${showControls ? 'lg:w-2/3' : 'w-full'}`}>
            <ExecutiveSummary data={data} />
            <FinancialProjections data={data} />
            <TransformationPlan data={data} />
            
            {/* Footer */}
            <footer className="mt-12 pt-8 border-t dark:border-gray-700">
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p className="mb-2">
                  <strong>Document Version:</strong> 4.0 | <strong>Date:</strong> November 7, 2025
                </p>
                <p>
                  This is an interactive version of the Zeerust Partnership Proposal. 
                  Adjust values using the controls to see how different scenarios affect the projections.
                </p>
              </div>
            </footer>
          </div>

          {/* Controls Sidebar */}
          {showControls && (
            <aside className="hidden lg:block w-80 xl:w-96">
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
