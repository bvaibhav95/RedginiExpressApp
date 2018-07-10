var Category = require('../models/Category');
var keys = require('../config/keys');
var mongoose = require('mongoose');

mongoose.connect(keys.mongodb.dbURI);
// mongoose.connect(keys.mongodbDevlopment.dbURI);

var categories = [
    new Category({
        catId : 'bf',
        name: 'BlackForest',
    }),
    new Category({
        catId : 'bs',
        name: 'ButterScotch',
    }),
    new Category({
        catId : 'rv',
        name: 'RedVelvet',
    }),
    new Category({
        catId : 'wf',
        name: 'WhiteForest',
    }),
    new Category({
        catId : 'ch',
        name: 'Chocolate',
    }),
    new Category({
        catId : 'cf',
        name: 'Chocolate coffee',
    }),
    new Category({
        catId : 'cm',
        name: 'Caramel',
    }),
    new Category({
        catId : 'or',
        name: 'Oreo',
    }),
    // new Category({
    //     catId : 'designer_fondant',
    //     name: 'Fondant-Designer',
    // }),
    new Category({
        catId : 'tf',
        name: 'All Truffles',
    }),
    new Category({
        catId : 'fc',
        name: 'Fruit/Mixed fruit',
    }),
    new Category({
        catId : 'pa',
        name: 'PineApple',
    }),
    new Category({
        catId : 'sv',
        name: 'Strawberry Vanilla',
    }),
    new Category({
        catId : 'vn',
        name: 'Plain Vanilla',
    }),
    new Category({
        catId : 'cv',
        name: 'Coffee vanilla',
    }),
    new Category({
        catId : 'bb',
        name: 'BlueBerry',
    }),
    new Category({
        catId : 'ms',
        name: 'Mousse',
    }),
    new Category({
        catId : 'bn', 
        name: 'Brownies',
    }),
    new Category({
        catId : 'if',
        name: 'Indian flavor twist',
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
