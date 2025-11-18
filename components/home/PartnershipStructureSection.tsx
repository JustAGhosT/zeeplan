import styles from '@/app/page.module.css';

export function PartnershipStructureSection() {
  return (
    <section className={styles.lightSection}>
      <div className={styles.mainContent}>
        <div className={styles.sectionCenter}>
          <h2 className={styles.sectionHeading}>Partnership Structure</h2>
          <p className={styles.sectionSubheading}>Fair and balanced equity distribution</p>
        </div>

        <div className={styles.partnershipGrid}>
          <div className={styles.partnerCard}>
            <div className={styles.partnerCardGreen}>
              <div className={styles.partnerPercentage}>35%</div>
              <div className={styles.partnerName}>Oom Hein</div>
              <div className={styles.partnerRole}>Land + Operations</div>
            </div>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.partnerCardBlue}>
              <div className={styles.partnerPercentage}>35%</div>
              <div className={styles.partnerName}>Eben</div>
              <div className={styles.partnerRole}>Infrastructure + Family</div>
            </div>
          </div>
          <div className={styles.partnerCard}>
            <div className={styles.partnerCardYellow}>
              <div className={styles.partnerPercentage}>30%</div>
              <div className={styles.partnerName}>Hans</div>
              <div className={styles.partnerRole}>Sweat Equity + Livestock</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
