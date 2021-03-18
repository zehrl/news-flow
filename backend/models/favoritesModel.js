const mongoose = require('mongoose')

const favoritesDB = new mongoose.SchemaType({
    email: {
        type:String,
        requried: true
    },
    headline: {
        type:String,
        required: true
    },
    articleLink: {
        type:String,
        required: true
    },
    articleThumb: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('mytable', 'favoritesDB')