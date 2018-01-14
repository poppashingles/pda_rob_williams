var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should show a correct answer when adding numbers', function() {
    calculator.add(1)
    assert.strictEqual(calculator.runningTotal, 1)
  })

  it('should show a correct answer when subtracting numbers', function() {
    calculator.subtract(5)
    assert.strictEqual(calculator.runningTotal, -5)
  })

  it('should show a correct answer when using the multiply operator', function() {
    calculator.add(2)
    calculator.operatorClick('*')
    calculator.multiply(4)
    assert.strictEqual(calculator.runningTotal, 8)
  })

  it('should show a correct answer when using the divide operator', function() {
    calculator.add(10)
    calculator.operatorClick('/')
    calculator.divide(2)
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('should reset to 0 if a number button is clicked following an operation', function() {
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    calculator.numberClick(4)
    assert.strictEqual(calculator.runningTotal, 4)
  })

  it('resets the running total to 0 when pressing the clear button', function() {
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.strictEqual(calculator.runningTotal, 0)
  })

});
