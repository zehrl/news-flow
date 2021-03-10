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

        loader
            .load()
            .then(() => {
                // Load map into the #google-map div after connecting to google with api key
                return map = new window.google.maps.Map(document.getElementById("google-map"), {
                    center: { lat: initLat, lng: initLng },
                    zoom,
                });
            })
            .then(() => {

                // Add click listener to the map object after it is created
                map.addListener("click", (mapsMouseEvent) => {

                    // Pull out latitude and longitude from mapsMouseEvent
                    let { lat, lng } = mapsMouseEvent.latLng.toJSON();

                    // Development Console Logs
                    console.log(" ----- Google Maps API Call Results ----- ")
                    console.log(`You clicked these coordinates: ${lat}, ${lng}`);

                    // Add marker
                    const marker = new window.google.maps.Marker({
                        position: { lat, lng },
                        map
                    });

                    // Get location data from coordinates (Google Geocoding). Return only country & state equivalent (some countries don't have states)
                    axios
                        .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&result_type=country|administrative_area_level_1`)
                        .then((res) => {
                            let country;
                            let state;
                            const { data: { results } } = res;

                            // Try to set state from response to state variable
                            try {
                                state = results[0].address_components[0].long_name;
                            }
                            catch {
                                state = "No state found"
                            }

                            // Try to set country from response to country variable
                            try {
                                country = results[1].formatted_address;
                            }
                            catch {
                                country = "No country found"
                            }

                            // Development Console Logs
                            console.log(" ----- Geocoding API Call Results ----- ")
                            console.log("Google Geocoding Results: ", results)
                            console.log("State: ", state)
                            console.log("Country: ", country);

                            return { state, country }
                        })
                        .then(({ state, country }) => {

                            // Add info window
                            const infoWindow = new window.google.maps.InfoWindow({
                                content: `${state}, ${country}`
                            });

                            infoWindow.open(map, marker);

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