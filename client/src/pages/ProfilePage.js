import React from 'react';
import SavedFeed from '../components/SavedFeed';



const ProfilePage = () => {
    
    return (
        <div className="container-md pb-4">
            <h1 className="text-center section-header mb-3">Saved Posts</h1>
            <SavedFeed />
        </div>
    )
}

export default ProfilePage