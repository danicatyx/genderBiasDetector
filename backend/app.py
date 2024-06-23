# # backend/app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from transformers import AutoTokenizer, TFAutoModelForSequenceClassification, pipeline
# #from genbit.genbit_metrics import GenBitMetrics

# app = Flask(__name__)
# CORS(app)

# # Load general bias model
# general_tokenizer = AutoTokenizer.from_pretrained("d4data/bias-detection-model")
# general_model = TFAutoModelForSequenceClassification.from_pretrained("d4data/bias-detection-model")
# general_classifier = pipeline('text-classification', model=general_model, tokenizer=general_tokenizer)

# # Load racial bias model
# racial_tokenizer = AutoTokenizer.from_pretrained("unitary/toxic-bert")
# racial_model = TFAutoModelForSequenceClassification.from_pretrained("unitary/toxic-bert")
# racial_classifier = pipeline('text-classification', model=racial_model, tokenizer=racial_tokenizer)

# @app.route('/')
# def home():
#     return "This is the backend server for bias detection."

# @app.route('/detect_bias', methods=['POST'])
# def detect_bias():
#     data = request.json
#     text = data['text']
#     general_result = general_classifier(text)
#     racial_result = racial_classifier(text)
#     result = {
#         'general_bias': general_result,
#         'racial_bias': racial_result,
#     }
#     return jsonify(result)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5001)

# backend/app.py
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification, pipeline
import asyncio
from hume import HumeStreamClient
from hume.models.config import LanguageConfig

app = Flask(__name__)
CORS(app)

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load general bias model
general_tokenizer = AutoTokenizer.from_pretrained("d4data/bias-detection-model")
general_model = TFAutoModelForSequenceClassification.from_pretrained("d4data/bias-detection-model")
general_classifier = pipeline('text-classification', model=general_model, tokenizer=general_tokenizer)

# Load racial bias model
racial_tokenizer = AutoTokenizer.from_pretrained("unitary/toxic-bert")
racial_model = TFAutoModelForSequenceClassification.from_pretrained("unitary/toxic-bert")
racial_classifier = pipeline('text-classification', model=racial_model, tokenizer=racial_tokenizer)

HUME_API_KEY = "nOSVCRmo7OxL89Ajel56clP0bCJqnH0qI4MwYk86YX13FWzA"  # Replace with your Hume AI API key

async def analyze_emotions(texts):
    client = HumeStreamClient(HUME_API_KEY)
    config = LanguageConfig()
    results = []
    
    async with client.connect([config]) as socket:
        for text in texts:
            try:
                result = await socket.send_text(text)
                emotions = result["language"]["predictions"][0]["emotions"]
                results.append({'text': text, 'emotions': emotions})
            except Exception as e:
                logger.error(f"Failed to analyze text: {text} with error: {e}")
                results.append({'text': text, 'error': str(e)})
    
    return results

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
        'racial_bias': racial_result,
    }
    return jsonify(result)

@app.route('/emotional-language', methods=['POST'])
def emotional_language():
    try:
        data = request.get_json()
        if not data or 'texts' not in data:
            return jsonify({'error': 'No texts provided'}), 400

        texts = data['texts']
        results = asyncio.run(analyze_emotions(texts))
        return jsonify(results), 200
    except Exception as e:
        logger.error(f"Error in /emotional-language: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
