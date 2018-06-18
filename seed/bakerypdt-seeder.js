var BakeryPdt = require('../models/BakeryPdt');
var keys = require('../config/keys');
var mongoose = require('mongoose');

mongoose.connect(keys.mongodb.dbURI);
// mongoose.connect(keys.mongodbDevlopment.dbURI);

var bakeryPdts = [
    //////Prakash foods//////
    // Toasts
    new BakeryPdt({
        pdtId: 'ts001_pkfnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 1',
        brandId : 'pkfnsk',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts002_pkfnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 2',
        brandId : 'pkfnsk',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts003_pkfnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 3',
        brandId : 'pkfnsk',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts004_pkfnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 4',
        brandId : 'pkfnsk',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts005_pkfnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 5',
        brandId : 'pkfnsk',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts006_pkfnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 6',
        brandId : 'pkfnsk',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    // Khari
    new BakeryPdt({
        pdtId: 'kh001_pkfnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 1',
        brandId : 'pkfnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh002_pkfnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 2',
        brandId : 'pkfnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        //minWtCost should be 1Kg price
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh003_pkfnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 3',
        brandId : 'pkfnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh004_pkfnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 4',
        brandId : 'pkfnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh005_pkfnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 5',
        brandId : 'pkfnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh006_pkfnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 6',
        brandId : 'pkfnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    // Biscuits
    new BakeryPdt({
        pdtId: 'bc001_pkfnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 1',
        brandId : 'pkfnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc002_pkfnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 2',
        brandId : 'pkfnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc003_pkfnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 3',
        brandId : 'pkfnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc004_pkfnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 4',
        brandId : 'pkfnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc005_pkfnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 5',
        brandId : 'pkfnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc006_pkfnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 6',
        brandId : 'pkfnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Prakash foods',
        minWtCost : 450,
        availability : 'One day before',
    }),

    //////Albion bakers//////
    // Toasts
    new BakeryPdt({
        pdtId: 'ts001_albnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 1',
        brandId : 'albnsk',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts002_albnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 2',
        brandId : 'albnsk',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts003_albnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 3',
        brandId : 'albnsk',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts004_albnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 4',
        brandId : 'albnsk',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts005_albnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 5',
        brandId : 'albnsk',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'ts006_albnsk',
        bakeryPdtCategory: 'ts',
        name: 'Toast 6',
        brandId : 'albnsk',
        bakeryPdtCategory: 'ts',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    // Khari
    new BakeryPdt({
        pdtId: 'kh001_albnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 1',
        brandId : 'albnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh002_albnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 2',
        brandId : 'albnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh003_albnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 3',
        brandId : 'albnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh004_albnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 4',
        brandId : 'albnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh005_albnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 5',
        brandId : 'albnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'kh006_albnsk',
        bakeryPdtCategory: 'kh',
        name: 'Khari 6',
        brandId : 'albnsk',
        category: 'kh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    // Biscuits
    new BakeryPdt({
        pdtId: 'bc001_albnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 1',
        brandId : 'albnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc002_albnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 2',
        brandId : 'albnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc003_albnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 3',
        brandId : 'albnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc004_albnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 4',
        brandId : 'albnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc005_albnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 5',
        brandId : 'albnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),
    new BakeryPdt({
        pdtId: 'bc006_albnsk',
        bakeryPdtCategory: 'bc',
        name: 'Biscuits 6',
        brandId : 'albnsk',
        category: 'bc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        
        maker : 'Albion bakers',
        minWtCost : 450,
        availability : 'One day before',
    }),

];

var done = 0;
for (var i = 0; i < bakeryPdts.length; i++) {
    bakeryPdts[i].save(function(err, result) {
        done++;
        if (done === bakeryPdts.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
