'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useDarkMode } from '@/lib/useDarkMode';
import styles from './Footer.module.css';

export function Footer() {
  const isDark = useDarkMode();

  return (
    <footer className={`${styles.footer} ${isDark ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About Section */}
          <div className={styles.aboutSection}>
            <div className={styles.logoContainer}>
              <span className={styles.logoIcon}>🌱</span>
              <h3 className={`${styles.logoTitle} ${isDark ? styles.dark : ''}`}>Zeeplan</h3>
            </div>
            <p className={`${styles.description} ${isDark ? styles.dark : ''}`}>
              Comprehensive business partnership proposal for a regenerative agriculture venture in Zeerust, North West
              Province, South Africa.
            </p>
            <p className={`${styles.version} ${isDark ? styles.dark : ''}`}>Document Version 4.0 | November 7, 2025</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${styles.sectionTitle} ${isDark ? styles.dark : ''}`}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={`${styles.link} ${isDark ? styles.dark : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`${styles.link} ${isDark ? styles.dark : ''}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/proposal" className={`${styles.link} ${isDark ? styles.dark : ''}`}>
                  Proposal
                </Link>
              </li>
              <li>
                <Link href="/financials" className={`${styles.link} ${isDark ? styles.dark : ''}`}>
                  Financials
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`${styles.link} ${isDark ? styles.dark : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`${styles.sectionTitle} ${isDark ? styles.dark : ''}`}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={`${styles.contactItem} ${isDark ? styles.dark : ''}`}>
                <MapPin style={{ width: '1rem', height: '1rem' }} />
                <span>Zeerust, North West Province</span>
              </li>
              <li className={`${styles.contactItem} ${isDark ? styles.dark : ''}`}>
                <Mail style={{ width: '1rem', height: '1rem' }} />
                <a href="mailto:hans@zeeplan.com" className={`${styles.link} ${isDark ? styles.dark : ''}`}>
                  hans@zeeplan.com
                </a>
              </li>
              <li className={`${styles.contactItem} ${isDark ? styles.dark : ''}`}>
                <Phone style={{ width: '1rem', height: '1rem' }} />
                <span>+27 (0) 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`${styles.bottomBar} ${isDark ? styles.dark : ''}`}>
          <div className={styles.bottomBarContent}>
            <p className={`${styles.copyright} ${isDark ? styles.dark : ''}`}>
              © {new Date().getFullYear()} Zeeplan. All rights reserved.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/JustAGhosT/zeeplan"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${isDark ? styles.dark : ''}`}
                aria-label="GitHub"
              >
                <Github style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${isDark ? styles.dark : ''}`}
                aria-label="LinkedIn"
              >
                <Linkedin style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
