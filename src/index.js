import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Routes/App';
import 'bootswatch/dist/journal/bootstrap.min.css'
import './Styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

