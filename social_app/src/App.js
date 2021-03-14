// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap';
import NewsCard from './components/NewsCard';
import Bing from './components/bingNews';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {

  // const [] = useState()

  const [search, setSearch] = useState("newsCard");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }
    Bing.searchTerms(search)
    .then(res => {
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setTitle(res.data.value[0].name);
      setUrl(res.data.value[0].url);
    })
    .catch(err => setError(err));
}, [search]);

const handleInputChange = event => {
  setSearch(event.target.value);
};




  return (
    <Router>
      <div className="App">
        <Header />
        <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} />
        <NewsCard />
        <Router path="ProfilePage" component={ProfilePage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
