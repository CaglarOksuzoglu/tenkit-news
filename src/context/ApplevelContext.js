import { createContext, useState } from 'react'

export const AppLevelContext = createContext()

export const AppLevelContextProvider = ({ children }) => {
  const [filters, setFilters] = useState('all')
  const [darkmode, setDarkmode] = useState(false)
  return (
    <AppLevelContext.Provider
      value={{
        filters,
        setFilters,
        darkmode,
        setDarkmode,
      }}
    >
      {' '}
      {children}{' '}
    </AppLevelContext.Provider>
  )
}

export default AppLevelContext
