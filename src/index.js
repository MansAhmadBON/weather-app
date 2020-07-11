import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './pages';

import './index.scss';
import './normalize.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);