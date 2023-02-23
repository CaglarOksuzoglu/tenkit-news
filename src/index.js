import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {AppLevelContextProvider} from './context/AppLevelContext'
import {ResultsProvider} from './context/ResultsContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppLevelContextProvider>
      <ResultsProvider>
        <App />
      </ResultsProvider>
    </AppLevelContextProvider>
  </React.StrictMode>
)
