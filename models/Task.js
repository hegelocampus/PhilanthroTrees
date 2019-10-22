const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String
  },
  expGain: {
    type: Number,
    default: 10
  },
  completed: {
    type: Boolean,
    default: false
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Task = mongoose.model('tasks', TaskSchema);
