// /middleware/auth.js

module.exports = {
    ensureAuth : function (req, res, next) {
        if(req.isAuthenticated()){
            return next()
        } else {
            res.redirect('/')
        }
    }, ensureGuest: function (req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('/surveyForm1')
        }else {
            return next()
        }
    },
    redirectIfUser: function (req, res, next) {        
        if(req.isAuthenticated() && req.user.firstName && req.user.googleId ) {
            res.redirect('/forum')            
        }else {
            return next()
        }
    },
    // redirectNonUser: function (req, res, next) {        
    //     if(!req.isAuthenticated()) {
    //         res.redirect('/signIn')            
    //     }else {
    //         return next()
    //     }
    // }
    // 28/11/24

    redirectNonUser: function (req, res, next) {
        if (!req.isAuthenticated()) {
            const redirectUrl = encodeURIComponent(req.originalUrl); // Store the current URL
            res.redirect(`/auth/google?redirect=${redirectUrl}`); // Redirect to Google sign-in with intended page
        } else {
            return next();
        }
    }
    
}

