    
var assert = require('Chai').assert;
var Ops = require('../modules/operations');

describe('Testing Box', function() {

  it('should return 0', function() {
    var operations = new Ops();
    var result =  operations.cashOutNatural(1, 1000, 2019-08-05, 0.03, 1000)
    assert.equal(result, 0)
  })


  it ('should return 27', function() {
    var operations = new Ops();
    var result =  operations.cashOutNatural(1, 10000, 2019-12-30, 0.3, 1000)
    assert.equal(result, 27)
  })

  it ('should return 0', function() {
    var operations = new Ops();
    before(function() {        
        operations.cashOutNatural(1, 10000, 2018-12-30, 0.3, 1000)
    });

    var result = operations.cashOutNatural(1, 200, 2019-01-01, 0.3, 1000)
    assert.equal(result, 0)
  })


  it ('should return 0.05', function() {
    var operations = new Ops();
    before(function() {
        operations.cashOutNatural(1, 300, 2019-08-26, 0.5, 300)
    })
    var result = operations.cashOutNatural(1,500,2019-08-26, 0.5, 300)
    assert.equal(result, 1)
  })

})