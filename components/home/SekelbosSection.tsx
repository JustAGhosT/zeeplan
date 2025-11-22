import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function SekelbosSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sekelbos Clearance: Immediate Value Generator
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Turn your sekelbos problem into profit while expanding grazing capacity
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">360-420ha heavily affected</h4>
                  <p className="mt-1 text-base text-gray-600">
                    60-70% of your property has heavy sekelbos encroachment reducing grazing capacity
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">R1.08M-3M Wood Revenue</h4>
                  <p className="mt-1 text-base text-gray-600">
                    Generate R150K-250K in Year 1 from firewood, braai wood, and poles
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Biological Clearance System</h4>
                  <p className="mt-1 text-base text-gray-600">
                    Goats, pigs, and chickens do the work - sustainable and cost-effective
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">+50% Capacity Increase</h4>
                  <p className="mt-1 text-base text-gray-600">Expand from 72 LSU to ±110 LSU as land is cleared</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/sekelbos"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
              >
                View Complete Sekelbos Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900">5-Year Sekelbos Revenue</h3>
            <div className="mt-6 space-y-4">
              {/* Revenue items would be dynamically mapped */}
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>Year 1 (50ha)</span>
                  <span>R150K-250K</span>
                </div>
                <div className="mt-1 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '14%' }}></div>
                </div>
              </div>
              {/* other years */}
            </div>
            <div className="mt-6 p-4 bg-green-light rounded-lg">
              <p className="text-sm font-semibold text-green-dark">Total 5-Year Revenue: R1.8M - R3M</p>
              <p className="text-xs text-green-dark mt-1">
                Plus avoided cost of R1.8M-6M in conventional clearance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
