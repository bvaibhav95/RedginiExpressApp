var nodemailer = require('nodemailer');

var contactUsMail =  function(res){
    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 587,
        secure: false, 
        auth: {
            user: 'support@redgini.com',
            pass: 'K1r9v9d5&vul'  
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
}
module.exports = contactUsMail;