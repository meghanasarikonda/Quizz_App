var http = require('http');
var bodyParser = require('body-parser');
var express = require('express')
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.text());

app.use(bodyParser.raw());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('compiled'));

app.get('/api/quizinfo', function(req, res) {
  console.log(req.query.username)
  // get info from database
  var data = ['90%', '100%']
  res.send(data)
})

app.get('/api/usescores', function(req, res) {
  console.log(req.query.username)
  data = ['90%', '100%']
  res.send(data)
})


app.post('/api/quizinfo', function(req, res) {
  console.log('POST /api/quizinfo req', req.body)
  res.send(req.body);
})

app.listen(3000, function() {
  console.log('listening on port 3000');
});
