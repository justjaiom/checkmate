const express = require('express');
const axios = require('axios');
const MisinformationLog = require('../models/MisinformationLog');
const router = express.Router();

// POST /api/verify - Verify misinformation and log it
router.post('/verify', async (req, res) => {
  const { url, text } = req.body;

  if (!text || !url) {
    return res.status(400).json({ error: 'URL and text are required' });
  }

  try {
    // Call OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a misinformation detection assistant.' },
          { role: 'user', content: `Assess the following text and rate the misinformation level on a scale from 1 to 10: "${text}"` }
        ],
        temperature: 0.7,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    const score = parseFloat(response.data.choices[0].message.content);

    // Log the result in MongoDB
    const newLog = new MisinformationLog({ url, text, score });
    await newLog.save();

    res.status(200).json({ score, message: 'Misinformation logged successfully.' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

// GET /api/stats - Retrieve statistics from logs
router.get('/stats', async (req, res) => {
  try {
    const logs = await MisinformationLog.find().sort({ timestamp: -1 }).limit(50);
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to retrieve statistics' });
  }
});

module.exports = router;
