import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import { setupStore } from './app/store'
const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)