var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const SendOtp = require("sendotp");
var keys = require("../config/keys");
const sendOtp = new SendOtp(keys.msg91.authKey);
const passport = require("passport");
const User = require("../models/User");

var authCheck = function(req, res, next) {
    if (!req.user) {
        req.session.oldUrl = req.url;
        res.redirect("/auth/login");
    } else {
        next();
    }
};

router.get("/login", function(req, res, next) {
    res.render("login/socialLogin", {
        title: "Redgini | Social login",
        show: "show",
        cart: req.session.cart
    });
});

router.get("/logout", function(req, res, next) {
    req.logout();
    req.session = null;
    res.redirect("/");
});

router.get(
    "/google",
    passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ]
    })
);

router.get("/google/redirect", passport.authenticate("google"), function(
    req,
    res,
    next
) {
    if (req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect("/products/cakes");
    }
});

router.get(
    "/facebook",
    passport.authenticate("facebook", {
        authType: "rerequest",
        // https, reauthenticate, rerequest, reauthorize
        scope: ["email", "user_friends"]
    })
);

router.get(
    "/facebook/redirect",
    passport.authenticate("facebook", { failureRedirect: "/auth/login" }),
    function(req, res) {
        if (req.session.oldUrl) {
            var oldUrl = req.session.oldUrl;
            req.session.oldUrl = null;
            res.redirect(oldUrl);
        } else {
            res.redirect("/products/cakes");
        }
    }
);

module.exports = router;
/*router.get('/mobile', function(req, res, next) {
    res.render('login/mobileLogin', {title: 'Redgini | Verify mobile', show : 'show'});
});

router.post('/sendotp/:mobileNum', function(req, res, next) {
    var phone = req.params.mobileNum;
    var randNum = Math.floor(100000 + Math.random() * 900000);
    sendOtp.send('91'+phone, "REDGNI", randNum, function (error, data, response) {
        router.get('/verifyotp/:otp', function(req, res, next) {
            sendOtp.verify('91'+phone, req.params.otp, function (error, data, response) {
                req.session.mobileCredentials = {phone : phone};
                if(data.type == 'success'){
                    User.findOne({phone: phone}, function(err,user){ 
                        if(user){
                            //req.user = user;
                            //here the problem is occusring passport attaches the user object 
                            //to req so that we can directly use that using handlesbars...
                            //which can't be established using handlebars
                            res.send(JSON.stringify({status : 'available', user: user}));
                        }else{
                            res.send(JSON.stringify({status : 'success'}));
                        }
                    });
                } 
                if(data.type == 'error'){
                    res.send(JSON.stringify({status: 'error'}));
                }
            });
        });
    });
});

router.post('/resendotp/:mobileNum', function(req, res, next) {
    var phone = req.params.mobileNum;
    sendOtp.retry('91'+phone, false, function (error, data, response) {
        console.log(data);
    });
});*/
