var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var Cake = require('../models/Cake');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Redgini | Love in every bite' });
});

router.get('/policies', function(req, res, next) {
  res.render('policies', { title: 'Redgini | Our Policies' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

router.post('/order', function(req, res, next) {
  res.render('final');
});

router.post('/sent', function(req, res, next) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 587,
        secure: false, 
        auth: {
            user: 'support@redgini.com',
            pass: 'redginivaibhya'  
        },
        tls:{
          rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: '"Redgini,Nashik" <support@redgini.com>',
        to: 'bvaibhav.95@gmail.com', 
        subject: 'Testing Redgini,Nashik mail service', 
        text: 'This is testing mail', 
        // html: '<b>Hello world?</b>' 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('index', {showClass: 'alert alert-success', msg1: 'Thank you!', msg2:'We will contact you soon...'});
    });
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
