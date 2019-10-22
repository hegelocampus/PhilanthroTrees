var express = require('express');
var router = express.Router();

const Project = require('../../models/Project');
const validateProject = require('../../validation/valid-project');

///communities/:communityId/projects
router.get('/projects', (req, res) => {
  const communityId = req.params.communityId;

  Project.find({community: communityId})
    .then(projects => res.json(projects))
    .catch(err =>
      res.status(404).json({
        project: 'No projects found'
      })
    );
});

///communities/:communityId/projects/:projectId
router.get('/projects/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  Project.findOne({id: projectId})
    .then(project => res.json(project))
    .catch(err => 
      res.status(404).json({
        project: 'Project not found'
      }))
});

//'/communities/:communityId/projects/create'
router.post('/create', (req, res) => {
  const { errors, isValid } = validateProject(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProject = new Project({
    name: req.body.name,
    description: req.body.description,
    plant: req.body.plant,
    community: req.body.communityId
    // community: req.params.communityId
  });

  newProject  
    .save()
    .then(project => res.json(project))
});

router.patch('/projects/:projectId/edit', (req, res) => {
  const projectId = req.params.projectId;

  const { errors, isValid } = validateProject(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Project.findOneAndUpdate({id: projectId},
    {
      name: req.body.name,
      description: req.body.description
    }
  ).then(project => res.json(project));
});

router.delete('/projects/:projectId/delete', (req, res) => {
  const projectId = req.params.projectId;

  Project.findOneAndDelete({id: projectId})
    .then(project => res.json(project))
})

module.exports = router;

