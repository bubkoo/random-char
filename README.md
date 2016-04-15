# random-char
  
> Generate a random character.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/random-char/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/random-char/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/random-char)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/random-char/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/random-char)


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
