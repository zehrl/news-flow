/* eslint-disable no-unused-expressions */
import axios from "axios"


const endPoint = "https://api.bing.microsoft.com/v7.0/news/search?mkt=en-US&q=";
const APIKEY = process.env.REACT_APP_BING_NEWS_API_KEY;
const query = "Microsoft"




const Bing = () => {

  const res = axios.get(endPoint + query, {
    headers: {
      'Ocp-Apim-Subscription-Key': APIKEY
    }
  });


  console.log(res);
}

export default Bing