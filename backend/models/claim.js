// backend/models/claim.js

const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema(
  {
    ranking: { type: Number, required: true },
    correction: { type: String, required: true },
    originalClaim: { type: String, required: true },
    topic: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Claim', claimSchema);
