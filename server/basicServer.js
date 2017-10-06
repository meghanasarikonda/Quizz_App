var http = require('http');
var bodyParser = require('body-parser');
var express = require('express')
var app = express();
var db = require('./db/index')

app.use(bodyParser.json());

app.use(bodyParser.text());

app.use(bodyParser.raw());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('compiled'));

app.get('/api/quizzes', function(req, res) {
  // console.log('in serevr',req.query)
  db.Quiz.findAll()
  .then(quizzes => {
    res.send(quizzes);
    // return users;
  })
})

app.get('/api/userscores', function(req, res) {

})


app.post('/api/quizdata', function(req, response) {
  console.log('POST /api/quizdata req', req.body)


  db.User.create({
    username: req.body.username
  })
  .then(res => {
    // console.log('---->', res)
    db.Quiz.create({
      user_id: res.dataValues.user_id,
      q: req.body.question,
      a: req.body.a,
      b: req.body.b,
      c: req.body.c,
      d: req.body.d,
      ans: req.body.answer
    })
    .then(res => {
      response.send('postedSuccessfully');
    })
    .catch(err => {
      console.log('error in creating Quiz', err)
    })
  })
  .catch(err => {
    response.status(500)
    response.send('postFailed')
    console.log(err);
  })

})

app.listen(3000, function() {
  console.log('listening on port 3000');
});
