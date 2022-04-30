// WebBooks.js

import '../styles/WebBooks.css';
import BookContainer from './BookContainer';

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
      <BookContainer />
    </div>
  );
}

export default WebBooks;
