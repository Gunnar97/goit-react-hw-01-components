import Profile from 'components/Profile/Profile';
import user from './assets/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from './assets/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './assets/friends.json';

const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics data={data} />
      <FriendList data={friends} />
    </div>
  );
};
export default App;
