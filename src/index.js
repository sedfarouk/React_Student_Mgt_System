import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <div className="d-flex flex-column">
    <BrowserRouter>
      <NavBar/>
      <App />
      <Footer/>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
