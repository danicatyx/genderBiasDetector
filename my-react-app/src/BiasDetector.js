// src/BiasDetector.js
import React, { useState } from 'react';
import axios from 'axios';

const BiasDetector = () => {
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
      console.error('Error detecting bias:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="section left">
        <h1>Bias Detector</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Enter text here"
            rows="10"
          />
          <br />
          <button type="submit" disabled={loading}>
            {loading ? 'Detecting...' : 'Detect Bias'}
          </button>
        </form>
      </div>
      <div className="section right">
        {result && (
          <div className="analysis-result">
            <h2>Analysis Result:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
        <h2>Detection History</h2>
        <table>
          <thead>
            <tr>
              <th>Text</th>
              <th>General Bias Result</th>
              <th>Racial Bias Result</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{entry.text}</td>
                <td>{JSON.stringify(entry.result.general_bias)}</td>
                <td>{JSON.stringify(entry.result.racial_bias)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BiasDetector;
