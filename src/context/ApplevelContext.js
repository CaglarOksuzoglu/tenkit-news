import { createContext, useState } from 'react'

export const AppLevelContext = createContext()

export const AppLevelContextProvider = ({ children }) => {
  const [filters, setFilters] = useState('all')
  return (
    <AppLevelContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  )
}

export default AppLevelContext
