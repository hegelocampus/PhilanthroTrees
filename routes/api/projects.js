var express = require('express');
var router = express.Router();

const Project = require('../../models/project');
const validateProject = require('../../validation/valid-project');

router.get('/communities/:communityId/projects', (req, res) => {
  const communityId = req.params.communityId;

  Project.find({community: communityId})
    .then(projects => res.json(projects))
    .catch(err =>
      res.status(404).json({
        project: 'No projects found'
      })
    );
});

router.get('/communities/:communityId/projects/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  Project.findOne({id: projectId})
    .then(project => res.json(project))
    .catch(err => 
      res.status(404).json({
        project: 'Project not found'
      }))
});

router.post('/communities/:communityId/projects/create', (req, res) => {
  const { errors, isValid } = validateProject(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProject = new Project({
    name: req.body.name,
    description: req.body.description,
    plant: req.body.plant,
    community: req.params.communityId
  });

  newProject  
    .save()
    .then(project => res.json(project))
});