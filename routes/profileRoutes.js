var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const passport = require('passport');

const User = require('../models/User');
var database = require('../controller/database');
var Order = require('../models/Order');

var authCheck = function(req,res,next){
    if(!req.user){
        res.redirect('/auth/login');
    }else{
        next();
    }
};

router.get('/', authCheck, function(req, res, next){
    // orderHistory = database.getOrdersFromUserId(req.user.providerID);
    Order.find({userId : req.user.providerID}, function(error, orderHistory){
        console.log(orderHistory);
        res.render('user/userProfile', {user : req.user, title : 'Redgini | My profile', cart : req.session.cart, orderHistory:orderHistory});
    });
});
module.exports = router;