const Sequelize = require('sequelize')
const sequelize = require('../config')

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING , allowNull: false , unique: true },
  password: { type: Sequelize.STRING, allowNull: false },
  admin: Sequelize.BOOLEAN
}, { collation: { locale: 'en', strength: 1 } });



module.exports = User;
