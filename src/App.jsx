import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes here as needed */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;