// /route/auth.js

const express= require('express');
const passport = require('../config/passport');
const router= express.Router();





//Auth with google
//router get /auth/google
// router.get('/google', passport.authenticate('google', {scope: ['profile']}));

// 28-11-24
// Auth with Google without google screen for choose and continue.
// Route: GET /auth/google
router.get('/google', (req, res, next) => {
    const redirect = req.query.redirect || '/surveyForm1'; // Default to Survey1 if no redirect is provided
    const state = JSON.stringify({ redirect }); // Encode the redirect in the state
    passport.authenticate('google', { scope: ['profile'], state })(req, res, next);
});

// Auth with Google with google screen for choose and continue.
// router.get('/google', (req, res, next) => {
//     const redirect = req.query.redirect || '/surveyForm1'; // Default to Survey1 if no redirect is provided
//     req.session.redirect = redirect; // Store the redirect URL in the session
//     passport.authenticate('google', { scope: ['profile'] })(req, res, next); // Remove state from this step
// });






//google auth callbak
//route      get /auth/google/callback
// router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}),  (req, res) => {res.redirect('/surveyForm1')})
// 28-11-24

// Auth callback with Google without google screen for choose and continue.
// Google Auth Callback
// Route: GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    // Decode the redirect from the state
    const redirect = req.query.state ? JSON.parse(req.query.state).redirect : '/surveyForm1';
    res.redirect(redirect); // Redirect to the intended page or default to Survey1
});

// Auth callback with Google with google screen for choose and continue.
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//     const redirect = req.session.redirect || '/surveyForm1'; // Retrieve the redirect URL from the session
//     delete req.session.redirect; // Clean up the session to avoid stale data
//     res.redirect(redirect); // Redirect to the intended page or default to Survey1
// });



// logout user
//route     /auth/logout
// router.get('/logout', (req, res) => {
//     req.logout()
//     res.redirect('/')
// })

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});



module.exports = router