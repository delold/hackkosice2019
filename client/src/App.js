import React, { useState, useEffect } from 'react'
import { context } from './context'
import { createTransactionModel } from './utils/transaction'
import moment from 'moment'

const App = ({ children }) => {
  const [perHour, setPerHour] = useState(100)
  const [transactions, setTransactions] = useState([
    createTransactionModel({ id: 0, amount: -20, type: 'expense' }),
    createTransactionModel({ id: 1, amount: -20, type: 'expense' }),
    createTransactionModel({ id: 2, amount: 20, type: 'income' }),
    createTransactionModel({ id: 3, amount: 20, type: 'timer' }),
    createTransactionModel({ id: 4, amount: -20, type: 'expense' }),
  ])

  useEffect(() => {
    fetch('https://banana-milkshake.appspot.com/user/1/transactions', {
      headers: { 'Content-Type': 'application/json' },
    }).then((a) => a.json()).then(list => {
      console.log(list)
      return list.map(item => ({
        ...item,
        date: moment(item.date).toDate(),
        currency: item.currency.toUpperCase(),
      }))
    }).then(setTransactions)
  })

  return (
    <context.Provider
      value={{
        perHour,
        transactions,
        getTransactions: () => transactions.sort((b, a) => (a.date || Date.now()).valueOf() - (b.date || Date.now()).valueOf()),
        getPerHour: () => perHour,
        setPerHour,
        setTransactions,
        addTransaction: (model) => setTransactions([model, ...transactions])
      }}
    >{children}</context.Provider>
  )
}

export default App