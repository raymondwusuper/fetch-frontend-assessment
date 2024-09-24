import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the route for the root path */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;