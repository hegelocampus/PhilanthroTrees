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
  experience: {
    type: Number,
    default: 0
  },
  communityId: {
    type: Schema.Types.ObjectId,
    required: false
  },
  completedTasks: [],
  pendingInvites: [{
    id:{
      type: String,
      required: false
    },
    name:{
      type: String,
      required: false
    }
  }],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema);

