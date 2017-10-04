var Sequelize = require('sequelize');

var db = new Sequelize('quiz', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Quiz = db.define('Quiz', {
  q: Sequelize.STRING,
  a: Sequelize.STRING,
  b: Sequelize.STRING,
  c: Sequelize.STRING,
  d: Sequelize.STRING,
  ans: Sequelize.TEXT

});

// force: true will drop the table if it already exists


Quiz.sync({
  force:true
})
.then(function() {
  Quiz.create({
    q: "what is today",
    a: "sunny",
    b: "windy",
    c: "dusty",
    d: "rainy",
    ans: "a"
  })
})



exports.Quiz = Quiz;