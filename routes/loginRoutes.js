var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('199764ADMDHilazGfL5a924000');

mongoose.connect('mongodb://bvaibhav.95:K1r9v9d5vul@ds241658.mlab.com:41658/redgini');

router.get('/mobileVerify', function(req, res, next) {
    res.render('mobileLogin', {title: 'Redgini | Verify mobile'});
});

router.post('/sendotp', function(req, res, next) {
    var phone = req.body.mobileNum;
    var randNum = Math.floor(100000 + Math.random() * 900000);
    req.session.mobileCredentials = {mobileNum : phone, otp : randNum};
    sendOtp.send(phone, "REDGNI", randNum, function (error, data, response) {
        // res.render('mobilelogin');
        router.post('/verifyotp', function(response, newRes, next) {
            sendOtp.verify(req.session.mobileCredentials.mobileNum, req.session.mobileCredentials.otp, function (error, data, newRes1) {
                // console.log(data);
                if(data.type == 'success') 
                    newRes1.render('policies', { title: 'Redgini | Our policies' });
                if(data.type == 'error'){
                    console.log('OTP verification failed');
                    newRes1.render('mobilelogin');
                }
            });
        });
    });
});
// router.post('/verifyotp', function(req, res, next) {
//     console.log(req);
//     console.log(req.session.mobileCredentials.mobileNum + " " + req.session.mobileCredentials.otp);
//     sendOtp.verify(req.session.mobileCredentials.mobileNum, req.session.mobileCredentials.otp, function (error, data, response) {
//         console.log(data);
//         if(data.type == 'success') 
//             res.render('policies', { title: 'Redgini | Our policies' });
//         if(data.type == 'error'){
//             console.log('OTP verification failed');
//             res.render('mobilelogin');
//         }
        
//     });
// });

module.exports = router;
