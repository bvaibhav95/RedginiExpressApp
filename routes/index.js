var express = require('express');
var router = express.Router();
var Cake = require('../models/Cake');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Redgini | Love in every bite' });
});
router.get('/policies', function(req, res, next) {
  res.render('policies', { title: 'Redgini | Our Policies' });
});
router.get('/products', function(req, res, next) {
  res.render('products');
});
router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});
router.get('/cart', function(req, res, next) {
  res.render('shoppingCart');
});
router.post('/order', function(req, res, next) {
  res.render('final');
});
router.get('/events', function(req, res, next) {
  res.render('events');
});
router.get('/products/blackforest', function(req, res, next) {
  Cake.find({category:'bf'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});
router.get('/products/butterscotch', function(req, res, next) {
  Cake.find({category:'bs'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});
router.get('/products/chocolate', function(req, res, next) {
  Cake.find({category:'ch'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/products/fruit', function(req, res, next) {
  Cake.find({category:'fc'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/products/pineapple', function(req, res, next) {
  Cake.find({category:'pa'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/products/redvelvet', function(req, res, next) {
  Cake.find({category:'rv'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/products/strawberryvanilla', function(req, res, next) {
  Cake.find({category:'sv'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/products/truffle', function(req, res, next) {
  Cake.find({category:'tf'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/products/whiteforest', function(req, res, next) {
  Cake.find({category:'wf'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});
module.exports = router;
