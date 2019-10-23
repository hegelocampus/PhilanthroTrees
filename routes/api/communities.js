var express = require('express');
var router = express.Router();
const projectRouter = express.Router({ mergeParams: true });

const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Community = require('../../models/Community');
const User = require('../../models/User');
const validateCommunity = require('../../validation/create_community');

// Project Index Route
router.use('/:communityId/projects', projectRouter)

projectRouter.route('/', (req, res) => {
  const communityId = req.params.communityId;

  Project.find({ community: communityId })
    .then(projects => res.json(projects))
    .catch(err =>
      res.status(404).json({
        project: 'No projects found'
      })
    );
});


// Citizen Index
router.get('/:communityId/citizens', (req, res) => {
  let citizens = [];
  Community.findById(req.params.communityId)
    .then(community => {
      for (const user of community.citizens) {
        citizens.push({ [user.id]: user })
      }
      return res.json(citizens);
    })
    .catch(err => res.status(400).json({ err, msg: "an error has occured" }))
})


// Add a Citizen to a Community
router.patch('/:community_id/user/:user_id/citizens',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.params.user_id)
    .then(
      Community.findByIdAndUpdate(
        req.params.community_id,
        { $push: { citizens: req.params.user_id } })
        .then((community)=> (res.json(`You've joined the ${community.name} Community!`)))
        //Async server issue prevents the updated community from being pulled here 
        .catch(err => res.status(400).json(err))
    ).catch(err => res.json(err))
});


module.exports = router;

