import React, {useState, useEffect} from 'react';
import favoriteAPI from '../utils/favoriteAPI';
import Header from '../components/Header';
import SaveCard from '../components/SaveCard';
import SavedFeed from '../components/SavedFeed';



const ProfilePage = () => {
    

    // useEffect (() => {
    //     loadFavorites()
    // }, [])
  
    // function loadFavorites() {
    //     favoriteAPI.getFavorites()
    //     .then(res =>
    //         setFavorites(res.data))
    //         .catch(err => console.log(err));
    // };
    
    return (
        <div>
            <h1 className="text-center">Saved Posts</h1>
            <SavedFeed />
        </div>
    )
}

export default ProfilePage