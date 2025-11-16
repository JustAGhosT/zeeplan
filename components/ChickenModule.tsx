'use client';

import React from 'react';
import { Card, Section } from './UIComponents';
import styles from './LivestockModules.module.css';

export function ChickenModule() {
  return (
    <Section title="Chicken System: Housing & Costs" subtitle="Mobile, predator-proof housing for rotational grazing">
      <Card title="Housing Design">
        <ul className={styles.list}>
          <li>
            <strong>Mobile Coop:</strong> "Chicken tractor" style, moved every few days to follow goat/pig rotations.
          </li>
          <li>
            <strong>Predator-Proof:</strong> Reinforced with wire mesh and a solid, lockable night shelter.
          </li>
          <li>
            <strong>Climate Adapted:</strong> Designed for North West summers with ample shade and cross-ventilation.
          </li>
          <li>
            <strong>Stocking Density:</strong> 8-10 birds/m² indoors, with access to a larger outdoor run.
          </li>
        </ul>
      </Card>
      <div className={styles.grid}>
        <Card title="Capex Range (per 100 birds)">
          <p className={styles.costRange}>R10,000 – R25,000</p>
          <p className={styles.costDescription}>
            Includes mobile coop construction, wire, doors, perches, nest boxes, feeders, and drinkers.
          </p>
        </Card>
        <Card title="Opex Considerations">
          <ul className={styles.list}>
            <li>
              <strong>Feed:</strong> R40-60 per bird per month (supplementing foraging).
            </li>
            <li>
              <strong>Health:</strong> Vaccinations and basic veterinary care.
            </li>
            <li>
              <strong>Labor:</strong> Daily checks, feeding, and moving the coop.
            </li>
            <li>
              <strong>Replacement:</strong> Annual replacement rate for culled or lost birds.
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
