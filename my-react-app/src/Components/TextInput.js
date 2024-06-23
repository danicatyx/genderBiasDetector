import React, { useState } from 'react';
import axios from 'axios';

const TextInput = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/detect_bias', {
        text: text,
      });
      onSubmit({ text, ...response.data });
    } catch (error) {
      console.error('Error detecting bias:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>The ReVision Project</h3>
      <hr className="horizontal-line" />
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
  );
};

export default TextInput;
