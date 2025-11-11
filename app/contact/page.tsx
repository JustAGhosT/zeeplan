import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Calendar, FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />

      <main className={styles.mainContent}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>
            Ready to discuss the partnership? Let's talk about how we can transform the farm together.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Contact Information */}
          <div>
            <h2 className={styles.sectionTitle}>Contact Information</h2>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                  <Mail className={`${styles.iconGreen}`} />
                </div>
                <div>
                  <h3 className={styles.contactItemTitle}>Email</h3>
                  <a href="mailto:hans@zeeplan.com" className={`${styles.contactLink} ${styles.contactLinkGreen}`}>
                    hans@zeeplan.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                  <Phone className={`${styles.iconBlue}`} />
                </div>
                <div>
                  <h3 className={styles.contactItemTitle}>Phone</h3>
                  <a href="tel:+27123456789" className={`${styles.contactLink} ${styles.contactLinkBlue}`}>
                    +27 (0) 123 456 789
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={`${styles.iconBox} ${styles.iconBoxYellow}`}>
                  <MapPin className={`${styles.iconYellow}`} />
                </div>
                <div>
                  <h3 className={styles.contactItemTitle}>Location</h3>
                  <p className={styles.contactText}>
                    Zeerust
                    <br />
                    North West Province
                    <br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.profileCard}>
              <h3 className={styles.profileTitle}>Hans Jurgens Smit</h3>
              <p className={styles.profileSubtitle}>Partnership Proposal Contact</p>
              <p className={styles.profileDescription}>
                Available for meetings, discussions, and farm visits to explore this unique regenerative agriculture
                partnership opportunity.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className={styles.sectionTitle}>Next Steps</h2>

            <div className={styles.actionsContainer}>
              <div className={styles.actionCard}>
                <div className={styles.contactItem}>
                  <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                    <FileText className={`${styles.iconGreen}`} />
                  </div>
                  <div>
                    <h3 className={styles.actionTitle}>Review the Proposal</h3>
                    <p className={styles.actionDescription}>
                      Read through the comprehensive partnership proposal and financial projections.
                    </p>
                    <Link href="/proposal" className={`${styles.actionButton} ${styles.actionButtonGreen}`}>
                      View Proposal
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.actionCard}>
                <div className={styles.contactItem}>
                  <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                    <Calendar className={`${styles.iconBlue}`} />
                  </div>
                  <div>
                    <h3 className={styles.actionTitle}>Schedule a Meeting</h3>
                    <p className={styles.actionDescription}>
                      Set up a meeting with Oom Willie, Eben, and Hans to discuss the partnership.
                    </p>
                    <a
                      href="mailto:hans@zeeplan.com?subject=Partnership%20Meeting%20Request"
                      className={`${styles.actionButton} ${styles.actionButtonBlue}`}
                    >
                      Request Meeting
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.actionCard}>
                <div className={styles.contactItem}>
                  <div className={`${styles.iconBox} ${styles.iconBoxYellow}`}>
                    <MessageSquare className={`${styles.iconYellow}`} />
                  </div>
                  <div>
                    <h3 className={styles.actionTitle}>Ask Questions</h3>
                    <p className={styles.actionDescription}>
                      Have questions about the partnership structure or financials? Get in touch.
                    </p>
                    <a
                      href="mailto:hans@zeeplan.com?subject=Partnership%20Question"
                      className={`${styles.actionButton} ${styles.actionButtonYellow}`}
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
        <section className={styles.timelineSection}>
          <h2 className={styles.timelineSectionTitle}>Suggested Timeline</h2>
          <div className={styles.timelineGrid}>
            <div className={styles.timelineStep}>
              <div className={`${styles.timelineStepIcon} ${styles.timelineStepIconGreen}`}>
                <span className={`${styles.timelineStepNumber} ${styles.timelineStepNumberGreen}`}>1</span>
              </div>
              <h3 className={styles.timelineStepTitle}>Review Documents</h3>
              <p className={styles.profileDescription}>Study the full proposal and financial projections</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={`${styles.timelineStepIcon} ${styles.timelineStepIconBlue}`}>
                <span className={`${styles.timelineStepNumber} ${styles.timelineStepNumberBlue}`}>2</span>
              </div>
              <h3 className={styles.timelineStepTitle}>Initial Meeting</h3>
              <p className={styles.profileDescription}>Schedule meeting with Oom Willie & Eben</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={`${styles.timelineStepIcon} ${styles.timelineStepIconYellow}`}>
                <span className={`${styles.timelineStepNumber} ${styles.timelineStepNumberYellow}`}>3</span>
              </div>
              <h3 className={styles.timelineStepTitle}>Farm Audit</h3>
              <p className={styles.profileDescription}>Conduct land valuation and infrastructure audit</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={`${styles.timelineStepIcon} ${styles.timelineStepIconPurple}`}>
                <span className={`${styles.timelineStepNumber} ${styles.timelineStepNumberPurple}`}>4</span>
              </div>
              <h3 className={styles.timelineStepTitle}>Partnership Agreement</h3>
              <p className={styles.profileDescription}>Draft and finalize partnership agreement</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
