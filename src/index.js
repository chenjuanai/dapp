import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Wagmiconfig } from '@wagmi/core'
import { config } from './wagmi.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Wagmiconfig config={config}>
    <App />
  </Wagmiconfig>
)