import React from 'react'
import styles from './ListItem.module.css'
import CategoryImage from './CategoryImage.js'
import Amount from './Amount';
import { getCategoryColor, getCategoryImage } from '../utils/color';
import moment from 'moment'

const ListItem = ({ category, detail, type, date, amount, perHour, currency = 'EUR' }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <CategoryImage image={getCategoryImage(type)} color={getCategoryColor(type)} />
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{category}</span>
        <span className={styles.detail}>{detail || moment(date).format('MMM DD, YYYY HH:mm:ss')}</span>
      </div>
      <div className={styles.amount}>
        <Amount amount={amount} currency={currency} perHour={perHour} />
      </div>
    </div>
  )
}

export default ListItem
