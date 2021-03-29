import axios from 'axios';

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
        return axios.delete("/api/savedArticles", { email, url })
    }
};