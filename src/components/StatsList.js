import React from 'react';
import PropTypes from 'prop-types';

const StatsList = ({ items }) => (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {items.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatsList;
