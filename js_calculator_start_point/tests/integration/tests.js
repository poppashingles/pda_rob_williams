var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should display the correct result for addition', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number4')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  it('should display the correct result for subtraction', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('should display the correct result for multiplication', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('should display the correct result for division', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('should be able to chain multiple operations together and display the correct result', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('21')
  })

  it('should still display results properly for negative numbers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number7')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-15')
  })

  it('should still display results properly for decimal numbers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('1.25')
  })

  it('should still display results properly for very large numbers', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number2')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('10000000000000')
  })

  it('displays a message when attempting to divide by zero', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  })

});
