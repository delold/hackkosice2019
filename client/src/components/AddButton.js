import React, { useState, useContext } from 'react'
import styles from './AddButton.module.css'
import {Button, Icon, Select, Form} from 'semantic-ui-react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { formatHumanDuration } from '../utils/time'
import moment from 'moment'

import { context } from '../context'

const AddButton = () => {
	const instance = useContext(context)

	const [type, setType] = useState('expense')
	const [date, setDate] = useState(new Date())
	const [category, setCategory] = useState(undefined)
	const [currency, setCurrency] = useState('EUR')
	const [amount, setAmount] = useState(undefined)

	const [visible, setVisible] = useState(false)
	const [loading, setLoading] = useState(false)

	let isValid = false
	if (type !== 'timer' && category && date && currency && amount) {
		isValid = true
	} else if (type === 'timer' && date && amount) {
		isValid = true
	}

	return (
		<div className={styles.container}>
			<div className={styles.add}>
				<Button type="ui button" color={visible ? "black" : "orange"} onClick={() => setVisible(!visible)}> 
					<Icon name={visible ? 'close circle' : 'add circle'}/>
					<span className="input-group-btn">{visible ? "Close" : "Add"}</span>
				</Button>
			</div>
			<div className={styles.popup} style={{ display: (visible && 'flex') || 'none' }}>
				<Form onSubmit={async () => {
					setLoading(true)
					const payload = {
						type,
						amount: Math.abs(Number.parseFloat(amount)),
						description: '',
						author_id: 0,
						date: moment(date).format('YYYY-MM-DD HH:mm:ss'),
						location: '',
					}
					
					if (type !== 'timer') {
						Object.assign(payload, {
							currency,
							category,
						})

						if (type === 'expense') {
							payload.amount *= -1
						}
					} else {
						payload.category = "Work"
						payload.amount *= instance.getPerHour() 
					}

					instance.addTransaction(payload)
					setVisible(false)
					setLoading(false)
				}}>
					<Form.Field>
						<Button.Group>
							<Button as="a" color={type === 'expense' ? 'red' : undefined} onClick={() => setType('expense')}>Expense</Button>
							<Button as="a" color={type === 'income' ? 'green' : undefined} onClick={() => setType('income')}>Income</Button>
							<Button as="a" color={type === 'timer' ? 'blue' : undefined} onClick={() => setType('timer')}>Time</Button>
						</Button.Group>
					</Form.Field>
					{ type !== 'timer' && <Form.Field>
						<label>Category</label>
						<Select placeholder='Category...' value={category} onChange={(e, { value }) => setCategory(value)} options={[
							{ key: 'Restaurants', text: 'Restaurants', value: 'Restaurants' },
							{ key: 'Groceries', text: 'Groceries', value: 'Groceries' },
							{ key: 'Bank', text: 'Bank', value: 'Bank' },
							{ key: 'Taxi', text: 'Taxi', value: 'Taxi' },
							{ key: 'Drug / Pharmacies', text: 'Drug / Pharmacies', value: 'Drug / Pharmacies' },
							{ key: 'Jewellery', text: 'Jewellery', value: 'Jewellery' },
							{ key: 'Food', text: 'Food', value: 'Food' },
							{ key: 'Dentist', text: 'Dentist', value: 'Dentist' },
							{ key: 'Clothing', text: 'Clothing', value: 'Clothing' },
							{ key: 'Other', text: 'Other', value: 'Other' },
						]} />
					</Form.Field> }
					<Form.Field>
						<label>Date</label>
						<div className={styles.date}>
							<DayPickerInput onDayChange={(value) => setDate(value)} value={date} />
						</div>
					</Form.Field>
					<Form.Field>
						<label>{(type === 'timer' && 'Duration in hours') || 'Amount'}</label>
						<input placeholder={(type === 'timer' && 'Duration') || 'Amount'} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} inputMode="decimal" />
					</Form.Field>
					{ type !== 'timer' && <Form.Field>
						<label>Currency</label>
						<Select placeholder='ABC...' value={currency} onChange={(e, { value }) => setCurrency(value)} options={[
							{ key: 'EUR', text: 'EUR', value: 'EUR' },
							{ key: 'CZK', text: 'CZK', value: 'CZK' },
						]} />
					</Form.Field> }
					{ type !== 'timer' && !Number.isNaN(Number.parseFloat(amount)) && <Form.Field>
						Converted time: <span className={[styles.amount, type === 'expense' ? styles.negative : styles.positive].join(" ")}>{formatHumanDuration((Number.parseFloat(amount) / instance.getPerHour()) * 60 * 60 * 1000, true)}</span>
					</Form.Field> }

					{ type === 'timer' && !Number.isNaN(Number.parseFloat(amount)) && <Form.Field>
						Converted amount: <span className={[styles.amount, styles.positive].join(" ")}>{Number.parseFloat(amount) * instance.getPerHour()} EUR</span>
					</Form.Field> }
					<Button
						type='submit'
						color="green"
						loading={loading}
						disabled={!isValid}
					>
						Save
					</Button>
				</Form>
			</div>
		</div>
  )
}

export default AddButton