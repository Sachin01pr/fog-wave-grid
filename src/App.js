import React from 'react';
import Grid from './components/Grid';
import './App.css'; // We'll create this next

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Fullstack Developer Assignment-2</h1>
        
      </header>
      <main className="main-content">
        <div className="grid-wrapper">
          <Grid />
        </div>
      
      </main>
    </div>
  );
}

export default App;