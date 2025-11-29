import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/app/page.module.css';

export function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaHeading}>Ready to Explore the Full Proposal?</h2>
        <p className={styles.ctaText}>
          Dive into the complete partnership details, financial projections, and transformation plan.
        </p>
        <div className={styles.heroCTA}>
          <Link href="/proposal" className={styles.ctaButton}>
            Full Proposal
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/sekelbos" className={styles.ctaButton}>
            Sekelbos Plan
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/contact" className={styles.ctaButtonOutline}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
