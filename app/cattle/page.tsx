import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Beef, TrendingUp, Target, Calendar, DollarSign, Users, CheckCircle } from 'lucide-react';

export default function CattlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header showControlsButton={false} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
            <Beef className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Cattle Ranging Operations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Foundation of the regenerative agriculture system with planned expansion from 72 to 104 LSU
          </p>
        </div>

        {/* Current State & Target Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Current Operations</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Herd Size</h4>
                    <p className="text-gray-600 dark:text-gray-400">72 LSU (Large Stock Units)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Grazing Area</h4>
                    <p className="text-gray-600 dark:text-gray-400">600 hectares Bushveld farmland</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Current Revenue</h4>
                    <p className="text-gray-600 dark:text-gray-400">R233K - R297K annually</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Production System</h4>
                    <p className="text-gray-600 dark:text-gray-400">Traditional Bushveld cattle farming</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Year 5 Target</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Expanded Herd</h4>
                    <p className="text-gray-600 dark:text-gray-400">104 LSU (+44% increase)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Enhanced Grazing</h4>
                    <p className="text-gray-600 dark:text-gray-400">260ha cleared of sekelbos, improved carrying capacity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Projected Revenue</h4>
                    <p className="text-gray-600 dark:text-gray-400">Significant contribution to R1.13M - R1.78M total</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Regenerative System</h4>
                    <p className="text-gray-600 dark:text-gray-400">Holistic management and rotational grazing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy & Management Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Cattle Management Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Capacity Expansion</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Increase carrying capacity through sekelbos clearing (50ha/year), improving grazing quality and enabling herd growth from 72 to 104 LSU.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Rotational Grazing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implement regenerative grazing practices with planned rest periods to improve pasture health, soil quality, and long-term productivity.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Value Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Strategic marketing, direct-to-consumer channels, and premium pricing for grass-fed, regeneratively-raised beef products.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            5-Year Development Timeline
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 1: Foundation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Establish baseline tracking systems, implement initial sekelbos clearing (50ha), optimize existing herd management, and develop market channels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 2-3: Growth</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Continue clearing operations (100ha total), begin gradual herd expansion, implement rotational grazing, and establish premium beef brand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 4-5: Maturity</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Complete clearing program (260ha), reach target capacity of 104 LSU, establish stable direct-to-consumer relationships, and optimize profit margins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Cattle as the Foundation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Proven Track Record</h4>
                <p className="text-white/90 text-sm">Existing operation provides stable baseline revenue and operational knowledge</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Land Improvement</h4>
                <p className="text-white/90 text-sm">Cattle grazing aids in sekelbos management and pasture regeneration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Scalable Growth</h4>
                <p className="text-white/90 text-sm">Clear path to 44% capacity increase through systematic land clearing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Market Demand</h4>
                <p className="text-white/90 text-sm">Strong local and regional demand for quality grass-fed beef</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
