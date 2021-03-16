// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap';
import NewsCard from './components/NewsCard';
import Bing from './components/bingNews';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  // const [] = useState()




  return (
    <Router>
      <div className="App">
        <Header />
        <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} />
        <NewsCard />
        <switch>
        <Router path="/" component={App} />
        </switch>
        <switch />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
