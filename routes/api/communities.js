var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Community = require('../../models/Community');


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



router.patch('/users/:user_id/community/:community_id', (req, res) => {
  
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

module.exports = router;