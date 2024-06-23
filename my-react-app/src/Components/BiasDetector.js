import React, { useState } from 'react';
import TextInput from './TextInput';

const BiasDetector = ({ onResult }) => {
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);

  const handleSubmit = (data) => {
    setResult(data);
    setHistory([...history, { text: data.text, result: data }]);
    if (onResult) {
      onResult(data);
    }
  };

  return (
    <div className="container">
      <div>
        <TextInput onSubmit={handleSubmit} />
        {result && (
          <div className="analysis-result">
            <h2>Analysis Result:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
        <h2>Detection History</h2>
        {history.length > 0 ? (
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
        ) : (
          <p>No history available</p>
        )}
      </div>
    </div>
  );
};

export default BiasDetector;
