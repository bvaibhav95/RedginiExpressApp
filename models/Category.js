var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    catId : {type:String, required:true},
    name: {type: String, required: true},
});

module.exports = mongoose.model('Category', categorySchema);