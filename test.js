/*!
 * is-directory <https://github.com/jonschlinkert/is-directory>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var isDir = require('./');


describe('isDir', function () {
  it('should return `true` if the path is a directory', function (done) {
    isDir('node_modules', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.true;
    });
    done();
  });

  it('should return `false` if the path is not a directory', function (done) {
    isDir('.jshintrc', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    isDir('README.md', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    done();
  });

  describe('errors:', function () {
    it('should return errors in the callback:', function () {
      isDir('LICENSE-MIT', function (err, dir) {
        err.errno.should.equal(-2);
        err.code.should.equal('ENOENT');
        err.path.should.equal('LICENSE-MIT');
      });
    });

    it('should throw an error on bad args:', function () {
      (function() {
        isDir();
      }).should.throw('is-directory async expects filepath to be a string.');
    });

    it('should throw an error when the callback is missing:', function () {
      (function() {
        isDir('foo');
      }).should.throw('is-directory async expects a callback function.');
    });
  });
});

describe('isDir sync', function () {
  it('should throw an error one bad args:', function () {
    (function() {
      isDir.sync();
    }).should.throw('is-directory sync expects filepath to be a string.');
  });

  it('should return `true` if the path is a directory', function () {
    isDir.sync('node_modules').should.be.true;
  });

  it('should return `false` if the path is not a directory', function () {
    isDir.sync('.jshintrc').should.be.false;
    isDir.sync('README.md').should.be.false;
    isDir.sync('LICENSE-MIT').should.be.false;
  });
});
