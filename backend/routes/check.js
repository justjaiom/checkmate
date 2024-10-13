const express = require('express');
const router = express.Router();
const axios = require('axios');
const Claim = require('../models/claims');

// POST /api/fact-check
router.post('/fact-check', async (req, res) => {
  const { text } = req.body;

  // Your prompt
  const prompt = `You are an artificial intelligence agent who will identify whether a piece of text includes one or multiple claims. If the text does indeed contain one or multiple claims, you will verify the accuracy of the claim and rank the accuracy on a score of 1 to 5. If the claim or claims is/are inaccurate, then you will also provide a 20 to 30 word correction for each individual claim for the misinformation. Respond in the following format, with all the different instances of misinformation which you find: 'Numerical Ranking;Corrected information;the exact text of the original claim;Topic of the information'`;

  try {
    // Query Perplexity API
    const response = await axios.post('https://api.perplexity.ai', {
      prompt: `${prompt}\n\n${text}`,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // Process the response
    const processedData = processPerplexityResponse(response.data);

    // Save to MongoDB
    await Claim.insertMany(processedData);

    // Send data back to the Chrome extension
    res.json(processedData);
  } catch (error) {
    console.error('Error querying Perplexity API:', error);
    res.status(500).json({ error: 'Error processing fact-check.' });
  }
});

// Function to process Perplexity API response
function processPerplexityResponse(data) {
  // Implement parsing logic based on the API's response format
  const claims = [];

  // Example parsing (this will depend on actual response format)
  const lines = data.trim().split('\n');
  for (const line of lines) {
    const [ranking, correction, originalClaim, topic] = line.split(';');
    claims.push({
      ranking: parseInt(ranking.trim()),
      correction: correction.trim(),
      originalClaim: originalClaim.trim(),
      topic: topic.trim(),
    });
  }

  return claims;
}

module.exports = router;
