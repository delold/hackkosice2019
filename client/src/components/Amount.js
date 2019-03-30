import React, { useState, useEffect } from 'react'
import styles from './Amount.module.css'

const Amount = ({ amount, perHour, currency  }) => {
  return (
    <div className={styles.amount}>
      <span className={[amount >= 0 ? styles.positive : styles.negative, styles.header].join(" ")}>{Number(amount / perHour).toFixed(2)} hours</span>
      <span className={styles.detail}>{Number(amount).toFixed(2)} {currency}</span>
    </div>
  )
}

export default Amount