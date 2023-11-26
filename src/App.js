
import './App.css';
import './styles/style.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar'
import HomePage from './pages/HomePage.js';
import PersonalWorkPage from './pages/PersonalWorkPage.js';
import AboutPage from './pages/AboutPage.js';


function App() {
  return (
<Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/personal-work" element={<PersonalWorkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
