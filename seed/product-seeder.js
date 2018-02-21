var Cake = require('../models/Cake');

var mongoose = require('mongoose');

mongoose.connect('mongodb://bvaibhav.95:K1r9v9d5vul@ds241658.mlab.com:41658/redgini');

var cakes = [
    // Black forest cakes//
    new Cake({
        id: 'bf002',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bf004',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bf005',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bf008',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bf011',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 380
    }),
    new Cake({
        id: 'bf013',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bf015',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 380
    }),
    new Cake({
        id: 'bf016',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bf017',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    // Buttercotch cakes//
    new Cake({
        id: 'bs001',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'bs002',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'bs003',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bs005',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'bs006',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'bs007',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bs008',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'bs009',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    // Belgium truffle cakes//
    new Cake({
        id: 'bt001',
        name: 'Belgium truffle',
        category: 'tf',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'bt002',
        name: 'Belgium truffle',
        category: 'tf',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'bt003',
        name: 'Belgium truffle',
        category: 'tf',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    //Chocolate chip cakes
    new Cake({
        id: 'cc001',
        name: 'Chocolate chips',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'cc002',
        name: 'Chocolate chips',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'cc003',
        name: 'Chocolate chips',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'cc005',
        name: 'Chocolate chips',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    //Chocolate kitkat cakes
    new Cake({
        id: 'ck001',
        name: 'Chocolate kitkat',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'ck002',
        name: 'Chocolate kitkat',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'ck006',
        name: 'Chocolate kitkat',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'ck007',
        name: 'Chocolate kitkat',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    //chocolate truufle cakes
    new Cake({
        id: 'ct001',
        name: 'Chocolate truffle',
        category: 'tf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'ct002',
        name: 'Chocolate truffle',
        category: 'tf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    //Dutch truffle cake
    new Cake({
        id: 'dt001',
        name: 'Dutch truffle',
        category: 'tf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'dt002',
        name: 'Dutch truffle',
        category: 'tf',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    //Fruit cake
    new Cake({
        id: 'fc002',
        name: 'Vanilla Fruit cake',
        category: 'fc',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    new Cake({
        id: 'fc003',
        name: 'vanilla Fruit cake',
        category: 'fc',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'fc005',
        name: 'Fruit cake',
        category: 'fc',
        availableWeights: [0.5,1],
        halfKgPrice: 340
    }),
    new Cake({
        id: 'fc009',
        name: 'Fruit cake',
        category: 'fc',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    //Ferrero rocher cakes
    new Cake({
        id: 'fr001',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1],
        halfKgPrice: 480
    }),
    new Cake({
        id: 'fr004',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1],
        halfKgPrice: 490
    }),
    new Cake({
        id: 'fr006',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1],
        halfKgPrice: 480
    }),
    new Cake({
        id: 'fr009',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1],
        halfKgPrice: 500
    }),
    new Cake({
        id: 'fr013',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1],
        halfKgPrice: 480
    }),
    //Chocolate oreo cake
    new Cake({
        id: 'or001',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'or003',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 380
    }),
    new Cake({
        id: 'or005',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'or006',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'or007',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'or008',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'or010',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'or013',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'or018',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    //Chocolate royal
    new Cake({
        id: 'rc001',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'rc004',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'rc006',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 380
    }),
    new Cake({
        id: 'rc008',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'rc010',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'rc013',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'rc016',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1],
        halfKgPrice: 350
    }),
    //Red velvet cake
    new Cake({
        id: 'rv001',
        name: 'Red velvet',
        category: 'rv',
        availableWeights: [0.5,1],
        halfKgPrice: 390
    }),
    new Cake({
        id: 'rv002',
        name: 'Red velvet',
        category: 'rv',
        availableWeights: [0.5,1],
        halfKgPrice: 400
    }),
    new Cake({
        id: 'rv005',
        name: 'Red velvet',
        category: 'rv',
        availableWeights: [0.5,1],
        halfKgPrice: 400
    }),
    new Cake({
        id: 'rv010',
        name: 'Red velvet | heart',
        category: 'rv',
        availableWeights: [0.5,1],
        halfKgPrice: 420
    }),
    //Pineapple cakes
    new Cake({
        id: 'pa001',
        name: 'Pineapple cake',
        category: 'pa',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'pa002',
        name: 'Pineapple cake',
        category: 'pa',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'pa003',
        name: 'Pineapple cake',
        category: 'pa',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    //Strawberry vanilla
    new Cake({
        id: 'sv002',
        name: 'Strawberry vanilla',
        category: 'sv',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'sv004',
        name: 'Strawberry vanilla',
        category: 'sv',
        availableWeights: [0.5,1],
        halfKgPrice: 360
    }),
    new Cake({
        id: 'sv006',
        name: 'Strawberry vanilla',
        category: 'sv',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    //White forest
    new Cake({
        id: 'wf002',
        name: 'White forest',
        category: 'wf',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    new Cake({
        id: 'wf004',
        name: 'White forest',
        category: 'wf',
        availableWeights: [0.5,1],
        halfKgPrice: 380
    }),
    new Cake({
        id: 'wf005',
        name: 'White forest',
        category: 'wf',
        availableWeights: [0.5,1],
        halfKgPrice: 370
    }),
    //White hazelnut
    new Cake({
        id: 'wh001',
        name: 'White hazelnut',
        category: 'wh',
        availableWeights: [0.5,1],
        halfKgPrice: 360
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