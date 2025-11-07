'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-12 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌱</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Zeeplan</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comprehensive business partnership proposal for a regenerative agriculture venture 
              in Zeerust, North West Province, South Africa.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Document Version 4.0 | November 7, 2025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/proposal" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Proposal
                </Link>
              </li>
              <li>
                <Link 
                  href="/financials" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Financials
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Zeerust, North West Province</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:hans@zeeplan.com" 
                  className="text-sm hover:text-green-600 dark:hover:text-green-400 transition-colors"
                >
                  hans@zeeplan.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+27 (0) 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Zeeplan. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/JustAGhosT/zeeplan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
