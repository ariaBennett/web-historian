var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var helpers = this;

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
  response.end(object);
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


  fs.appendFile(archive.paths.list, object);
  response.writeHead(status, headers);
  response.end(JSON.stringify(object));

};

exports.serveAssets = function(res, asset) {
  fs.readFile(path.join(__dirname, asset), function(err, data){
    if(err) {
      helpers.sendResponse(res, null, 404);
    } else {
      console.log("serveAssets", data);

    }
    helpers.sendResponse(res, data);
  });
};

