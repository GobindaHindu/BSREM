// ./router/dashboard.js
const express = require('express');
const router = express.Router();




function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

// Apply middleware to dashboard route
router.get('/', ensureAuthenticated, async (req, res) => {   // Change '/dashboard' to '/'
    // console.log(req.user);
    //    res.render('surveyForm1',  {layout: 'surveyForm1', name: req.user.displayName, g_id: req.user.googleId } );
    const data = {
        layout: 'surveyForm1',
        name: req.user.firstName,
        g_id: req.user.googleId,
      };
      console.log(data); // Log data being passed to the view
  res.render('surveyForm1', data);

});






module.exports = router;

