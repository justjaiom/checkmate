const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  url: String,
  text: String,
  correctedInfo: String,
  originalClaim: String,
  accuracy: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);
