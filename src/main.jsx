import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoProvider>
    <Router>
      <App/>
    </Router>
    </CarritoProvider>
  </StrictMode>,
)
