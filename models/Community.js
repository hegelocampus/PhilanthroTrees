const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  admin: {
    type: String,
    required: true
  },
  projects:[String],
  citizens: [String],
  date: {
    type: Date,
    default: Date.now
  }

})

module.exports = Community = mongoose.model('communities', CommunitySchema);