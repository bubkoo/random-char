'use strict';

var isNil         = require('is-nil');
var toString      = require('to-str');
var randomNatural = require('random-natural');

var pools = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '~!@#$%^&()*_+-={}[]'
};

pools.alpha        = pools.lower + pools.upper;
pools['all']       = pools.lower + pools.upper + pools.number + pools.symbol;
pools['default']   = pools['all'];
pools['undefined'] = pools['all'];


module.exports = function (pool) {

  if (isNil(pool)) {
    pool = 'all';
  }

  pool = toString(pool) || 'all';
  pool = pools[pool] || pool;

  return pool.charAt(randomNatural(0, pool.length - 1));
};
