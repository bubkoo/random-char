# random-char
  
> Generate a random character.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-char/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-char/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-char)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-char/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-char)


## Install

```
$ npm install --save random-char 
```


## Usage

```js
var randomChar = require('random-char');

randomChar();
// => 'g'

randomChar('upper');
// => 'M'

randomChar('aeiou');
// => 'i'
```


## API

### randomChar(pool)

Randomly pick a char from a pool.

Preset pools:

- `'lower'` - `'abcdefghijklmnopqrstuvwxyz'`
- `'upper'` - `'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`
- `'number'` - `'0123456789'`
- `'symbol'` - `'!@#$%^&*()[]'`

Custom pool: `randomChar('something');`


## Related

- [random-integral](https://github.com/mock-end/random-integral) - Generate a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Generate a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Generate a random decimal.
- [random-index](https://github.com/mock-end/random-index) - Generate a random array-like index.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Generate a random hexadecimal number.
- [random-octal](https://github.com/mock-end/random-octal) - Generate a random octal.
- [random-unicode](https://github.com/mock-end/random-unicode) - Generate a random unicode.
- [random-bool](https://github.com/mock-end/random-bool) - Generate a random boolean (true/false).
- [random-lorem](https://github.com/mock-end/random-lorem) - Generate a random world.
- [random-title](https://github.com/mock-end/random-title) - Generate a random title.
- [random-sentence](https://github.com/mock-end/random-sentence) - Generate a random sentence.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Generate a random paragraph.
- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld.
- [random-domains](https://github.com/mock-end/random-domains) - Generate a random domain name.
- [random-uri](https://github.com/mock-end/random-uri.git) - Generate a random url.
- [random-email](https://github.com/mock-end/random-email) - Generate a random email.
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.
- [random-mobile](https://github.com/mock-end/random-mobile) - Generate a random chinese mobile phone number.
- [random-zipcode](https://github.com/mock-end/random-zipcode) - Generate a random chinese zipcode.
- [random-ipv4](https://github.com/mock-end/random-ipv4) - Generate a random ipv4 address.
- [random-ipv6](https://github.com/mock-end/random-ipv6) - Generate a random ipv6 address.
- [random-color](https://github.com/mock-end/random-color) - Generate a random color.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-char/issues/new).
