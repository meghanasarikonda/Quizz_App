var http = require('http');
var express = require('express')
var app = express();

app.get('/', function(req, res) {
  res.end('hello, world')
}).listen(3000, function() {
  console.log('listening on port 3000');
});