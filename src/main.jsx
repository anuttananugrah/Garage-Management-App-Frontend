import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StatusContext from './contextApi/StatusConext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* making entair app context components child */}
    <StatusContext> 
      <App />
    </StatusContext>
    </BrowserRouter>
  </StrictMode>,
)
