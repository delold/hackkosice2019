import React from 'react'
import styles from './ListItem.module.css'
import CategoryImage from './CategoryImage.js'
import Amount from './Amount';
import { getCategoryColor, getCategoryImage } from '../utils/color';


const ListItem = ({ category, detail, amount, perHour, currency = 'EUR' }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <CategoryImage image={getCategoryImage(category)} color={getCategoryColor(category)} />
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{category}</span>
        <span className={styles.detail}>{detail}</span>
      </div>
      <div className={styles.amount}>
        <Amount amount={amount} currency={currency} perHour={perHour} />
      </div>
    </div>
  )
}

export default ListItem
