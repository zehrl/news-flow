const mongoose = require('mongoose')

const FavoritesSchema = new mongoose.SchemaType({
    email: {
        type:String,
        requried: true
    },
    title: {
        type:String,
        required: true
    },
    url: {
        type:String,
        required: true
    },
    thumbnail: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publishedDate: {
        type:Date,
        required: true
    }
})

module.exports = mongoose.model('mytable', FavoritesSchema);