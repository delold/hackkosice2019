import React, { useState, useEffect, useRef } from 'react'
import styles from './PieChart.module.css'
import moment from 'moment'

import { PieChart, Pie } from 'recharts'

const formatDuration = (timestamp) => {
  let rounded = Math.floor(Math.abs(timestamp) / 1000)
  const seconds = rounded % 60

  rounded = Math.floor(rounded / 60)
  const minutes = rounded % 60
  
  rounded = Math.floor(rounded / 60)
  const hours = rounded % 24

  const pad = (str) => Math.abs(str) > 9 ? Math.abs(str) : `0${Math.abs(str)}`
  const final = [pad(hours), pad(minutes), pad(seconds)].join(':')

  return timestamp < 0 ? `-${final}` : final
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
      const delay = (start - timestamp === 0) ? 0 : (timestamp + 1000) - nextTimestamp

      setTimeout(() => setTimestamp(nextTimestamp), delay)
    }
  });

  return [start ? timestamp - start : null, ref.current]
}



const PieComponent = ({ items = [], perHour }) => {
  const [delay, toggle] = useInterval()

  const remaining = (items.reduce((memo, { amount }) => memo + amount, 0) / perHour) * 60 * 60 * 1000
  const difference = remaining + delay

  const width = 300
  const height = 300
  return <div className={styles.chart} style={{ width, height }}>
    <div className={styles.content}>
      <PieChart width={width} height={height}>
        <Pie
          dataKey="value"
          data={[{ value: 100 }]}
          startAngle={0}
          endAngle={Math.abs(Math.min(360, Math.max(0, (remaining - difference) / remaining)) * 360)}
          cx={width / 2 - 6}
          cy={height / 2 - 6}
          paddingAngle={0}
          innerRadius={100}
          outerRadius={120}
          fill={difference < 0 ? "#F44336" : "#8BC34A"}
        />
      </PieChart>
    </div>
    <div className={styles.inside} onClick={toggle}>
      <span className={styles.description}>{difference < 0 ? 'You need to work' : 'You are over'}</span>
      <div className={styles.hours}>
        {formatDuration(Math.abs(difference))}
      </div>
      <span className={styles.active}>hours</span>
    </div>
  </div>
}

export default PieComponent