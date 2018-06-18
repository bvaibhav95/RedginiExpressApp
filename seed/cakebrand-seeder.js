var CakeBrand = require('../models/CakeBrand');
var keys = require('../config/keys');
var mongoose = require('mongoose');

mongoose.connect(keys.mongodb.dbURI);
// mongoose.connect(keys.mongodbDevlopment.dbURI);

var cakeBrands = [
    // new CakeBrand({
    //     brandId : 'hsbnsk',
    //     brandName: 'SweetWonders',
    //     brandEmail: 'harshabalwani@yahoo.co.in',
    //     brandPhone: '770051178',
    //     address: {
    //         residentAddress : 'C-25, Ishwar paradise, Ashoka marg',
    //         shopAddress : ['C-25, Ishwar paradise, Ashoka marg'],
    //         bakeryAddress : ['C-25, Ishwar paradise, Ashoka marg'],
    //     },
    //     city : 'Nashik',
    //     state : 'Maharashtra'
    // }),

    new CakeBrand({
        brandId : 'tctnsk',
        brandName: 'Toccata cake shop',
        brandEmail: 'foodaffairnashik@gmail.com',
        brandPhone: '9096229991',
        address: {
            residentAddress : '',
            shopAddress : ['Toccata chocolates & cakes, opp sachi honda, Mahatma nagar'],
            bakeryAddress : ['Toccata chocolates & cakes, opp sachi honda, Mahatma nagar'],
        },
        city : 'Nashik',
        state : 'Maharashtra'
    }),
    new CakeBrand({
        brandId : 'vsnnsk',
        brandName: 'Food affair',
        brandEmail: 'foodaffairnashik@gmail.com',
        brandPhone: '9011001213',
        address: {
            residentAddress : 'Flat Number 602, Sahyadri heights kala nagar behind Freshup bakery Indira Nagar Nashik',
            shopAddress : ['Food Affair Cakes and Cooking Classes, Flat Number 4, Sharmila Apartment, Old Gangapur Naka, Gangapur Road, opposite to Vihar Restaurant'],
            bakeryAddress : ['Food Affair Cakes and Cooking Classes Flat Number 4, Sharmila Apartment, Old Gangapur Naka, Gangapur Road, opposite to Vihar Restaurant'],
        },
        city : 'Nashik',
        state : 'Maharashtra'
    }),
    new CakeBrand({
        brandId : 'ampnsk',
        brandName: 'Albion cake shop',
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
    new CakeBrand({
        brandId : 'hsgnsk',
        brandName: 'Sponge - The home baker',
        brandEmail: 'homelysponge@gmail.com',
        brandPhone: '7798257722',
        address: {
            residentAddress : '303, Gurudev apartment, near shivsatya ground (Tuljabhavani mandir), Gangapur road, Nashik - 422013',
            shopAddress : ['303, Gurudev apartment, near shivsatya ground (Tuljabhavani mandir), Gangapur road, Nashik - 422013'],
            bakeryAddress : ['303, Gurudev apartment, near shivsatya ground (Tuljabhavani mandir), Gangapur road, Nashik - 422013'],
        },
        city : 'Nashik',
        state : 'Maharashtra'
    }),
    
];

var done = 0;
for (var i = 0; i < cakeBrands.length; i++) {
    cakeBrands[i].save(function(err, result) {
        done++;
        if (done === cakeBrands.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
