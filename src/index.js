import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //Each component gets it's own file and as we are using <App/> We need to import it. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
