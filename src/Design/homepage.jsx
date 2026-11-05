import React from "react";
import "./homepage.css";

function HomePage({ onStart }) {
  

  return (
    <div className="home-page">
     

      <section className="hero">
        <span className="hero-tag">
          AI-POWERED AD ANALYSIS
        </span>

        <h1>Smarter Ads. Better Outreach.</h1>

        <p>
          Improve your tax relief advertising with
          AI-powered feedback on messaging, clarity,
          and audience engagement.
        </p>

        <button onClick={onStart}>
             Grade Your Ad
        </button>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h3>1. Enter Your Ad</h3>
            <p>
              Paste your text advertisement into
              our grading tool.
            </p>
          </div>

          <div className="feature-card">
            <h3>2. AI Analysis</h3>
            <p>
              AI reviews clarity, tone, educational
              value, and target audience.
            </p>
          </div>

          <div className="feature-card">
            <h3>3. Get Feedback</h3>
            <p>
              Receive scores, recommendations,
              and suggestions for improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;