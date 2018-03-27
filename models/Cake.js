var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cakeSchema = new Schema({
    cakeId : {type:String, required:true},
    name: {type: String, required: true},
    brandId : {type: String, required: true},
    category: {type: String, required: true},
    availableWeights: [],
    halfKgPrice: {type: Number, required: true},
    maker : {type:String, required:true},
    minWtCost : {type:String}
});

module.exports = mongoose.model('Cake', cakeSchema);