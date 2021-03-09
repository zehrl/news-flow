import React, { useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";

const GoogleMap = ({ initLat, initLng, zoom }) => {
    // let { google } = window;

    useEffect(() => {
        const additionalOptions = {};
        let map;

        const loader = new Loader({
            apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            version: "weekly",
            ...additionalOptions,
        });

        loader.load().then(() => {
            // Load map into the #google-map div after connecting to google with api key
            return map = new window.google.maps.Map(document.getElementById("google-map"), {
                center: { lat: initLat, lng: initLng },
                zoom,
            });

        }).then(() => {

            // Add click listener to the map object after it is created
            map.addListener("click", (mapsMouseEvent) => {

                // Pull out latitude and longitude from mapsMouseEvent
                let { lat, lng } = mapsMouseEvent.latLng.toJSON();

                console.log(`Lat: ${lat} Lng: ${lng}`);

                // Get location data from coordinates (Google Geocoding)
                axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&result_type=locality`)
                    .then((res) => {
                        let location;
                        const { data } = res;
                        try {
                            location = data.results[0].formatted_addresselse;
                        }
                        catch {
                            location = "No location found."
                        }

                        console.log("Google Geocoding Response: ", res)
                        console.log("Google Geocoding Location: ", location);

                        // let city = data.results[7].address_components[0].long_name;
                        // let state = data.results[7].address_components[2].long_name;
                        // console.log("City: ", city);
                        // console.log("State: ", state);

                    })
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