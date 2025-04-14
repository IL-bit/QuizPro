import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import RootReducers from './reducer.js';

const store = configureStore({
  reducer: RootReducers
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);