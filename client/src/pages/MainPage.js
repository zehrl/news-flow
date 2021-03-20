import GoogleMap from "../components/GoogleMap"
import NewsFeed from "../components/NewsFeed"
import React from 'react';

const ProfilePage = () => {

    // make state

    // make function that changes the state

    return (
        <main className="flex-shrink-0 mt-5">
            <div className="container-md mt-4">
                <div className="row">
                    
                    <div className="col-xl-6 pb-3">
                        <h1 className="text-center">Click the Map</h1>
                        <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} />
                    </div>
                    
                    <div className="col-xl-6 justify-content-center">
                        <h1 className="text-center">News Feed</h1>
                        <NewsFeed />
                    </div>
                
                </div>
            </div>
        </main>
    )
}

export default ProfilePage