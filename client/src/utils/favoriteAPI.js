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

    deleteFavorite: function (id) {
        return axios.delete("/api/savedArticles", + id)
    }
};