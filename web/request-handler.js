var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var url = require('url');

// require more modules/folders here!

var actions = {
  'GET': httpHelpers.sendResponse,
  'POST': httpHelpers.postSite,
  // 'OPTIONS': function(){}
};

exports.handleRequest = function (req, res) {
  var action = actions[req.method];
  if(action){

    if(req.method === 'GET') {
      // var parsedUri = url.parse(req.url);
      // var path = parsedUri.pathname;
      var storeUrl = url.parse(req.url).pathname;
      if(storeUrl === '/'){
        action(res, {url: '<input></input>'});
      } else {
        storeUrl = storeUrl.slice(1);
        archive.isUrlInList(storeUrl, function(result){
          if(result === true){
            action(res, {url: storeUrl});
          }else{
            httpHelpers.sendResponse(res, null, 404);
          }
        });
      }
    } else if (req.method === 'POST'){
      var storeUrl = req._postData;
      storeUrl.url = storeUrl.url + '\n';
      action(res, storeUrl);
    }

  }
  else {
    httpHelpers.sendResponse(res, null, 404);
  }
};
