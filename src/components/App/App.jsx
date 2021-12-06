import Profile from '../Profile/Profile';
import user from '../../data/user.json';
import statistics from '../../data/statistics.json';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import friends from '../../data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';

const { username, tag, location, avatar, stats } = user;

const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      {/* <Statistics stats={statistics} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
