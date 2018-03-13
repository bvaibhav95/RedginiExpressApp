var nodemailer = require('nodemailer');
var keys = require('../config/keys');

module.exports = {
    contactUsMail : function(req){
        console.log(req.body);
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
      
        transporter.sendMail(mailOptions, function (error, info){
            return error;
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
          
        let mailOptions = {
            from: '"Redgini,Nashik" <support@redgini.com>',
            to: 'help@redgini.com, '+req.user.email, 
            subject: 'Redgini,Nashik | Order placed', 
            //text: 'This is testing mail', 
            html: '<b style="font-size: 20px">Redgini,Nashik | Order confirmation</b>'+
            '<p>Dear, '+req.user.username+'</p>'+
            '<p>We would like to inform you that we have succeefully placed your order. Please check the order details and delivery details'+
            '</p>'+
            '<p style="margin-bottom: 5px">If you want to cancel or change the order please inform us on below contacts 12 hours before delivery time</p>'+
            '<a href="">Email - help@redgini.com</a>'+
            '<p style="margin-top: 2px"><b>Whatsapp on - +91 860 550 7729</b></p>'+
            '<hr>'+
            
            '<p style="font-size:18px">Order details</p>'+
            '<ul style="list-style:none; margin-left:-25px">'+
            // for (var orderedItem in req.session.cart.items) {+
                '<li>'+req.session.cart.items+'</li>'+
                // '<li>Cake -  '+orderedItem.item.cakeId+'&nbsp;&nbsp;|&nbsp;&nbsp;'+ orderedItem.item.name +'&nbsp;&nbsp;|&nbsp;&nbsp;Quantity '+orderedItem.item.cakeQty+'&nbsp;&nbsp;|&nbsp;&nbsp;'+ orderedItem.item.cakeWt+' Kg</li>'+
                
            // }+
            '<li>Message on cake - '+req.body.msgOnCake+'</li>'+
            '<li>Payment details - Rs.'+req.session.cart.totalPrice+ '&nbsp;&nbsp;|&nbsp;&nbsp;Payment mode - '+req.body.payMode+'</li>'+
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
          
        transporter.sendMail(mailOptions, function (error, info){
            return error;
        });
    },
}
