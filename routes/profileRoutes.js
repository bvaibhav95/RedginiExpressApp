var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const passport = require("passport");

const User = require("../models/User");
var database = require("../controller/database");
var Order = require("../models/Order");

var authCheck = function(req, res, next) {
    if (!req.user) {
        req.session.oldUrl = req.url;
        res.redirect("/auth/login");
    } else {
        next();
    }
};

// router.get("/my-orders", authCheck, function(req, res, next) {
//     // orderHistory = database.getOrdersFromUserId(req.user.providerID);
//     Order.find({ userId: req.user.providerID }, function(error, orderHistory) {
//         res.render("user/userProfile", {
//             user: req.user,
//             title: "Redgini | My orders",
//             cart: req.session.cart,
//             orderHistory: orderHistory
//         });
//     });
// });

// router.get("/my-referral-code", authCheck, function(req, res, next) {
//     res.render("user/referralCode", {
//         user: req.user,
//         title: "Redgini | My referral code",
//         cart: req.session.cart
//     });
// });

// router.get("/generate-ref-code/:phone", function(req, res, next) {
//     User.findOneAndUpdate(
//         { providerID: req.user.providerID },
//         {
//             $set: {
//                 myRefCode: req.user.email.substr(
//                     0,
//                     req.user.email.indexOf("@")
//                 ),
//                 phone: req.params.phone
//             }
//         },
//         { new: true },
//         function(err, updatedUser) {
//             if (err) {
//                 console.log("Something wrong when updating data!");
//             } else {
//                 res.send(updatedUser.myRefCode);
//             }
//         }
//     );
// });
module.exports = router;
