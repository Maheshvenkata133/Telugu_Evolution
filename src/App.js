import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Telugu Evolution</h1>
      <form>
        <input type="text" placeholder="Username" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;

