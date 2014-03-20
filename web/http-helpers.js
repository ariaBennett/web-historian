var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.sendResponse = function(response, object, status){
  var headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10, // Seconds.
    'Content-Type': "text/html"
  };
  //read file

  //compare files

  //if fails then status should be 404
  status = status || 200;
  response.writeHead(status, headers);
  response.end(JSON.stringify(object));
};

//<<<<
exports.postSite = function(response, object, status){
  var headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10, // Seconds.
    'Content-Type': "text/html"
  };

  status = status || 302;


  fs.appendFile(archive.paths.list, object.url);
  response.writeHead(status, headers);
  response.end(JSON.stringify(object));

};
//>>>>

exports.serveAssets = function(res, asset) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
};

// As you progress, keep thinking about what helper functions you can put here!
