// backend/routes/claims.js

const express = require('express');
const router = express.Router();
const Claim = require('../models/claims');

// GET /api/claims/recent
router.get('/claims/recent', async (req, res) => {
  try {
    const recentClaims = await Claim.find()
      .sort({ createdAt: -1 })
      .limit(50);
    res.json(recentClaims);
  } catch (error) {
    console.error('Error fetching recent claims:', error);
    res.status(500).json({ error: 'Error fetching recent claims.' });
  }
});

module.exports = router;
