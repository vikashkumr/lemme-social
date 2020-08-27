const router = require('express').Router();
const bcrypt = require('bcryptjs')
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');


// signup route
router.post('/signup', (req,res) => {
    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: "user exist",
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err,
              });
            } else {
              const user = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
              });
              user
                .save()
                .then((result) => {
                  res.status(201).json({
                    message: "user signed up",
                  });
                })
                .catch((err) => {
                  res.status(500).json({
                    error: err,
                  });
                });
            }
          });
        }
    });
});


// sign in route
router.post('/signin', (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
        if(user.length < 1) {
          return res.status(404).json({
            message: 'user not found'
          })
        } else {
          bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err) {
              return res.status(401).json({
                message: 'Auth failed'
              })
            }
            if(result) {
              const token = jwt.sign({
                user
              },process.env.JWT_KEY,{
                expiresIn: '24h'
              })
              return res.status(200).json({
                message: 'Auth success',
                token: token
              });
            }
            return res.status(401).json({
              message: 'Auth failed'
            });
          });
        }
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    });
})


module.exports = router;