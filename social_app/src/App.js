import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap';
import main from './components/bingNews';
function App() {

// const [] = useState()




  return (
    <div className="App">
    <Header />
    <GoogleMap placeName="Fort Wayne"/>
    <Footer />
    </div>
  );
}

export default App;
