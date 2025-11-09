'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Download, Share2, Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import { useTheme } from '@/app/contexts/ThemeContext';

interface HeaderProps {
  onToggleControls?: () => void;
  showControls?: boolean;
  onExport?: () => void;
  onShare?: () => void;
  showControlsButton?: boolean;
}

export function Header({ onToggleControls, showControls, onExport, onShare, showControlsButton = true }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [livestockDropdownOpen, setLivestockDropdownOpen] = useState(false);
  const [cropsDropdownOpen, setCropsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/proposal', label: 'Proposal' },
    { href: '/operations', label: 'Operations' },
    { href: '/financials', label: 'Financials' },
  ];

  const livestockItems = [
    { href: '/livestock', label: '📊 Livestock Overview', isSummary: true },
    { href: '/cattle', label: 'Cattle' },
    { href: '/goats', label: 'Goats & Dairy' },
    { href: '/pigs', label: 'Pigs' },
    { href: '/chicken', label: 'Chicken' },
  ];

  const cropItems = [
    { href: '/crops/summary', label: '📊 Crops Overview', isSummary: true },
    { href: '/crops/dryland', label: 'Dryland Crops' },
    { href: '/crops/irrigated', label: 'Irrigated Crops' },
  ];

  const bottomNavItems = [
    { href: '/sekelbos', label: 'Sekelbos' },
    { href: '/contact', label: 'Contact' },
  ];

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
    <header className={`${styles.header} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          {/* Logo and Title */}
          <div>
            <Link href="/" className={styles.logo}>
              <h1 className={`${styles.logoTitle} ${darkMode ? styles.dark : ''}`}>
                <span className={styles.logoIcon}>🌱</span>
                <span>Zeeplan</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${darkMode ? styles.dark : ''} ${
                  pathname === item.href ? styles.active : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Livestock Dropdown */}
            <div 
              className={styles.dropdown}
              onMouseEnter={() => setLivestockDropdownOpen(true)}
              onMouseLeave={() => setLivestockDropdownOpen(false)}
            >
              <button className={`${styles.navLink} ${darkMode ? styles.dark : ''} ${
                livestockItems.some(item => pathname === item.href) ? styles.active : ''
              }`}>
                Livestock
              </button>
              {livestockDropdownOpen && (
                <div className={`${styles.dropdownMenu} ${darkMode ? styles.dark : ''}`}>
                  {livestockItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${styles.dropdownItem} ${darkMode ? styles.dark : ''} ${
                        pathname === item.href ? styles.active : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Crops Dropdown */}
            <div 
              className={styles.dropdown}
              onMouseEnter={() => setCropsDropdownOpen(true)}
              onMouseLeave={() => setCropsDropdownOpen(false)}
            >
              <button className={`${styles.navLink} ${darkMode ? styles.dark : ''} ${
                cropItems.some(item => pathname === item.href) ? styles.active : ''
              }`}>
                Crops
              </button>
              {cropsDropdownOpen && (
                <div className={`${styles.dropdownMenu} ${darkMode ? styles.dark : ''}`}>
                  {cropItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${styles.dropdownItem} ${darkMode ? styles.dark : ''} ${
                        pathname === item.href ? styles.active : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Navigation Items */}
            {bottomNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${darkMode ? styles.dark : ''} ${
                  pathname === item.href ? styles.active : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={styles.desktopActions}>
            <button
              onClick={toggleTheme}
              className={`${styles.iconButton} ${darkMode ? styles.dark : ''}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun style={{ width: '1.25rem', height: '1.25rem', color: '#eab308' }} />
              ) : (
                <Moon style={{ width: '1.25rem', height: '1.25rem', color: '#4b5563' }} />
              )}
            </button>

            <button
              onClick={handleExport}
              className={`${styles.iconButton} ${darkMode ? styles.dark : ''}`}
              aria-label="Export to PDF"
              title="Print/Export to PDF"
            >
              <Download style={{ width: '1.25rem', height: '1.25rem', color: darkMode ? '#d1d5db' : '#4b5563' }} />
            </button>

            <button
              onClick={handleShare}
              className={`${styles.iconButton} ${darkMode ? styles.dark : ''}`}
              aria-label="Share proposal"
              title="Share proposal"
            >
              <Share2 style={{ width: '1.25rem', height: '1.25rem', color: darkMode ? '#d1d5db' : '#4b5563' }} />
            </button>

            {showControlsButton && onToggleControls && (
              <button
                onClick={onToggleControls}
                className={styles.controlsButton}
              >
                {showControls ? 'Hide Controls' : 'Adjust Values'}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${styles.mobileMenuButton} ${darkMode ? styles.dark : ''}`}
          >
            {mobileMenuOpen ? (
              <X style={{ width: '1.5rem', height: '1.5rem', color: darkMode ? '#d1d5db' : '#4b5563' }} />
            ) : (
              <Menu style={{ width: '1.5rem', height: '1.5rem', color: darkMode ? '#d1d5db' : '#4b5563' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`${styles.mobileMenu} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.mobileMenuContent}>
              {/* Mobile Navigation */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${styles.mobileNavLink} ${darkMode ? styles.dark : ''} ${
                    pathname === item.href ? styles.active : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Livestock Section */}
              <div className={styles.mobileSection}>
                <div className={styles.mobileSectionTitle}>Livestock</div>
                {livestockItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${styles.mobileNavLink} ${styles.mobileSubLink} ${darkMode ? styles.dark : ''} ${
                      pathname === item.href ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Crops Section */}
              <div className={styles.mobileSection}>
                <div className={styles.mobileSectionTitle}>Crops</div>
                {cropItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${styles.mobileNavLink} ${styles.mobileSubLink} ${darkMode ? styles.dark : ''} ${
                      pathname === item.href ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Bottom Navigation Items */}
              <div className={styles.mobileSection}>
                {bottomNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${styles.mobileNavLink} ${darkMode ? styles.dark : ''} ${
                      pathname === item.href ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className={`${styles.mobileActionButton} ${darkMode ? styles.dark : ''}`}
              >
                {darkMode ? (
                  <Sun style={{ width: '1.25rem', height: '1.25rem', color: '#eab308' }} />
                ) : (
                  <Moon style={{ width: '1.25rem', height: '1.25rem', color: '#4b5563' }} />
                )}
                <span>
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>

              <button
                onClick={() => {
                  handleExport();
                  setMobileMenuOpen(false);
                }}
                className={`${styles.mobileActionButton} ${darkMode ? styles.dark : ''}`}
              >
                <Download style={{ width: '1.25rem', height: '1.25rem', color: darkMode ? '#d1d5db' : '#4b5563' }} />
                <span>Export to PDF</span>
              </button>

              <button
                onClick={() => {
                  handleShare();
                  setMobileMenuOpen(false);
                }}
                className={`${styles.mobileActionButton} ${darkMode ? styles.dark : ''}`}
              >
                <Share2 style={{ width: '1.25rem', height: '1.25rem', color: darkMode ? '#d1d5db' : '#4b5563' }} />
                <span>Share Proposal</span>
              </button>

              {showControlsButton && onToggleControls && (
                <button
                  onClick={() => {
                    onToggleControls();
                    setMobileMenuOpen(false);
                  }}
                  className={styles.mobileControlsButton}
                >
                  {showControls ? 'Hide Controls' : 'Adjust Values'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
