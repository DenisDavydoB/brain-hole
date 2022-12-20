import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Application from './application.js'

const $root = document.querySelector('#app')

if ($root == null) throw new TypeError('Root element not found')

createRoot($root).render(
  <StrictMode>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </StrictMode>
)
