// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap';
import main from './components/bingNews';
import NewsCard from './components/NewsCard';
function App() {

// const [] = useState()




  return (
      <div className="App">
        <Header />
        <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12}/>
        <NewsCard />
      </div>  
      
      <div>
        <Footer />
      </div>
  );
}

export default App;
