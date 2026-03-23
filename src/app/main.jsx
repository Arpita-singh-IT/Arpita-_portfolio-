import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'          // ← make sure this import exists and path is correct
import './styles/index.css'                 // ← your Tailwind file – very important!

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)