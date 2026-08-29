from google import genai
import os

client = genai.Client(
    api_key="AQ.Ab8RN6JcThvOB0g73Q4ACllxuz_p8jQLtwCK659T2vqzzwmphQ"
)

prompt = input("Prompt: ")

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt
)

print(response.text)