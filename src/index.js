import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./redux/store";

import {App} from './pages';

import './index.scss';
import './normalize.scss';

const Application = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);