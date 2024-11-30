const mongoose = require('mongoose');
const moment = require('moment-timezone');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: () => moment.tz('Asia/Kolkata').format(), // This will store the current time in IST
    },
    
})

module.exports = mongoose.model('User', UserSchema);