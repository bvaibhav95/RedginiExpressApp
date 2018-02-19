var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cakeSchema = new Schema({
    id : {type:String, required:true},
    name: {type: String, required: true},
    category: {type: String, required: true},
    availableWeights: [],
    halfKgPrice: {type: Number, required: true}
});

module.exports = mongoose.model('Cake', cakeSchema);