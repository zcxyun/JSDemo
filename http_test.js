'use strict';
var _ = require('underscore');
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname;
  var root = path.resolve('.');
  var filepath = path.join(root, pathname);
  fs.stat(filepath, function(err, stat) {
    if (!err && stat.isFile()) {
      console.log('200' + request.url);
      response.writeHead(200);
      fs.createReadStream(filepath, 'utf-8').pipe(response);
    } else if (!err && stat.isDirectory()) {
      fs.readdir(filepath, function(err, files) {
        if (err) {
          return console.error(err);
        }
        files.forEach(function(file) {
          var subFilepath = path.join(filepath, file);
          fs.stat(subFilepath, function(err,stat) {
            if (!err && stat.isFile()) {
              if (file.substring(0,5) === 'index') {
                fs.createReadStream(subFilepath).pipe(response);
              }
            }
          });
        });
      });
    } else {
      console.log('404');
      response.writeHead(404);
      response.end('404');
    }
  });
});
server.listen(8080);

console.log('server is running');
console.log('server is running');

