import React from 'react';
import { LucideIcon } from 'lucide-react';
import styles from './FeatureCard.module.css';

export interface FeatureItem {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  description: string;
}

interface FeatureCardProps {
  features: FeatureItem[];
  title?: string;
  variant?: 'default' | 'target';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  features, 
  title,
  variant = 'default'
}) => {
  return (
    <div className={variant === 'target' ? styles.targetCard : styles.card}>
      {title && <h2 className={styles.cardTitle}>{title}</h2>}
      <div className={styles.featureList}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className={styles.featureItem}>
              <Icon className={`${styles.featureIcon} ${feature.iconColor || ''}`} />
              <div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
