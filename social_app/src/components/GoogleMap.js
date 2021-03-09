import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({ placeName }) => {

    useEffect(() => {
        const additionalOptions = {};
        
        const loader = new Loader({
            apiKey: "AIzaSyBZO9677DX6f_P-azngepYL5lT7NHKD7YY",
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