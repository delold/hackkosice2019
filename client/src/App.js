import React, { useState, useEffect } from 'react'
import { context } from './context'
import { getAllTransactions, addNewTransaction } from './utils/blockchain'

import moment from 'moment'
import { createTransactionModel } from './utils/transaction';

const App = ({ children }) => {
  const [perHour, setPerHour] = useState(100)
  const [transactions, setTransactions] = useState([
    // createTransactionModel({ id: 0, amount: 350, type: 'timer' }),
    // createTransactionModel({ id: 1, amount: -350, type: 'expense' }),
    // createTransactionModel({ id: 2, amount: 150, type: 'income' }),
    // createTransactionModel({ id: 3, amount: 3550, type: 'income' }),
    // createTransactionModel({ id: 4, amount: 200, type: 'income' }),
    // createTransactionModel({ id: 5, amount: -850, type: 'expense' }),
    // createTransactionModel({ id: 6, amount: 50, type: 'income' }),
    // createTransactionModel({ id: 7, amount: -350, type: 'expense' }),
  ])

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