// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        name: 'Myles',
        photo: 'https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dw02c1fb63/23342x.jpg?sw=600&sh=600&sm=fit'
        scores: [
            '1',
            '2',
            '4',
            '5',
            '2',
            '3',
            '5',
            '1',
            '3',
            '2'
        ]
        
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
