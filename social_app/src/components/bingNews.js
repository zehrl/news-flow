/* eslint-disable no-unused-expressions */
import axios from "axios"
import React, { useState, useEffect } from 'react';


const endPoint = "https://api.bing.microsoft.com/v7.0/news/search?mkt=en-US&q=";
const APIKEY = process.env.REACT_APP_BING_NEWS_API_KEY;
const query = "Redmond, WA"




const Bing = () => {

  const res = axios.get(endPoint + query, {
    headers: {
      'Ocp-Apim-Subscription-Key': APIKEY
    }
  });

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


  console.log(res);
}

export default Bing