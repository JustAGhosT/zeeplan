import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Calendar, FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header showControlsButton={false} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to discuss the partnership? Let's talk about how we can transform the farm together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-1">Email</h3>
                  <a 
                    href="mailto:hans@zeeplan.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    hans@zeeplan.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-1">Phone</h3>
                  <a 
                    href="tel:+27123456789" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +27 (0) 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Zeerust<br />
                    North West Province<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
                Hans Jurgens Smit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Partnership Proposal Contact
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Available for meetings, discussions, and farm visits to explore this unique regenerative agriculture partnership opportunity.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8">
              Next Steps
            </h2>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                      Review the Proposal
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Read through the comprehensive partnership proposal and financial projections.
                    </p>
                    <Link 
                      href="/proposal"
                      className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      View Proposal
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                      Schedule a Meeting
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Set up a meeting with Oom Willie, Eben, and Hans to discuss the partnership.
                    </p>
                    <a 
                      href="mailto:hans@zeeplan.com?subject=Partnership%20Meeting%20Request"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Request Meeting
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                      Ask Questions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Have questions about the partnership structure or financials? Get in touch.
                    </p>
                    <a 
                      href="mailto:hans@zeeplan.com?subject=Partnership%20Question"
                      className="inline-block px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                      Send Question
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">
            Suggested Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Review Documents</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Study the full proposal and financial projections
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Initial Meeting</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Schedule meeting with Oom Willie & Eben
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Farm Audit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Conduct land valuation and infrastructure audit
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">Partnership Agreement</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Draft and finalize partnership agreement
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
