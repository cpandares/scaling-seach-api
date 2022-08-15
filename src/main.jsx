import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
 
} from "react-router-dom";
import App from './App'
import Router from './router/router';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Router>
            <App />
        </Router>
    </BrowserRouter>   
  </React.StrictMode>
)
