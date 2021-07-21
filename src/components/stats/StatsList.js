import React from 'react';
import StatsItem from './StatsItem';
import styles from './Stats.module.css';
import PropTypes from 'prop-types';

const StatsList = ({ stats, title }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => (
        <StatsItem stat={stat} key={stat.id} />
      ))}
    </ul>
  </section>
);

StatsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default StatsList;
