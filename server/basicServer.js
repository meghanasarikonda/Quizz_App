var http = require('http');
var bodyParser = require('body-parser');
var express = require('express')
var app = express();
var Quiz = require('./db/index')

app.use(bodyParser.json());

app.use(bodyParser.text());

app.use(bodyParser.raw());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('compiled'));

app.get('/api/quizinfo', function(req, res) {

})

app.get('/api/usescores', function(req, res) {

})


app.post('/api/quizdata', function(req, res) {
  console.log('POST /api/quizdata req', req.body)
  Quiz.Quiz.sync()
  .then(function() {
    Quiz.Quiz.create({
      q: req.body.question,
      a: req.body.a,
      b: req.body.b,
      c: req.body.c,
      d: req.body.d,
      ans: req.body.answer
    })
  })
  res.send('postedSuccessfully');
})

app.listen(3000, function() {
  console.log('listening on port 3000');
});
