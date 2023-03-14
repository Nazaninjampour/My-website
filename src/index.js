// Import necessary dependencies and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


import './assets/css/styles.css';


import App from './App';
import reportWebVitals from './reportWebVitals';

// the root component using createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
);














