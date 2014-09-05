
'use strict';

var fs = require('fs');

var isDir = function isDir(filepath, callback) {
  if(typeof callback !== 'function') {
    return isDir.sync(filepath);
  }

  fs.stat(filepath, function(err, stats){
    if(err) {
      callback(err);
      return;
    }

    callback(null, stats.isDirectory());
    return;
  });
};


isDir.sync = function isDirSync(filepath) {
  var stat = fs.statSync(filepath);
  return stat && stat.isDirectory();
};

module.exports = isDir;