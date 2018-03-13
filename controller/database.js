var mongoose = require('mongoose');
var Order = require('../models/Order');

module.exports = {
    saveOrderInDB : function(orderDetailsReceived){
        var saveOrderDetails = new Order(orderDetailsReceived);
        saveOrderDetails.save();
    },
    getOrdersFromUserId : function(providerID){
        //this function not working after extraction
        Order.find({userId : providerID}, function(error, orderHistory){
            return orderHistory;
        });
    }
}