/*!
 * is-directory <https://github.com/jonschlinkert/is-directory>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var assert = require('assert');
var isDir = require('./');

function isFile(filepath, cb) {
  return !isDir(filepath, cb);
}

describe('isDir', function () {
  it('should return `true` if the path is a directory', function (done) {
    isDir('node_modules', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.true;
    });
    !isDir('.jshintrc', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    !isDir('README.md', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    !isDir('LICENSE-MIT', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });

    isFile('.jshintrc', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    isFile('README.md', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    isFile('LICENSE-MIT', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    done();
  });

  it('should return `false` if the path is not a directory', function () {
    assert.equal(isDir('.jshintrc'), false);
    assert.equal(isDir('README.md'), false);
    assert.equal(isDir('LICENSE-MIT'), false);
  });
});

describe('isDir sync', function () {
  it('should return `true` if the path is a directory', function () {
    assert(isDir('node_modules'));
    assert(!isDir('.jshintrc'));
    assert(!isDir('README.md'));
    assert(!isDir('LICENSE-MIT'));

    assert(isFile('.jshintrc'));
    assert(isFile('README.md'));
    assert(isFile('LICENSE-MIT'));
  });

  it('should return `false` if the path is not a directory', function () {
    assert.equal(isDir('.jshintrc'), false);
    assert.equal(isDir('README.md'), false);
    assert.equal(isDir('LICENSE-MIT'), false);
  });

  it('should return `true` if the path is a directory', function () {
    assert(isDir.sync('node_modules'));
    assert(!isDir.sync('.jshintrc'));
    assert(!isDir.sync('README.md'));
    assert(!isDir.sync('LICENSE-MIT'));
  });

  it('should return `false` if the path is not a directory', function () {
    assert.equal(isDir.sync('.jshintrc'), false);
    assert.equal(isDir.sync('README.md'), false);
    assert.equal(isDir.sync('LICENSE-MIT'), false);
  });
});