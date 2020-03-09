module.exports = {
  port: process.env.Port || 8080,
  db: {
    prod: process.env.DATABASE_URL ||'mongodb+srv://vishal:mh15al4167@cluster0-bzdvo.mongodb.net/test?retryWrites=true&w=majority',
    test: 'mongodb+srv://vishal:mh15al4167@cluster0-bzdvo.mongodb.net/test?retryWrites=true&w=majority',
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
