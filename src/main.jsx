import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from './context'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
