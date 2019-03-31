import React, { useState, useEffect } from 'react'
import styles from './List.module.css'
import ListItem from './ListItem';


const List = ({ items, perHour }) => {
  return (
    <div className={styles.list}>
      {items.map(({ id, ...rest }, index) => <ListItem {...rest} key={index} perHour={perHour} />)}
    </div>
  )
}


export default List