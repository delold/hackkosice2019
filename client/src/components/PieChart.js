import React from 'react'
import styles from './PieChart.module.css'

import { PieChart, Pie } from 'recharts'

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group A', value: 30 },
]

const PieComponent = () => {
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
          fill="#8884d8"
        />
      </PieChart>
    </div>
    <div className={styles.inside}>
      <div className={styles.play}>
        Record
      </div>
    </div>
  </div>
}

export default PieComponent