const user = require('express').Router();
const community = require('./communities');
//const communityRouter = express.Router({ mergeParams: true });
//const express = require('express');

const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Community = require('../../models/Community');


const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

user.post('/register', (req, res) => {
  let { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Use the validations to send the error
        errors.email = 'Email already exists';
        return res.status(422).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = {
                  id: user.id,
                  username: user.username
                };

                jwt.sign(payload,
                  keys.secretOrKey,
                  { expiresIn: 14400 },
                  (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
});

user.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.user = 'Wrong email/password combo';
        return res.status(422).json({ user: 'Wrong email/password combo' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              username: user.username
            };

            jwt.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in four hours
              { expiresIn: 14400 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            res.status(422).json({errors: { user: 'Wrong email/password combo' }});
          }
        })
    })
});

user.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        res.status(422).json({ errors: { user: 'User not found' }});
      } else {
        res.json({
          id: user.id,
          username: user.username,
          hp: user.hp,
          experience: user.experience,
          communityId: user.communityId,
          email: user.email,
          pendingInvites: user.pendingInvites
        });
      }
    },
      errors => {
        res.json({ errors: { user: errors}});
      }
    );
});

// Update Experience for a user

user.patch('/:id', (req, res)=> {
  const userId = req.params.id;
  console.log('The Incoming UserID:', userId);

  User.findOneAndUpdate(
    { _id: userId },
    { experience: req.body.experience,
      pendingInvites: req.body.pendingInvites,
      communityId: req.body.communityId
     },
  ).then(user =>{
    console.log(user);
    return res.json(user)})
    .catch(errors=> res.status(404).json({msg: 'Citizen not updated, please check your entry and try again.'}))
})

// Update User Invites

user.patch('/invite/:emailAddress', (req, res)=>{
  const emailAddress = req.params.emailAddress

  User.findOneAndUpdate(
    { email: emailAddress},
    { $push: { pendingInvites:
      {id: req.body.id,
       name: req.body.name}
     }})
    .then(user => res.json({msg: 'Invite sent!'}))
    .catch(err => res.status(404)
    .json({ msg: 'That user was not found.  Please enter a valid email.'}))

})


// Get the community for a user
user.get('/:id/community', (req, res, next) => {
  User.findById(req.params.id)
    .then(
      user=> {
        if (!user) {
          res.json({ errors: { user: 'User not found' }});
        } else {
          Community.findById(req.params.id)
          res.json(commutities);
        }
      },
      errors => {
        res.json({errors: { user: errors}});
      }
    );
});

/* GET users listing. */
user.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST UserCommunity */
user.use("/:id/community", (req, res, next) => {
  req.id = req.params.id;
  console.log(req.body);
  req.communityData = req.body
  console.log(req.id);
  next()
}, community);

module.exports = user;

