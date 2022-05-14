// App.js

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WebHeader from './components/pages/WebHeader';
import WebBooks from './components/pages/WebBooks';
import WebCategories from './components/pages/WebCategories';

function App() {
  return (
    <div className="container">
      <WebHeader />
      <Routes>
        <Route exact path="/" element={<WebBooks />} />
        <Route path="/WebCategories" element={<WebCategories />} />
      </Routes>
    </div>
  );
}

export default App;
