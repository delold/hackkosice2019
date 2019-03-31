import React, { useState, useEffect, useContext, useRef } from 'react'
import styles from './PieChart.module.css'
import moment from 'moment'
import { Button, Input } from 'semantic-ui-react';
import { context } from '../context'
import { createTransactionModel } from '../utils/transaction'

import { PieChart, Pie, Cell } from 'recharts'

const formatDuration = (timestamp) => {
  const duration = moment.duration(timestamp)

  const seconds = duration.seconds()
  const minutes = duration.minutes()
  const hours = duration.hours()

  const pad = (str) => Math.abs(str) > 9 ? Math.abs(str) : `0${Math.abs(str)}`
  const final = [pad(hours), pad(minutes), pad(seconds)].join(':')

  return timestamp < 0 ? `-${final}` : final
}


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
      // setTimeout(() => setTimestamp(timestamp + 1000), 0)
      setTimeout(() => setTimestamp(timestamp + 1000), 1000 - (timestamp % 1000))
    }
  });

  return [start ? timestamp - start : null, ref.current]
}

const COLORS = ['#8BC34A', '#F44336']

const PieComponent = ({ items = [], perHour }) => {
  const [delay, toggle] = useInterval()

  const source = (items.reduce((memo, { amount, type }) => type !== 'timer' && memo + amount, 0) / perHour) * 60 * 60 * 1000
  const timers = (items.reduce((memo, { type, amount }) => type === 'timer' && memo + amount, 0) / perHour) * 60 * 60 * 1000 + delay


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
          data={data}
          cx={width / 2 - 6}
          cy={height / 2 - 6}
          paddingAngle={0}
          innerRadius={100}
          outerRadius={120}
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
        {formatDuration(debt)}
      </div>
      <span className={styles.active}>hours</span>
    </div>
    {/* <div className={styles.controls}>
      {!delay && <Input type="time" />}
      <Button onClick={toggle}>{delay ? 'Stop' : 'Start'}</Button>
    </div> */}
  </div>
}

export default PieComponent