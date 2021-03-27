import React, {useState, useEffect} from 'react';
import favoriteAPI from '../utils/favoriteAPI';
import Header from '../components/Header';
import SaveCard from '../components/SaveCard';



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
            <Header />
            <SaveCard />
        </div>
    )
}

export default ProfilePage