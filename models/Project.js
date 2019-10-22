const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  plant: {
    type: String,
    required: true
  },
  projectHealth: {
    type: Number,
    default: 100
  },
  projectExp: {
    type: Number,
    default: 0
  },
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community'
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Project = mongoose.model('projects', ProjectSchema);
