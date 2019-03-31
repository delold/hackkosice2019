import React, { useState, useContext } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Button } from 'semantic-ui-react'
import moment from 'moment'

import styles from './Statistics.module.css'

import { context } from '../context'

const getGroupGenerator = (period) => {
	switch(period) {
		case 'D': return (date) => moment(date).format('YYYY-MM-DD')
		case 'W': return (date) => moment(date).format('wo \\w\\e\\e\\k \\o\\f YYYY')
		case 'M': return (date) => moment(date).format('YYYY-MM')
		case 'Y': return (date) => moment(date).format('YYYY')
		default: return () => ""
	}
}
const Statistics = () => {
	const instance = useContext(context)
	const [period, setPeriod] = useState('D')

	const generator = getGroupGenerator(period)
	const groups = {}

	instance.getTransactions().forEach(transaction => {
		const label = generator(transaction.date)
		groups[label] = groups[label] || { income: 0, expense: 0, timer: 0 }
		groups[label][transaction.type] += Math.abs(transaction.amount / instance.getPerHour()) 
	})

	const data = Object.keys(groups).map(key => ({ name: key, ...groups[key] }))

	return (
		<div className={styles.list}>
			<h1 className={styles.h1}>Statistics</h1>
			<ResponsiveContainer height={400}>
				<BarChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
					<XAxis dataKey="name" stroke="#fff" />
					<YAxis stroke="#fff"/>
					<Tooltip/>
					<Legend />
					<Bar dataKey="expense" fill="#f2711c" />
					<Bar dataKey="income" fill="#8BC34A" />
					<Bar dataKey="timer" fill="#2185d0" />
				</BarChart>
			</ResponsiveContainer>
			<Button.Group>
				<Button color={period === 'D' ? 'green' : ''} onClick={() => setPeriod('D')}>Daily</Button>
				<Button color={period === 'W' ? 'green' : ''} onClick={() => setPeriod('W')}>Weekly</Button>
				<Button color={period === 'M' ? 'green' : ''} onClick={() => setPeriod('M')}>Monthly</Button>
				<Button color={period === 'Y' ? 'green' : ''} onClick={() => setPeriod('Y')}>Yearly</Button>
			</Button.Group>
		</div>
	)
}

export default Statistics