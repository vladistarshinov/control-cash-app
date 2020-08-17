import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../node_modules/normalize-sass/normalize.sass';
import './style.sass';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);