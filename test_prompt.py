from openai import OpenAI

YOUR_API_KEY = ""

messages = [
    {
        "role": "system",
        "content": (
            "You are an artificial intelligence agent who will identify whether a piece of text includes one or multiple claims. If the text does indeed contain one or multiple claims, you will verify the accuracy of the claim and rank the accuracy on a score of 1 to 100. If the claim or claims is/are inaccurate, then you will also provide a 20 to 30 word correction for each individual claim. Respond EXACTLY in the following format, with all the different claims which you find: **Numerical Ranking;Corrected information;Copy of the claim made;Topic of the information** Please follow this format exactly. Do not choose a number other than between 1 and 100. If a claim is entirely untrue, then choose 1. If there is partial truth or partial misinformation, choose 2 through 99. If the statement is entirely accurate, choose 100."
        ),
    },
    {
        "role": "user",
        "content": (
            "Donald Trump was shot, and the government did it. Tim Walz has an autistic son. There are microchips in vaccines. Receipts may be covered in poisonous BPA. Apple intentionally slows down phones."
        ),
    },
]

client = OpenAI(api_key=YOUR_API_KEY, base_url="https://api.perplexity.ai")

# chat completion without streaming
response = str(client.chat.completions.create(
    model="llama-3.1-sonar-small-128k-online",
    messages=messages,
))
print(response)
f  = open("demofile.txt", "a")
f.write(response)
f.close()


import re
import json

def parse_claims(text):
    # Regex patterns to capture relevant sections
    claim_pattern = re.compile(r"\*\*Claim (\d+): (.*?)\*\*", re.DOTALL)
    ranking_pattern = re.compile(r"\*\*Ranking: (\d+)\*\*")
    corrected_info_pattern = re.compile(r"\*\*Corrected Information: (.*?)\*\*", re.DOTALL)
    topic_pattern = re.compile(r"\*\*Topic of the Information: (.*?)\*\*", re.DOTALL)

    claims = []
    sections = claim_pattern.findall(text)

    # Iterating over all the claims and extracting relevant data
    for number, claim_text in sections:
        # Extract ranking
        ranking_match = ranking_pattern.search(claim_text)
        ranking = int(ranking_match.group(1)) if ranking_match else None

        # Extract corrected information
        corrected_info_match = corrected_info_pattern.search(claim_text)
        corrected_info = corrected_info_match.group(1).strip() if corrected_info_match else "N/A"

        # Extract topic of information
        topic_match = topic_pattern.search(claim_text)
        topic = topic_match.group(1).strip() if topic_match else "N/A"

        # Save the extracted data into a structured dictionary
        claims.append({
            "claim_number": int(number),
            "claim_text": claim_text.split('\n')[0],  # Only the claim title
            "ranking": ranking,
            "corrected_information": corrected_info,
            "topic": topic,
        })

    return claims
# Parsing the text
parsed_claims = parse_claims(response)

# Pretty-print the output
print(json.dumps(parsed_claims, indent=2))

# # chat completion with streaming
# response_stream = client.chat.completions.create(
#     model="llama-3.1-sonar-small-128k-online",
#     messages=messages,
#     stream=True,
# )
# for response in response_stream:
#     print(response)
