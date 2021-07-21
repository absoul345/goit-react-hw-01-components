import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionList = ({ transaction }) => {
  return (
    <tr>
      <td className={styles.td}>{transaction.type}</td>
      <td className={styles.td}>{transaction.amount}</td>
      <td className={styles.td}>{transaction.currency}</td>
    </tr>
  );
};

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionList;
