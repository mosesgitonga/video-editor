import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VideoEditor from './components/videoEditor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VideoEditor />
  </StrictMode>,
)
