// survey user schema

const mongoose = require('mongoose');
const moment = require('moment-timezone');

const SUserSchema = new mongoose.Schema({
    googleUserId: {
        type: String,
        required: true
    },
    f_Name: {
        type: String,
        required: true
    },
    l_Name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dOB: {
        type: String,
        required: true
    },
    ageGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    moreAbout: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        required: false, // Optional
     }, // New image field for storing binary data
     form1Completed: { type: Boolean, default: false },
     form2Completed: { type: Boolean, default: false },
     form3Completed: { type: Boolean, default: false },

     createdAt: {
        type: Date,
        default: () => moment.tz('Asia/Kolkata').format(), // This will store the current time in IST
    },
})

module.exports = mongoose.model('SUser', SUserSchema);