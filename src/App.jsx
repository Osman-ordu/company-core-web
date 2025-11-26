// src/App.jsx
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './layout';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
