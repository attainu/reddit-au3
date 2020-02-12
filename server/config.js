const Sequelize = require("sequelize");
const dotenv = require('dotenv');
dotenv.config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   process.env.JWT_SECRET,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       idle: 10000
//     },
//     logging: false
//   }
// );

const data = {
  "user":"postgres",
  "password":"india123",
  "host":"localhost",
  "port":5432,
  "database":"DB_USER"
}

const sequelize = new Sequelize(data.database,data.user,data.password,{
  host:data.host,
  dialect:data.user,
});




module.exports = sequelize;