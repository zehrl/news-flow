import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap';
function App() {

// const [] = useState()




  return (
    <div className="App">
    <Header />
    <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12}/>
    <Footer />
    </div>
  );
}

export default App;
