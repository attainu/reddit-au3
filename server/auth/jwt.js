const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('../config');
const dotenv = require('dotenv');
dotenv.config();

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (token, done) => done(null, token.user)
);

module.exports = jwtStrategy;
