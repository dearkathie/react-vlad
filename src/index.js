/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App url="https://api.telegram.org/bot152495481:AAHOp1v7pz-cV3L2C-xiivqNi0qbVOOVNtQ/getUpdates" pollInterval={2000} />,
  document.getElementById('root')
);
