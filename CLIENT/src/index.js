import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AdminContextProvider } from './Components/Admin/AdminContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AdminContextProvider>
        <App />
      </AdminContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);