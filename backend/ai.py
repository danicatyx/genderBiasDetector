import requests

url = "https://chat-api.you.com/research"

payload = {
    "query": "<string>",
    "chat_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a"
}
headers = {
    "X-API-Key": "ad7597db-a91f-45da-b4c6-6d257496c8dc<__>1PUnuLETU8N2v5f4hN3kXmtR",
    "Content-Type": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)