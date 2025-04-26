import React from 'react';
import SafetyIncidentList from './components/SafetyIncidentList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Safety Incident Dashboard</h1>
      </header>
      <main>
        <SafetyIncidentList />
      </main>
    </div>
  );
}

export default App; 