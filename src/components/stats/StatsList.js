import React from 'react';
import StatsUl from './StatsUl';
import styles from './Stats.module.css';

const StatsList = ({ items }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <StatsUl items={items} />
  </section>
);

export default StatsList;
