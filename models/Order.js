var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    cakeIds : {type:String, required:true},
    cakeName: {type: String, required: true},
    cakePrice: {type: Number, required: true},
    orderWeight: {type: Number, required: true},
    msgOnCake: {type: String, required: true},
    
    payMode: {type: String, required: true},
    
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    userPhone: {type: String, required: true},
    userAddressLine1: {type: String, required: true},
    userAddressLine2: {type: String, required: true},
    userAddressLine3: {type: String, required: true},
    userCity: {type: String, required: true},
    userState: {type: String, required: true},
    
    delDate: {type: String, required: true},
    delTime: {type: String, required: true},
});

module.exports = mongoose.model('Order', orderSchema);