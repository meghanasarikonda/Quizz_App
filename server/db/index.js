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



var User = db.define('User', {
  username: Sequelize.STRING,
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
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

var User_Score = db.define('user_score', {
  test_score: Sequelize.INTEGER
});

// force: true will drop the table if it already exists

// describe the model Quiz associations
User.hasMany(Quiz, {foreignKey: 'user_id', sourceKey: 'user_id', constraints: false});
Quiz.belongsTo(User, {foreignKey: 'user_id', sourceKey: 'user_id', constraints: false});


// describe the model User_Score assoc...
// User.hasMany(User_Score);
// User_Score.belongsTo(User);
// Quiz.hasMany(User_Score);
// User_Score.belongsTo(Quiz);


db.sync({
  // force: true
})


exports.User = User;
exports.Quiz = Quiz;
exports.User_Score = User_Score;