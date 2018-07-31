const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("./keys");
const User = require("../models/User");

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            callbackURL: "/auth/google/redirect",
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret
        },
        function(accessToken, refreshToken, profile, done) {
            User.findOne({ providerID: profile.id }).then(function(
                availableUser
            ) {
                if (availableUser) {
                    User.findOneAndUpdate(
                        { providerID: profile.id },
                        { $set: { profilePic: profile.photos[0].value } },
                        { new: true },
                        function(err, user) {
                            if (err) {
                                console.log(err);
                            }
                        }
                    );
                    done(null, availableUser);
                } else {
                    new User({
                        providerID: profile.id,
                        provider: profile.provider,
                        username: profile.displayName,
                        email: profile.emails[0].value,
                        profilePic: profile.photos[0].value
                    })
                        .save()
                        .then(function(newUser) {
                            done(null, newUser);
                        });
                }
            });
        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            callbackURL: "/auth/facebook/redirect",
            clientID: keys.facebook.clientID,
            clientSecret: keys.facebook.clientSecret,
            profileFields: ["id", "email", "photos", "displayName"],
            enableProof: true
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            User.findOne({ providerID: profile.id }).then(function(
                availableUser
            ) {
                if (availableUser) {
                    User.findOneAndUpdate(
                        { providerID: profile.id },
                        { $set: { profilePic: profile.photos[0].value } },
                        { new: true },
                        function(err, user) {
                            if (err) {
                                console.log(err);
                            }
                        }
                    );
                    done(null, availableUser);
                } else {
                    new User({
                        providerID: profile.id,
                        provider: profile.provider,
                        username: profile.displayName,
                        email: profile.emails[0].value,
                        profilePic: profile.photos[0].value
                    })
                        .save()
                        .then(function(newUser) {
                            done(null, newUser);
                        });
                }
            });
        }
    )
);
