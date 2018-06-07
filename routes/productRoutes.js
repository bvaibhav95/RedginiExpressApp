var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var mongoose = require('mongoose');

var Cake = require('../models/Cake');
var CakeBrand = require('../models/CakeBrand');
var Category = require('../models/Category');
var keys = require('../config/keys');
mongoose.connect(keys.mongodb.dbURI);
// mongoose.connect(keys.mongodbDevlopment.dbURI);
var csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);

router.get('/cakes', async function(req, res, next) {
    var cakeChunks = [];
    var finalChunks = [];
    let cakeBrands = [];
    let categoryList = [];
    var bfCakes = await Cake.find({category:'bf'});
    // var bfCakes = await Cake.find({category:'bf'}).limit(3);
    for(let i=0; i<bfCakes.length; i++){
      cakeChunks.push(bfCakes[i]);
    }
    var rvCakes = await Cake.find({category:'rv'});
    for(let i=0; i<rvCakes.length; i++){
      cakeChunks.push(rvCakes[i]);
    }
    var wfCakes = await Cake.find({category:'wf'});
    for(let i=0; i<wfCakes.length; i++){
      cakeChunks.push(wfCakes[i]);
    }
    var chCakes = await Cake.find({category:'ch'});
    for(let i=0; i<chCakes.length; i++){
      cakeChunks.push(chCakes[i]);
    }
    var orCakes = await Cake.find({category:'or'});
    for(let i=0; i<orCakes.length; i++){
      cakeChunks.push(orCakes[i]);
    }
    // var dfCakes = await Cake.find({category:'designer_fondant'}).limit(10);
    // for(let i=0; i<dfCakes.length; i++){
    //   cakeChunks.push(dfCakes[i]);
    // }
    var tfCakes = await Cake.find({category:'tf'});
    for(let i=0; i<tfCakes.length; i++){
      cakeChunks.push(tfCakes[i]);
    }
    var svCakes = await Cake.find({category:'sv'});
    for(let i=0; i<svCakes.length; i++){
      cakeChunks.push(svCakes[i]);
    }
    var cvCakes = await Cake.find({category:'cv'});
    for(let i=0; i<cvCakes.length; i++){
      cakeChunks.push(cvCakes[i]);
    }
    var cfCakes = await Cake.find({category:'cf'});
    for(let i=0; i<cfCakes.length; i++){
      cakeChunks.push(cfCakes[i]);
    }
    var cmCakes = await Cake.find({category:'cm'});
    for(let i=0; i<cmCakes.length; i++){
      cakeChunks.push(cmCakes[i]);
    }
    var bbCakes = await Cake.find({category:'bb'});
    for(let i=0; i<bbCakes.length; i++){
      cakeChunks.push(bbCakes[i]);
    }
    var msCakes = await Cake.find({category:'ms'});
    for(let i=0; i<msCakes.length; i++){
      cakeChunks.push(msCakes[i]);
    }
    var bnCakes = await Cake.find({category:'bn'});
    for(let i=0; i<bnCakes.length; i++){
      cakeChunks.push(bnCakes[i]);
    }
    var ifCakes = await Cake.find({category:'if'});
    for(let i=0; i<ifCakes.length; i++){
      cakeChunks.push(ifCakes[i]);
    }
    var bsCakes = await Cake.find({category:'bs'});
    for(let i=0; i<bsCakes.length; i++){
      cakeChunks.push(bsCakes[i]);
    }
    var fcCakes = await Cake.find({category:'fc'});
    for(let i=0; i<fcCakes.length; i++){
      cakeChunks.push(fcCakes[i]);
    }
    var paCakes = await Cake.find({category:'pa'});
    for(let i=0; i<paCakes.length; i++){
      cakeChunks.push(paCakes[i]);
    }
    var vnCakes = await Cake.find({category:'vn'});
    for(let i=0; i<vnCakes.length; i++){
      cakeChunks.push(vnCakes[i]);
    }
    finalChunks.push(cakeChunks);
    let brands = await CakeBrand.find();
    cakeBrands.push(brands);
    let categories = await Category.find();
    categoryList.push(categories);
    await res.render('products', {cakes: finalChunks, user : req.user, cart : req.session.cart, title : 'Redgini | Cakes & pastries', categoryList : categoryList, cakeBrands : cakeBrands, csrfToken: req.csrfToken(), brandName : 'Choose cake shop', categoryName : 'Choose category'});
});

router.post('/filter', function(req, res, next){
    let cakeBrands = [];
    let categoryList = [];
    var chooseCakeShopOrMaker = req.body.chooseCakeShopOrMaker;
    var chooseCategory        = req.body.chooseCategory;
    var cakeChunks = [];
    var brandName = '';
    var categoryName = '';
    CakeBrand.find({}, function(err, docs){
      cakeBrands.push(docs);
    });
    Category.find({}, function(err, docs){
      categoryList.push(docs);
    });
    CakeBrand.find({brandId : chooseCakeShopOrMaker}, function(err, docs){
      brandName = docs[0].brandName;
    });
    Category.find({catId : chooseCategory}, function(err, docs){
      categoryName = docs[0].name;
    });
    Cake.find({category:chooseCategory, brandId : chooseCakeShopOrMaker},function(err, docs){
      cakeChunks.push(docs);
      res.render('products', {cakes : cakeChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, cakeBrands : cakeBrands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName });
    });
});

module.exports = router;
