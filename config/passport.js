const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const mongoose = require ('mongoose');
const passport = require('passport');
const User = require('./models/User');


passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {
            const newUser = {
                googleId: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,   // Access givenName from profile.name
                lastName: profile.name.familyName || "",   // Access familyName from profile.name
                image: profile.photos[0].value
            }

            try {
                let user = await User.findOne({googleId:profile.id})

                if (user) {
                    done(null, user)
                } else {
                    user = await User.create(newUser)
                    done(null, user)
                }
            } catch (error) {
                console.error(error)
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

module.exports = passport;

