var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bakeryPdtCategorySchema = new Schema({
    catId : {type:String, required:true},
    name: {type: String, required: true},
});

module.exports = mongoose.model('BakeryPdtCategory', bakeryPdtCategorySchema);