import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Myprovider from './context/Myprovider.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Myprovider>
        <CartProvider>
          <App />
        </CartProvider>
      </Myprovider>
    </BrowserRouter>
  </StrictMode>,
)
