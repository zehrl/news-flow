// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsFeed from './components/NewsFeed';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} />
        <NewsFeed />
        <Router path="ProfilePage" component={ProfilePage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
