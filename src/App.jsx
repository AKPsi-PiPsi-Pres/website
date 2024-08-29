import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Main />
        <Routes>
          <Route exact path="/" component={() => <div>Home Page</div>} />
          <Route path="/about" component={() => <div>About Page</div>} />
          <Route path="/meet-us" component={() => <div>Meet Us Page</div>} />
          <Route path="/brotherhood" component={() => <div>Brotherhood Page</div>} />
          <Route path="/careers" component={() => <div>Careers Page</div>} />
          <Route path="/recruitment" component={() => <div>Recruitment Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}
