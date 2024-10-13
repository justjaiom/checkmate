const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  url: { type: String, required: true },
  text: { type: String, required: true },
  correctedInfo: { type: String },
  originalClaim: { type: String, required: true },
  accuracy: { type: Number, required: true, min: 1, max: 5 },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);
