import React, { useState, useEffect, useContext, useRef } from 'react'
import styles from './PieChart.module.css'
import { context } from '../context'
import { createTransactionModel } from '../utils/transaction'
import { formatDuration } from '../utils/time'

import { PieChart, Pie, Cell } from 'recharts'
import { Button, Icon } from 'semantic-ui-react';

const useInterval = () => {
  const ref = useRef()
  const instance = useContext(context)

  const [start, setStart] = useState(null)
  const [timestamp, setTimestamp] = useState(null)

  ref.current = () => {
    if (!start) {
      const now = Date.now()
      setTimestamp(now)
      setStart(now)
    } else {
      instance.addTransaction(createTransactionModel({
        type: 'timer',
        amount: instance.getPerHour() * ((timestamp - start) / (1000 * 60 * 60)),
        category: 'Work',
      }))

      setStart(null)
    }
  }
  
  useEffect(() => {
    if (start) {
      setTimeout(() => setTimestamp((timestamp - timestamp % 1000) + 1000), 0)
      // setTimeout(() => setTimestamp((timestamp - timestamp % 1000) + 1000), 1000 - (timestamp % 1000))
    }
  });

  return [start ? timestamp - start : null, ref.current]
}

const COLORS = ['#8BC34A', '#F44336']

const PieComponent = ({ items = [], perHour }) => {
  const [delay, toggle] = useInterval()

  const source = (items.reduce((memo, { amount }) => amount <= 0 ? memo + amount : memo, 0) / perHour) * 60 * 60 * 1000
  const timers = (items.reduce((memo, { type, amount }) => amount <= 0 ? memo : memo + amount, 0) / perHour) * 60 * 60 * 1000 + delay

  const debt = Math.abs(Math.min(0, source + timers))
  const cleared = Math.abs(timers)

  const width = 300
  const height = 300

  const data = [{ value: cleared }, { value: debt }]
  
  return <div className={styles.chart} style={{ width, height }}>
    <div className={styles.content}>
      <PieChart width={width} height={height}>
        <Pie
          dataKey="value"
          data={[{value: 1}]}
          cx={width / 2 - 6}
          cy={height / 2 - 6}
          paddingAngle={0}
          innerRadius={100}
          outerRadius={120}
          isAnimationActive={false}
          strokeWidth={0}
          fill="#3c1b26"
        />
        <Pie
          dataKey="value"
          data={data}
          cx={width / 2 - 6}
          cy={height / 2 - 6}
          paddingAngle={0}
          innerRadius={100}
          outerRadius={120}
          strokeWidth={0}
        >
          {
            data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)
          }
        </Pie>
      </PieChart>
    </div>
    <div className={styles.inside} onClick={toggle}>
      <span className={styles.description}>{source + timers < 0 ? 'You need to work' : 'You are over'}</span>
      <div className={styles.hours}>
        {formatDuration(Math.abs(source + timers))}
      </div>
      <span className={styles.active}>hours</span>
    </div>
    <div className={styles.controls}>
      <button className={[styles.circle, delay ? styles.play : styles.pause].join(" ")} onClick={toggle}>
        <Icon name={delay ? "pause" : "play"} />
      </button>
    </div>
  </div>
}

export default PieComponent