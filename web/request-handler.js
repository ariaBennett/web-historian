var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var url = require('url');

// require more modules/folders here!

var actions = {
  'GET': httpHelpers.sendResponse,
  'POST': function(){},
  'OPTIONS': function(){}
};

exports.handleRequest = function (req, res) {

  var action = actions[req.method];
  if(action){
    var name = url.parse(req.url).pathname;
    if (name === null) {
      name = '/';
    }

    action(res, name);
  } else {
    httpHelpers.sendResponse(res, null, 404);
  }
};
