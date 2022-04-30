// App.js
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WebHeader from './components/WebHeader';
import WebHome from './components/WebHome';
import WebCategories from './components/WebCategories';

function App() {
  return (
    <div className="container">
      <WebHeader />
      <Routes>
        <Route exact path="/" element={<WebHome />} />
        <Route path="/WebCategories" element={<WebCategories />} />
      </Routes>
    </div>
  );
}

export default App;
