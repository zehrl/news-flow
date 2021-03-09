import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({ placeName }) => {

    useEffect(() => {
        const additionalOptions = {};
        
        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            version: "weekly",
            ...additionalOptions,
          });
          loader.load().then(() => {
            let map = new window.google.maps.Map(document.getElementById("google-map"), {
              center: { lat: -34.397, lng: 150.644 },
              zoom: 8,
            });
          });
    })

    return (
        <div
            id="google-map"
            style={{ width: "100%", height: "300px" , top: "88px"}}
        />
    );
};

export default GoogleMap