var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    providerID: { type: String, required: true },
    provider: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    myRefCode: { type: String, required: false },
    myRefCodeCount: { type: Number, required: false, default: 0 }
});

module.exports = mongoose.model("User", userSchema);
