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
  id: {
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

// describe the model Quiz associations
User.hasMany(Quiz, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});
Quiz.belongsTo(User, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});


// describe the model User_Score assoc...
//console.log('!!!!!!!!!', db.query, '!!!!!!!!!!')
User.hasMany(User_Score, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});
User_Score.belongsTo(User, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});
Quiz.hasMany(User_Score, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});
User_Score.belongsTo(Quiz, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});

// force: true will drop the table if it already exists
db.sync({
  // force: true
})


exports.User = User;
exports.Quiz = Quiz;
exports.User_Score = User_Score;
exports.connection = db;