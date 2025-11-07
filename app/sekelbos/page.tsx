'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { 
  SekelbosExecutiveSummary, 
  SekelbosSection1, 
  SekelbosSection2, 
  SekelbosSection3, 
  SekelbosSection4, 
  SekelbosSection5, 
  SekelbosSection6, 
  SekelbosSection7 
} from '@/components/SekelbosClearance';

export default function SekelbosPage() {
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
            <Navigation pageType="sekelbos" />
          </aside>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            {/* Sekelbos Clearance Business Plan Sections */}
            <div id="sekelbos-executive">
              <SekelbosExecutiveSummary />
            </div>

            <div id="sekelbos-section1">
              <SekelbosSection1 />
            </div>

            <div id="sekelbos-section2">
              <SekelbosSection2 />
            </div>

            <div id="sekelbos-section3">
              <SekelbosSection3 />
            </div>

            <div id="sekelbos-section4">
              <SekelbosSection4 />
            </div>

            <div id="sekelbos-section5">
              <SekelbosSection5 />
            </div>

            <div id="sekelbos-section6">
              <SekelbosSection6 />
            </div>

            <div id="sekelbos-section7">
              <SekelbosSection7 />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
