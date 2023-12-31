import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Router/Router'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <App/>
      <Footer/> 
    </Router>
  </React.StrictMode>
);

reportWebVitals();
