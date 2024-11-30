//route/ContactUser.js

const express = require('express');
const router = express.Router();
const Contact = require('../config/models/Contact'); // Import the Contact model

// Handle contact form submission
router.post('/contact', async (req, res) => {
    try {       
        const { firstName, lastName, email, mobileNumber, city, message } = req.body;

        const newContact = new Contact({
            firstName,
            lastName,
            email,
            mobileNumber,
            city,
            message,
        });

        await newContact.save();
        console.log('Data saved successfully');

        // Respond with JSON
        res.status(200).json({ message: 'Your message has been sent. Thank you!' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ message: 'An error occurred while saving data.' });
    }
});



module.exports = router;
