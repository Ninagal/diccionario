import React from 'react';
import './App.css';
import Dict from './Dict';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Every Day Dictionary</h1>
      </header>
      <div>
        <Dict/>
      </div>
      <footer className='App-footer'>Coded by Nina</footer>
    </div>
  );
}
