import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AppRouters from './AppRouters';
import './style/bootstrap.min.css';
import './sass/style.css'
import Hooks from './Hooks';
import { Container } from 'react-bootstrap';
// import Search from './Search';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRouters />
    {/* <Hooks/> */}
    {/* <Search/> */}
  </React.StrictMode>
);
