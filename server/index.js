const app = require('./app');
const sequelize = require("./config");
const config = require('./config');

// DB Connection
sequelize
  .sync()
  .then(function(err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function(err) {
    console.log("Unable to connect to the database:", err.message);
  });


  const PORT = process.env.PORT || 3000;
  app.listen(PORT, console.log(`Server Running at ${PORT}`));