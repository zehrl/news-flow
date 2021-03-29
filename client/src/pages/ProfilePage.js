import React from 'react';
import SavedFeed from '../components/SavedFeed';



const ProfilePage = () => {
    
    return (
        <div className="container-md">
            <h1 className="text-center">Saved Posts</h1>
            <SavedFeed />
        </div>
    )
}

export default ProfilePage