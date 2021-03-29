import axios from 'axios';
axios.defaults.headers.common = {
    "Content-Type": "application/json"
}
export default {
    getFavorites: function (email) {

        // return axios.get("api/savedArticles", {email})

        console.log("getFavorites, email: ", email)
        return axios
            .get("/api/savedArticles/" + email)
            .then(({ data }) => {
                return data
            })
            .catch(err => {
                console.log("error: ", err.results)
                throw err;
            })
    },

    saveArticle: function (email, articleData) {
        return axios.post("/api/savedArticles", { email, articleData })
    },

    deleteFavorite: function (email, url) {
        console.log("deleteFavorite called...", "email: ", email, "url: ", url)
        return axios.delete("/api/savedArticles", {data: { email, url }},{ headers: { "Content-Type": "text/plain" } })
    }
};