import GoogleMap from "../components/GoogleMap"
import NewsFeed from "../components/NewsFeed"
import React, { useState, useEffect } from 'react';
import '../sass/mainPage.css';
import thirdPartyAPI from "../utils/thirdPartyAPI";

const MainPage = () => {
    const [location, setLocation] = useState("Seatle, Washington, United States");

    return (
        <main className="pb-4">
            <div className="container-md">
                <div className="row">

                    <div className="col-xl-6 pb-3">

                        <h1 id="map-text" className="text-center section-header mb-3">Explore</h1>
                        <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} setLocation={setLocation} />
                    </div>

                    <div className="col-xl-6 justify-content-center">
                        <h1 id="news-text" className="text-center section-header mb-3">News Feed</h1>
                        <NewsFeed location={location} />

                    </div>

                </div>
            </div>
        </main>
    )
}

export default MainPage
