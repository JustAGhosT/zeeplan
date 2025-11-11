import React from 'react';
import { CheckCircle } from 'lucide-react';
import styles from './BenefitsSection.module.css';

export interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
  columns?: 1 | 2;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, benefits, columns = 2 }) => {
  const gridClass = columns === 1 ? styles.singleColumn : styles.twoColumn;

  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.benefitsTitle}>{title}</h2>
      <div className={gridClass}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitItem}>
            <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h4 className={styles.benefitTitle}>{benefit.title}</h4>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
