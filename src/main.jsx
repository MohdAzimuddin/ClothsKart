import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx' 
import { BrowserRouter } from 'react-router-dom' // Provides routing capabilities
import ShopContextProvider from './Components/ShopContext/ShopContext.jsx' // Context provider for state management


createRoot(document.getElementById('root')).render(
  // Wrapping the app in ShopContextProvider for global state management
  <ShopContextProvider>
    {/* Wrapping the app in BrowserRouter for enabling React Router */}
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ShopContextProvider>
)

