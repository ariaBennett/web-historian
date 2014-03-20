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
    //<<<<
    console.log(req.url);
    //>>>>
    // if (name === null) {
    //   name = '/';
    // }
    if(req.method === 'GET') {
      var storeUrl = req.url;
      if(req.url === '/'){
        storeUrl = '<input></input>';
      }
      action(res, {url: storeUrl});
    } else if (req.method === 'POST'){
      var storeUrl = req._postData;
      storeUrl.url = storeUrl.url + '\n';
      action(res, storeUrl);
    }
    //action(res, {url: name});
    // action(res, req._postData);

  } else {
    httpHelpers.sendResponse(res, null, 404);
  }
};
