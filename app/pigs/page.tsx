import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Salad, TrendingUp, Recycle, DollarSign, Calendar, CheckCircle, Target } from 'lucide-react';

export default function PigsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header showControlsButton={false} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl mb-6">
            <Salad className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Pig Farming Operations
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            High-efficiency protein production with waste recycling and rapid return on investment
          </p>
        </div>

        {/* System Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Production System</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Breeding Stock</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      5-10 sows with 1-2 boars (Large White, Landrace, or Duroc breeds)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Production Cycle</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      2.3 litters per sow per year, 8-12 piglets per litter
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Time to Market</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      5-6 months from birth to market weight (100-120kg)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Annual Production</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      100-200+ market-ready pigs per year at full capacity
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-red-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Feed Efficiency</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Pigs are exceptional converters of feed to protein, making them one of the most efficient livestock options:
              </p>
              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-gray-900/30 rounded-lg p-4">
                  <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">3:1</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Feed Conversion Ratio</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    3kg feed produces 1kg of pork (more efficient than cattle at 7:1)
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-gray-900/30 rounded-lg p-4">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">6 months</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Market Ready</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Rapid growth enables 2 production cycles per year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Management Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Infrastructure & Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Housing System</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Climate-controlled farrowing pens</li>
                <li>• Nursery for weaned piglets</li>
                <li>• Finishing pens with outdoor access</li>
                <li>• Proper ventilation and waste management</li>
                <li>• Biosecurity measures to prevent disease</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Waste Integration</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Manure composting for crop fertilizer</li>
                <li>• Feed kitchen scraps and farm byproducts</li>
                <li>• Utilize whey from cheese production</li>
                <li>• Garden and crop waste recycling</li>
                <li>• Closed-loop sustainability system</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Cost Management</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>• Feed costs are 65-75% of expenses</li>
                <li>• Supplement with farm-grown crops</li>
                <li>• Bulk feed purchasing for savings</li>
                <li>• Strategic breeding timing</li>
                <li>• Healthcare and vaccination programs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Growth Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Development Timeline
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 1: Setup & Foundation</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Build infrastructure, acquire breeding stock (5 sows, 1 boar), establish feed supply chains, 
                    and implement biosecurity protocols. First litters born by Q3.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    Expected output: 40-60 market pigs
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 2: Ramp-Up</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Increase to 8 sows, optimize breeding schedules for year-round production. Establish direct 
                    sales channels and wholesale relationships. Integrate waste streams.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    Expected output: 120-150 market pigs
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">Year 3-5: Full Production</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Reach 10 sows at full capacity with optimized breeding program. Diversify product offerings 
                    (fresh pork, bacon, sausages). Strong brand presence in local markets.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    Expected output: 180-220+ market pigs per year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market & Sales Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Market Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Direct Sales</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Whole, half, or quarter pig sales direct to consumers. Premium pricing for pasture-raised, 
                  antibiotic-free pork.
                </p>
                <div className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                  Target: 40% of revenue | Highest margin
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Butchery & Retail</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Supply local butcheries, supermarkets, and specialty food stores with fresh and processed pork products.
                </p>
                <div className="text-sm font-semibold text-red-600 dark:text-red-400">
                  Target: 30% of revenue | Steady volume
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Restaurants & Chefs</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Supply high-quality pork cuts to restaurants emphasizing locally-sourced ingredients. 
                  Build relationships with chefs.
                </p>
                <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  Target: 20% of revenue | Premium pricing
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Processed Products</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Value-added products: bacon, sausages, ham, biltong. Retail at farmers markets and farm shop.
                </p>
                <div className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">
                  Target: 10% of revenue | Future growth area
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-700 dark:to-red-700 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Pig Farming?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Rapid ROI</h4>
                <p className="text-white/90 text-sm">First revenue within 9-10 months, fastest return of all livestock</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">High Efficiency</h4>
                <p className="text-white/90 text-sm">Best feed conversion ratio (3:1) of major livestock species</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Waste Integration</h4>
                <p className="text-white/90 text-sm">Converts farm byproducts and kitchen waste into high-value protein</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Strong Demand</h4>
                <p className="text-white/90 text-sm">Pork is widely consumed with consistent local and regional markets</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Scalable Model</h4>
                <p className="text-white/90 text-sm">Easy to start small and expand based on market demand</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Space Efficient</h4>
                <p className="text-white/90 text-sm">Higher production per square meter than most other livestock</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
