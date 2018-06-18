var BakeryPdtBrand = require('../models/BakeryPdtBrand');
var keys = require('../config/keys');
var mongoose = require('mongoose');

mongoose.connect(keys.mongodb.dbURI);
// mongoose.connect(keys.mongodbDevlopment.dbURI);

var bakeryPdtBrands = [
    new BakeryPdtBrand({
        brandId : 'pkfnsk',
        brandName: 'Prakash foods',
        brandEmail: '',
        brandPhone: '9822025653',
        address: {
            residentAddress : '',
            shopAddress : ['Prakash foods, MIDC, Satpur'],
            bakeryAddress : ['Prakash foods, MIDC, Satpur'],
        },
        city : 'Nashik',
        state : 'Maharashtra'
    }),
    new BakeryPdtBrand({
        brandId : 'albnsk',
        brandName: 'Albion bakers',
        brandEmail: '',
        brandPhone: '7387004398',
        address: {
            residentAddress : '',
            shopAddress : [''],
            bakeryAddress : [''],
        },
        city : 'Nashik',
        state : 'Maharashtra'
    }),
    
];

var done = 0;
for (var i = 0; i < bakeryPdtBrands.length; i++) {
    bakeryPdtBrands[i].save(function(err, result) {
        done++;
        if (done === bakeryPdtBrands.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
