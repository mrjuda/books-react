// booksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'The Lord of The Rings', author: 'JRR Tolkien' },
  { id: '2', title: 'O Auto da Compadecida', author: 'Ariano Suassuna' },
  { id: '3', title: 'Mininos Sabidos', author: 'Judá Teixeira' },
  { id: '4', title: 'Crime and Punishment', author: 'Fiodor Dostoyevsky' },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { bookAdded } = booksSlice.action;

export default booksSlice.reducer;
