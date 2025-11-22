import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { KeyMetricsSection } from '@/components/home/KeyMetricsSection';
import { SekelbosSection } from '@/components/home/SekelbosSection';
import { PartnershipProtectionSection } from '@/components/home/PartnershipProtectionSection';
import { PartnershipStructureSection } from '@/components/home/PartnershipStructureSection';
import { TransformationPlanSection } from '@/components/home/TransformationPlanSection';
import { OperationsSection } from '@/components/home/OperationsSection';
import { CTASection } from '@/components/home/CTASection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header showControlsButton={false} />
      <main>
        <HeroSection />
        <KeyMetricsSection />
        <SekelbosSection />
        <PartnershipProtectionSection />
        <PartnershipStructureSection />
        <TransformationPlanSection />
        <OperationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
