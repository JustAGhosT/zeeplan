import { Users, Building, TrendingUp, Award } from 'lucide-react';
import styles from './Partners.module.css';

export function Partners() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet the Partners</h2>
          <p className={styles.subtitle}>
            Three partners bringing complementary strengths to create a thriving regenerative agriculture operation
          </p>
        </div>

        <div className={styles.partnersGrid}>
          {/* Oom Hein */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerHeader}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#10b981' }}>
                <Building className={styles.icon} />
              </div>
              <div className={styles.equityBadge}>35% Equity</div>
            </div>
            <h3 className={styles.partnerName}>Oom Hein</h3>
            <p className={styles.partnerRole}>Land Ownership & Operations</p>
            
            <div className={styles.partnerDetails}>
              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Experience</h4>
                <p className={styles.detailText}>
                  Decades of farming experience in the Zeerust Bushveld region with deep knowledge of local conditions, 
                  cattle ranching, and sustainable land management practices.
                </p>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Contribution</h4>
                <ul className={styles.detailList}>
                  <li>600 hectares prime Bushveld farmland</li>
                  <li>Day-to-day operational oversight</li>
                  <li>Local market relationships and knowledge</li>
                  <li>Existing cattle operation (72 LSU)</li>
                </ul>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Role</h4>
                <p className={styles.detailText}>
                  Manages daily farm operations, oversees livestock care, and maintains relationships with local 
                  suppliers and markets. Ensures operational continuity and preserves family farming heritage.
                </p>
              </div>
            </div>
          </div>

          {/* Eben */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerHeader}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#3b82f6' }}>
                <Users className={styles.icon} />
              </div>
              <div className={styles.equityBadge}>35% Equity</div>
            </div>
            <h3 className={styles.partnerName}>Eben</h3>
            <p className={styles.partnerRole}>Infrastructure & Family Partnership</p>
            
            <div className={styles.partnerDetails}>
              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Relationship</h4>
                <p className={styles.detailText}>
                  Son-in-law to Oom Hein, representing the next generation of family farm stewardship. Committed to 
                  preserving and growing the family agricultural legacy.
                </p>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Contribution</h4>
                <ul className={styles.detailList}>
                  <li>Existing farm infrastructure and buildings</li>
                  <li>Capital investment for improvements</li>
                  <li>Family continuity and succession planning</li>
                  <li>Strategic input on major decisions</li>
                </ul>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Role</h4>
                <p className={styles.detailText}>
                  Provides infrastructure investment and represents family interests. Works alongside Oom Hein to 
                  maintain 70% family control while enabling growth and modernization.
                </p>
              </div>
            </div>
          </div>

          {/* Hans */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerHeader}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#f59e0b' }}>
                <TrendingUp className={styles.icon} />
              </div>
              <div className={styles.equityBadge}>30% Equity (Performance-Based)</div>
            </div>
            <h3 className={styles.partnerName}>Hans</h3>
            <p className={styles.partnerRole}>Systems, Planning & Marketing</p>
            
            <div className={styles.partnerDetails}>
              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Expertise</h4>
                <p className={styles.detailText}>
                  Agricultural systems design, financial management, strategic planning, marketing, and regenerative 
                  agriculture practices. Specializes in farm diversification and revenue optimization.
                </p>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Contribution (Zero Cash)</h4>
                <ul className={styles.detailList}>
                  <li>R48K-98K livestock investment (pigs, goats, chickens)</li>
                  <li>Comprehensive sweat equity (valued at R600K-900K)</li>
                  <li>Financial tracking and production systems</li>
                  <li>Marketing strategy and brand development</li>
                  <li>Diversification planning and implementation</li>
                </ul>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>Role & Earn-In Structure</h4>
                <p className={styles.detailText}>
                  Implements systems, manages financials, develops marketing channels, and drives diversification. 
                  Equity earned through performance: 0% Year 1, 15% Year 2, 22.5% Year 3, 30% Years 4-5 based on 
                  achieving revenue milestones.
                </p>
              </div>

              <div className={styles.detailSection}>
                <h4 className={styles.detailTitle}>5-Year Commitment</h4>
                <ul className={styles.detailList}>
                  <li>Systems: Financial tracking, inventory management, KPIs</li>
                  <li>Planning: Enterprise mix optimization, capital allocation</li>
                  <li>Marketing: Branding, distribution, direct-to-consumer sales</li>
                  <li>Operations: Process improvement, efficiency gains</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Strength Section */}
        <div className={styles.strengthSection}>
          <div className={styles.strengthHeader}>
            <Award className={styles.strengthIcon} />
            <h3 className={styles.strengthTitle}>Combined Partnership Strength</h3>
          </div>
          <div className={styles.strengthGrid}>
            <div className={styles.strengthCard}>
              <h4 className={styles.strengthCardTitle}>Land & Legacy</h4>
              <p className={styles.strengthCardText}>
                600ha prime farmland + decades of operational experience = Foundation for sustainable growth
              </p>
            </div>
            <div className={styles.strengthCard}>
              <h4 className={styles.strengthCardTitle}>Capital & Infrastructure</h4>
              <p className={styles.strengthCardText}>
                Existing buildings + family commitment = Stable base for expansion without external debt
              </p>
            </div>
            <div className={styles.strengthCard}>
              <h4 className={styles.strengthCardTitle}>Systems & Expertise</h4>
              <p className={styles.strengthCardText}>
                Modern practices + strategic planning = 384% revenue growth with diversified risk
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
