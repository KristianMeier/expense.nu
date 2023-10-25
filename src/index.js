import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AppContextProvider } from './Context/AppContext'
import { EmailContextProvider } from './Context/EmailContext'
import { LanguageContextProvider } from './Context/LanguageContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <AppContextProvider>
        <EmailContextProvider>
          <App />
        </EmailContextProvider>
      </AppContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
)
