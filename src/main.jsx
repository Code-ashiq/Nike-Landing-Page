import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Browser_Router basename="/Nike-Landing-Page/">
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Browser_Router>
  </StrictMode>,
);
