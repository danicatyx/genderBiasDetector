import requests
import json

# Define the URL for the emotional-language endpoint
url = "http://127.0.0.1:5001/emotional-language"

# Define the payload to send to the endpoint
payload = {
    "texts": [
        "Mary had a little lamb,",
        "Its fleece was white as snow.",
        "Everywhere the child went,",
        "The little lamb was sure to go."
    ]
}

# Send a POST request to the endpoint
response = requests.post(url, json=payload)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    
    # Print the number of emotions detected for each text
    for item in data:
        text = item.get('text', 'Unknown text')
        emotions = item.get('emotions', [])
        print(f"Text: {text}")
        print(f"Number of Emotions Detected: {len(emotions)}")
        for emotion in emotions:
            print(f"Emotion: {emotion}")
else:
    print(f"Failed to get response. Status code: {response.status_code}")
    print(response.text)
