import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Side from './Components/Sidebar.jsx'
import Main from './Components/MainMenu.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Side/>
    <Main/>
  </StrictMode>,
)
