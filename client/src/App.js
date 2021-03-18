// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'

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
    <div>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/ProfilePage" component={ProfilePage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>

  );
}

export default App;
