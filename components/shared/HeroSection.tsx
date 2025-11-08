import React from 'react';
import { LucideIcon } from 'lucide-react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  iconColor?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  icon: Icon, 
  title, 
  subtitle,
  iconColor = 'text-white'
}) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.iconContainer}>
        <Icon className={`w-10 h-10 ${iconColor}`} />
      </div>
      <h1 className={styles.heroTitle}>
        {title}
      </h1>
      <p className={styles.heroSubtitle}>
        {subtitle}
      </p>
    </div>
  );
};
