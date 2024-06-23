# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification, pipeline

app = Flask(__name__)
CORS(app)

tokenizer = AutoTokenizer.from_pretrained("d4data/bias-detection-model")
model = TFAutoModelForSequenceClassification.from_pretrained("d4data/bias-detection-model")

classifier = pipeline('text-classification', model=model, tokenizer=tokenizer)

@app.route('/')
def home():
    return "This is the backend server for gender bias detection."

@app.route('/detect_bias', methods=['POST'])
def detect_bias():
    data = request.json
    text = data['text']
    result = classifier(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
