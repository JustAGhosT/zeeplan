import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Milk, TrendingUp, Package, DollarSign, Users, CheckCircle, Target } from 'lucide-react';

export default function GoatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header showControlsButton={false} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
            <Milk className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Goats, Dairy & Cheese Production
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Diversified revenue stream combining meat goats, dairy production, and artisan cheese making
          </p>
        </div>

        {/* Three Revenue Streams Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Triple Revenue Stream Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Meat Goats</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Boer goats for high-quality meat production</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Fast growth rates and excellent feed conversion</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Strong local demand for chevon (goat meat)</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Multiple harvests per year with managed breeding</span>
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Milk className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Dairy Goats</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Saanen and Toggenburg breeds for milk production</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Year-round milk production with managed breeding</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Premium pricing for fresh goat milk (health benefits)</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Direct sales and farm shop opportunities</span>
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Artisan Cheese</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Value-added products from goat milk</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Chèvre, feta, and aged cheese varieties</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Premium pricing in restaurants and specialty stores</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Farm tourism and cheese-tasting experiences</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Operations & Infrastructure Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Operations & Infrastructure
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Start-Up Requirements</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Initial Herd</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                    <li>• 20-30 meat goats (Boer breeding stock)</li>
                    <li>• 10-15 dairy goats (Saanen/Toggenburg does)</li>
                    <li>• 2-3 quality bucks for breeding</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Infrastructure</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                    <li>• Secure housing and kidding pens</li>
                    <li>• Rotational grazing paddocks with fencing</li>
                    <li>• Milking parlor (simple hand-milking setup initially)</li>
                    <li>• Small-scale cheese-making facility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Equipment</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                    <li>• Milk pasteurization and storage equipment</li>
                    <li>• Cheese-making supplies and molds</li>
                    <li>• Cooling/aging storage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-6">Growth Trajectory</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-gray-50">Year 1</span>
                    <span className="text-gray-600 dark:text-gray-400">Foundation</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Establish herd, build infrastructure, learn cheese-making
                  </p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-gray-50">Year 2</span>
                    <span className="text-gray-600 dark:text-gray-400">Development</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    First cheese sales, expanding dairy operation
                  </p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-gray-50">Year 3-5</span>
                    <span className="text-gray-600 dark:text-gray-400">Maturity</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Full production capacity, established brand, premium pricing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Strategy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Market & Revenue Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Direct-to-Consumer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                On-farm shop, farmers markets, and delivery subscriptions for fresh milk and cheese. Build loyal customer base with farm visits and tastings.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Target: 60% of revenue</strong>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Restaurant & Retail</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Supply artisan cheeses to high-end restaurants, specialty food stores, and gourmet shops. Position as premium local product.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Target: 25% of revenue</strong>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Agri-Tourism</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Farm tours, cheese-making workshops, and farm-to-table dining experiences. Educational programs attract urban consumers.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Target: 10% of revenue</strong>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Meat Sales</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sell live animals and butchered meat locally. Strong demand for halal and cultural celebrations. Managed breeding ensures consistent supply.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Target: 5% of revenue</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Goats, Dairy & Cheese?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Multiple Revenue Streams</h4>
                <p className="text-white/90 text-sm">Meat, milk, and cheese provide diversified income from single livestock system</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Lower Entry Cost</h4>
                <p className="text-white/90 text-sm">Smaller initial investment compared to cattle, faster reproduction cycles</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Premium Pricing</h4>
                <p className="text-white/90 text-sm">Artisan cheese commands 3-5x higher prices than raw milk</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Growing Market</h4>
                <p className="text-white/90 text-sm">Increasing demand for goat products due to health benefits and lactose intolerance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Land Efficiency</h4>
                <p className="text-white/90 text-sm">Goats thrive on marginal land and help control brush</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Year-Round Income</h4>
                <p className="text-white/90 text-sm">Managed breeding enables consistent milk and cheese production</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
