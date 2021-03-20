// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react';
import SignUp from './components/SignUp'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProfilePage from './pages/ProfilePage';
import MainPage from "./pages/MainPage"

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <Header />

      <Switch>
        {/* <Route path="/ProfilePage" component={ProfilePage} /> */}
        <Route path="/" component={MainPage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
