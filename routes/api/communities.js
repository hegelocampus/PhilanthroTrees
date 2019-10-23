var express = require('express');
var router = express.Router();
const projectRouter = express.Router({ mergeParams: true });

const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Community = require('../../models/Community');
const User = require('../../models/User');
const validateProject = require('../../validation/valid-project');


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

//Project Create Route

projectRouter.route('/create', (req, res) => {
  const communityId = req.params.communityId;
  const { errors, isValid } = validateProject(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProject = new Project({
    name: req.body.name,
    description: req.body.description,
    plant: req.body.plant,
    community: communityId
  });

  newProject
    .save()
    .then(project => res.json(project))
    .catch(err => res.status(400).json(errors))
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
    Community.findByIdAndUpdate(
      req.params.community_id,
      { $push: { citizens: req.params.user_id }}
    ).then(
      community => {
        User.findByIdAndUpdate(
          req.params.user_id,
          { $push: { community: community.id }}
        ).then(
          user => res.json({
            users: { [user.id]: user },
            communties: { [community.id]: community }
          }),
          //Async server issue prevents the updated community from being pulled here
          err => res.status(400).json(err)
        )
      }),
      err => res.status(400).json(err)
  }
);

module.exports = router;

