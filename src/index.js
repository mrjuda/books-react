/* eslint-disable no-unused-vars */
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './app/store';

import { worker } from './api/server';

async function start() {
  await worker.start({ onUnhandledRequest: 'bypass' });

  // const root = ReactDOM.createRoot(document.getElementById('root'))
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

start();

reportWebVitals();
