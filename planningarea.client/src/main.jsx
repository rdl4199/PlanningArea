import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App.jsx'
import Header from '../components/Header.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
        <BrowserRouter>
        <Header />
        <App />
    </BrowserRouter>
  </StrictMode>,
)
