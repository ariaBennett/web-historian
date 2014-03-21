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
      var storeUrl = url.parse(req.url).pathname;
      if(storeUrl === '/'){
        httpHelpers.serveAssets(res, './public/index.html');
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
      req.on('data', function(data){
        var urlName = data + '';
        urlName = urlName.slice(4);
      });
    }

  }
  else {
    httpHelpers.sendResponse(res, null, 404);
  }
};
