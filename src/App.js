import React from 'react';
import logo from './logo.svg';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouletteGun bulletInChamber={4} />
    </div>
  );
}

export default App;
