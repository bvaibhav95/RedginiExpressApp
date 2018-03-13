var express = require('express');
var router = express.Router();
// https://github.com/helpers/handlebars-helpers
//Getting specific helper only
var helpers = require('handlebars-helpers');
var math = helpers.math();
var Cake = require('../models/Cake');

router.get('/blackforest', function(req, res, next) {
  Cake.find({category:'bf'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs); 
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/butterscotch', function(req, res, next) {
  Cake.find({category:'bs'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs); 
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/chocolate', function(req, res, next) {
  Cake.find({category:'ch'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/oreo', function(req, res, next) {
  Cake.find({category:'or'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/fruit', function(req, res, next) {
  Cake.find({category:'fc'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
}); 

router.get('/pineapple', function(req, res, next) {
  Cake.find({category:'pa'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/redvelvet', function(req, res, next) {
  Cake.find({category:'rv'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/strawberryvanilla', function(req, res, next) {
  Cake.find({category:'sv'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/truffle', function(req, res, next) {
  Cake.find({category:'tf'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/whiteforest', function(req, res, next) {
  Cake.find({category:'wf'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart});
  });
});

router.get('/designer-fondant', function(req, res, next) {
  Cake.find({category:'designer_fondant'},function(err, docs){
    var cakeChunks = [];
    cakeChunks.push(docs);
    res.render('products', {cakes: cakeChunks, user : req.user, cart : req.session.cart, designerAndFondant : 'yes'});
  });
});


module.exports = router;
