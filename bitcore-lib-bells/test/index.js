'use strict';

var should = require('chai').should();
var bellcore = require('../');

describe('#versionGuard', function() {
  it('global._bellcore should be defined', function() {
    should.equal(global._bellcore, bellcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      bellcore.versionGuard('version');
    }).should.throw('More than one instance of bellcore');
  });
});
