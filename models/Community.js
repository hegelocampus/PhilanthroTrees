const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  admin: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  citizens: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }],
  date: {
    type: Date,
    default: Date.now
  }

})

module.exports = Community = mongoose.model('communities', CommunitySchema);
