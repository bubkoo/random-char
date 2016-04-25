var expect = require('chai').expect;


describe('random-char: ', function () {

  var randomChar = require('../../');

  it('randomChar()', function () {
    expect(randomChar()).to.be.a('string');
  });

  it('randomChar("")', function () {
    expect(randomChar('')).to.be.a('string');
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

  it("randomChar({ alpha: true })", function () {
    expect(randomChar({ alpha: true })).to.be.match(/^[a-zA-Z]$/);
  });

  it("randomChar({ lower: true })", function () {
    expect(randomChar({ lower: true })).to.be.match(/^[a-z]$/);
  });

  it("randomChar({ upper: true })", function () {
    expect(randomChar({ upper: true })).to.be.match(/^[A-Z]$/);
  });

  it("randomChar({ number: true })", function () {
    expect(randomChar({ number: true })).to.be.match(/^[0-9]$/);
  });

  it("randomChar({ symbol: true })", function () {
    expect(randomChar({ symbol: true })).to.be.match(/^[\~\!\@\#\$\%\^\&\(\)\*\_\+\-\=\{\}\[\]]$/);
  });

  it("randomChar({ pool: 'aeiou' })", function () {
    expect(randomChar({ pool: 'aeiou' })).to.be.match(/^[aeiou]$/);
  });
});
