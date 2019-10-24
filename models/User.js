const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  hp: {
    type: Number,
    default: 100
  },
  exp: {
    type: Number,
    default: 0
  },
  communityId: {
    type: String,
    required: false
  },
  completedTasks: [],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema);
