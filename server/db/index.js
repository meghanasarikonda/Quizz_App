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



var User = db.define('user', {
  username: Sequelize.STRING
});

var Quiz = db.define('quiz', {
  q: Sequelize.STRING,
  a: Sequelize.STRING,
  b: Sequelize.STRING,
  c: Sequelize.STRING,
  d: Sequelize.STRING,
  ans: Sequelize.TEXT
});

var User_Score = db.define('user_score', {
  test_score: Sequelize.INTEGER
});

// force: true will drop the table if it already exists

// describe the model Quiz associations
Quiz.belongsTo(User);
User.hasMany(Quiz);

// describe the model User_Score assoc...
User.hasMany(User_Score);
User_Score.belongsTo(User);
Quiz.hasMany(User_Score);
User_Score.belongsTo(Quiz);


db.sync({
  //force: true
})


exports.User = User;
exports.Quiz = Quiz;
exports.User_Score = User_Score;