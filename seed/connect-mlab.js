var User = require("../models/User");
var keys = require("../config/keys");
var mongoose = require("mongoose");

mongoose.connect(keys.mongodb.dbURI);

User.update({}, { myRefCodeCount: 0 }, { multi: true }, function(err) {
    console.log("done");
    exit();
});

function exit() {
    mongoose.disconnect();
}
