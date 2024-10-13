from openai import OpenAI

PERPLEXITY_KEY = "INSERT API KEY HERE"

messages = [
    {
        "role": "system",
        "content": (
            "You are an artificial intelligence assistant with the purpose of fact checking information on the internet. "
      "Check the accuracy of the following statement and give it a ranking of accuracy on a scale of 1 to 5, "
      "the corrected information if there is any inaccuracy in 20 to 30 words, and the exact text of the claim. "
      "Present your response in the following format: 'Number - Corrected information - Exact text of claim'"
        ),
    },
    {
        "role": "user",
        "content": (
            "Donald Trump doesn't like immigrants"
        ),
    },
]

client = OpenAI(api_key=PERPLEXITY_KEY, base_url="https://api.perplexity.ai")

# chat completion without streaming
response = client.chat.completions.create(
    model="llama-3-sonar-large-32k-online",
    messages=messages,
)
print(response)

# chat completion with streaming
response_stream = client.chat.completions.create(
    model="llama-3-sonar-large-32k-online",
    messages=messages,
    stream=True,
)
for response in response_stream:
    print(response)
