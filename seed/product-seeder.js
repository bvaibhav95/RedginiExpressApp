var Cake = require('../models/Cake');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var cakes = [
    // Black forest cakes//
    new Cake({
        id: 'bf001',
        name: 'Black forest1',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'bf002',
        name: 'Black forest2',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    // Buttercotch cakes//
    new Cake({
        id: 'bs001',
        name: 'ButterScotch1',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'bs002',
        name: 'ButterScotch2',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'bs003',
        name: 'ButterScotch3',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    // Chocolate cakes//
    new Cake({
        id: 'ch001',
        name: 'Chocolate1',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'ch002',
        name: 'Chocolate2',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'ch003',
        name: 'Chocolate3',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'ch003',
        name: 'Chocolate4',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    })
];

var done = 0;
for (var i = 0; i < cakes.length; i++) {
    cakes[i].save(function(err, result) {
        done++;
        if (done === cakes.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}