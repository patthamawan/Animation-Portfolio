
import './App.css';
import './styles/style.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar'
import HomePage from './pages/HomePage.js';
import WorkPage from './pages/WorkPage.js';
import AboutPage from './pages/AboutPage.js';
import Contact from './components/Contact';


function App() {
  return (
<Router>
      <div>
        <div className='page-header'>
          <h1>Nune</h1>
          <p>3D Animator, open for work</p>
        </div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/personal-work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
