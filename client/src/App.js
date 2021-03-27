// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import {Switch, Route} from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import MainPage from "./pages/MainPage";
import MainPage from "./pages/MainPage"
import SignUp from './pages/SignUp';
import { useAuthTokenStore } from "./utils/auth";
import LoginPage from './pages/LoginPage';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

function App() {
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();
  
  return (
    <div className="h-100 d-flex flex-column">
      <Header />

      <Switch>
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/" component={MainPage} />
      </Switch>

      <Footer />
    </div>

  );
}

export default App;