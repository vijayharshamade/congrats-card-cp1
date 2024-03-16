import React from "react";
import "./App.css";

const App = () => (
  <>
    <div className="congrats-card-container">
      <h1 className="heading">Congratulations</h1>
      <div className="card">
        <img
          className="profile-image"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          alt="profile-img"
        />
        <h1 className="card-title">Vijay Harsha</h1>
        <p1 className="card-description">
          St Ann's College Of Pharmacy, Vizianagaram
        </p1>
        <img
          className="watch-image"
          alt="watch-img"
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        />
      </div>
    </div>
  </>
);

export default App;
