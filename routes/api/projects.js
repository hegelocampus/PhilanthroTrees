var express = require('express');
var router = express.Router();

const Project = require('../../models/Project');
const validateProject = require('../../validation/valid-project');

///communities/:communityId/projects
router.get('/', (req, res) => {
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
router.get('/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  Project.findOne({_id: projectId})
    .then(project => {
      if (!project){
        res.status(404).json({
          project: 'Project not found'
        })
      } else {
        res.json(project);
      }
    });
});

//'/communities/:communityId/projects/create'
router.post('/create', (req, res) => {
  // const communityId = req.params.communityId;
  const { errors, isValid } = validateProject(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newProject = new Project({
    name: req.body.name,
    description: req.body.description,
    plant: req.body.plant
    // community: communityId
  });

  newProject  
    .save()
    .then(project => res.json(project))
    .catch(err => res.status(400).json(errors))
});

router.patch('/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  const { errors, isValid } = validateProject(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Project.findOneAndUpdate({_id: projectId},
    {
      name: req.body.name,
      description: req.body.description,
      plant: req.body.plant
    }, {new: true}
  ).then(project => res.json(project));
});

router.delete('/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  Project.findOneAndDelete({_id: projectId})
    .then(project => res.json(project))
})

module.exports = router;

