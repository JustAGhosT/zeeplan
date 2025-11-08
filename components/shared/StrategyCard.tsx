import React from 'react';
import { LucideIcon } from 'lucide-react';
import styles from './StrategyCard.module.css';

export interface Strategy {
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  title: string;
  description: string | React.ReactNode;
  footer?: string | React.ReactNode;
}

interface StrategyCardProps {
  strategies: Strategy[];
  title?: string;
  columns?: 2 | 3 | 4;
}

export const StrategyCard: React.FC<StrategyCardProps> = ({ 
  strategies, 
  title,
  columns = 3
}) => {
  const gridClass = columns === 2 ? styles.twoColumn : 
                    columns === 4 ? styles.fourColumn : 
                    styles.threeColumn;

  return (
    <section className={styles.section}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      <div className={gridClass}>
        {strategies.map((strategy, index) => {
          const Icon = strategy.icon;
          return (
            <div key={index} className={styles.strategyCard}>
              <div className={`${styles.strategyIconContainer} ${strategy.iconBgColor || ''}`}>
                <Icon className={`w-6 h-6 ${strategy.iconColor || ''}`} />
              </div>
              <h3 className={styles.strategyTitle}>{strategy.title}</h3>
              {typeof strategy.description === 'string' ? (
                <p className={styles.strategyDescription}>{strategy.description}</p>
              ) : (
                <div className={styles.strategyDescription}>{strategy.description}</div>
              )}
              {strategy.footer && (
                <div className={styles.strategyFooter}>{strategy.footer}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
