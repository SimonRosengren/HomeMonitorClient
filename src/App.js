import React from 'react';
import logo from './logo.svg';
import './App.css';
import SoilClient from './Clients/SoilClient';
import Plant from './Components/Plant/Plant';

function App() {
  return (
    <div className="App">
      <h1>Home Monitor</h1>
      <div className="Grid">
        <div className="Row">
          <div className="Third">
          <Plant/>
          </div>
          <div className="Third">
            <p>half</p>
          </div>
          <div className="Third">
            <p>half</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
