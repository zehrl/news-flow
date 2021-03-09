import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap';
import NewsCard from './components/NewsCard';
function App() {

// const [] = useState()




  return (
    <div className="App">
    <Header />
    <GoogleMap placeName="Fort Wayne"/>
    <NewsCard />
    <Footer />
    </div>
  );
}

export default App;
