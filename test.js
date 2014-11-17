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
    isDir('.jshintrc', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    isDir('README.md', function (err, dir) {
      if (err) console.log(err);
      dir.should.be.false;
    });
    isDir('LICENSE-MIT', function (err, dir) {
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
    isDir('.jshintrc').should.be.false;
    isDir('README.md').should.be.false;
    isDir('LICENSE-MIT').should.be.false;
  });
});

describe('isDir sync', function () {
  it('should return `true` if the path is a directory', function () {
    isDir('node_modules').should.be.true;
    assert(!isDir('.jshintrc'));
    assert(!isDir('README.md'));
    assert(!isDir('LICENSE-MIT'));

    isFile('.jshintrc').should.be.true;
    isFile('README.md').should.be.true;
    isFile('LICENSE-MIT').should.be.true;
  });

  it('should return `false` if the path is not a directory', function () {
    isDir('.jshintrc').should.be.false;
    isDir('README.md').should.be.false;
    isDir('LICENSE-MIT').should.be.false;
  });

  it('should return `true` if the path is a directory', function () {
    isDir.sync('node_modules').should.be.true;
    assert(!isDir.sync('.jshintrc'));
    assert(!isDir.sync('README.md'));
    assert(!isDir.sync('LICENSE-MIT'));
  });

  it('should return `false` if the path is not a directory', function () {
    isDir.sync('.jshintrc').should.be.false;
    isDir.sync('README.md').should.be.false;
    isDir.sync('LICENSE-MIT').should.be.false;
  });
});