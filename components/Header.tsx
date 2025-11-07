'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, Share2, Menu, X } from 'lucide-react';

interface HeaderProps {
  onToggleControls: () => void;
  showControls: boolean;
  onExport?: () => void;
  onShare?: () => void;
}

export function Header({ onToggleControls, showControls, onExport, onShare }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleExport = () => {
    if (onExport) {
      onExport();
    } else {
      window.print();
    }
  };

  const handleShare = () => {
    if (onShare) {
      onShare();
    } else if (navigator.share) {
      navigator.share({
        title: 'Zeerust Partnership Proposal',
        text: 'Interactive partnership proposal for regenerative agriculture venture',
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40 print:relative print:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 flex items-center gap-2">
                <span className="text-3xl">🌱</span>
                <span>Zeeplan</span>
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Zeerust Regenerative Agriculture Partnership
              </p>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button
              onClick={handleExport}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors print:hidden"
              aria-label="Export to PDF"
              title="Print/Export to PDF"
            >
              <Download className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors print:hidden"
              aria-label="Share proposal"
              title="Share proposal"
            >
              <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            <button
              onClick={onToggleControls}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md print:hidden"
            >
              {showControls ? 'Hide Controls' : 'Adjust Values'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t dark:border-gray-700 pt-4">
            <button
              onClick={() => {
                toggleDarkMode();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
              <span className="text-gray-700 dark:text-gray-300">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>

            <button
              onClick={() => {
                handleExport();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Download className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300">Export to PDF</span>
            </button>

            <button
              onClick={() => {
                handleShare();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300">Share Proposal</span>
            </button>

            <button
              onClick={() => {
                onToggleControls();
                setMobileMenuOpen(false);
              }}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              {showControls ? 'Hide Controls' : 'Adjust Values'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
