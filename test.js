'use strict';

require('mocha');
var assert = require('assert');
var isDirectory = require('./');

describe('isDirectory', function() {
  describe('async errors:', function() {
    it('should throw an error when the callback is missing:', function(cb) {
      try {
        isDirectory('foo');
        cb(new Error('expected an error'));
      } catch (err) {
        assert.equal(err.message, 'expected a callback function');
        cb();
      }
    });

    it('should handle errors for bad args', function(cb) {
      isDirectory(null, function(err) {
        assert(err);
        assert.equal(err.message, 'expected filepath to be a string');
        cb();
      });
    });
  });

  describe('async', function() {
    it('should return `true` if the path is a directory', function(cb) {
      isDirectory('node_modules', function(err, dir) {
        if (err) return cb(err);
        assert(dir);
        cb();
      });
    });

    it('should be true when a path is a directory', function(cb) {
      isDirectory('fixtures', function(err, dir) {
        if (err) return cb(err);
        assert(dir);
        cb();
      });
    });

    it('should be false for files that do not exist', function(cb) {
      isDirectory('fee-fie-foe', function(err, dir) {
        if (err) return cb(err);
        assert(!dir);
        cb();
      });
    });

    it('should be `false` if the path is not a directory', function(cb) {
      isDirectory('.eslintrc.json', function(err, dir) {
        if (err) return cb(err);
        assert(!dir);

        isDirectory('README.md', function(err, dir) {
          if (err) return cb(err);
          assert(!dir);
          cb();
        });
      });
    });
  });

  describe('sync', function() {
    it('should throw when invalid arguments are given', function(cb) {
      try {
        isDirectory.sync();
        cb(new Error('expected an error'));
      } catch (err) {
        assert.equal(err.message, 'expected filepath to be a string');
        cb();
      }
    });

    it('should return `true` if the path is a directory', function() {
      assert(isDirectory.sync('node_modules'));
    });

    it('should return `false` if the path is not a directory', function() {
      assert(!isDirectory.sync('.jshintrc'));
      assert(!isDirectory.sync('README.md'));
      assert(!isDirectory.sync('LICENSE'));
    });
  });
});

