var expect = require('chai').expect;


describe('random-char: ', function () {

  var randomChar = require('../../');

  it('randomChar()', function () {
    expect(randomChar()).to.match(/^[a-z]$/);
  });

  it('randomChar("lower")', function () {
    expect(randomChar('lower')).to.match(/^[a-z]$/);
  });

  it('randomChar("upper")', function () {
    expect(randomChar('upper')).to.match(/^[A-Z]$/);
  });

  it('randomChar("number")', function () {
    expect(randomChar('number')).to.match(/^[0-9]$/);
  });

  it('randomChar("symbol")', function () {
    expect(randomChar('symbol')).to.match(/^[\~\!\@\#\$\%\^\&\(\)\*\_\+\-\=\{\}\[\]]$/);
  });

  it('randomChar("aeiou")', function () {
    expect(randomChar("aeiou")).to.match(/^[aeiou]$/);
  });

});
