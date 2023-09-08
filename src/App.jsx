import Profile from 'components/Profile/Profile';
import user from './assets/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from './assets/data.json';
import FriendsList from './components/FriendList/FriendList';
import friends from './assets/friends.json';
import TransactionHistory from './components/Transactions/Transactions';
import transaction from './assets/transactions.json';

const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics data={data} title="Upload stats" />
      <FriendsList data={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
export default App;
