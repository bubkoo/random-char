# random-char
  
> Return a random character.

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

// API
// - randomChar();
// - randomChar(pool);


randomChar();
// => 'g'

randomChar('upper');
// => 'M'

randomChar('aeiou');
// => 'i'
```

By default `randomChar()` will return a string with random character from the following pool.

```js
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&()*_+-={}[]'
```

Optionally specify a pool `randomChar(pool)` and the character will be generated with characters only from that pool.

- `'lower'` - `'abcdefghijklmnopqrstuvwxyz'`
- `'upper'` - `'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`
- `'number'` - `'0123456789'`
- `'symbol'` - `'~!@#$%^&()*_+-={}[]'`
- `'alpha'` - `'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'`
- `'all'` - `'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&()*_+-={}[]'`

**Custom** your pool: `randomChar('some string');`


## Related

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-char/issues/new).
