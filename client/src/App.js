import React, { useState } from 'react'
import { context } from './context'

const App = ({ children }) => {
  const [perHour, setPerHour] = useState(100)
  const [transactions, setTransactions] = useState([])

  
  return (
    <context.Provider
      value={{
        perHour,
        transactions,
        getTransactions: () => transactions,
        getPerHour: () => perHour,
        setPerHour,
        setTransactions,
        addTransaction: (model) => setTransactions([...transactions, model])
      }}
    >{children}</context.Provider>
  )
}

export default App