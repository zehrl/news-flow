import Nav from "../components/Nav"
import React, {useState, useEffect} from 'react';
import favoriteAPI from '../utils/favoriteAPI';

const ProfilePage = () => {
    

    useEffect (() => {
        loadFavorites()
    }, [])
  
    function loadFavorites() {
        favoriteAPI.getFavorites()
        .then(res =>
            setFavorites(res.data))
            .catch(err => console.log(err));
    };

  
    
    return (
        <Nav />
    )
}

export default ProfilePage