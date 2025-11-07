import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Target, CheckCircle, Beef, Milk, Salad, Egg } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header showControlsButton={false} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-50 mb-6">
              <span className="block">Regenerative Agriculture</span>
              <span className="block text-green-600 dark:text-green-400">Partnership Proposal</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Zero-cash entry, performance-based partnership in 600ha regenerative agriculture venture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/proposal"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg"
              >
                View Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/financials"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 text-lg font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg border border-gray-200 dark:border-gray-700"
              >
                Financial Projections
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 dark:bg-green-700 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">600ha</div>
              <div className="text-gray-600 dark:text-gray-400">Bushveld Farmland</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">+384%</div>
              <div className="text-gray-600 dark:text-gray-400">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">R1.8M</div>
              <div className="text-gray-600 dark:text-gray-400">Year 5 Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">3,400%</div>
              <div className="text-gray-600 dark:text-gray-400">ROI (5-year)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Why This Partnership?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A unique opportunity combining zero-capital entry with high returns through regenerative agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                Performance-Based Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Phased equity earn-in from 0% to 30% based on revenue milestones, protecting all partners while enabling significant returns.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                Win-Win-Win Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All partners benefit with 229% growth for existing owners and 1,870-3,400% ROI for new partner with zero cash investment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                Diversified Revenue Streams
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                8+ revenue streams including cattle, goats, pigs, chickens, crops, and wood products for resilient income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Structure Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Partnership Structure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Fair and balanced equity distribution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-8 shadow-lg">
                <div className="text-5xl font-bold mb-2">35%</div>
                <div className="text-lg font-semibold mb-1">Oom Willie</div>
                <div className="text-sm opacity-90">Land + Operations</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-8 shadow-lg">
                <div className="text-5xl font-bold mb-2">35%</div>
                <div className="text-lg font-semibold mb-1">Eben</div>
                <div className="text-sm opacity-90">Infrastructure + Family</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-8 shadow-lg">
                <div className="text-5xl font-bold mb-2">30%</div>
                <div className="text-lg font-semibold mb-1">Hans</div>
                <div className="text-sm opacity-90">Sweat Equity + Livestock</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-6">
                5-Year Transformation Plan
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                A comprehensive strategy to transform the farm through regenerative agriculture practices, 
                capacity expansion, and revenue diversification.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">
                      <Link href="/sekelbos" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        Sekelbos Clearing
                      </Link>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">260ha removal generates revenue + capacity expansion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Stocking Increase</h4>
                    <p className="text-gray-600 dark:text-gray-400">From 72 LSU to 104 LSU (+44% capacity)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Systems Implementation</h4>
                    <p className="text-gray-600 dark:text-gray-400">Financial tracking, optimization, KPI management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Market Development</h4>
                    <p className="text-gray-600 dark:text-gray-400">Direct-to-consumer, premium pricing, farm shop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Revenue Growth Trajectory</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Year 1</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-50">R340K - R618K</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '19%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Year 2</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-50">R544K - R1.03M</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '31%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Year 3</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-50">R752K - R1.46M</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Year 4</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-50">R943K - R1.78M</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '53%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">Year 5</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-50">R1.13M - R1.78M</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livestock Operations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              Livestock Operations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Diversified revenue streams from integrated livestock operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cattle */}
            <Link
              href="/cattle"
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 dark:group-hover:bg-green-500 transition-colors">
                <Beef className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Cattle Ranging
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Foundation operation expanding from 72 to 104 LSU through regenerative practices
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-semibold">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </Link>

            {/* Goats */}
            <Link
              href="/goats"
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
                <Milk className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Goats, Dairy & Cheese
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Triple revenue stream from meat goats, dairy production, and artisan cheese
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </Link>

            {/* Pigs */}
            <Link
              href="/pigs"
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-600 dark:group-hover:bg-pink-500 transition-colors">
                <Salad className="w-6 h-6 text-pink-600 dark:text-pink-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                Pig Farming
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                High-efficiency protein production with rapid ROI and waste recycling
              </p>
              <div className="flex items-center text-pink-600 dark:text-pink-400 text-sm font-semibold">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </Link>

            {/* Chicken */}
            <Link
              href="/chicken"
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600 dark:group-hover:bg-yellow-500 transition-colors">
                <Egg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                Chicken & Eggs
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Dual revenue from premium free-range eggs and pasture-raised chicken
              </p>
              <div className="flex items-center text-yellow-600 dark:text-yellow-400 text-sm font-semibold">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore the Full Proposal?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Dive into the complete partnership details, financial projections, and transformation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/proposal"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Full Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/sekelbos"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Sekelbos Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
