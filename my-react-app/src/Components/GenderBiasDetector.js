// src/GenderBiasDetector.js
import React, { useState } from 'react';
import axios from 'axios';

const GenderBiasDetector = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const response = await axios.post('http://localhost:5001/detect_bias', {
        text: text,
      });
      setResult(response.data);
      setHistory([...history, { text, result: response.data }]);
    } catch (error) {
      console.error('Error detecting gender bias:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Gender Bias Detector</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter text here"
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Detecting...' : 'Detect Gender Bias'}
        </button>
        
      </form>
      {result && (
        <div>
          <h2>Analysis Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      <h2>Detection History</h2>
      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.text}</td>
              <td>{JSON.stringify(entry.result)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenderBiasDetector;
