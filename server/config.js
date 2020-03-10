require('dotenv').config();
module.exports = {
  port: process.env.Port || 8080,
  db: {
    prod: process.env.DATABASE_URL,
    test: process.env.DATABASE_URL,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
