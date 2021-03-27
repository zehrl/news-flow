/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    },
    favoriteArticles:[{
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }]
})

module.exports = User = mongoose.model('users', UserSchema);