/*!
 * is-directory <https://github.com/jonschlinkert/is-directory>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var isDirectory = require('../');

describe('isDirectory', function () {
  it('should return `true` if the path is a directory', function () {
    assert(isDirectory('test'));
    assert(isDirectory('node_modules'));
    assert(!isDirectory('.jshintrc'));
    assert(!isDirectory('README.md'));
    assert(!isDirectory('LICENSE-MIT'));
  });
});