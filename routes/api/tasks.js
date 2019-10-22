var express = require('express');
var router = express.Router();

const Task = require('../../models/Task');
const validateTask = require('../../validation/valid-task');

router.get('/projects/:projectId/tasks', (req, res) => {
  const projectId = req.params.projectId;

  Task.find({ project: projectId })
    .then(tasks => res.json(tasks))
    .catch(err =>
      res.status(404).json({
        project: 'No tasks found'
      })
    );
});

router.get('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  Task.findOne({_id: taskId})
    .then(task => {
      if (!task){
        res.status(404).json({
          task: 'Task not found'
        })
      } else {
        res.json(task);
      }
    });
});

router.post('/projects/:projectId/tasks/create', (req, res) => {
  const projectId = req.params.projectId;
  console.log(projectId);
  const { errors, isValid } = validateTask(req.body);

  if (!isValid) {
    return res.status(422).json(errors);
  }

  const newTask = new Task({
    project: projectId,
    title: req.body.title,
    details: req.body.details
  });

  newTask
    .save()
    .then(task => res.json(task))
    .catch(err => res.status(400).json(errors))
});

router.patch('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  Task.findOneAndUpdate(
    { _id: taskId },
    { completed: true },
    { new: true }
  ).then(task => res.json(task))
});

router.delete('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  Task.findOneAndDelete({ _id: taskId })
    .then(task => res.json(task))
})

module.exports = router;