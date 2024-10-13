const axios = require('axios');
const connectDB = require('../config/db');

async function analyzeAndSaveClaim(text) {
    const db = await connectDB();
    const collection = db.collection(process.env.COLLECTION_NAME);

    const prompt = `
        You are an artificial intelligence agent who will identify whether a piece of text includes a claim. If the text does indeed contain a claim, you will verify the accuracy of the claim and rank the accuracy on a score of 1 to 5. If the claim is inaccurate, then you will also provide a 20 to 30 word correction of the claim. Respond in the following format: 'Numerial Ranking;Corrected information;the exact text of the original claim;Topic of the information'
    `;

    try {
        const response = await axios.post(process.env.API_ENDPOINT, {
            prompt: prompt + `\nText: ${text}`,
            temperature: 0.7,
            max_tokens: 250,
            n: 1,
            stop: null,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const result = response.data.choices[0].text.trim();
        console.log('API Response:', result);

        const [ranking, correction, originalClaim, topic] = result.split(';');
        const claimData = {
            ranking: parseInt(ranking),
            correction,
            originalClaim,
            topic,
            analyzedAt: new Date(),
        };

        const insertResult = await collection.insertOne(claimData);
        console.log('Claim saved with ID:', insertResult.insertedId);
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = { analyzeAndSaveClaim };
