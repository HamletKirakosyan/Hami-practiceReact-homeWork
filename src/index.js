import App from './App.js'
import React from 'react';
import ReactDOM from 'react-dom';

function Render() {
  return <div>
    <App />
    </div>
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);