// AddBook.js
/* eslint-disable arrow-body-style */
// import React, { useState, useEffect } from 'react';

import '../styles/AddBook.css';

const AddBook = () => {
  return (
    <form className="add-book-container">
      <input
        type="text"
        className="add-book-text"
        placeholder="Add a Author"
      />
      <input
        type="text"
        className="add-book-text"
        placeholder="Add a book"
      />
      <button type="submit" className="add-book-submit">
        Submit
      </button>
    </form>
  );
};

export default AddBook;
