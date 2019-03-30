import React, { useState, useEffect } from 'react'
import styles from './Amount.module.css'

const Amount = ({ amount, perHour, currency  }) => {
  return (
    <div className={styles.amount}>
      <span>{Number(amount / perHour).toFixed(2)} hours</span>
      <span>{amount} {currency}</span>
    </div>
  )
}

export default Amount