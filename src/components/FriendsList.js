import React from 'react';
import PropTypes from 'prop-types';

const FriendsList = ({ items }) => (
  <ul className="friend-list">
    {items.map(({ avatar, name, isOnline, id }) => (
      <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.defaultProp = {
  avatar:
    'https://cdn.pixabay.com/photo/2021/07/12/11/09/sea-6406047_960_720.jpg',
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
