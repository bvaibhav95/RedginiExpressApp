var express = require('express');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://bvaibhav.95:K1r9v9d5vul@ds241658.mlab.com:41658/redgini');

var Cake = require('../models/Cake');
var Order = require('../models/Order');

var mailer = require('../helper/mail/mailer');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Redgini | Love in every bite' });
});

router.get('/policies', function(req, res, next) {
  res.render('policies', { title: 'Redgini | Our Policies' });
});

router.get('/checkout', function(req, res, next) {
  Cake.find({},{id:1},function(err, docs){
    res.render('checkout', {cakeIds : docs});
  });
});

router.get('/detailsFromId/:cakeID', function(req, res, next) {
  Cake.where({id:req.params.cakeID}).findOne(function(err, docs){
    if (err) return res.render('error');
    if (docs) {
      res.send(docs);
    }
  });
});

router.post('/order', function(req, res, next) {
  Cake.where({id:req.body.cakeIds}).findOne(function(err, docs){
    if (err) return res.render('error');
    if (docs) {
      var orderDetailsReceived = {
        cakeIds :         req.body.cakeIds,
        cakeName :        docs.name,
        cakePrice :       docs.halfKgPrice*req.body.orderWeight*2,  
        orderWeight:      req.body.orderWeight,
        msgOnCake:        req.body.msgOnCake,
        payMode:          req.body.payMode,
        userName:         req.body.userName,
        userEmail:        req.body.userEmail,
        userPhone:        req.body.userPhone,
        userAddressLine1: req.body.userAddressLine1,
        userAddressLine2: req.body.userAddressLine2,
        userAddressLine3: req.body.userAddressLine3,
        userCity:         'Nashik',
        userState:        'Maharashtra',
        delDate:          req.body.delDate,
        delTime:          req.body.delTime,
      };
      
      var saveOrderDetails = new Order(orderDetailsReceived);
      saveOrderDetails.save();

      let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, 
        auth: {
            user: 'support@redgini.com',
            pass: '25WMjGKX1xCt'  
        },
        tls:{
          rejectUnauthorized: false
        },
        dkim: {
          domainName: 'redgini.com',
          keySelector: 'zoho',
          privateKey: 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjKvFxEMowNquEfvzW2JoIiS/d9tXC9lvW57U0x6ha8+IGwMeQPAdJwarbRpAmrsMn9MUmYlx4QUXvHHlJC+6KO5X4C1udaB3tckDZA0IVXBUPChh6lG2OVwzx1orr2Xkqk5iaz+diVVQSVSekYOmINQBc6Tt7itnBZbZ+EZEzmwIDAQAB'
      }
    });

      let mailOptions = {
          from: '"Redgini,Nashik" <support@redgini.com>',
          to: 'help@redgini.com, '+req.body.userEmail, 
          subject: 'Redgini,Nashik | Order placed', 
          //text: 'This is testing mail', 
          html: '<b style="font-size: 20px">Redgini,Nashik | Order confirmation</b>'+
                '<p>Dear, '+req.body.userName+'</p>'+
                '<p>We would like to inform you that we have succeefully placed your order. Please check the order details and delivery details'+
                '</p>'+
                '<p style="margin-bottom: 5px">If you want to cancel or change the order please inform us on below contacts 12 hours before delivery time</p>'+
                '<a href="">Email - support@redgini.com</a>'+
                '<p style="margin-top: 2px"><b>Whatsapp on - +91 860 550 7729</b></p>'+
                '<hr>'+
            
                '<p style="font-size:18px">Order details</p>'+
                '<ul style="list-style:none; margin-left:-25px">'+
                  '<li>Cake -  '+req.body.cakeIds +'&nbsp;&nbsp;|&nbsp;&nbsp;'+ docs.name +'&nbsp;&nbsp;|&nbsp;&nbsp;'+ req.body.orderWeight+' Kg</li>'+
                  '<li>Messaeg on cake - '+req.body.msgOnCake+'</li>'+
                  '<li>Payment details - Rs.'+docs.halfKgPrice*req.body.orderWeight*2+ '&nbsp;&nbsp;|&nbsp;&nbsp;Payment mode - '+req.body.payMode+'</li>'+
                '</ul>'+
            
                '<hr>'+
            
                '<p style="font-size:18px">Delivery details</p>'+
                '<ul style="list-style:none; margin-left:-25px">'+
                  '<li>Delivery Date & time - '+req.body.delDate +'&nbsp;&nbsp;|&nbsp;&nbsp;'+ req.body.delTime+'</li>'+
                  '<li>Delivery Address -  '+req.body.userAddressLine1+','+ req.body.userAddressLine2+','+ req.body.userAddressLine3+', Nashik, Maharashtra</li>'+
                '</ul>'+
               '<br>'+
                '<p>Thank you,<br>Redgini,Nashik</p>' 
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
      req.session.orderDetails = orderDetailsReceived;
      res.render('final', {orderDetails : orderDetailsReceived});
    }
  });
});

router.post('/sent', function(req, res, next) {
    //Extract this fucntions into separate file
    //mailer.contactUsMail(res);
    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, 
        auth: {
            user: 'support@redgini.com',
            pass: '25WMjGKX1xCt'  
        },
        tls:{
          rejectUnauthorized: false
        },
        dkim: {
          domainName: 'redgini.com',
          keySelector: 'zoho',
          privateKey: 'v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjKvFxEMowNquEfvzW2JoIiS/d9tXC9lvW57U0x6ha8+IGwMeQPAdJwarbRpAmrsMn9MUmYlx4QUXvHHlJC+6KO5X4C1udaB3tckDZA0IVXBUPChh6lG2OVwzx1orr2Xkqk5iaz+diVVQSVSekYOmINQBc6Tt7itnBZbZ+EZEzmwIDAQAB'
      }
    });

    let mailOptions = {
        from: '"Contacted Redgini!" <support@redgini.com>',
        to: 'help@redgini.com', 
        subject: 'Enquiry mail!', 
        //text: 'This is testing mail', 
        html: '<b> From, '+req.body.contactform_name+',</b>'+
              '<p>'+req.body.contactform_message+'</p><br>'+
              '<p> Contact - +91 '+req.body.contactform_phone+'</p>'+
              '<p> Email - '+req.body.contactform_email+'</p>' 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('index', {showClass: 'alert alert-success', msg1: 'Thank you!', msg2:'We will contact you soon...', title: 'Redgini | Love in every bite'});
    });
});

module.exports = router;
