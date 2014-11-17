/*!
 * is-directory <https://github.com/jonschlinkert/is-directory>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var fs = require('fs');

/**
 * Expose `isDir`
 */

module.exports = isDir;

function isDir(filepath, cb) {
  if (typeof cb !== 'function') {
    return isDir.sync(filepath);
  }

  fs.stat(filepath, function(err, stats) {
    if (err) {
      cb(err);
      return;
    }

    cb(null, stats.isDirectory());
    return;
  });
}

isDir.sync = function isDirSync(filepath) {
  try {
    var stat = fs.statSync(filepath);
    return stat.isDirectory();
  } catch(err) {}
  return false;
};
