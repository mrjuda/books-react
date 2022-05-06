/*eslint linebreak-style: ["error", "windows"]*/
// BookContainer.js

import '../styles/BookContainer.css';
import Book from './Book';

const BookContainer = () => (
  <ul className="book-container">
    <Book />
  </ul>
);

export default BookContainer;
