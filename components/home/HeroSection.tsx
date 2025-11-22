import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="block">Transform Your Farm</span>
            <span className="block text-brand">Zero Cash, Maximum Returns</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Performance-based partnership that increases your farm revenue by 229-384% while you maintain 70% family
            control
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/proposal"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
            >
              View Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/sekelbos"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Sekelbos Clearance Plan
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative background blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-brand-light rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-green-light rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}
