const mongoose = require('mongoose');

const MisinformationLogSchema = new mongoose.Schema({
  url: { type: String, required: true },
  text: { type: String, required: true },
  score: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MisinformationLog', MisinformationLogSchema);
