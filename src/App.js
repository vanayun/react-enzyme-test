import React from 'react';
import './App.css';
import Profile from './Profile';
import HookCounter from './HookCounter';

function App() {
  return (
    <div className="App">
      <Profile username="vana" name="윤주경" />
      <HookCounter />
    </div>
  );
}

export default App;
