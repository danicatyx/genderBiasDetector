// src/App.js
import React from 'react';
import './App.css';
import BiasDetector from './Components/BiasDetector';
import TextInput from './Components/TextInput';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="box-60">
          <TextInput />
          <BiasDetector /> 
        </div>
        <div class="box-40">
          <h2>Performance Analysis</h2>
          <hr className="horizontal-line" />
          <h4>Overall Score</h4>
          <div class = "grid-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
            <path d="M39 38.9897L75.1304 27.2503C81.6139 47.2045 70.6937 68.6366 50.7395 75.1201C30.7852 81.6037 9.35314 70.6835 2.86961 50.7292C-3.61393 30.775 7.30626 9.34288 27.2605 2.85935C31.0519 1.62746 35.0135 1 39 1V38.9897Z" fill="#F4F4F4" stroke="white"/>
            <circle cx="39.5" cy="38.5" r="27.5" fill="white"/>
          </svg>
              <div><p>Your scores goes here</p></div>
          </div>
          <hr className="horizontal-line" />
          <h4>Bias Metrics</h4> 
          <div class="cards-container">
            <div class="card">
                <div className="pill">
                  <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                    <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#0E90EF"/>
                  </svg>
                </div>
              <p>General Bias</p> 
              </div>
            <div class="card">
              <div className="pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                      <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#AE62BB"/>
                    </svg>
                  </div>
                <p>Gender Bias</p>
              </div>
            <div class="card">
              <div className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                  <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" fill="white" stroke="#ED5958"/>
                </svg>
              </div>
              <p>Racial Bias</p>
            </div>
            <div class="card">
               <div className="pill">
                  <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
                    <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#4E9D77"/>
                  </svg>
                </div>
                <p>Disability Bias</p>
            </div>
          </div>
          <hr className="horizontal-line" />
          <h4>Emotional Metrics</h4> 
          <div class="cards-container">
            <div class="emotions-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="8" viewBox="0 0 62 8" fill="none">
              <rect x="0.5" y="0.5" width="61" height="7" rx="3.5" stroke="#4E9D77"/>
            </svg>
              Positive
              </div> 
            <div class="emotions-card">
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
