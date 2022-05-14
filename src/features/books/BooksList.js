/* eslint-disable import/prefer-default-export */
// BooksList.js

import React from 'react';
import { useSelector } from 'react-redux';

export const BooksList = () => {
  const books = useSelector((state) => state.books);

  const renderedBooks = books.map((book) => (
    <div className="book" key={book.id}>
      <span className="title">{book.title}</span>
      <span className="author">{book.author.substring(0, 100)}</span>
    </div>
  ));

  return (
    <section className="book-container">
      <h2>Books</h2>
      {renderedBooks}
    </section>
  );
};
