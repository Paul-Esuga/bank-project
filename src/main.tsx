// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Terms from './pages/Terms.tsx'
import EmailVerify from './pages/EmailVerify.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <div className="px-2">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/verify" element={<EmailVerify />} />
        {/* Add other routes here as needed */}
      </Routes>
    </div>
  </BrowserRouter>
)

