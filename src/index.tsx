import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { App } from './App';
import './index.scss';

ReactDOM.render(
  <HashRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </HashRouter>,
  document.getElementById('root'),
);
