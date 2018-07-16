var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var mongoose = require('mongoose');

var Cake = require('../models/Cake');
var BakeryPdt = require('../models/BakeryPdt');
var CakeBrand = require('../models/CakeBrand');
var BakeryPdtBrand = require('../models/BakeryPdtBrand');
var Category = require('../models/Category');
var BakeryPdtCategory = require('../models/BakeryPdtCategory');
var keys = require('../config/keys');
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true });
// mongoose.connect(keys.mongodbDevlopment.dbURI);
var csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);

router.get('/cakes', async function(req, res, next) {
    let cakeChunks = [];
    let finalChunks = [];
    let cakeBrands = [];
    let categoryList = [];
    let allCakes = await Cake.find();
    for(let i=0; i<allCakes.length; i++){
      cakeChunks.push(allCakes[i]);
    }
    finalChunks.push(cakeChunks);
    let brands = await CakeBrand.find();
    cakeBrands.push(brands);
    let categories = await Category.find();
    categoryList.push(categories);
    await res.render('products', {pdts: finalChunks, user : req.user, cart : req.session.cart, title : 'Redgini | Cakes & pastries', categoryList : categoryList, brands : cakeBrands, csrfToken: req.csrfToken(), brandName : 'Choose cake shop', categoryName : 'Choose category', idTag : 'cake'});
});

router.post('/select-category', async function(req, res, next) {
  let pdtChunks = [];
  let finalPdtChunks = [];
  let pdtBrands = [];
  let pdtCats = [];
  if (req.body.choosePdtCategory === 'bake'){
    let allpdts = await BakeryPdt.find();
    for(let i=0; i<allpdts.length; i++){
      pdtChunks.push(allpdts[i]);
    }
    finalPdtChunks.push(pdtChunks);
    let brands = await BakeryPdtBrand.find();
    pdtBrands.push(brands);
    let categories = await BakeryPdtCategory.find();
    pdtCats.push(categories);
    await res.render('products', {pdts: finalPdtChunks, user : req.user, cart : req.session.cart, title : 'Redgini | Cakes & pastries', categoryList : pdtCats, brands : pdtBrands, csrfToken: req.csrfToken(), brandName : 'Choose cake shop', categoryName : 'Choose category', pdtTypeFlag : 'bake', idTag : 'bake'});
  }else{
    let allpdts = await Cake.find();
    for(let i=0; i<allpdts.length; i++){
      pdtChunks.push(allpdts[i]);
    }
    finalPdtChunks.push(pdtChunks);
    let brands = await CakeBrand.find();
    pdtBrands.push(brands);
    let categories = await Category.find();
    pdtCats.push(categories);
    await res.render('products', {pdts: finalPdtChunks, user : req.user, cart : req.session.cart, title : 'Redgini | Cakes & pastries', categoryList : pdtCats, brands : pdtBrands, csrfToken: req.csrfToken(), brandName : 'Choose cake shop', categoryName : 'Choose category', idTag : 'cake'});
  }
});

router.get('/toasts', async function(req, res, next) {
  let bakeChunks = [];
  let finalChunks = [];
  let bakeBrands = [];
  let bakeCategoryList = [];
  let allBakes = await BakeryPdt.find({bakeryPdtCategory : 'ts'});
  for(let i=0; i<allBakes.length; i++){
    bakeChunks.push(allBakes[i]);
  }
  finalChunks.push(bakeChunks);
  let brands = await BakeryPdtBrand.find();
  bakeBrands.push(brands);
  let categories = await BakeryPdtCategory.find();
  bakeCategoryList.push(categories);
  await res.render('products', {pdts: finalChunks, user : req.user, cart : req.session.cart, title : 'Redgini | Cakes & pastries', categoryList : bakeCategoryList, brands : bakeBrands, csrfToken: req.csrfToken(), brandName : 'Choose cake shop', categoryName : 'Choose category', pdtTypeFlag : 'bake', idTag : 'bake'});
});

router.get('/khari', async function(req, res, next) {
  let bakeChunks = [];
  let finalChunks = [];
  let bakeBrands = [];
  let bakeCategoryList = [];
  let allBakes = await BakeryPdt.find({bakeryPdtCategory : 'kh'});
  for(let i=0; i<allBakes.length; i++){
    bakeChunks.push(allBakes[i]);
  }
  finalChunks.push(bakeChunks);
  let brands = await BakeryPdtBrand.find();
  bakeBrands.push(brands);
  let categories = await BakeryPdtCategory.find();
  bakeCategoryList.push(categories);
  await res.render('products', {pdts: finalChunks, user : req.user, cart : req.session.cart, title : 'Redgini | Cakes & pastries', categoryList : bakeCategoryList, brands : bakeBrands, csrfToken: req.csrfToken(), brandName : 'Choose cake shop', categoryName : 'Choose category', pdtTypeFlag : 'bake', idTag : 'bake'});
});

