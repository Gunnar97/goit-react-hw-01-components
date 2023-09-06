import Profile from 'components/Profile';
import user from './assets/user.json';
const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
    </div>
  );
};
export default App;
