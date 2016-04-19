'use strict';

var randomNatural = require('random-natural');

var pools = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '~!@#$%^&()*_+-={}[]'
};

pools.alpha        = pools.lower + pools.upper;
pools['all']       = pools.lower + pools.upper + pools.number + pools.symbol;
pools['undefined'] = pools['all'];


module.exports = function (pool) {

  pool = pool || 'lower';
  pool = pools[pool] || pool;

  return pool.charAt(randomNatural(0, pool.length - 1));

};
