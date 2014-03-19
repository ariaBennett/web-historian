var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      httpHelpers.sendResponse(res, '<input></input>');
    }
  }
};
