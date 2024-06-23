# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification, pipeline

app = Flask(__name__)
CORS(app)

# Load general bias model
general_tokenizer = AutoTokenizer.from_pretrained("d4data/bias-detection-model")
general_model = TFAutoModelForSequenceClassification.from_pretrained("d4data/bias-detection-model")
general_classifier = pipeline('text-classification', model=general_model, tokenizer=general_tokenizer)

# Load racial bias model
racial_tokenizer = AutoTokenizer.from_pretrained("unitary/toxic-bert")
racial_model = TFAutoModelForSequenceClassification.from_pretrained("unitary/toxic-bert")
racial_classifier = pipeline('text-classification', model=racial_model, tokenizer=racial_tokenizer)

@app.route('/')
def home():
    return "This is the backend server for bias detection."

@app.route('/detect_bias', methods=['POST'])
def detect_bias():
    data = request.json
    text = data['text']
    general_result = general_classifier(text)
    racial_result = racial_classifier(text)
    result = {
        'general_bias': general_result,
        'racial_bias': racial_result
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
