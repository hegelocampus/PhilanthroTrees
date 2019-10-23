var express = require('express');
var router = express.Router();

const Task = require('../../models/Task');

router.get('/:taskId', (req, res) => {
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

router.patch('/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  Task.findOneAndUpdate(
    { _id: taskId },
    { completed: true },
    { new: true }
  ).then(task => res.json(task))
});

router.delete('/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  Task.findOneAndDelete({ _id: taskId })
    .then(task => res.json(task))
})

module.exports = router;