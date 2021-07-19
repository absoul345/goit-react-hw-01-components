import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, likes, followers, views }) => (
  <div className="profile">
    <div className="description">
      <img className="avatar" src={avatar} alt={name} width="150" />
      <p className="name">{name}</p>
      <p className="tag">
        <a href="/">@{tag}</a>
      </p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar:
    'https://cdn.pixabay.com/photo/2017/05/04/12/43/zebra-2283914_960_720.jpg',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
