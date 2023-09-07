import Profile from 'components/Profile/Profile';
import user from './assets/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from './assets/data.json';
const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics data={data} />
    </div>
  );
};
export default App;
