'use client';

import React from 'react';
import { Card, Section } from './UIComponents';
import styles from './LivestockModules.module.css';

export function RabbitModule() {
  return (
    <Section title="Rabbit Module (Optional)" subtitle="A pilot micro-enterprise for high-value meat production">
      <Card title="Positioning">
        <p className={styles.positioning}>
          Rabbits are an optional micro-livestock module aimed at turning surplus forage and sekelbos leaves into a
          small, high-value meat stream. This module is not required for the core sekelbos or cattle plan.
        </p>
      </Card>
      <Card title="Housing Design">
        <ul className={styles.list}>
          <li>
            <strong>Fixed Hutches:</strong> Located near the homestead for security and easy access.
          </li>
          <li>
            <strong>Predator-Proof:</strong> Elevated cages with solid sides and wire mesh floors.
          </li>
          <li>
            <strong>Climate Control:</strong> Shaded, well-ventilated to protect from heat stress.
          </li>
          <li>
            <strong>Water System:</strong> Automatic nipple drinkers to ensure constant fresh water.
          </li>
        </ul>
      </Card>
      <div className={styles.grid}>
        <Card title="Capex Range (Starter Group)">
          <p className={styles.costRange}>R15,000 – R40,000</p>
          <p className={styles.costDescription}>
            Includes hutches/cages for 10-20 breeders, feeders, drinkers, and a basic processing area.
          </p>
        </Card>
        <Card title="Opex Considerations">
          <ul className={styles.list}>
            <li>
              <strong>Feed:</strong> Pellets supplemented with forage and sekelbos leaves.
            </li>
            <li>
              <strong>Labor:</strong> 1-2 hours per day for feeding, cleaning, and health checks.
            </li>
            <li>
              <strong>Processing:</strong> Costs for packaging and freezing if selling dressed carcasses.
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
