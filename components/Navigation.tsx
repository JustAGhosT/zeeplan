'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, FileText, TrendingUp, Calendar, Settings } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = '' }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'executive-summary', label: 'Executive Summary', icon: FileText },
    { id: 'financial-projections', label: 'Financial Projections', icon: TrendingUp },
    { id: 'transformation-plan', label: 'Transformation Plan', icon: Calendar },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sticky top-24 print:hidden ${className}`}>
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
        Table of Contents
      </h3>
      <ul className="space-y-1">
        {sections.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors ${
                activeSection === id
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm flex-1">{label}</span>
              {activeSection === id && (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
