var Cake = require('../models/Cake');
var keys = require('../config/keys');
var mongoose = require('mongoose');

mongoose.connect(keys.mongodbDevlopment.dbURI);

var cakes = [
    // Black forest cakes//
    new Cake({
        cakeId: 'bf002',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bf004',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bf005',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bf008',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bf011',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bf013',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bf015',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bf016',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bf017',
        name: 'Black forest',
        category: 'bf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    // Buttercotch cakes//
    new Cake({
        cakeId: 'bs001',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 350,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bs002',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 350,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bs003',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360
    }),
    new Cake({
        cakeId: 'bs005',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 350,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bs006',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 350,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bs007',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bs008',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bs009',
        name: 'ButterScotch',
        category: 'bs',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    // Belgium truffle cakes//
    new Cake({
        cakeId: 'bt001',
        name: 'Belgium truffle',
        category: 'tf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bt002',
        name: 'Belgium truffle',
        category: 'tf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 400,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'bt003',
        name: 'Belgium truffle',
        category: 'tf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    //Chocolate chip cakes
    new Cake({
        cakeId: 'cc001',
        name: 'Chocolate chips',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'cc002',
        name: 'Chocolate chips',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'cc003',
        name: 'Chocolate chips',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'cc005',
        name: 'Chocolate chips',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    //Chocolate kitkat cakes
    new Cake({
        cakeId: 'ck001',
        name: 'Chocolate kitkat',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 390,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'ck002',
        name: 'Chocolate kitkat',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 390,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'ck006',
        name: 'Chocolate kitkat',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'ck007',
        name: 'Chocolate kitkat',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 390,
        maker : 'Redgini'
    }),
    //chocolate truufle cakes
    new Cake({
        cakeId: 'ct001',
        name: 'Chocolate truffle',
        category: 'tf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'ct002',
        name: 'Chocolate truffle',
        category: 'tf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    //Dutch truffle cake
    new Cake({
        cakeId: 'dt001',
        name: 'Dutch truffle',
        category: 'tf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'dt002',
        name: 'Dutch truffle',
        category: 'tf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    //Fruit cake
    new Cake({
        cakeId: 'fc002',
        name: 'Vanilla Fruit cake',
        category: 'fc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'fc003',
        name: 'vanilla Fruit cake',
        category: 'fc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'fc005',
        name: 'Fruit cake',
        category: 'fc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 340,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'fc009',
        name: 'Fruit cake',
        category: 'fc',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 350,
        maker : 'Redgini'
    }),
    //Ferrero rocher cakes
    new Cake({
        cakeId: 'fr001',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 480,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'fr004',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 490,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'fr006',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 480,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'fr009',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 500,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'fr013',
        name: 'Ferrero rocher',
        category: 'fr',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 480,
        maker : 'Redgini'
    }),
    //Chocolate oreo cake
    new Cake({
        cakeId: 'or001',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'or003',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'or005',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'or006',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'or007',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'or008',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'or010',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'or013',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'or018',
        name: 'Chocolate oreo',
        category: 'or',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    //Chocolate royal
    new Cake({
        cakeId: 'rc001',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rc004',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rc006',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rc008',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rc010',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rc013',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rc016',
        name: 'Chocolate royal',
        category: 'ch',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 350,
        maker : 'Redgini'
    }),
    //Red velvet cake
    new Cake({
        cakeId: 'rv001',
        name: 'Red velvet',
        category: 'rv',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 390,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rv002',
        name: 'Red velvet',
        category: 'rv',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 400,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rv005',
        name: 'Red velvet',
        category: 'rv',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 400,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'rv010',
        name: 'Red velvet | heart',
        category: 'rv',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 420,
        maker : 'Redgini'
    }),
    //Pineapple cakes
    new Cake({
        cakeId: 'pa001',
        name: 'Pineapple cake',
        category: 'pa',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'pa002',
        name: 'Pineapple cake',
        category: 'pa',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'pa003',
        name: 'Pineapple cake',
        category: 'pa',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    //Strawberry vanilla
    new Cake({
        cakeId: 'sv002',
        name: 'Strawberry vanilla',
        category: 'sv',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'sv004',
        name: 'Strawberry vanilla',
        category: 'sv',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'sv006',
        name: 'Strawberry vanilla',
        category: 'sv',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    //White forest
    new Cake({
        cakeId: 'wf002',
        name: 'White forest',
        category: 'wf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'wf004',
        name: 'White forest',
        category: 'wf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 380,
        maker : 'Redgini'
    }),
    new Cake({
        cakeId: 'wf005',
        name: 'White forest',
        category: 'wf',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 370,
        maker : 'Redgini'
    }),
    //White hazelnut
    new Cake({
        cakeId: 'wh001',
        name: 'White hazelnut',
        category: 'wh',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 360,
        maker : 'Redgini'
    }),
    //Designer and fondant cakes
    new Cake({
        cakeId: 'sw_designer001',
        name: 'Theme cake (chocolate)',
        category: 'designer_fondant',
        availableWeights: [1.0, 1.5, 2.0, 2.5, 3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer002',
        name: 'Mininie mouse cake',
        category: 'designer_fondant',
        availableWeights: [1.0, 1.5, 2.0, 2.5, 3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer003',
        name: 'Shirt theme',
        category: 'designer_fondant',
        availableWeights: [2.5, 3.0, 3.5, 4.0, 5.0],
        halfKgPrice: 834,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 2.5 * 2 * 834,
    }),
    new Cake({
        cakeId: 'sw_designer004',
        name: 'Mininie mouse cake',
        category: 'designer_fondant',
        availableWeights: [1.0, 1.5, 2.0, 2.5, 3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer005',
        name: 'Kitkat theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 500,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 500,
    }),
    new Cake({
        cakeId: 'sw_designer006',
        name: 'Princess theme(chocolate)',
        category: 'designer_fondant',
        availableWeights: [3.0,3.5,4.0,4.5,5.0],
        halfKgPrice: 584,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (3.0 * 2 * 584)-4,
    }),
    new Cake({
        cakeId: 'sw_designer007',
        name: 'Wedding cake',
        category: 'designer_fondant',
        availableWeights: [5.0,6.0,7.0],
        halfKgPrice: 700,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 5.0 * 2 * 700,
    }),
    new Cake({
        cakeId: 'sw_designer008',
        name: 'Anniversary theme',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 584,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (3.0 * 2 * 584)-4,
    }),
    new Cake({
        cakeId: 'sw_designer009',
        name: 'Baby shower cake(chocolate)',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 584,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (3.0 * 2 * 584)-4,
    }),
    new Cake({
        cakeId: 'sw_designer010',
        name: 'Disco theme',
        category: 'designer_fondant',
        availableWeights: [5.0,6.0,7.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 5.0 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer011',
        name: 'Jungle theme',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 584,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (3.0 * 2 * 584)-4,
    }),
    new Cake({
        cakeId: 'sw_designer012',
        name: 'Wedding cake',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 667,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (3.0 * 2 * 667)-2,
    }),
    new Cake({
        cakeId: 'sw_designer013',
        name: 'Gems cake',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer014',
        name: 'Birthday cake',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1000,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1000,
    }),
    new Cake({
        cakeId: 'sw_designer015',
        name: 'Hot wheels theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer016',
        name: 'Couple theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1200,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1200,
    }),
    new Cake({
        cakeId: 'sw_designer017',
        name: 'Anniversary theme',
        category: 'designer_fondant',
        availableWeights: [2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 500,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 2.0 * 2 * 500,
    }),
    new Cake({
        cakeId: 'sw_designer018',
        name: 'Heart theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer019',
        name: 'Wedding cake',
        category: 'designer_fondant',
        availableWeights: [6.0,7.0,8.0],
        halfKgPrice: 584,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (6.0 * 2 * 584)-8,
    }),
    new Cake({
        cakeId: 'sw_designer020',
        name: 'Doctor theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer021',
        name: 'Crown cake',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer022',
        name: 'Kids theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer023',
        name: 'Football jersey theme',
        category: 'designer_fondant',
        availableWeights: [2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 500,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 2.0 * 2 * 500,
    }),
    new Cake({
        cakeId: 'sw_designer024',
        name: 'Maggie theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1000,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1000,
    }),
    new Cake({
        cakeId: 'sw_designer025',
        name: 'Motu patlu cake',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer026',
        name: 'Makeup kit theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer027',
        name: 'Lion theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 800,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 800,
    }),
    new Cake({
        cakeId: 'sw_designer028',
        name: 'Camera theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1000,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1000,
    }),
    new Cake({
        cakeId: 'sw_designer029',
        name: 'Shirt theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer030',
        name: 'Flower theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer031',
        name: 'Beer bottle theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer032',
        name: 'Basketball theme',
        category: 'designer_fondant',
        availableWeights: [2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 625,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 2.0 * 2 * 625,
    }),
    new Cake({
        cakeId: 'sw_designer033',
        name: 'Original bottle(as you wish) theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer034',
        name: 'Drums theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1000,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1000,
    }),
    new Cake({
        cakeId: 'sw_designer035',
        name: 'Flower theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer036',
        name: 'Chips theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer037',
        name: 'Batman theme',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 467,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (3.0 * 2 * 467)-2,
    }),
    new Cake({
        cakeId: 'sw_designer038',
        name: 'Car theme',
        category: 'designer_fondant',
        availableWeights: [4.0,5.0,6.0,7.0],
        halfKgPrice: 562.5,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 4.0 * 2 * 562.5,
    }),
    new Cake({
        cakeId: 'sw_designer039',
        name: 'Missal theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer040',
        name: 'Roulette theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1200,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1200,
    }),
    new Cake({
        cakeId: 'sw_designer041',
        name: 'Lady theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer042',
        name: 'Birthday theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1000,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1000,
    }),
    new Cake({
        cakeId: 'sw_designer043',
        name: 'Doremon theme',
        category: 'designer_fondant',
        availableWeights: [2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 450,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 2.0 * 2 * 450,
    }),
    new Cake({
        cakeId: 'sw_designer044',
        name: 'Missal theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer045',
        name: 'Rabbit theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 800,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 800,
    }),
    new Cake({
        cakeId: 'sw_designer046',
        name: 'Birthday theme',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 584,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (3.0 * 2 * 584)-4,
    }),
    new Cake({
        cakeId: 'sw_designer047',
        name: 'Laptop/Computer theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer048',
        name: 'Couple special',
        category: 'designer_fondant',
        availableWeights: [2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 700,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 2.0 * 2 * 700,
    }),
    new Cake({
        cakeId: 'sw_designer049',
        name: 'Beer theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1000,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1000,
    }),
    new Cake({
        cakeId: 'sw_designer050',
        name: 'Car theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer051',
        name: 'Couple special',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1000,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1000,
    }),
    new Cake({
        cakeId: 'sw_designer052',
        name: 'Gems theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer053',
        name: 'Wedding theme',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 550,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 3.0 * 2 * 550,
    }),
    new Cake({
        cakeId: 'sw_designer054',
        name: 'Original bottle(as you wish) theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer055',
        name: 'Drum theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer056',
        name: 'Wedding theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 550,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 550,
    }),
    new Cake({
        cakeId: 'sw_designer057',
        name: 'Wedding theme',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 500,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 3.0 * 2 * 500,
    }),
    new Cake({
        cakeId: 'sw_designer058',
        name: 'Wedding theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 550,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 550,
    }),
    new Cake({
        cakeId: 'sw_designer059',
        name: 'Wedding theme',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 550,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 3.0 * 2 * 550,
    }),
    new Cake({
        cakeId: 'sw_designer060',
        name: 'Lady theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer061',
        name: 'Shirt theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 750,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 750,
    }),
    new Cake({
        cakeId: 'sw_designer062',
        name: 'Aeroplane theme',
        category: 'designer_fondant',
        availableWeights: [3.0,4.0,5.0],
        halfKgPrice: 584,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : (3.0 * 2 * 584)-4,
    }),
    new Cake({
        cakeId: 'sw_designer063',
        name: 'Flower basket',
        category: 'designer_fondant',
        availableWeights: [2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 450,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 2.0 * 2 * 450,
    }),
    new Cake({
        cakeId: 'sw_designer064',
        name: 'Couple special',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer065',
        name: 'Couple special',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer066',
        name: 'Wedding theme',
        category: 'designer_fondant',
        availableWeights: [5.0, 6.0,7.0],
        halfKgPrice: 500,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 5.0 * 2 * 500,
    }),
    new Cake({
        cakeId: 'sw_designer067',
        name: 'Football theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer068',
        name: 'Flower theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer069',
        name: 'Lady design theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer070',
        name: 'Sandal pairs',
        category: 'designer_fondant',
        availableWeights: [1.0,2.0,3.0,4.0,5.0],
        halfKgPrice: 500,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 500,
    }),
    new Cake({
        cakeId: 'sw_designer071',
        name: 'Wedding rheme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 600,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 600,
    }),
    new Cake({
        cakeId: 'sw_designer072',
        name: 'Sandal theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 500,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 500,
    }),
    new Cake({
        cakeId: 'sw_designer073',
        name: 'Birthday theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1200,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1200,
    }),
    new Cake({
        cakeId: 'sw_designer074',
        name: 'barbie doll theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 1000,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 1000,
    }),
    new Cake({
        cakeId: 'sw_designer075',
        name: 'Music theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 800,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 800,
    }),
    new Cake({
        cakeId: 'sw_designer076',
        name: 'Car theme',
        category: 'designer_fondant',
        availableWeights: [1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 900,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 1.0 * 2 * 900,
    }),
    new Cake({
        cakeId: 'sw_designer077',
        name: 'Birthday theme',
        category: 'designer_fondant',
        availableWeights: [0.5,1.0,1.5,2.0,2.5,3.0,4.0,5.0],
        halfKgPrice: 800,
        maker : 'Sweet wonders - Harsha balwani',
        minWtCost : 0.5 * 2 * 800,
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
