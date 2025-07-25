// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Terms from './pages/Terms.tsx'
import EmailVerify from './pages/EmailVerify.tsx'
import { useState } from 'react'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

export function Main() {
  const [countryCode, setCountryCode] = useState("+234 -")
  const [emailValue, setEmailValue] = useState('laniyi@gmail.com')

  return (
    <BrowserRouter>
      <Navbar setCountryCode={setCountryCode} />
      <div className="px-2">
        <Routes>
          <Route path="/" element={<App countryCode={countryCode} emailValue={emailValue} setEmailValue={setEmailValue} />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/verify" element={<EmailVerify emailValue={emailValue} />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(<Main />)

