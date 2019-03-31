import React, { useContext } from 'react'

import { context } from '../context'

import PieChart from '../components/PieChart'
import List from '../components/List'

import styles from './HomePage.module.css'
import AddButton from '../components/AddButton'


const HomePage = () => {
	const instance = useContext(context)
	const transactions = instance.getTransactions()
	const perHour = instance.getPerHour()

	console.log(transactions, perHour)
	return (
		<>
			<AddButton />
			<PieChart items={transactions} perHour={perHour} />
			<List items={transactions} perHour={perHour} />
		</>
	)
}

export default HomePage;
