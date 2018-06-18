var BakeryPdtCategory = require('../models/BakeryPdtCategory');
var keys = require('../config/keys');
var mongoose = require('mongoose');

mongoose.connect(keys.mongodb.dbURI);
// mongoose.connect(keys.mongodbDevlopment.dbURI);

var categories = [
    new BakeryPdtCategory({
        catId : 'ts',
        name: 'Toast',
    }),
    new BakeryPdtCategory({
        catId : 'kh',
        name: 'Khari',
    }),
    new BakeryPdtCategory({
        catId : 'bc',
        name: 'Biscuit',
    }),
];

var done = 0;
for (var i = 0; i < categories.length; i++) {
    categories[i].save(function(err, result) {
        done++;
        if (done === categories.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
