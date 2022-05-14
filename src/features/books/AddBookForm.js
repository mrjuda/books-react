/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/prefer-default-export */
// AddBookForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { bookAdded } from './booksSlice';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  const onSaveBookClicked = () => {
    if (title && author) {
      dispatch(
        bookAdded({
          id: nanoid(),
          title,
          author,
        }),
      );

      setTitle('');
      setAuthor('');
    }
  };

  return (
    <section>
      <h2>Add a new book</h2>
      <form>
        <label htmlFor="bookTitle">BookTitle:</label>
        <input
          type="text"
          id="bookTitle"
          name="bookTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="bookAuthor">Author:</label>
        <textarea
          id="bookAuthor"
          name="bookAuthor"
          value={author}
          onChange={onAuthorChanged}
        />
        <button type="button" onClick={onSaveBookClicked}>
          Save book
        </button>
      </form>
    </section>
  );
};
