var mocha = require('mocha')
var chai = require('chai')
chai.should()



// var input = document.getElementsByClassName('input')[0];
// var btn = document.getElementsByClassName('btn')[0];
var arrayValues = [];

describe('addToArray()', function() {
  it('arrayValues contiene valueInput', function() {
    var valueInput = 'stringa di test';
    arrayValues.push(valueInput);
    arrayValues.should.have.lengthOf(1);
  });
})
