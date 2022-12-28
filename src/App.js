import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => {
    return state.authenticationReducer.isAuthenticated;
  });

  return (
    <>
      <Header></Header>
      {isAuthenticated && <UserProfile></UserProfile>}
      {!isAuthenticated && <Auth></Auth>}
      <Counter />
    </>
  );
}

export default App;