router.get('/biscuits', async function(req, res, next) {
  let bakeChunks = [];
  let finalChunks = [];
  let bakeBrands = [];
  let bakeCategoryList = [];
  let allBakes = await BakeryPdt.find({bakeryPdtCategory : 'bc'});
  for(let i=0; i<allBakes.length; i++){
    bakeChunks.push(allBakes[i]);
  }
  finalChunks.push(bakeChunks);
  let brands = await BakeryPdtBrand.find();
  bakeBrands.push(brands);
  let categories = await BakeryPdtCategory.find();
  bakeCategoryList.push(categories);
  await res.render('products', {pdts: finalChunks, user : req.user, cart : req.session.cart, title : 'Redgini | Cakes & pastries', categoryList : bakeCategoryList, brands : bakeBrands, csrfToken: req.csrfToken(), brandName : 'Choose cake shop', categoryName : 'Choose category', pdtTypeFlag : 'bake', idTag : 'bake'});
});

router.post('/filter', function(req, res, next){
  if (req.body.idTag == 'bake'){
      let brands = [];
      let categoryList = [];
      let chooseCakeShopOrMaker = req.body.chooseCakeShopOrMaker;
      let chooseCategory        = req.body.chooseCategory;
      let pdtChunks = [];
      let brandName = '';
      let categoryName = '';

      BakeryPdtBrand.find({}, function(err, docs){
        brands.push(docs); 
      });
      BakeryPdtCategory.find({}, function(err, docs){
        categoryList.push(docs);
      });
      if(chooseCakeShopOrMaker === 'all'){
        brandName = 'All shops';
        if(chooseCategory === 'all'){
          categoryName = 'All category';
          BakeryPdt.find({},function(err, docs){
            pdtChunks.push(docs);
            res.render('products', {pdts : pdtChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, brands : brands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName, pdtTypeFlag : 'bake', idTag : 'bake'});
          });
        }else{
          BakeryPdtCategory.find({catId : chooseCategory}, function(err, docs){
            categoryName = docs[0].name;
          });
          BakeryPdt.find({bakeryPdtCategory : chooseCategory},function(err, docs){
            pdtChunks.push(docs);
            res.render('products', {pdts : pdtChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, brands : brands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName, pdtTypeFlag : 'bake', idTag : 'bake'});
          });
        }
      }else{ 
        BakeryPdtBrand.find({brandId : chooseCakeShopOrMaker}, function(err, docs){
          brandName = docs[0].brandName;
        });
        if(chooseCategory === 'all'){
          categoryName = 'All category';
          BakeryPdt.find({brandId : chooseCakeShopOrMaker},function(err, docs){
            pdtChunks.push(docs);
            res.render('products', {pdts : pdtChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, brands : brands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName, pdtTypeFlag : 'bake', idTag : 'bake'});
          });
        }else{
          BakeryPdtCategory.find({catId : chooseCategory}, function(err, docs){
            categoryName = docs[0].name;
          });
          BakeryPdt.find({brandId : chooseCakeShopOrMaker, bakeryPdtCategory : chooseCategory},function(err, docs){
            pdtChunks.push(docs);
            res.render('products', {pdts : pdtChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, brands : brands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName, pdtTypeFlag : 'bake', idTag : 'bake'});
          });
        }
      }
    }else{
        let brands = [];
        let categoryList = [];
        let chooseCakeShopOrMaker = req.body.chooseCakeShopOrMaker;
        let chooseCategory        = req.body.chooseCategory;
        let pdtChunks = [];
        let brandName = '';
        let categoryName = '';
        CakeBrand.find({}, function(err, docs){
          brands.push(docs); 
        });
        Category.find({}, function(err, docs){
          categoryList.push(docs);
        });
        if(chooseCakeShopOrMaker === 'all'){
          brandName = 'All shops';
          if(chooseCategory === 'all'){
            categoryName = 'All category';
            Cake.find({},function(err, docs){
              pdtChunks.push(docs);
              res.render('products', {pdts : pdtChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, brands : brands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName,});
            });
          }else{
            Category.find({catId : chooseCategory}, function(err, docs){
              categoryName = docs[0].name;
            });
            Cake.find({category : chooseCategory},function(err, docs){
              pdtChunks.push(docs);
              res.render('products', {pdts : pdtChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, brands : brands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName,});
            });
          }
        }else{
          CakeBrand.find({brandId : chooseCakeShopOrMaker}, function(err, docs){
            brandName = docs[0].brandName;
          });
          if(chooseCategory === 'all'){
            categoryName = 'All category';
            Cake.find({brandId : chooseCakeShopOrMaker},function(err, docs){
              pdtChunks.push(docs);
              res.render('products', {pdts : pdtChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, brands : brands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName});
            });
          }else{
            Category.find({catId : chooseCategory}, function(err, docs){
              categoryName = docs[0].name;
            });
            Cake.find({brandId : chooseCakeShopOrMaker, category : chooseCategory},function(err, docs){
              pdtChunks.push(docs);
              res.render('products', {pdts : pdtChunks, title: 'Redgini | Our Policies',user : req.user, cart : req.session.cart, categoryList : categoryList, brands : brands,csrfToken: req.csrfToken(), brandName : brandName, categoryName : categoryName});
            });
          }
        }
    }
});

module.exports = router;
