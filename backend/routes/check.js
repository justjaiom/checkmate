const express = require('express');
const Log = require('../models/Log');
const { Configuration, OpenAI } = require('openai');
const router = express.Router();

// Configure Perplexity API client
const configuration = new Configuration({
  apiKey: process.env.PERPLEXITY_KEY,
  basePath: 'https://api.perplexity.ai',
});
const client = new OpenAI(configuration);

router.post('/check', async (req, res) => {
  const { text, url } = req.body;

  if (!text || !url) {
    return res.status(400).json({ error: 'Text and URL are required.' });
  }

  try {
    const messages = [
      {
        role: 'system',
        content: (
          "You are an artificial intelligence assistant with the purpose of fact-checking information "
          + "on the internet. Check the accuracy of the following statement and provide an accuracy "
          + "ranking from 1 to 5, the corrected information if any, and the original text of the claim."
        ),
      },
      { role: 'user', content: text },
    ];

    // Call Perplexity's API for chat completion
    const response = await client.chat.completions.create({
      model: 'llama-3-sonar-large-32k-online',
      messages,
    });

    const [accuracy, correctedInfo, originalClaim] = response.choices[0].message.content.split(' - ');

    // Save log to MongoDB
    const log = new Log({
      url,
      text,
      correctedInfo,
      originalClaim,
      accuracy: parseInt(accuracy, 10),
    });

    await log.save();

    res.status(200).json({ accuracy, correctedInfo, originalClaim });
  } catch (error) {
    console.error('Error in /check route:', error.message);
    res.status(500).json({ error: 'Error checking content. Please try again.' });
  }
});

module.exports = router;
