var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Community = require('../../models/Community');


// Get a list of Community's to join.

router.get("/", (req, res)=>{
  Community.find().skip(numItems*(req.body.pgNum - 1))
  .limit(numItems)
  .then(communities => res.json(communities))
})

// Create a Community 
router.post("/users/:user_id", (req, res) => {

  const newCommunity = new newCommunity({
    name: req.body.name,
    admin: req.user.id,
    projects: req.body.projects,
    citizens: []
  })

  newCommunity
    .save()
    .then(community => res.json(community))
})


// Add a Citizen to a Community
router.patch('/users/:user_id/community/:community_id/citizens', (req, res) => {
  
  Community.findOne(({ id: req.community.id }))
  .then(community => {
    community.update(
      { $push: { citizens: req.user.id } }
      )
    }
    )
    
    /* db.communities.update(
      {id: req.community.id},
      {$push: {citizens: req.user.id}}
      )*/
      
});


// Add a Project to a Community
router.patch('/users/:user_id/community/:community_id/projects/', (req, res) => {

  // Community.findOne(({ id: req.community.id }))
  //   .then(community => {
  //     community.update(
  //       { $push: { projects: req.user.id } }
  //     )
  //   }
  //   )

  db.communities.find(
    {id: req.community.id},
    {$push: {projects: req.projects.id}}
  )
});




module.exports = router;