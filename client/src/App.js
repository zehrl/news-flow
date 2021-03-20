// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react';
import SignInModal from './components/SignInModal'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ProfilePage from './pages/ProfilePage';
import MainPage from "./pages/MainPage"
import LoginForm from './components/LoginForm.js';
// import CreateNewAccount from './components/CreateNewAccount.js';

import {
  Navbar,
  NavDropdown,
  MenuItem,
  NavItem,
  Nav,
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
} from 'react-bootstrap';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


class LoginBox extends LoginForm{
  constructor(){
    super();
    this.state = {
      showModal : false,
      form : ''
    }
  }

  close = () => {
    this.setState ({ showModal: false });
  }



  open = () => {
    this.setState ({ showModal : true});
  }


  render(){
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div style={styles}>
        <Button type="button" className="btn btn-default" onClick={this.open}>
          Login
        </Button>
        <LoginForm showModal={this.state.showModal} onClose = {this.close} />
       <LoginBox />;
     </div>
    );
  }
}



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
