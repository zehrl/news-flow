import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({ initLat, initLng, zoom}) => {
    let { google } = window;
    
    useEffect(() => {
        const additionalOptions = {};
        let map;

        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            version: "weekly",
            ...additionalOptions,
        });

        loader.load().then((obj) => {
            console.log(obj);
            
            // Load map into the #google-map div after connecting to google with api key
            map = new google.maps.Map(document.getElementById("google-map"), {
                center: { lat: initLat, lng: initLng },
                zoom,
            });
            
        }).then(()=>{

            // Add click listener to the map object after it is created
            map.addListener("click", (mapsMouseEvent) => {

                // Pull out latitude and longitude from mapsMouseEvent
                let {lat, lng} = mapsMouseEvent.latLng.toJSON();

                console.log(`Lat: ${lat} Lng: ${lng}`);
            });

        });

})

return (
    <div
        id="google-map"
        style={{ width: "100%", height: "300px", top: "88px" }}
    />
);
};

export default GoogleMap;