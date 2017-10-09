var http = require('http');
var bodyParser = require('body-parser');
var express = require('express')
var app = express();
var db = require('./db/index')
var sequelize = require('sequelize');

app.use(bodyParser.json());

app.use(bodyParser.text());

app.use(bodyParser.raw());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('compiled'));

app.get('/api/quizzes', function(req, res) {

  db.Quiz.findAll({
    include: [{
      model: db.User,
      where: {
        username: {
          $ne: req.query.username
        }
      }
    }]
  })
  .then(quizzes => {
    res.send(quizzes);
  })
  .catch(err => {
    console.log('error in findAll query', err)
  })
})

app.get('/api/createdQuizzes', function(req, res) {
  db.Quiz.findAll({
    include: [{
      model: db.User,
      where: {
        username: {
          $eq: req.query.username
        }
      }
    }]
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log('err in getting createdQuizzes data');
  })
})

app.get('/api/delete', function(req, res) {
  db.Quiz.destroy({
    where: {
      q: {
        $eq: req.query.question
      }
    }
  })
  .then(result => {
    console.log('------>', result, '<-----')
  })
  .catch(err => {
    console.log('error in deleting data from db')
  })
})

app.post('/api/update', function(req, res) {

  db.Quiz.update(
    {q: req.body.question},
    {where: {
      q: {
        $eq: req.body.prevQuestion
      }
    }}
  )
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log('failed to update in db')
  })
})

app.post('/api/userscores', function(req, response) {

  db.User.create({
    username: req.body.username
  })
  .then(res => {

    db.User_Score.create({
      test_score: req.body.score,
      UserId: res.dataValues.id
    })
    .then(res => {
      console.log('----->', res.dataValues, 'response from User_Score then')

    })
  })
  .catch(err => {
    console.log('error')
  })
})


app.post('/api/quizdata', function(req, response) {

  db.User.create({
    username: req.body.username
  })
  .then(res => {
    console.log('---->', res)
    db.Quiz.create({
      UserId: res.dataValues.id,
      q: req.body.q,
      a: req.body.a,
      b: req.body.b,
      c: req.body.c,
      d: req.body.d,
      ans: req.body.ans
    })
    .then(res => {
      response.send(res);
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
})