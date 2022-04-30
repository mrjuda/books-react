// BookContainer.js
/* eslint-disable arrow-body-style */
// import React, { useState, useEffect } from 'react';
import '../styles/BookContainer.css';
import Book from './Book';

const BookContainer = () => {
  return (
    <ul className="book-container">
      <Book />
    </ul>
  );
};

export default BookContainer;
