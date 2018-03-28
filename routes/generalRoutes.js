var crypto = require('crypto');
var express = require('express');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var csrf = require('csurf');

var keys = require('../config/keys');
var Cart = require('../models/Cart');
var Order = require('../models/Order');
var router = express.Router();

mongoose.connect(keys.mongodb.dbURI);

var Cake = require('../models/Cake');
var Order = require('../models/Order');

var mailer = require('../controller/mailer');
var database = require('../controller/database');

const authCheck = function(req,res,next){
  if(!req.user){
      req.session.oldUrl = req.url;
      res.redirect('/auth/login');
  }else{
      next();
  }
};
const isCheckedOut = function(req,res,next){
  if(!req.session.checkedOut){
      res.redirect('/cart');
  }else{
      next();
  }
};

const areOrderDetailsNull = function (req,res,next){
  if(!req.session.orderDetails){
    res.redirect('/products/cakes');
  }else{
    next();
  }
};

var csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Redgini | Love in every bite', user : req.user, cart : req.session.cart, csrfToken: req.csrfToken()});
});

router.get('/policies', function(req, res, next) {
  res.render('policies', { title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart });
});

router.post('/sent', function(req, res, next) {
    if (mailer.contactUsMail(req) == null){
        res.render('index', {showClass: 'alert alert-success', msg1: 'Thank you!', msg2:'We will contact you soon...', title: 'Redgini | Love in every bite'});
    }else{
        res.redirect('/');
    }
});

router.get('/detailsFromId/:cakeID', function(req, res, next) {
  Cake.where({cakeId:req.params.cakeID}).findOne(function(err, docs){
    if (err) return res.render('error');
    if (docs) {
      res.send(docs);
    }
  });
});

router.get('/cart',function(req, res, next) {
    if(!req.session.cart){
      return res.render('user/shoppingCart', {visible: 'false', cart : null, user: req.user, title:'Redgini - Shopping cart'});  
    }
    res.render('user/shoppingCart', {visible: 'false', cart : req.session.cart, user: req.user, title:'Redgini - Shopping cart'});
});

router.get('/add-to-cart/:id/:cakeWt/:cakeQty/:egg',function(req, res, next) {
  var productId  = req.params.id;
  var productWt  = req.params.cakeWt;
  var productQty = req.params.cakeQty;
  var egg        = req.params.egg;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Cake.where({cakeId:productId}).findOne(function(err, cake){
    if (err) {
        return res.render('error');
    }
    cart.add(cake, productId, productWt, productQty, egg);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/cart');
  });
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});

router.get('/checkout', authCheck, function(req, res, next) {
  //put validator for field here using express-validator
  var txnid = req.user.providerID;
  res.render('user/checkout', {user : req.user, cart : req.session.cart, csrfToken: req.csrfToken(), title : 'Redgini | Checkout'});
});

router.post('/final', function(req, res, next) {
  mailer.orderConfirmationMail(req);
  var orderDetailsReceived = {
    userId : req.user.providerID,
    cart :   req.session.cart,
    msgOnCake: req.body.msgOnCake,
    
    userName: req.user.username,
    userEmail: req.user.email,
    userPhone: req.body.phone,
    userAddressLine1: req.body.userAddressLine1,
    userAddressLine2: req.body.userAddressLine2,
    userAddressLine3: req.body.userAddressLine3,
    userCity: 'Nashik',
    userState: 'Maharashtra',
    
    delDate: req.body.delDate,
    delTime: req.body.delTime,
    
    payMode: req.body.payMode,

    txnId : req.user.providerID,
  };
  req.session.orderDetails = orderDetailsReceived;
  req.session.checkedOut = req.body.checkedOut;
  // req.session.cart.totalPrice -- replace this with '1' in parseFloat(1) below line
  /*var data = keys.payuTest.key+'|'+req.user.providerID+'|'+parseFloat(1).toFixed(2)+'|RedginiCakeAndPastryNashik|'+req.body.firstname+'|'+req.body.email+'|||||||||||'+keys.payuTest.salt;
    var generatedHash = crypto.createHash('sha512').update(data).digest("hex");
    var jsonParams = {
    testKey : keys.payuTest.key,
    genHash : generatedHash,
    txnId : req.user.providerID,
    amount : parseFloat(req.session.cart.totalPrice).toFixed(2),
    firstname : req.body.firstname,
    email : req.body.email,
    phone : req.body.phone,
    hashString: data,
  }*/
  return res.redirect('/order');
  /*if(req.body.payMode == 'payumoney'){
    res.render('paymentInProcess', {jsonParams:jsonParams});
    }else{
    return res.redirect('/order');
  }*/
});

router.get('/order', authCheck, isCheckedOut, areOrderDetailsNull, function(req, res, next) {
      database.saveOrderInDB(req.session.orderDetails);
      myorderDetails = req.session.orderDetails;
      req.session.orderDetails = null;
      myorder = req.session.cart;
      req.session.cart = {};
      res.render('user/final', {visible: 'false', orderDetails : myorderDetails, user : req.user, cart : myorder, title : 'Redgini | Order confirmed'});
});

module.exports = router;
