import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalProvider } from './Context/GlobalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GlobalProvider>
)
