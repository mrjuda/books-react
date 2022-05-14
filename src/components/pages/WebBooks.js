/* eslint-disable no-unused-vars */
// WebBooks.js

import '../styles/WebBooks.css';
import BookContainer from './BookContainer';
import AddBook from './AddBook';
import { BooksList } from '../../features/books/BooksList';
import { AddBookForm } from '../../features/books/AddBookForm';
import { Categories } from '../../features/categories/categories';

function WebBooks() {
  return (
    <div className="WebPage">
      <h2 className="HeaderTitle">
        Welcome to the Bookstore!
      </h2>
      <div className="text">
        <p>
          A room without books is like a body without a soul.
          ― Marcus Tullius Cicero
        </p>
        <br />
      </div>
      <BooksList />
      <AddBookForm />
      <BookContainer />
      <AddBook />
    </div>
  );
}

export default WebBooks;
