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
  console.log('in serevr',req.query)
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

app.post('/api/userscores', function(req, response) {
  console.log(req.body, 'from post req to endpoint')
  db.User.create({
    username: req.body.username
  })
  .then(res => {
    db.User_Score.create({
      test_score: req.body.score,
      UserUserId: res.dataValues.user_id
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
    console.log('---->', res.dataValues)
    db.Quiz.create({
      UserId: res.dataValues.id,
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
})