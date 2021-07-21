import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <span
        className={item.isOnline ? styles.status_online : styles.status_offline}
      ></span>
      <img
        className={styles.avatar}
        src={item.avatar}
        alt={item.name}
        width="48"
      />
      <p className={styles.name}>{item.name}</p>
    </li>
  );
};

FriendsItem.defaultProp = {
  avatar:
    'https://cdn.pixabay.com/photo/2021/07/12/11/09/sea-6406047_960_720.jpg',
};

FriendsItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendsItem;
