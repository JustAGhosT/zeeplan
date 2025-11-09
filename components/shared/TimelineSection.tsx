import React from 'react';
import { LucideIcon } from 'lucide-react';
import styles from './TimelineSection.module.css';

export interface TimelineItem {
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  title: string;
  description: string;
  subtext?: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
  title?: string;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ items, title }) => {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      <div className={styles.timelineContainer}>
        <div className={styles.timelineList}>
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={styles.timelineItem}>
                <div className={`${styles.timelineIconContainer} ${item.iconBgColor || ''}`}>
                  <Icon className={`w-8 h-8 ${item.iconColor || ''}`} />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                  {item.subtext && <div className={styles.timelineSubtext}>{item.subtext}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
