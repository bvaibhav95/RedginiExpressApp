var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bakeryPdtSchema = new Schema({
    pdtId : {type:String, required:true},
    bakeryPdtCategory : {type:String, required:true},
    name: {type: String, required: true},
    brandId : {type: String, required: true},
    bakeryPdtCategory: {type: String, required: true},
    availableWeights: [],
    maker : {type:String, required:true},
    minWtCost : {type: Number, required: true},
    availability : {type: String, required: false},
});

module.exports = mongoose.model('BakeryPdt', bakeryPdtSchema);