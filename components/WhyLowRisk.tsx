import { Shield, TrendingUp, Users, Target, CheckCircle2, XCircle } from 'lucide-react';
import styles from './WhyLowRisk.module.css';

export function WhyLowRisk() {
  return (
    <section className={styles.riskSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <Shield className={styles.shieldIcon} />
          </div>
          <h2 className={styles.title}>Why This Partnership Is Low-Risk</h2>
          <p className={styles.subtitle}>
            Designed to protect all partners while maximizing growth potential
          </p>
        </div>

        {/* Protection Mechanisms Grid */}
        <div className={styles.protectionGrid}>
          <div className={styles.protectionCard}>
            <div className={styles.protectionIcon}>
              <Target className={styles.icon} />
            </div>
            <h3 className={styles.protectionTitle}>Year 1 Prove-It Phase</h3>
            <p className={styles.protectionText}>
              Hans starts with <strong>0% equity</strong> and must demonstrate value by achieving R340K+ revenue 
              (46% above baseline) before earning any ownership stake.
            </p>
            <div className={styles.protectionHighlight}>
              <CheckCircle2 className={styles.checkIcon} />
              <span>You risk nothing in Year 1</span>
            </div>
          </div>

          <div className={styles.protectionCard}>
            <div className={styles.protectionIcon}>
              <Users className={styles.icon} />
            </div>
            <h3 className={styles.protectionTitle}>70% Family Control</h3>
            <p className={styles.protectionText}>
              Oom Hein (35%) + Eben (35%) = <strong>70% family ownership</strong>. Hans can never outvote the 
              family on major decisions. Family legacy is protected.
            </p>
            <div className={styles.protectionHighlight}>
              <CheckCircle2 className={styles.checkIcon} />
              <span>Family maintains majority control always</span>
            </div>
          </div>

          <div className={styles.protectionCard}>
            <div className={styles.protectionIcon}>
              <TrendingUp className={styles.icon} />
            </div>
            <h3 className={styles.protectionTitle}>Performance-Based Milestones</h3>
            <p className={styles.protectionText}>
              Hans only earns equity by hitting specific revenue targets each year. If targets are missed, 
              equity progression stops. No performance = no ownership increase.
            </p>
            <div className={styles.protectionHighlight}>
              <CheckCircle2 className={styles.checkIcon} />
              <span>Pay for performance, not promises</span>
            </div>
          </div>
        </div>

        {/* Zero Cash Investment Highlight */}
        <div className={styles.cashHighlight}>
          <h3 className={styles.cashTitle}>
            <span className={styles.cashIcon}>R0</span>
            Zero Cash Required from Oom Hein & Eben
          </h3>
          <div className={styles.cashGrid}>
            <div className={styles.cashCard}>
              <h4 className={styles.cashCardTitle}>Hans Invests</h4>
              <ul className={styles.cashList}>
                <li>R48K-98K livestock (pigs, goats, chickens)</li>
                <li>Comprehensive sweat equity (systems, planning, marketing)</li>
                <li><strong>R0 cash from family</strong></li>
              </ul>
            </div>
            <div className={styles.cashCard}>
              <h4 className={styles.cashCardTitle}>What You Provide</h4>
              <ul className={styles.cashList}>
                <li>600 hectares farmland (existing asset)</li>
                <li>Current cattle operation (72 LSU)</li>
                <li>Existing infrastructure and buildings</li>
                <li><strong>No new capital required</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Equity Progression Timeline */}
        <div className={styles.timeline}>
          <h3 className={styles.timelineTitle}>Equity Progression: Safe & Measured</h3>
          <div className={styles.timelineSteps}>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Year 1: Prove It</h4>
                <p className={styles.stepText}>
                  Hans: <strong>0% equity</strong>, R120K-180K salary<br />
                  Milestone: Revenue ≥ R340K (+46%)
                </p>
                <div className={styles.stepRisk}>
                  <Shield className={styles.stepIcon} />
                  <span>Zero risk - Family keeps 100% equity</span>
                </div>
              </div>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Year 2: Earn 15%</h4>
                <p className={styles.stepText}>
                  Hans: <strong>15% equity</strong> (if Year 1 target met)<br />
                  Family: 85% combined (42.5% + 42.5%)
                </p>
                <div className={styles.stepRisk}>
                  <Shield className={styles.stepIcon} />
                  <span>Family control: 85% majority</span>
                </div>
              </div>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Year 3: Earn 22.5%</h4>
                <p className={styles.stepText}>
                  Hans: <strong>22.5% equity</strong> (if targets continue)<br />
                  Family: 77.5% combined (38.75% + 38.75%)
                </p>
                <div className={styles.stepRisk}>
                  <Shield className={styles.stepIcon} />
                  <span>Family control: 77.5% supermajority</span>
                </div>
              </div>
            </div>

            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>4-5</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Years 4-5: Final 30%</h4>
                <p className={styles.stepText}>
                  Hans: <strong>30% equity</strong> (full partnership)<br />
                  Family: 70% combined (35% + 35%)
                </p>
                <div className={styles.stepRisk}>
                  <Shield className={styles.stepIcon} />
                  <span>Family control: 70% permanent majority</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exit Strategy */}
        <div className={styles.exitSection}>
          <h3 className={styles.exitTitle}>Built-In Exit Options</h3>
          <div className={styles.exitGrid}>
            <div className={styles.exitCard}>
              <div className={styles.exitIcon}>
                <XCircle className={styles.icon} style={{ color: '#ef4444' }} />
              </div>
              <h4 className={styles.exitCardTitle}>Year 1 Exit</h4>
              <p className={styles.exitCardText}>
                If Hans doesn't deliver in Year 1, he stays at 0% equity. You can exit the partnership with no 
                ownership given away. Hans takes his livestock and leaves.
              </p>
            </div>

            <div className={styles.exitCard}>
              <div className={styles.exitIcon}>
                <XCircle className={styles.icon} style={{ color: '#f59e0b' }} />
              </div>
              <h4 className={styles.exitCardTitle}>Year 3 Review</h4>
              <p className={styles.exitCardText}>
                Clear exit clause at Year 3. If the partnership isn't working, either party can exit with fair 
                market value buyout terms. No long-term lock-in.
              </p>
            </div>

            <div className={styles.exitCard}>
              <div className={styles.exitIcon}>
                <CheckCircle2 className={styles.icon} style={{ color: '#10b981' }} />
              </div>
              <h4 className={styles.exitCardTitle}>Year 5 Options</h4>
              <p className={styles.exitCardText}>
                Continue partnership, buy out Hans's equity, or Hans buys increased stake. Multiple paths forward 
                based on 5 years of proven performance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>The Bottom Line</h3>
          <div className={styles.summaryContent}>
            <div className={styles.summaryPoint}>
              <CheckCircle2 className={styles.summaryIcon} />
              <p>
                <strong>Zero cash risk:</strong> You invest nothing. Hans brings the capital and sweat equity.
              </p>
            </div>
            <div className={styles.summaryPoint}>
              <CheckCircle2 className={styles.summaryIcon} />
              <p>
                <strong>Proven performance required:</strong> Hans must hit revenue targets or equity stops growing.
              </p>
            </div>
            <div className={styles.summaryPoint}>
              <CheckCircle2 className={styles.summaryIcon} />
              <p>
                <strong>Family control protected:</strong> 70% ownership means you always have final say.
              </p>
            </div>
            <div className={styles.summaryPoint}>
              <CheckCircle2 className={styles.summaryIcon} />
              <p>
                <strong>Multiple exit points:</strong> Year 1, Year 3, Year 5 - you're never locked in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
