import React from 'react';
import PropTypes from 'prop-types';
import TransactionList from './TransactionList';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.th}>Type</th>
        <th className={styles.th}>Amount</th>
        <th className={styles.th}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(transaction => (
        <TransactionList transaction={transaction} key={transaction.id} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
