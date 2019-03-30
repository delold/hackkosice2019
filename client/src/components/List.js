import React, { useState, useEffect } from 'react'
import styles from './List.module.css'
import ListItem from './ListItem';


const List = ({ items, perHour }) => {
  return (
    <div className={styles.list}>
      {items.map(({ id, ...rest }) => <ListItem {...rest} key={id} perHour={perHour} />)}
    </div>
  )
}


export default List