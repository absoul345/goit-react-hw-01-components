import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';
import FriendsItem from './FriendsItem';

const FriendsList = ({ items }) => {
  return (
    <ul className={styles.friendList}>
      {items.map(item => (
        <FriendsItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendsList;
