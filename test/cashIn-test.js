var assert = require('Chai').assert;
var Ops = require('../modules/operations');

describe('Testing Box', function() {

    it('should return 0.82', function() {
      var operations = new Ops();
      var result =  operations.cashIn(356, 0.23, 10)
      assert.equal(result, 0.82)
    })
});