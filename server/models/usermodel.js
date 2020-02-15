module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    Username: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    Password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return User;
};
