var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    providerID : {type:String, required:true},
    provider : {type : String, required:true},
    username: {type: String, required: true},
    // email : {type: String, required:true},
    email : {type: String},
    phone : {type:String, required:false},
});

module.exports = mongoose.model('User', userSchema);