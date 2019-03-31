import React, { useState, useEffect } from 'react'
import { context } from './context'
import { getAllTransactions, addNewTransaction } from './utils/blockchain'

import moment from 'moment'

const App = ({ children }) => {
  const [perHour, setPerHour] = useState(100)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getAllTransactions().then(list => {
      return list.filter(({ type }) => !!type).map(item => ({
        ...item,
        date: moment(item.date).toDate(),
        amount: Math.abs(item.amount) * (item.type === 'expense' ? -1 : 1),
        currency: item.currency.toUpperCase(),
      }))
    }).then(setTransactions)
  }, [perHour])

  return (
    <context.Provider
      value={{
        perHour,
        transactions,
        getTransactions: () => transactions.sort((b, a) => (a.date || Date.now()).valueOf() - (b.date || Date.now()).valueOf()),
        getPerHour: () => perHour,
        setPerHour,
        setTransactions,
        addTransaction: (model) => {
          setTransactions([model, ...transactions])
          addNewTransaction(model)
        }
      }}
    >{children}</context.Provider>
  )
}

export default App