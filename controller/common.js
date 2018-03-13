var mongoose = require('mongoose');
var Order = require('../models/Order');

module.exports = {
    generateArrayOfJSONList : function(listOfJsonObject) {
        var arr = [];
        for (var item in listOfJsonObject) {
            arr.push(item);
        }
        return arr;
    }
}
