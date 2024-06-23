import React, { useState } from 'react';
import './App.css';
import BiasDetector from './Components/BiasDetector';

function App() {
  const [politicalBiasScore, setPoliticalBiasScore] = useState(null);
  const [racialBiasScore, setRacialBiasScore] = useState(null);
  const [genderBiasScore, setGenderBiasScore] = useState(null);

  const handleResult = (result) => {
    const politicalBias = result.political_bias && result.political_bias.length > 0 ? result.political_bias[0].score : null;
    const racialBias = result.racial_bias && result.racial_bias.length > 0 ? result.racial_bias[0].score : null;
    const genderBias = result.gender_bias && result.gender_bias.length > 0 ? result.gender_bias[0].score : null;

    setPoliticalBiasScore(politicalBias);
    setRacialBiasScore(racialBias);
    setGenderBiasScore(genderBias);
  };

  const formatScore = (score) => {
    return score ? (score * 100).toFixed(2) : 'N/A';
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box-60">
          <h2>The ReVision Project</h2>
          <hr className="horizontal-line" />
          <BiasDetector onResult={handleResult} />
        </div>
        <div className="box-40">
          <h2>Performance Analysis</h2>
          <hr className="horizontal-line" />
          <h4>Overall Score</h4>
          <div className="grid-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
              <path d="M39 38.9897V1C55.4582 1 70.0445 11.5976 75.1304 27.2503L39 38.9897Z" fill="url(#paint0_linear_40_639)" />
              <path d="M39 38.9897L75.1304 27.2503C81.6139 47.2045 70.6937 68.6366 50.7395 75.1201C30.7852 81.6037 9.35314 70.6835 2.86961 50.7292C-3.61393 30.775 7.30626 9.34288 27.2605 2.85935C31.0519 1.62746 35.0135 1 39 1V38.9897Z" fill="#F4F4F4" stroke="white" />
              <defs>
                <linearGradient id="paint0_linear_40_639" x1="57.0652" y1="1" x2="57.0652" y2="38.9897" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C11817" />
                  <stop offset="1" stopColor="#ED5958" />
                </linearGradient>
              </defs>
            </svg>
            <p>Your scores go here</p>
          </div>
          <hr className="horizontal-line" />
          <h4>Bias Metrics</h4>
          <div className="cards-container">
            <div className="card">
              <div className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                  <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#0E90EF" />
                  <rect x="0.5" y="0.5" width={`${formatScore(politicalBiasScore)}%`} height="7" rx="3.5" fill="#0E90EF" />
                </svg>
              </div>
              {politicalBiasScore !== null && (
                <div className="score">{formatScore(politicalBiasScore)}%</div>
              )}
              <p>Political Bias</p>
            </div>
            <div className="card">
              <div className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                  <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#AE62BB" />
                  <rect x="0.5" y="0.5" width={`${formatScore(genderBiasScore)}%`} height="7" rx="3.5" fill="#AE62BB" />
                </svg>
              </div>
              {genderBiasScore !== null && (
                <div className="score">{formatScore(genderBiasScore)}%</div>
              )}
              <p>Gender Bias</p>
            </div>
            <div className="card">
              <div className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                  <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" fill="white" stroke="#ED5958" />
                  <rect x="0.5" y="0.5" width={`${formatScore(racialBiasScore)}%`} height="7" rx="3.5" fill="#ED5958" />
                </svg>
              </div>
              {racialBiasScore !== null && (
                <div className="score">{formatScore(racialBiasScore)}%</div>
              )}
              <p>Racial Bias</p>
            </div>
          </div>
          <hr className="horizontal-line" />
          <h4>Emotional Metrics</h4>
          <div className="cards-container">
            <div className="emotions-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#4E9D77" />
              </svg>
              Positive
            </div>
            <div className="emotions-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" fill="white" stroke="#ED5958" />
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
