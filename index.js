/*!
 * is-directory <https://github.com/jonschlinkert/is-directory>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var fs = require('fs');

var isDir = function isDir(filepath, cb) {
  if (typeof cb !== 'function') {
    return isDir.sync(filepath);
  }

  fs.stat(filepath, function (err, stats) {
    if (err) {
      cb(err);
      return;
    }

    cb(null, stats.isDirectory());
    return;
  });
};


isDir.sync = function isDirSync(filepath) {
  if (!fs.existsSync(filepath)) {
    return false;
  }

  var stat = fs.statSync(filepath);
  return stat.isDirectory();
};

module.exports = isDir;