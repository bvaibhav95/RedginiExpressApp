var express = require('express');
var router = express.Router();
var Cake = require('../models/Cake');

router.get('/blackforest', function(req, res, next) {
  Cake.find({category:'bf'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/butterscotch', function(req, res, next) {
  Cake.find({category:'bs'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/chocolate', function(req, res, next) {
  Cake.find({category:'ch'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/fruit', function(req, res, next) {
  Cake.find({category:'fc'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
}); 

router.get('/pineapple', function(req, res, next) {
  Cake.find({category:'pa'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/redvelvet', function(req, res, next) {
  Cake.find({category:'rv'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/strawberryvanilla', function(req, res, next) {
  Cake.find({category:'sv'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/truffle', function(req, res, next) {
  Cake.find({category:'tf'},function(err, docs){
    var cakeChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
        cakeChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('products', {cakes: cakeChunks});
  });
});

router.get('/whiteforest', function(req, res, next) {
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
