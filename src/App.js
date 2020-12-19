import React from 'react';
import logo from './ZaheenShahriyar.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is Zaheen Shahriyar and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/zaheen23"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
