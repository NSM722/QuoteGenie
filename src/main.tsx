// **react imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { store } from './app/store.ts'

// **global styles
import './index.css'

// **react-redux import
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
