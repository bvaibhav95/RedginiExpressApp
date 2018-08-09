var crypto = require("crypto");
var express = require("express");
var nodemailer = require("nodemailer");
var mongoose = require("mongoose");
var csrf = require("csurf");

var keys = require("../config/keys");
var Cart = require("../models/Cart");
var Order = require("../models/Order");
var BakeryPdt = require("../models/BakeryPdt");
var router = express.Router();

var Cake = require("../models/Cake");
var Order = require("../models/Order");
var User = require("../models/User");

var mailer = require("../controller/mailer");
var database = require("../controller/database");

const authCheck = function(req, res, next) {
    if (!req.user) {
        req.session.oldUrl = req.url;
        res.redirect("/auth/login");
    } else {
        next();
    }
};
const isCartEmpty = function(req, res, next) {
    if (!req.session.cart) {
        res.redirect("/cart");
    } else {
        next();
    }
};
const isCheckedOut = function(req, res, next) {
    if (!req.session.checkedOut) {
        res.redirect("/cart");
    } else {
        next();
    }
};
const areOrderDetailsNull = function(req, res, next) {
    if (!req.session.orderDetails) {
        res.redirect("/products/cakes");
    } else {
        next();
    }
};
const isOwnRefCode = function(req, res, next) {
    if (
        req.body.refCode ==
        req.user.email.substr(0, req.user.email.indexOf("@"))
    ) {
        res.render("user/checkout", {
            user: req.user,
            cart: req.session.cart,
            csrfToken: req.csrfToken(),
            title: "Redgini | Checkout",
            ownRefCode: "flex",
            isValidRefCode: "none"
        });
    } else {
        next();
    }
};

const isValidRefCode = function(req, res, next) {
    console.log(req.body.refCode);
    if (req.body.refCode == "") {
        next();
    } else {
        User.findOne({ myRefCode: req.body.refCode }, function(err, user) {
            if (!user) {
                res.render("user/checkout", {
                    user: req.user,
                    cart: req.session.cart,
                    csrfToken: req.csrfToken(),
                    title: "Redgini | Checkout",
                    ownRefCode: "none",
                    isValidRefCode: "flex"
                });
            } else {
                next();
            }
        });
    }
};

var csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);

router.get("/", function(req, res, next) {
    res.render("index", {
        title: "Redgini | Love in every bite",
        user: req.user,
        cart: req.session.cart,
        csrfToken: req.csrfToken()
    });
});

// router.get("/policies", function(req, res, next) {
//     res.render("policies", {
//         title: "Redgini | Our Policies",
//         user: req.user,
//         cart: req.session.cart
//     });
// });

// router.post("/sent", function(req, res, next) {
//     if (mailer.contactUsMail(req) == null) {
//         res.render("index", {
//             showClass: "alert alert-success",
//             msg1: "Thank you!",
//             msg2: "We will contact you soon...",
//             title: "Redgini | Love in every bite"
//         });
//     } else {
//         res.redirect("/");
//     }
// });

// router.get("/detailsFromId/:cakeID", function(req, res, next) {
//     Cake.where({ cakeId: req.params.cakeID }).findOne(function(err, docs) {
//         if (err) return res.render("error");
//         if (docs) {
//             res.send(docs);
//         }
//     });
// });

// router.get("/pdtDetailsFromId/:pdtID", function(req, res, next) {
//     BakeryPdt.where({ pdtId: req.params.pdtID }).findOne(function(err, docs) {
//         if (err) return res.render("error");
//         if (docs) {
//             res.send(docs);
//         }
//     });
// });

// router.get("/cart", function(req, res, next) {
//     if (!req.session.cart) {
//         return res.render("user/shoppingCart", {
//             visible: "false",
//             cart: null,
//             user: req.user,
//             title: "Redgini - Shopping cart"
//         });
//     }
//     res.render("user/shoppingCart", {
//         visible: "false",
//         cart: req.session.cart,
//         user: req.user,
//         title: "Redgini - Shopping cart"
//     });
// });

// router.get("/add-to-cart/:id/:cakeWt/:cakeQty/:egg", function(req, res, next) {
//     var productId = req.params.id;
//     var productWt = req.params.cakeWt;
//     var productQty = req.params.cakeQty;
//     var egg = req.params.egg;
//     var cart = new Cart(req.session.cart ? req.session.cart : {});
//     Cake.where({ cakeId: productId }).findOne(function(err, cake) {
//         if (err) {
//             return res.render("error");
//         }
//         cart.add(cake, productId, productWt, productQty, egg);
//         req.session.cart = cart;
//         console.log(req.session.cart);
//         res.redirect("/cart");
//     });
// });

