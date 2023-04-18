import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import './App.css'


function App() {
  return (
    <div className="App">
      <h3>App</h3>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
