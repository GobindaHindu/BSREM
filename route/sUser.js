// route/sUser.js

const express= require('express');
const router= express.Router();
const SUser = require('../config/models/SurveyUser'); // Import the User model
const multer = require('multer');



// Multer memory storage configuration
const storage = multer.memoryStorage(); // Store files in memory (as a buffer)
const upload = multer({ storage: storage }).single('userImage'); // 'userImage' is the input name attribute



//12/11/24_14.07pm
router.post('/submit-form1', upload, async (req, res) => {
  try {
      const formData = {
          f_Name: req.body.f_Name,
          l_Name: req.body.l_Name,
          mobile: req.body.mobile,
          email: req.body.email,
          dOB: req.body.dOB,
          ageGroup: req.body.ageGroup,
          gender: req.body.gender,
          occupation: req.body.occupation,
          moreAbout: req.body.moreAbout,
          address: req.body.address,
          googleUserId: req.user.googleId,
          image: req.file ? req.file.buffer : null,
          form1Completed: true  // Mark form1 as completed
      };

      // Use findOneAndUpdate to update if user already exists, else create new entry
      const user = await SUser.findOneAndUpdate(
          { googleUserId: req.user.googleId },
          formData,
          { upsert: true, new: true }  // Create if not exist and return updated document
      );

      console.log('User and image saved');
      res.redirect('/surveyForm2'); // Redirect to form2 after form1 is completed
  } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
  }
});

  module.exports = router