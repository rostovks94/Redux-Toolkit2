// Import React
import React from 'react';
// Import ReactDOM to render the application
import ReactDOM from 'react-dom';
// Import styles
import './index.css';
// Import the root component App
import App from './App';
// Import Provider from react-redux to connect the store to the React application
import { Provider } from 'react-redux';
// Import the store
import store from './app/store';

// Render the application, wrapping it in the Provider component and passing the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Specify the root element for rendering the application
);