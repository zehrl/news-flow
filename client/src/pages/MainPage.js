import GoogleMap from "../components/GoogleMap"
import NewsFeed from "../components/NewsFeed"
import React, { useState, useEffect } from 'react';
import '../sass/mainPage.css';
import thirdPartyAPI from "../utils/thirdPartyAPI";

const MainPage = () => {
    // Making State
    const [location, setLocation] = useState("Seatle, WA");

    useEffect(() => {
        loadNews()
    });

    function loadNews() {
        thirdPartyAPI
            .getLocation()
            .then(res => setLocation(res.data))
            .catch(err => console.log(err))
    };

    return (
        <main className="mt-5">
            <div className="container-md mt-4">
                <div className="row">

                    <div className="col-xl-6 pb-3">

                        <h1 id="map-text" className="text-center">Click the Map</h1>
                        <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} setLocation={setLocation}/>
                    </div>

                    <div className="col-xl-6 justify-content-center">
                        <h1 id="news-text" className="text-center">News Feed</h1>
                        <NewsFeed location={location}/>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default MainPage
