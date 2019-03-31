import React from 'react'
import styles from './CategoryImage.module.css'
import { Icon } from 'semantic-ui-react';

const CategoryImage = ({ image, name, color }) => {
  return (
    <div className={styles.image} style={{ backgroundColor: color }}>
      <Icon name={image} size="large" />
    </div>
  )
}

export default CategoryImage