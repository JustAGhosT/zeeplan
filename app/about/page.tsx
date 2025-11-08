import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Leaf, TrendingUp, Users, Award, Target, Shield } from 'lucide-react';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            About Zeeplan
          </h1>
          <p className={styles.heroSubtitle}>
            A transformative regenerative agriculture partnership in Zeerust, North West Province, South Africa
          </p>
        </div>

        {/* Mission Section */}
        <section className={styles.section}>
          <div className={styles.card}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              To transform a 600-hectare Bushveld farm into a thriving, sustainable, and profitable regenerative 
              agriculture operation through innovative practices, diversified revenue streams, and a fair partnership 
              structure that benefits all stakeholders while preserving the land for future generations.
            </p>
          </div>
        </section>

        {/* The Farm Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Farm</h2>
          <div className={styles.twoColumnGrid}>
            <div className={styles.card}>
              <h3 className={styles.strategyTitle}>Current State</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Location:</strong> Zeerust, North West Province, South Africa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Size:</strong> 600 hectares of Bushveld farmland</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Current Stocking:</strong> 72 LSU cattle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Sekelbos Encroachment:</strong> 70% of land affected</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Current Revenue:</strong> R233,000-R297,000/year</span>
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.strategyTitle}>Future Vision</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Target Stocking:</strong> 104 LSU (+44% increase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Revenue Streams:</strong> 8+ diversified income sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Sekelbos Cleared:</strong> 260ha over 5 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Year 5 Revenue:</strong> R1.13M-R1.78M/year</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Growth:</strong> +384% revenue increase</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Values</h2>
          <div className={styles.threeColumnGrid}>
            <div className={styles.card}>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Sustainable Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building long-term value through regenerative practices that improve land quality while increasing productivity.
              </p>
            </div>

            <div className={styles.card}>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Fair Partnership</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating win-win outcomes where all partners benefit proportionally to their contributions and risk.
              </p>
            </div>

            <div className={styles.card}>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementing best practices in operations, systems, and management to maximize efficiency and outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Principles Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Partnership Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Performance-Based</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Equity is earned through achieving measurable revenue milestones, protecting all parties.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Risk Protection</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Year 1 zero equity ensures alignment of interests and protects family farm control.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Family First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Oom Willie and Eben maintain 70% combined ownership, preserving family farm legacy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Transparent Growth</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Clear milestones, regular reporting, and shared decision-making throughout the journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Team Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Partnership Team</h2>
          <div className={styles.threeColumnGrid}>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold mb-2">35%</div>
              <h3 className="text-2xl font-semibold mb-3">Oom Willie</h3>
              <p className="text-lg opacity-90 mb-4">Land + Operations</p>
              <p className="text-sm opacity-75">
                Provides land and operational oversight, maintaining the farm's agricultural heritage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold mb-2">35%</div>
              <h3 className="text-2xl font-semibold mb-3">Eben</h3>
              <p className="text-lg opacity-90 mb-4">Infrastructure + Family</p>
              <p className="text-sm opacity-75">
                Contributes infrastructure and represents family interests in the partnership.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold mb-2">30%</div>
              <h3 className="text-2xl font-semibold mb-3">Hans</h3>
              <p className="text-lg opacity-90 mb-4">Sweat Equity + Livestock</p>
              <p className="text-sm opacity-75">
                Brings systems, planning, marketing expertise and livestock investment through performance-based earn-in.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6 text-center">
              Why This Partnership Matters
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This partnership represents more than just a business venture—it's a model for sustainable agriculture 
                that can be replicated across South Africa and beyond. By combining traditional farming knowledge with 
                modern regenerative practices, we're creating a blueprint for how agriculture can be both profitable 
                and environmentally responsible.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The phased equity structure ensures that all partners have skin in the game while protecting the family 
                farm legacy. With zero cash investment required from Hans, this creates an accessible pathway for skilled 
                operators to enter agriculture without capital barriers, while existing landowners benefit from expertise 
                and systems they may not otherwise access.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Most importantly, this partnership demonstrates that regenerative agriculture isn't just good for the 
                environment—it's economically superior, with projected revenue growth of 384% over five years benefiting 
                all stakeholders.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
