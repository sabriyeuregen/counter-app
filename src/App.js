import Counter from "./components/Counter/Counter";
import './App.css';
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import UserProfile from "./components/UserProfile/UserProfile";

const App = () => {
 
 const isAuth = useSelector(state => state.auth.isAuthenticated)



  return (
    <div className="App">
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter/>
    </div>
  );
}

export default App;
