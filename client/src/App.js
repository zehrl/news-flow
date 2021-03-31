// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import MainPage from "./pages/MainPage";
import SignUp from './pages/SignUp';
import { useAuthTokenStore } from "./utils/auth";
import LoginPage from './pages/LoginPage';
import GuestRoute from './components/GuestRoute';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  console.log("App.js called...")

  // Use the hook to reauthenticate stored tokens.
  // console.log("useAuthTokenStore()")
  const isAuth = useAuthTokenStore();

  useEffect(() => {
    console.log("App.js useEffect() called...")
  }, [])


  return (
    <div className="h-100 d-flex flex-column pt-5">
      <Header />
      <Switch>

        <Route exact path="/" component={MainPage} />
        <GuestRoute exact path="/signup" redirectTo="/" component={SignUp} />
        <GuestRoute exact path="/login" redirectTo="/" component={LoginPage} />
        {/* <PrivateRoute exact path="/profile" redirectTo="/login" component={ProfilePage} /> */}
        <Route exact path="/profile" component={ProfilePage}></Route>
      </Switch>
      <Footer />
    </div>

  );
}

export default App;