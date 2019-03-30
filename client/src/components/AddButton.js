import React, { useState, useEffect } from 'react'
import styles from './AddButton.style.css'

const AddButton = () => {
  return (
		<div>
			<button className={styles.add}>Add an expense</button>
		</div>
  )
}

export default AddButton