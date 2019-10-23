var express = require('express');
var router = express.Router();
const communityRouter = express.Router({ mergeParams: true });

const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');


const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Use the validations to send the error
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
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
                const payload = { id: user.id, username: user.username };

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

router.post('/login', (req, res) => {
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
            const payload = { id: user.id, username: user.username };

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
            errors.user = 'Wrong email/password combo';
            return res.status(422).json({ user: 'Wrong email/password combo' });
          }
        })
    })
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        errors.user = 'User not found';
      } else {
        res.json({
          id: user.id,
          username: user.username,
          hp: user.hp,
          exp: user.exp,
          email: user.email
        });
      }
    },
      errors => {
        res.json({errors: {
          user: errors
        }});
      }
    );
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Community Register Route

router.use("/:user_id", communityRouter)

communityRouter.route("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateCommunity(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    } else {
      const newCommunity = new Community({
        name: req.body.name,
        admin: req.body.admin,
        projects: [],
        citizens: []
      })

      newCommunity
        .save()
        .then(community => res.json(community))
        .catch(err => res.json(err))
    }
  })


module.exports = router;

