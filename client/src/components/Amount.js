import React, { useState, useEffect } from 'react'
import { formatHumanDuration } from '../utils/time'
import styles from './Amount.module.css'

const Amount = ({ amount, perHour, currency }) => {
  return (
    <div className={styles.amount}>
      <span className={[amount >= 0 ? styles.positive : styles.negative, styles.header].join(" ")}>{formatHumanDuration((amount / perHour) * 60 * 60 * 1000)}</span>
      <span className={styles.detail}>{Number(amount).toFixed(2)} {currency}</span>
    </div>
  )
}

export default Amount