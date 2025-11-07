'use client';

import { useState } from 'react';
import { defaultPartnershipData, PartnershipData } from '@/lib/partnershipData';
import { FinancialProjections } from '@/components/FinancialProjections';
import { ControlsPanel } from '@/components/ControlsPanel';
import { Header } from '@/components/Header';
import { FinancialCharts } from '@/components/FinancialCharts';
import { Footer } from '@/components/Footer';

export default function FinancialsPage() {
  const [data, setData] = useState<PartnershipData>(defaultPartnershipData);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header 
        onToggleControls={() => setShowControls(!showControls)}
        showControls={showControls}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Financial Projections
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive 5-year revenue, cost, and profit breakdown with interactive controls
          </p>
        </div>

        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <FinancialProjections data={data} />
            
            <div className="mt-6">
              <FinancialCharts data={data} />
            </div>
          </div>

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

      <Footer />
    </div>
  );
}
