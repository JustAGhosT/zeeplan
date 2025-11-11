'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  FileText,
  TrendingUp,
  Calendar,
  TreeDeciduous,
  Leaf,
  Package,
  Wrench,
  Target,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import styles from './Navigation.module.css';

interface NavigationProps {
  className?: string;
  pageType?: 'proposal' | 'sekelbos';
}

export function Navigation({ className = '', pageType = 'proposal' }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('');
  const [isDark, setIsDark] = useState(false);

  const proposalSections = [
    { id: 'executive-summary', label: 'Executive Summary', icon: FileText },
    { id: 'financial-projections', label: 'Financial Projections', icon: TrendingUp },
    { id: 'transformation-plan', label: 'Transformation Plan', icon: Calendar },
  ];

  const sekelbosSections = [
    { id: 'sekelbos-executive', label: 'Executive Summary', icon: TreeDeciduous },
    { id: 'sekelbos-section1', label: 'Biology & Strategy', icon: Leaf },
    { id: 'sekelbos-section2', label: 'Wood Products', icon: Package },
    { id: 'sekelbos-section3', label: 'Operations', icon: Wrench },
    { id: 'sekelbos-section4', label: 'Timeline', icon: Target },
    { id: 'sekelbos-section5', label: 'Marketing', icon: BarChart3 },
    { id: 'sekelbos-section6', label: 'Risk Management', icon: AlertTriangle },
    { id: 'sekelbos-section7', label: 'Success Metrics', icon: CheckCircle2 },
  ];

  const sections = pageType === 'sekelbos' ? sekelbosSections : proposalSections;

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
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
    <nav className={`${styles.navigation} ${isDark ? styles.dark : ''} ${className}`}>
      <h3 className={`${styles.title} ${isDark ? styles.dark : ''}`}>Table of Contents</h3>

      {/* Link to other page */}
      {pageType === 'proposal' && (
        <div className={`${styles.linkSection} ${isDark ? styles.dark : ''}`}>
          <Link href="/sekelbos" className={`${styles.navLink} ${styles.green} ${isDark ? styles.dark : ''}`}>
            <TreeDeciduous style={{ width: '1rem', height: '1rem' }} />
            <span style={{ flex: 1 }}>Sekelbos Clearance Plan →</span>
          </Link>
        </div>
      )}

      {pageType === 'sekelbos' && (
        <div className={`${styles.linkSection} ${isDark ? styles.dark : ''}`}>
          <Link href="/proposal" className={`${styles.navLink} ${isDark ? styles.dark : ''}`}>
            <FileText style={{ width: '1rem', height: '1rem' }} />
            <span style={{ flex: 1 }}>← Main Proposal</span>
          </Link>
        </div>
      )}

      <ul className={styles.list}>
        {sections.map(({ id, label, icon: Icon }) => (
          <li key={id} className={styles.listItem}>
            <button
              onClick={() => scrollToSection(id)}
              className={`${styles.button} ${isDark ? styles.dark : ''} ${activeSection === id ? styles.active : ''}`}
            >
              <Icon style={{ width: '1rem', height: '1rem' }} />
              <span style={{ fontSize: '0.875rem', flex: 1 }}>{label}</span>
              {activeSection === id && <ChevronRight style={{ width: '1rem', height: '1rem' }} />}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
