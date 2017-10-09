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
  // console.log('========>', sequelize.query, '<=========')
  // console.log('in serevr',req.query)
  // console.log("SELECT * FROM ", 'usersTable')

  // db.connection.query("SELECT * FROM" + db.User, { type: sequelize.QueryTypes.SELECT})
  // .then(function(users) {
  //   console.log('fbydtbfufnygyfydtrdvbgh')
  //   // We don't need spread here, since only the results will be returned for select queries
  // })
  // .catch(err => {
  //   console.log('errrrrrr!!!!!!!')
  // })


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
    // console.log('quizzes', quizzes, '<-------')
    res.send(quizzes);
    // return users;
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

app.post('/api/userscores', function(req, response) {
  // console.log(req.body, 'from post req to endpoint')
  db.User.create({
    username: req.body.username
  })
  .then(res => {
    //console.log(res.dataValues, 'res<-----------')
    db.User_Score.create({
      test_score: req.body.score,
      UserId: res.dataValues.id
    })
    .then(res => {
      console.log('----->', res.dataValues, 'response from User_Score then')
      // response.send(res.dataValues)
    })
  })
  .catch(err => {
    console.log('error')
  })
})


app.post('/api/quizdata', function(req, response) {
  // console.log('POST /api/quizdata req', req.body)


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