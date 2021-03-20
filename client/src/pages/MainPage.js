import GoogleMap from "../components/GoogleMap"
import NewsFeed from "../components/NewsFeed"
import React, { useState, useEffect } from 'react';
import API from "../utils/API";

const ProfilePage = () => {
    // Making State
   const [location, setLocation] = useState("Seatle, WA");

   useEffect(() => {
       loadNews()
   });
   
   function loadNews() {
       API.getLocation()
       .then(res =>
        setLocation(res.data))
        .catch(err => console.log(err))
   };
 
    return (
        <div>
            <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} />
            <NewsFeed />
        </div>
    )
}

export default ProfilePage