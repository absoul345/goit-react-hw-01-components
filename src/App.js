// import React from 'react';
import Profile from './components/profile/Profile';
import StatsList from './components/stats/StatsList';
import FriendsList from './components/friends/FriendsList';
import TransactionHistory from './components/transaction/TransactionHistory';
import data from './data/data';

const { friends, stats, transactions, user } = data;

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        likes={user.stats.likes}
        followers={user.stats.followers}
        views={user.stats.views}
      />

      <StatsList items={stats} />

      <FriendsList items={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
