var nodemailer = require('nodemailer');
var handlebars = require('handlebars');
var fs = require('fs');

var keys = require('../config/keys');

var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};

module.exports = {
    contactUsMail : function(req){
        let transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true, 
            auth: {
                user: 'support@redgini.com',
                pass: keys.zohoDetails.authKey, 
            },
            tls:{
              rejectUnauthorized: false
            },
            dkim: {
              domainName: 'redgini.com',
              keySelector: 'zoho',
              privateKey: keys.zohoDetails.privateKey 
          }
        });
        
        readHTMLFile(__dirname+'/../views/templates/mail/enquiry.hbs', function(err, html) {
            var template = handlebars.compile(html);
            var replacements = {
                enquiryPerson: req.body.contactform_name,
                enquiryMessage : req.body.contactform_message,
                contactPhone : req.body.contactform_phone,
                contactEmail : req.body.contactform_email
            };
            var enquiryMailContent = template(replacements);
            var mailOptions = {
                from: '"Contacted Redgini!" <support@redgini.com>',
                to : 'help@redgini.com',
                subject : 'Enquiry mail!',
                html : enquiryMailContent
             };
             transporter.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log(error);
                    callback(error);
                }
            });
        });
    },

    orderConfirmationMail : function(req){
        let transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true, 
            auth: {
              user: 'support@redgini.com',
              pass: keys.zohoDetails.authKey,  
            },
            tls:{
              rejectUnauthorized: false
            },
            dkim: {
              domainName: 'redgini.com',
              keySelector: 'zoho',
              privateKey: keys.zohoDetails.privateKey
            }
        });
        
        readHTMLFile(__dirname+'/../views/templates/mail/orderConfirmation.hbs', function(err, html) {
            var template = handlebars.compile(html);
            var replacements = {
                username: req.user.username,
                msgOnCake : req.body.msgOnCake,
                cakeList : req.session.cart.items,
                totalPrice : req.session.cart.totalPrice,
                paymentMode : req.body.payMode,
                deliveryDate : req.body.delDate,
                deliveryTime : req.body.delTime,
                userAddressLine1 : req.body.userAddressLine1,
                userAddressLine2 : req.body.userAddressLine2,
                userAddressLine3 : req.body.userAddressLine3,
            };
            var orderConfirmationTemplate = template(replacements);
            var mailOptions = {
                from: '"Redgini,Nashik" <support@redgini.com>',
                to : 'help@redgini.com, '+req.user.email,
                subject : 'Redgini,Nashik | Order placed',
                html : orderConfirmationTemplate
             };
             transporter.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log(error);
                    callback(error);
                }
            });
        });
    },
}
