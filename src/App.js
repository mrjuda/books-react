/* eslint-disable no-unused-vars */
// App.js

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import WebHeader from './components/pages/WebHeader';
// import WebBooks from './components/pages/WebBooks';
// import WebCategories from './components/pages/WebCategories';
import { BooksList } from './features/books/BooksList';
import { AddBookForm } from './features/books/AddBookForm';
import { Navbar } from './app/Navbar';
// import { Categories } from './features/categories/categories';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            render={() => (
              <>
                <BooksList />
                <AddBookForm />
              </>
            )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
