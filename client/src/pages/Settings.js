import React, { useContext, useState } from 'react'
import { Input, Button, Select, Form } from 'semantic-ui-react'

import { context } from '../context'

import styles from './Settings.module.css'

const typeOptions = [
	{ text: 'Hourly', value: 'hourly', key: 'hourly' },
	{ text: 'Monthly', value: 'monthly', key: 'monthly' },
]
const Settings = () => {
	const instance = useContext(context)

	const [amount, setAmount] = useState(instance.getPerHour())
	const [type, setType] = useState('hourly')

	return (
    <div align="center" className={styles.test}> 
      <div align="center" style={{width: '70%'}}>
      <div className={styles.flexfix}>
		<Form onSubmit={() => {
			let perHour = Number.parseFloat(amount)
			if (type === 'monthly') {
				perHour /= 168 * 4
			}
            
			instance.setPerHour(perHour)
		}}>
			<Form.Group widths='equal'>
				<Form.Field>
					<label>Monthly Income</label>
					<Select placeholder='Select your income' value={type} onChange={(e, { value }) => setType(value)} options={typeOptions} />
				</Form.Field>
				<Form.Field>
					<label>Amount</label>
					<input type="number" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
				</Form.Field>
  				<Button type="submit" color="green" style={{height: 38}}>Save settings</Button>
			</Form.Group>
		</Form>
      </div>
      </div>
    </div>
	)
}
export default Settings;
