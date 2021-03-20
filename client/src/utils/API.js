import axios from "axios";
// import bingDevData from "./bingDevData.json";

const API = {
    getLocation: (lat, lng) => {

        // Google API results_type Reference
        // locality => "City, State, Country" ex. "Seattle, WA, USA"
        // administrative_area_level_1 = "Washington, USA"
        // country = "United States"

        const result_type = "";

        const sortBy = "relevance"; // relevance | date

        // Add bold html tag to the searched term (IN DEVELOPMENT)
        // textDecorations = true;
        // textFormat = html;

        return axios
            // https://developers.google.com/maps/documentation/geocoding/overview#ReverseGeocoding           
            .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&result_type=${result_type}&sortBy=${sortBy}`)
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
        // --- PRODUCTION CODE ---
        const endPoint = "https://api.bing.microsoft.com/v7.0/news/search?mkt=en-US&q=";
        const APIKEY = process.env.REACT_APP_BING_NEWS_API_KEY;

        return axios
            .get(endPoint + query, {
                headers: {
                    'Ocp-Apim-Subscription-Key': APIKEY
                }
            })
            .then(({data: {value}}) => {
                const formattedData = value.map(article => {
                    console.log("Current Article: ", article);

                    // Try block to set thumbnail URL.
                    let thumbnail;

                    try {
                        thumbnail = article.image.thumbnail.contentUrl;;
                    }
                    catch {
                        console.log("Couldn't assign content url");
                        try {
                            thumbnail = article.provider[0].image.thumbnail.contentUrl;;
                        }
                        catch {
                            console.log("Couldn't assign provider url");
                            console.log("setting url to default: https://www.pinclipart.com/picdir/big/534-5342402_brown-gorilla-stuffed-toy-svg-clip-arts-gorilla.png")
                            thumbnail = "https://www.pinclipart.com/picdir/big/534-5342402_brown-gorilla-stuffed-toy-svg-clip-arts-gorilla.png";
                        }
                    }

                    return ({
                        url: article.url,
                        title: article.name,
                        description: article.description,
                        publishedDate: article.datePublished,
                        // thumbnail: (article.image.thumbnail.contentUrl === undefined) ? article.provider[0].image.thumbnail.contentUrl : article.image.thumbnail.contentUrl,
                        thumbnail,
                        category: article.category,
                        provider: article.provider[0].name
                    })

                });

                return formattedData;
            });

                // --- FOR DEVELOPMENT ---
                // return new Promise((resolve, reject) => {

                //     const { value } = bingDevData;

                //     const formattedData = value.map(article => {
                //         console.log("Current Article: ", article);

                //         // Try block to set thumbnail URL.
                //         let thumbnail;

                //         try {
                //             thumbnail = article.image.thumbnail.contentUrl;;
                //         }
                //         catch {
                //             console.log("Couldn't assign content url");
                //             try {
                //                 thumbnail = article.provider[0].image.thumbnail.contentUrl;;
                //             }
                //             catch {
                //                 console.log("Couldn't assign provider url");
                //                 console.log("setting url to default: https://www.bing.com/th?id=OVFT.mEwFvhsff7PuAoBGjh5QXy&pid=News")
                //                 thumbnail = "https://www.bing.com/th?id=OVFT.mEwFvhsff7PuAoBGjh5QXy&pid=News";
                //             }
                //         }
                //         return ({
                //             url: article.url,
                //             title: article.name,
                //             description: article.description,
                //             publishedDate: article.datePublished,
                //             // thumbnail: (article.image.thumbnail.contentUrl === undefined) ? article.provider[0].image.thumbnail.contentUrl : article.image.thumbnail.contentUrl,
                //             thumbnail,
                //             category: article.category,
                //             provider: article.provider[0].name
                //         })
                //     })

                //     resolve(formattedData);
                // });

            }
}




export default API;