// router.get("/add-to-cart-bake/:id/:pdtWt", function(req, res, next) {
//     var productId = req.params.id;
//     var productWt = req.params.pdtWt;
//     var cart = new Cart(req.session.cart ? req.session.cart : {});
//     BakeryPdt.where({ pdtId: productId }).findOne(function(err, pdt) {
//         if (err) {
//             return res.render("error");
//         }
//         cart.addBake(pdt, productId, productWt);
//         req.session.cart = cart;
//         console.log(req.session.cart);
//         res.redirect("/cart");
//     });
// });

// router.get("/remove/:id", function(req, res, next) {
//     var productId = req.params.id;
//     var cart = new Cart(req.session.cart ? req.session.cart : {});

//     cart.removeItem(productId);
//     req.session.cart = cart;
//     res.redirect("/cart");
// });

// router.get("/checkout", authCheck, isCartEmpty, function(req, res, next) {
//     //put validator for field here using express-validator
//     var txnid = req.user.providerID;
//     res.render("user/checkout", {
//         user: req.user,
//         cart: req.session.cart,
//         csrfToken: req.csrfToken(),
//         title: "Redgini | Checkout",
//         ownRefCode: "none",
//         isValidRefCode: "none"
//     });
// });

// router.post("/final", isOwnRefCode, isValidRefCode, function(req, res, next) {
//     mailer.orderConfirmationMail(req);
//     var orderDetailsReceived = {
//         userId: req.user.providerID,
//         cart: req.session.cart,
//         msgOnCake: req.body.msgOnCake,
//         refCode: req.body.refCode,
//         userName: req.user.username,
//         userEmail: req.user.email,
//         userPhone: req.body.phone,
//         userAddressLine1: req.body.userAddressLine1,
//         userAddressLine2: req.body.userAddressLine2,
//         userAddressLine3: req.body.userAddressLine3,
//         userCity: "Nashik",
//         userState: "Maharashtra",
//         delDate: req.body.delDate,
//         delTime: req.body.delTime,
//         payMode: req.body.payMode,
//         txnId: req.user.providerID
//     };
//     req.session.orderDetails = orderDetailsReceived;
//     req.session.checkedOut = req.body.checkedOut;
//     // req.session.cart.totalPrice -- replace this with '1' in parseFloat(1) below line
//     /*
//         var data = keys.payuTest.key+'|'+req.user.providerID+'|'+parseFloat(1).toFixed(2)+'|RedginiCakeAndPastryNashik|'+req.body.firstname+'|'+req.body.email+'|||||||||||'+keys.payuTest.salt;
//         var generatedHash = crypto.createHash('sha512').update(data).digest("hex");
//         var jsonParams = {
//         testKey : keys.payuTest.key,
//         genHash : generatedHash,
//         txnId : req.user.providerID,
//         amount : parseFloat(req.session.cart.totalPrice).toFixed(2),
//         firstname : req.body.firstname,
//         email : req.body.email,
//         phone : req.body.phone,
//         hashString: data,
//     }*/
//     if (req.body.refCode == "") {
//     } else {
//         req.session.cart.discountedPrice = req.session.cart.totalPrice * 0.1;
//         req.session.cart.netTotal = req.session.cart.totalPrice * 0.9;
//         User.findOneAndUpdate(
//             { myRefCode: req.body.refCode },
//             { $inc: { myRefCodeCount: 1 } },
//             { new: true },
//             function(err, user) {
//                 if (!err) {
//                     let refCodePersonName = user.username;
//                     let refCodePersonMail = user.email;
//                     let whoUsed = req.user.username;
//                     mailer.refCodeUsedMail(
//                         refCodePersonName,
//                         refCodePersonMail,
//                         whoUsed,
//                         req.session.cart.discountedPrice,
//                         user.phone
//                     );
//                 } else {
//                     console.log(err);
//                 }
//             }
//         );
//     }
//     return res.redirect("/order");
//     /*if(req.body.payMode == 'payumoney'){
//     res.render('paymentInProcess', {jsonParams:jsonParams});
//     }else{
//     return res.redirect('/order');
//   }*/
// });

// router.get("/order", authCheck, isCheckedOut, areOrderDetailsNull, function(
//     req,
//     res,
//     next
// ) {
//     database.saveOrderInDB(req.session.orderDetails);
//     myOrderDetails = req.session.orderDetails;
//     req.session.orderDetails = null;
//     myorder = req.session.cart;
//     req.session.cart = null;
//     res.render("user/final", {
//         visible: "false",
//         orderDetails: myOrderDetails,
//         user: req.user,
//         cart: myorder,
//         title: "Redgini | Order confirmed"
//     });
// });

module.exports = router;
