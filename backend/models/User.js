/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    savedArticles: [{
        title: {
            type: String,
            required: [true, "No article title provided"]
        },
        description: {
            type: String,
            required: [true, "No article description provided"]
        },
        url: {
            type: String,
            required: true,
            unique: [true, "No article url provided"]
        },
        publishedDate: {
            type: Date,
            required: [true, "No published date provided"]
        },
        thumbnail: {
            type: String,
            required: [true, "No article thumbnail provided"]
        },
        provider: {
            type: String,
            required: [true, "No article provider (ex. Yahoo News) provided"]
        },
    }]
})

module.exports = User = mongoose.model('users', UserSchema);