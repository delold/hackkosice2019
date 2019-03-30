import React, { useState, useEffect, useRef } from 'react'
import styles from './PieChart.module.css'
import moment from 'moment'

import { PieChart, Pie } from 'recharts'

const data01 = [
  { value: 400 },
  { value: 30 },
]

const formatDuration = (timestamp) => {
  let rounded = Math.floor(timestamp / 1000)
  const seconds = rounded % 60

  rounded = Math.floor(rounded / 60)
  const minutes = rounded % 60
  
  rounded = Math.floor(rounded / 60)
  const hours = rounded % 24

  const pad = (str) => str > 9 ? str : `0${str}`

  return [pad(hours), pad(minutes), pad(seconds)].join(':')
}


const useInterval = () => {
  const ref = useRef()

  const [start, setStart] = useState(null)
  const [timestamp, setTimestamp] = useState(null)

  ref.current = () => {
    if (!start) {
      const now = Date.now()
      setTimestamp(now)
      setStart(now)
    } else {
      setStart(null)
    }
  }
  
  useEffect(() => {
    if (start) {
      const nextTimestamp = Math.floor((timestamp / 1000) + 1) * 1000
      const delay = (timestamp + 1000) - nextTimestamp

      setTimeout(() => setTimestamp(nextTimestamp), delay)
    }
  });

  return [start ? timestamp - start : null, ref.current]
}



const PieComponent = ({ debt }) => {
  const [delay, toggle] = useInterval()

  console.log(delay)

  const width = 300
  const height = 300
  return <div className={styles.chart} style={{ width, height }}>
    <div className={styles.content}>
      <PieChart width={width} height={height}>
        <Pie
          dataKey="value"
          data={data01}
          cx={width / 2 - 6}
          cy={height / 2 - 6}
          paddingAngle={0}
          innerRadius={100}
          outerRadius={120}
          fill="#F44336"
        />
      </PieChart>
    </div>
    <div className={styles.inside} onClick={toggle}>
      <span className={styles.description}>You are working for</span>
      <div className={styles.hours}>
        {formatDuration(delay)}
      </div>
      <span className={styles.active}>hours</span>
    </div>
  </div>
}

export default PieComponent