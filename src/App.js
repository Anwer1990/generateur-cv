import React from 'react';
import './App.css';
import './Model1.css';
import './Model2.css';
import Navbar from './components/Navbar';
import Router from './components/Router';




function App() {
  return (
      <div className="App">
          <Navbar/>        
          <Router />        
      </div>
  );
}

export default App;
