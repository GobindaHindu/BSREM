//route/index.js

const express= require('express');
const router= express.Router();
const { ensureGuest, redirectNonUser} = require ('../middleware/auth')






//landing page
//router get /
router.get('/',  (req, res) => {
    res.render('home')
})

//survey form login
//router get /survey
router.get('/survey', ensureGuest, (req, res) => {
    res.render('survey', { layout: "survey",  })
})




//Donate page
//router get /donate
router.get('/donate', redirectNonUser, (req, res) => {
    res.render('donate', { layout: "donate" })
})

//join us page
//router get /join
router.get('/join', redirectNonUser, (req, res) => {
    const name = req.user ? req.user.displayName : "Guest"; // Fallback to "Guest" if not logged in
    res.render('join', { layout: "join", name})
})



//Foram page
//router get /foram
router.get('/forum', redirectNonUser, (req, res) => {
    res.render('foram', { layout: "foram" });
});


//not in use
// router.get('/signIn', (req, res) => {
//     res.render('signIn', { layout: "signIn" });
// });



//Policy page
//router get /polecy
router.get('/polecy', (req, res) => {
    res.render('polecy', { layout: "polecy" })
})

//admin page
router.get('/admin', (req, res) => {
     res.render('admin', { layout: 'admin' }); // Render a new view called section2.hbs or the template for your next form.
});




const SUser = require('../config/models/SurveyUser');

router.get('/surveyForm1', async (req, res) => {
    try {
        const user = await SUser.findOne({ googleUserId: req.user.googleId });

        res.render('surveyForm1', {
            layout: 'surveyForm1',
            name: req.user.firstName, // Pass the firstName from req.user
            g_id: req.user.googleId, // Pass the googleId from req.user
            form1Completed: user ? user.form1Completed : false  // Pass form1Completed to the view
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

router.get('/surveyForm2', async (req, res) => {
    try {
        // Retrieve user data based on Google user ID
        const userD = await SUser.findOne({ googleUserId: req.user.googleId });
        const userData = userD.toObject();
        
               // Render form2 template with user data
        res.render('surveyForm2', {
            layout: 'surveyForm2',   // Ensure correct layout for form2
            userData          // Pass user data to the template
        });
    } catch (error) {
        console.error('Error fetching user data for form2:', error);
        res.status(500).send('Server Error');
    }
});


















module.exports = router