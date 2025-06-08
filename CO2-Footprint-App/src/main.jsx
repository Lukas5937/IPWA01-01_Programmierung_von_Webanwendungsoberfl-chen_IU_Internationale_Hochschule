import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

const rtlLanguages = ['ar', 'he', 'fa', 'ur']
const currentLanguage = navigator.language || navigator.userLanguage

const isRTL = rtlLanguages.some((lang) => currentLanguage.startsWith(lang))
document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
