var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cakeBrandSchema = new Schema({
    brandId : {type:String, required:true},
    brandName: {type: String, required: true},
    brandEmail: {type: String, required: false},
    brandPhone: {type: String, required: true},
    address: {type: Object, required: false},
    city : {type: String, required: true},
    state : {type: String, required: true},
});

module.exports = mongoose.model('CakeBrand', cakeBrandSchema);