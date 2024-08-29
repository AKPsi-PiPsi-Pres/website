import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import MeetUs from './Pages/MeetUs';
import Brotherhood from './Pages/Brotherhood';
import Careers from './Pages/Careers';
import Recruitment from './Pages/Recruitment';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Main />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet-us" element={<MeetUs />} />
          <Route path="/brotherhood" element={<Brotherhood />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/recruitment" element={<Recruitment />} />
        </Routes>
      </div>
    </Router>
  );
}
