var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var csrf = require('csurf');
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('199764ADMDHilazGfL5a924000');
// var csrfProtection = csrf();
// router.use(csrfProtection);

mongoose.connect('mongodb://bvaibhav.95:K1r9v9d5vul@ds241658.mlab.com:41658/redgini');

router.get('/mobileVerify', function(req, res, next) {
    res.render('mobileLogin', {title: 'Redgini | Verify mobile'});
});

router.post('/sendotp/:mobileNum', function(req, res, next) {
    var phone = req.params.mobileNum;
    var randNum = Math.floor(100000 + Math.random() * 900000);
    req.session.mobileCredentials = {phone: phone, otp : randNum};
    sendOtp.send(phone, "REDGNI", randNum, function (error, data, response) {
        router.post('/verifyotp/:otp', function(req, res, next) {
            sendOtp.verify(phone, req.params.otp, function (error, data, response) {
                console.log(data);
                if(data.type == 'success'){
                    res.send(JSON.stringify({status : 'success'}));
                } 
                if(data.type == 'error'){
                    res.send(JSON.stringify({status: 'error'}));
                }
            });
        });
    });
});



router.post('/resendotp/:mobileNum', function(req, res, next) {
    var phone = req.params.mobileNum;
    sendOtp.retry(phone, false, function (error, data, response) {
        console.log(data);
    });
});
module.exports = router;
// res.setHeader('Content-Type', 'application/json');
// res.send(JSON.stringify({showError : 'alert alert-danger', msg: 'You entered incorrect OTP!'}));