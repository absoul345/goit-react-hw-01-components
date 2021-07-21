import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const StatsItem = ({ stat }) => {
  return (
    <li className="item">
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
  );
};

StatsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default StatsItem;
