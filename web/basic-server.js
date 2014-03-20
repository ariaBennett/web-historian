var http = require("http");
var handler = require("./request-handler");
var httpHelpers = require("./http-helpers");
var url = require('url');

var port = 8080;
var ip = "127.0.0.1";

var routes = {
  '/': handler.handleRequest
};

var router = function(req, res) {
  var parsedUri = url.parse(req.url);
  var path = parsedUri.pathname;
  if(routes[path] === undefined){
    routes[path] = handler.handleRequest;
  }

  var route = routes[path];
  if (route) {
    route(req, res);
  } else {
    httpHelpers.sendResponse(res, null, 404);
  }

};

var server = http.createServer(router);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

