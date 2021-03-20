import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import API from '../utils/API';

const GoogleMap = ({ initLat, initLng, zoom, setLocation }) => {

    let markers = [];

    const addMap = (divId, center, zoom) => {

        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: initLat, lng: initLng },
            zoom,
        });

        return map;
    }

    const addMarker = (map, lat, lng) => {

        const marker = new window.google.maps.Marker({
            position: { lat, lng },
            map
        });

        markers.push(marker);

        return marker;
    }

    const addInfoWindow = (location, map, marker) => {
        const infoWindow = new window.google.maps.InfoWindow({
            content: `${location}`
        });

        infoWindow.open(map, marker);
    }

    const handleAddMap = () => {

        const map = addMap("map", { initLat, initLng }, zoom);

        // Add map click listener
        map.addListener("click", (mapsMouseEvent) => handleMapClick(mapsMouseEvent, map))
    }

    const handleMapClick = (mapsMouseEvent, map) => {
        let { lat, lng } = mapsMouseEvent.latLng.toJSON();

        // Development Console Logs
        console.log(" ----- Google Maps API Call Results ----- ")
        console.log(`You clicked these coordinates: ${lat}, ${lng}`);

        // Add marker to the map clicked
        const marker = addMarker(map, lat, lng);

        // Remove previous marker from map if it exists
        if (markers.length > 1) {
            markers[0].setMap(null);
            markers.shift();
        }

        // Get location of point clicked based on latitude and longitude
        API
            .getLocation(lat, lng)
            .then((location) => {
                // Add info window to the marker
                addInfoWindow(location, map, marker);
                setLocation(location);
                return location;

            })
            // .then((location) => {
                
            //     // FOR DEVELOPMENT PURPOSES. THIS WILL BE MOVED
            //     API
            //         .getNews(location)
            //         .then((res) => {
            //             console.log("Bing Results! -> ", res)
            //         })
            //         .catch((error)=>{
            //             console.log("Oh snap! Something bad happened: ", error);
            //         })

            // })


    }

    useEffect(() => {
        const additionalOptions = {};

        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            version: "weekly",
            ...additionalOptions,
        });

        loader
            .load()
            .then(() => handleAddMap())
    }, []);

    // Look into id difference from map to map
    return (
        <div id="map"/>
    );
};

export default GoogleMap;