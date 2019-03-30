import React, { useState, useEffect } from 'react'
import styles from './List.module.css'
import ListItem from './ListItem';
import moment from 'moment'

const defaultItems = [
  { key: 12, category: 'Debit', date: '12/12/2019', amount: 120, currency: 'EUR' },
  { key: 13, category: 'Debit', date: '12/12/2019', amount: 120, currency: 'EUR' },
  { key: 14, category: 'Debit', date: '12/12/2019', amount: 120, currency: 'EUR' },
  { key: 15, category: 'Debit', date: '12/12/2019', amount: 120, currency: 'EUR' },
]
const List = ({ items = defaultItems }) => {
  return (
    <div className={styles.list}>
      {items.map(item => <ListItem {...item} />)}
    </div>
  )
}


export default List