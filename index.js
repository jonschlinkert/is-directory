
'use strict';

var fs = require('fs');
var path = require('path');


module.exports = function isDir() {
  var filepath = path.join.apply(path, arguments);
  if (fs.existsSync(filepath)) {
    return fs.statSync(filepath).isDirectory();
  }
  return false;
};