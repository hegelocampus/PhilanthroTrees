var express = require('express');
var projectRouter = express.Router();
var taskRouter = express.Router({ mergeParams: true });

projectRouter.use('/:projectId/tasks', taskRouter);

const Project = require('../../models/Project');
const Task = require('../../models/Task');

const validateProject = require('../../validation/valid-project');
const validateTask = require('../../validation/valid-task');


//Project Show

projectRouter.get('/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  return Project.findOne({_id: projectId})
    // .then(project => {
    //   if (!project){
    //     return res.status(404).json({
    //       project: 'Project not found'
    //     })
    //   } else {
    //     return res.json(project);
    //   }
    // })
    .then(project => res.json(project))
    .catch(err => res.status(400).json(errors))
});


//Project Update

projectRouter.patch('/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  const { errors, isValid } = validateProject(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Project.findOneAndUpdate({_id: projectId},
    {
      name: req.body.name,
      description: req.body.description,
      plant: req.body.plant,
      projectHealth: req.body.projectHealth,
      projectExp: req.body.projectExp
    }, {new: true}
  ).then(project => res.json(project));
});

projectRouter.delete('/:projectId', (req, res) => {
  const projectId = req.params.projectId;

  Project.findOneAndDelete({_id: projectId})
    .then(project => res.json(project))
})

taskRouter.get('/', (req, res) => {
  const projectId = req.params.projectId;

  Task.find({ project: projectId })
    .then(tasks => res.json(tasks));
});

taskRouter.post('/create', (req, res) => {
  const projectId = req.params.projectId;
  const { errors, isValid } = validateTask(req.body);

  if (!isValid) {
    console.log('invalid TASK AYE!')
    return res.status(422).json(errors);

  } else {
    const newTask = new Task({
      project: projectId,
      title: req.body.title,
      details: req.body.details
    });
    newTask
    .save()
    .then(task => res.json(task))
    .catch(err => res.status(400).json(errors))
  }
});

module.exports = projectRouter;

