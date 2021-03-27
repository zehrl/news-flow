import axios from 'axios';

export default {
    getFavorites: function(email) {
        return axios.get("/api/favorites", + email);
    },
    saveArticle: function(articleData) {
        return axios.post("/api/favorites", articleData)
    },
    deleteFavorite: function(id) {
        return axios.delete("/api/favorites", + id)
    }
};