import unittest
from flask import Flask
from app import app  # Import your Flask app

class EmotionalLanguageTestCase(unittest.TestCase):
    def setUp(self):
        # Set up test client
        self.app = app.test_client()
        self.app.testing = True

    def test_emotional_language(self):
        # Define the payload to send to the /emotional-language endpoint
        payload = {
            "texts": [
                "Mary had a little lamb,",
                "Its fleece was white as snow.",
                "Everywhere the child went,",
                "The little lamb was sure to go."
            ]
        }
        
        # Send POST request to the /emotional-language endpoint
        response = self.app.post('/emotional-language', json=payload)
        
        # Check the response status code
        self.assertEqual(response.status_code, 200)
        
        # Parse the response JSON
        data = response.get_json()
        
        # Check that the response contains the expected keys
        self.assertTrue(isinstance(data, list))
        for item in data:
            self.assertIn('text', item)
            self.assertIn('emotions', item)
            self.assertTrue(isinstance(item['emotions'], list))

if __name__ == '__main__':
    unittest.main()
