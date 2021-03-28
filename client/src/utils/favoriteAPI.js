import axios from 'axios';

export default {
    getFavorites: function (email) {
        return axios.get("/api/savedArticles",
            {
                params: {
                    email
                }
            })
    },

    saveArticle: function (email, articleData) {
        return axios.post("/api/savedArticles", { email, articleData })
    },

    deleteFavorite: function (email, url) {
        return axios.delete("/api/savedArticles", { email, url })
    }
};