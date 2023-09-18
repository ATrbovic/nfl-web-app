import React from 'react';
import './App.css';
import FootballField from './components/footballField';

function App() {

  const data = {}; // Keep in mind to populate this with your actual data or fetch it

  return (
    <div className="App">
      <header className="site-header">
        <h1>Welcome to Our Football Visualization</h1>
      </header>
      <h2>Football Field</h2>
      <FootballField data={data} />
    </div>
  );
}

export default App;

