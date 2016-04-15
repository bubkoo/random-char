'use strict';

var randomNatural = require('random-natural');

module.exports = function (pool) {

  var pools = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!@#$%^&*()[]'
  };

  pool = pool || 'lower';
  pool = pools[pool] || pool;

  return pool.charAt(randomNatural(0, pool.length - 1));

};
