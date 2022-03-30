import React from 'react';
import ReactDOM from 'react-dom';
import './styles/CSS/main.css'
import AppRoutes from './Routes/AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);
