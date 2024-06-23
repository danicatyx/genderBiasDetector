# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification, pipeline
#from genbit.genbit_metrics import GenBitMetrics

app = Flask(__name__)
CORS(app)

# Load political bias model
political_tokenizer = AutoTokenizer.from_pretrained("d4data/bias-detection-model")
political_model = TFAutoModelForSequenceClassification.from_pretrained("d4data/bias-detection-model")
political_classifier = pipeline('text-classification', model=political_model, tokenizer=political_tokenizer)

# Load racial bias model
racial_tokenizer = AutoTokenizer.from_pretrained("unitary/toxic-bert")
racial_model = TFAutoModelForSequenceClassification.from_pretrained("unitary/toxic-bert")
racial_classifier = pipeline('text-classification', model=racial_model, tokenizer=racial_tokenizer)

#load gender bias model
gender_tokenizer = AutoTokenizer.from_pretrained("d4data/bias-detection-model")
gender_model = TFAutoModelForSequenceClassification.from_pretrained("d4data/bias-detection-model")
gender_classifier = pipeline('text-classification', model=political_model, tokenizer=political_tokenizer)

@app.route('/')
def home():
    return "This is the backend server for bias detection."

@app.route('/detect_bias', methods=['POST'])
@app.route('/detect_bias', methods=['POST'])
def detect_bias():
    data = request.json
    text = data['text']
    political_result = political_classifier(text)
    racial_result = racial_classifier(text)
    gender_result = gender_classifier(text)

    result = {
        'political_bias': political_result,
        'racial_bias': racial_result,
        'gender_bias': gender_result,
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
