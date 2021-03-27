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
    }
})

module.exports = User = mongoose.model('users', UserSchema);
// module.exports = mongoose.models.User || mongoose.model('users', UserSchema);
