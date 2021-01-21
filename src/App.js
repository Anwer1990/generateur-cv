import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Router from './components/Router';




function App() {
  return (
      <div className="App">
          <Navbar/>        
          <Router />
          <Footer/>      
      </div>
  );
}

export default App;
