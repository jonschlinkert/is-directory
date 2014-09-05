/*!
 * is-directory <https://github.com/jonschlinkert/is-directory>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var isDir = require('./');

function isFile(filepath) {
  return !isDir(filepath);
}

describe('isDir', function () {
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
});