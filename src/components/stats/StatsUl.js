import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const StatsUl = ({ items }) => {
  return (
    <ul className={styles.statList}>
      {items.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatsUl.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatsUl;
