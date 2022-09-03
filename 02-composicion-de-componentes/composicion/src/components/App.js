// import Title from "./Title";
import UserCard from './UserCard'
import users from '../data/users'


const App = () => {
  return (
    <div className="container">
      {users.map((user)=><UserCard user={user} />)}
    </div>
  );
};

export default App;
