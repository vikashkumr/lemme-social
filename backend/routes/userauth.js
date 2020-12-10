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
            error: "user exist"
          });
        } else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err,
              });
            } else {
              const user = new User({
                name: req.body.name,
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
            error: err
          })
        } else {
          bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err) {
              return res.status(401).json({
                error: err
              })
            }
            if(result) {
              const token = jwt.sign({
                user
              },process.env.JWT_KEY,{
                expiresIn: '24h'
              })
              const {_id, name, email, followers, following} = user[0]
              return res.status(200).json({
                token, user:{_id, name, email, followers, following}
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