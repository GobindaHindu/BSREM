//config/models/Contact.js schema

const mongoose = require('mongoose');
const moment = require('moment-timezone');

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => moment.tz('Asia/Kolkata').format(), // Store in IST format
    },
});

module.exports = mongoose.model('Contact', ContactSchema);
