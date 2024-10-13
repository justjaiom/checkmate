const express = require('express');
const axios = require('axios');
const Log = require('../models/Log');
const router = express.Router();

router.post('/check', async (req, res) => {
  const { text, url } = req.body;
  try {
    const response = await axios.post('https://api.perplexity.ai/factcheck', {
      prompt: `You are an artificial intelligence assistant with the purpose of fact checking information on the internet. 
      Check the accuracy of the following statement and give it a ranking of accuracy on a scale of 1 to 5, 
      the corrected information if there is any inaccuracy in 20 to 30 words, and the exact text of the claim. 
      Present your response in the following format: "Number - Corrected information - Exact text of claim"`,
      text
    });

    const [accuracy, correctedInfo, originalClaim] = response.data.split(' - ');

    const log = new Log({ url, text, correctedInfo, originalClaim, accuracy });
    await log.save();

    res.status(200).json({ accuracy, correctedInfo, originalClaim });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error checking content.' });
  }
});

module.exports = router;
