var assert = require('assert')
var WaterBottle = require('../water_bottle.js')


// When we run our test, we can see that all tests in this file are testing the water bottle.
describe('Water Bottle', function() {

  it('should be empty at start', function() {

    var bottle = new WaterBottle()
    assert.strictEqual(0, bottle.volume)
    // strictEqual is the triple equals. To get double equals, use assert.equal(expected, actual)

  })

})
