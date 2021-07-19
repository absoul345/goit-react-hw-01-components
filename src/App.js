// import React from 'react';
import Profile from './components/Profile';
import profile from './user.json';
import StatsList from './components/StatsList';
import stats from './statistical-data.json';
import FriendsList from './components/FriendsList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';

function App() {
  return (
    <div>
      <Profile
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        likes={profile.stats.likes}
        followers={profile.stats.followers}
        views={profile.stats.views}
      />

      <StatsList items={stats} />

      <FriendsList items={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
