require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

const { User } = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

app.post('/signup', (req, res) => {
  const errors = {};
  const userData = new User({
    Username: req.body.Username,
    Password: req.body.Password
  });

  User.findOne({
    where: { Username: req.body.Username }
  }).then(item => {
    if (!item) {
      bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(userData.Password, salt, (err, hasted) => {
          userData.Password = hasted;
          userData
            .save()
            .then(user => {
              if (!user) {
                return res.status(400).json(errors);
              } else {
                res.status(200).json(user);
              }
            })
            .catch(err => console.log(err));
        });
      });
    } else {
      res.json('User Already exist');
    }
  });


});

app.get('/allusers', (req, res) => {
  User.findAll({})
    .then(item => {
      if (!item) {
        res.json('no Users');
      } else {
        res.json(item);
      }
    })
    .catch(err => console.log(err));
});

app.post('/signin', async (req, res) => {
  let user = await User.findAll({
    where: { Username: { [Sequelize.Op.eq]: req.body.Username } }
  });

  if (user.length === 0) {
    return res.status(400).send();
  }

  try {
    if (await bcrypt.compare(req.body.Password, user[0].dataValues.Password)) {
      const payload = user[0].dataValues;
      const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
      res.json({ username: payload.Username, token: token });
    }
  } catch {
    res.status(500).send();
  }
});



app.listen(3000);
