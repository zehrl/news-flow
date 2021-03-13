import axios from "axios";

const API = {
    getLocation: (lat, lng) => {
        return axios
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
                console.log("State: ", state)
                console.log("Country: ", country);

                return { state, country }
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