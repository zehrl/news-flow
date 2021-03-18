import GoogleMap from "../components/GoogleMap"
import NewsFeed from "../components/NewsFeed"
import React from 'react';

const ProfilePage = () => {
    return (
        <div>
            <GoogleMap initLat={47.59764059923029} initLng={-122.32893838093258} zoom={12} />
            <NewsFeed />
        </div>
    )
}

export default ProfilePage