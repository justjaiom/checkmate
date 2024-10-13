;
const { OpenAI } = require('openai');
const fs = require('fs').promises;
const text = require('../googextension/popup');
console.log(text); 


const YOUR_API_KEY = "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";

const messages = [
  {
    role: "system",
    content: "You are an artificial intelligence agent who will identify whether a piece of text includes one or multiple claims. If the text does indeed contain one or multiple claims, you will verify the accuracy of the claim and rank the accuracy on a score of 1 to 5. If the claim or claims is/are inaccurate, then you will also provide a 20 to 30 word correction for each individual claim. Respond EXACTLY in the following format, with all the different claims which you find: **Numerical Ranking;Corrected information;Copy of the claim made;Topic of the information** Please follow this format exactly. Do not choose a number other than between 1 and 5. If a claim is entirely untrue, then choose 1. If there is partial truth or partial misinformation, choose 2, 3, or 4. If the statement is entirely accurate, choose 5. Remember that more likely than not, it is NOT 1 or 5"
  },
  {
    role: "user",
    content: text,
  }
];

const client = new OpenAI({
  apiKey: YOUR_API_KEY,
  baseURL: "https://api.perplexity.ai"
});

async function main() {
  try {
    // Chat completion without streaming
    const response = await client.chat.completions.create({
      model: "llama-3.1-sonar-small-128k-online",
      messages: messages,
    });

    const responseStr = JSON.stringify(response);
    console.log(responseStr);

    await fs.appendFile("demofile.txt", responseStr);

    const parsedClaims = parseClaims(responseStr);
    console.log(JSON.stringify(parsedClaims, null, 2));

    // Uncomment the following section for streaming
    /*
    const responseStream = await client.chat.completions.create({
      model: "llama-3.1-sonar-small-128k-online",
      messages: messages,
      stream: true,
    });

    for await (const response of responseStream) {
      console.log(response);
    }
    */
  } catch (error) {
    console.error("Error:", error);
  }
}

function parseClaims(text) {
  const claimPattern = /\*\*Claim (\d+): (.*?)\*\*/gs;
  const rankingPattern = /\*\*Ranking: (\d+)\*\*/;
  const correctedInfoPattern = /\*\*Corrected Information: (.*?)\*\*/s;
  const topicPattern = /\*\*Topic of the Information: (.*?)\*\*/s;

  const claims = [];
  let match;

  while ((match = claimPattern.exec(text)) !== null) {
    const [, number, claimText] = match;

    const rankingMatch = claimText.match(rankingPattern);
    const ranking = rankingMatch ? parseInt(rankingMatch[1]) : null;

    const correctedInfoMatch = claimText.match(correctedInfoPattern);
    const correctedInfo = correctedInfoMatch ? correctedInfoMatch[1].trim() : "N/A";

    const topicMatch = claimText.match(topicPattern);
    const topic = topicMatch ? topicMatch[1].trim() : "N/A";

    claims.push({
      claim_number: parseInt(number),
      claim_text: claimText.split('\n')[0],
      ranking: ranking,
      corrected_information: correctedInfo,
      topic: topic,
    });
  }

  return claims;
}

main();