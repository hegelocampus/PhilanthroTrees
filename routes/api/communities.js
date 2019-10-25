const express = require('express');
const community = express.Router();
const projectRouter = express.Router({ mergeParams: true });

const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Community = require('../../models/Community');
const User = require('../../models/User');
const validateProject = require('../../validation/valid-project');
const validateCommunity = require('../../validation/create_community');


// Project Index Route
community.use('/:communityId/projects', projectRouter)

projectRouter.get('/', (req, res) => {
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

projectRouter.post('/create', (req, res) => {
  let communityId = req.params.communityId;
  let { errors, isValid } = validateProject(req.body);

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
community.get('/:communityId/citizens', (req, res) => {
  let citizens = [];
  Community.findById(req.params.communityId)
    .then(community => {
      for (const user of community.citizens) {
        citizens.push({ [user._id]: user })
      }
      return res.json(citizens);
    })
    .catch(err => res.status(400).json({ err, msg: "an error has occured" }))
})

//TODO User.findById and update needs to happen first so that we can embed the users name into the community citizens array
// Add a Citizen to a Community
community.patch('/:community_id/user/:user_id/citizens',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Community.findByIdAndUpdate(
      req.params.community_id,
      { $push: { citizens: { req.params.user_id } }}
    ).then(
      community => {
        User.findByIdAndUpdate(
          req.params.user_id,
          { $set: { community: community.id }}
        ).then(
          user => res.json({
            user: { [user.id]: user },
            community: { [community.id]: community }
          }),
          //Async server issue prevents the updated community from being pulled here
          err => res.status(422).json(err)
        )
      }),
      err => res.status(422).json(err)
  }
);

community.post("/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const community = req.communityData;
    User.findById(req.id).then(
      user => {
        if (!user) {
          res.status(422).json({
            errors: { user: 'User not found'}
          });
        } else if (user.communityId) {
          res.status(422).json({
            errors: {
              user: 'Please leave your current community before attempting to join another!'
            }
          });
        } else {
          let { errors, isValid } = validateCommunity(req.body);
          if (!isValid) {
            return res.status(422).json(errors);
          } else {
            const newCommunity = new Community({
              name: community.name,
              admin: {
                id: user._id,
                username: user.username,
                ref: user
              },
              projects: [],
              citizens: [{id: user._id, name: user.name}]
            })

            newCommunity
              .save()
              .then(community =>{
                user.update({ communityId: community.id }).then(
                  user=> {
                    res.json({
                      community: {
                        id: community._id,
                        name: community.name,
                        admin: {
                          name: user.name,
                          id: user._id
                        }
                      },
                      user: { id: user._id, communityId: community.id }})
                  })
              })
              .catch(err => res.json(err))
          }
        }
      }
    ).catch(err => res.json(err));
  }
)

community.get('/:id', (req, res) => {
  Community.findById(req.params.id)
    .then(community => {
      if (!community) {
        res.status(422).json({ errors: { community: 'Community not found' }});
      } else {
        res.json({
          id: community._id,
          name: community.name,
          citizens: community.citizens,
          admin: community.admin
        });
      }
    }).catch(err => {
        res.status(422).json({ errors: { community: errors}});
    });
});


module.exports = community;

