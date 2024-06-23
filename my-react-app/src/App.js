import React, { useState } from 'react';
import './App.css';
import BiasDetector from './Components/BiasDetector';

function App() {
  const [generalBiasScore, setGeneralBiasScore] = useState(null);
  const [racialBiasScore, setRacialBiasScore] = useState(null);

  const handleResult = (result) => {
    const generalBias = result.general_bias && result.general_bias.length > 0 ? result.general_bias[0].score : null;
    const racialBias = result.racial_bias && result.racial_bias.length > 0 ? result.racial_bias[0].score : null;

    setGeneralBiasScore(generalBias);
    setRacialBiasScore(racialBias);
  };

  const formatScore = (score) => {
    return score ? (score * 100).toFixed(2) : 'N/A';
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box-60">
          <BiasDetector onResult={handleResult} />
        </div>
        <div className="box-40">
          <h2>Performance Analysis</h2>
          <hr className="horizontal-line" />
          <h4>Overall Score</h4>
          <div className="grid-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
              <path d="M39 38.9897L75.1304 27.2503C81.6139 47.2045 70.6937 68.6366 50.7395 75.1201C30.7852 81.6037 9.35314 70.6835 2.86961 50.7292C-3.61393 30.775 7.30626 9.34288 27.2605 2.85935C31.0519 1.62746 35.0135 1 39 1V38.9897Z" fill="#F4F4F4" stroke="white"/>
              <circle cx="39.5" cy="38.5" r="27.5" fill="white"/>
            </svg>
            <div><p>Your scores go here</p></div>
          </div>
          <hr className="horizontal-line" />
          <h4>Bias Metrics</h4>
          <div className="cards-container">
            <div className="card">
              <div className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                  <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#0E90EF"/>
                  <rect x="0.5" y="0.5" width={`${formatScore(generalBiasScore)}%`} height="7" rx="3.5" fill="#0E90EF" />
                </svg>
              </div>
              {generalBiasScore !== null && (
                <div className="score">{formatScore(generalBiasScore)}%</div>
              )}
              <p>General Bias</p>
            </div>
            <div className="card">
              <div className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                  <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#AE62BB"/>
                  <rect x="0.5" y="0.5" width="0" height="7" rx="3.5" fill="#AE62BB" />
                </svg>
              </div>
              {/* Add gender bias score here if available */}
              <p>Gender Bias</p>
            </div>
            <div className="card">
              <div className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                  <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" fill="white" stroke="#ED5958"/>
                  <rect x="0.5" y="0.5" width={`${formatScore(racialBiasScore)}%`} height="7" rx="3.5" fill="#ED5958" />
                </svg>
              </div>
              {racialBiasScore !== null && (
                <div className="score">{formatScore(racialBiasScore)}%</div>
              )}
              <p>Racial Bias</p>
            </div>
            <div className="card">
              <div className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                  <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#4E9D77"/>
                </svg>
              </div>
              {/* Add disability bias score here if available */}
              <p>Disability Bias</p>
            </div>
          </div>
          <hr className="horizontal-line" />
          <h4>Emotional Metrics</h4>
          <div className="cards-container">
            <div className="emotions-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#4E9D77"/>
              </svg>
              Positive
            </div>
            <div className="emotions-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" fill="white" stroke="#ED5958"/>
              </svg>
              Negative
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
