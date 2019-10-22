var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Community = require('../../models/Community');
const User = require('../../models/User');
const validateCommunity = require('../../validation/create_community');

// Get a list of Community's to join.

router.get("/", (req, res)=>{
  Community.find().skip(0) //  numItems * (req.body.pgNum - 1)
  .limit(5)
  .then(communities => res.json(communities))
})

// Show a Community

router.get("/:id", (req, res)=> {
  let commDisplay;
  Community.findById(req.params.id)
  .then(
    community => { 
      commDisplay.citizens = community.citizens;
      commDisplay.projects = community.projects;
      return res.json(commDisplay);
    })
  .catch(err=>res.status(400).json.err)
})

// Create a Community 
router.post("/users/:user_id/", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateCommunity(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }else{
    const newCommunity = new Community({
      name: req.body.name,
      admin: req.body.admin,
      projects: [],
      citizens: []
    })
    
    newCommunity
    .save()
    .then(community => res.json(community))
    .catch(err=>res.json(err))
  }
})


// Add a Citizen to a Community
router.patch('/user/:user_id/community/:community_id/citizens',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let errors;

    User.findOne({ _id: req.params.user_id }).then(user => {
      if (user) {   

      Community.find(
        { id: req.community.id },
        { $push: { citizens: req.params.user_id } })
        .then((community)=> res.json(community))
        .catch(err => res.status(400).json(err))
        
      }else{
        errors.user = "Invalid user";
        return res.status(400).json(errors);
      }
      /* db.communities.update(
        {id: req.community.id},
        {$push: {citizens: req.user.id}}
        )*/
    })
});


// Add a Project to a Community
router.patch('/user/:user_id/community/:community_id/projects/',
  passport.authenticate("jwt", { session: false }),
 (req, res) => {

  Community.find(
    {id: req.community.id, admin: req.params.user_id},
    {$push: {projects: req.projects.id}})
    .then((community) => res.json(community))
    .catch(err => res.status(400).json(err))
});




module.exports = router;