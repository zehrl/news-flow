// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router } from 'react-router-dom';
import NewsFeed from './components/newsFeed';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} />
        <NewsFeed />
        <switch>
          <Router path="/" component={App} />
          <Router path="/ProfilePage" component={ProfilePage} />
        </switch>
        <switch />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
