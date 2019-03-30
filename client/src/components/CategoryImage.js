import React, { useState, useEffect } from 'react'
import styles from './CategoryImage.module.css'

const CategoryImage = ({ image, name, color }) => {
  return (
    <div className={styles.image} styles={{ backgroundColor: color }}>
      {image && <img src={image} alt={name} />}
    </div>
  )
}

export default CategoryImage