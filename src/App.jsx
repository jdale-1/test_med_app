import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';

function App() {
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
            
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
