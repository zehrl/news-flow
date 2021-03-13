import axios from "axios";

const API = {
    getLocation: (lat, lng) => {

        // Google API results_type Reference
        // locality => "City, State, Country" ex. "Seattle, WA, USA"
        // administrative_area_level_1 = "Washington, USA"
        // country = "United States"

        const result_type = "";

        return axios
            // https://developers.google.com/maps/documentation/geocoding/overview#ReverseGeocoding           
            .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&result_type=${result_type}`)
            .then((res) => {
                let location;
                let city, state, country;

                const { data: { results } } = res;

                console.log("res: ", res)
                console.log("results: ", results)

                // Check if status is "OK"
                if (res.data.status === "OK") {
                    console.log("Status 'OK' from Google API")

                    // For each address_components, set city, state, and country based on each ".types" property
                    results[0].address_components.forEach(component => {
                        const type = component.types[0];

                        switch (true) {
                            case (type === "locality"):
                                city = component.long_name;
                                break;

                            case (type === "administrative_area_level_1"):
                                state = component.long_name;
                                break;

                            case (type === "country"):
                                country = component.long_name;
                                break;

                            default:
                                break;
                        }

                    });

                    // Format location to "city, state, country"
                    location = [city, state, country]
                        .filter(type => type !== undefined)
                        .join(", ");

                } else if (res.data.status === "ZERO_RESULTS") {

                    console.log("Status 'NO_RESULTS from Google API'")
                    location = "No results."
                    
                }

                // Development Console Logs
                console.log(" ----- Geocoding API Call Results ----- ")
                console.log("Location: ", location);

                return location;
            })
    },

    getNews: (query) => {
        const endPoint = "https://api.bing.microsoft.com/v7.0/news/search?mkt=en-US&q=";
        const APIKEY = process.env.REACT_APP_BING_NEWS_API_KEY;

        return axios
            .get(endPoint + query, {
                headers: {
                    'Ocp-Apim-Subscription-Key': APIKEY
                }
            });

    }
}

export default API;