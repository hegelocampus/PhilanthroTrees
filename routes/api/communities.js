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
  let commDisplay= {};
  Community.findById(req.params.id)
  .then( community => { 
      commDisplay.citizens = community.citizens;
      commDisplay.projects = community.projects;
      return res.json(commDisplay);
    })
  .catch( err => res.status(400).json({err, msg: "an error has occured"}))
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


// Add a Project to a Community
router.patch('/user/:user_id/community/:community_id/projects/',
  passport.authenticate("jwt", { session: false }),
 (req, res) => {

  Community.findOne({ id: req.community.id, admin: req.params.user_id })
  .then(community =>{
    if (community){
      Community.findby(
        {id: req.community.id, admin: req.params.user_id},
        {$push: {projects: req.projects.id}})
        .then((community) => res.json(community))
        .catch(err => res.status(400).json(err))
      }})
  .catch(err => res.json(err))
});




module.exports = router;