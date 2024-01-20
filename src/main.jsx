import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './components/Greeting.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <App />
  </React.StrictMode>,
)
