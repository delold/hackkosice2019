import React, { useContext, useState } from 'react'
import { Input, Button, Select, Form } from 'semantic-ui-react'

import { context } from '../context'

const typeOptions = [
	{ text: 'Hourly', value: 'hourly', key: 'hourly' },
	{ text: 'Monthly', value: 'monthly', key: 'monthly' },
]
const Settings = () => {
	const instance = useContext(context)

	const [amount, setAmount] = useState(instance.getPerHour())
	const [type, setType] = useState('hourly')

	return (
		<Form onSubmit={() => {
			let perHour = Number.parseFloat(amount)
			if (type === 'monthly') {
				perHour /= 30
			}

<<<<<<< HEAD
				<div className = "ui input">
					<Input type="text" /> 
				</div>
				<Select placeholder='Select your income' options={[{text: 'Hourly'},{text: 'Monthly'}]} />

			</>
		)
	}
};
=======
			instance.setPerHour(perHour)
		}}>
			<Form.Group>
				<Form.Field>
					<label>Monthly Income</label>
					<Select placeholder='Select your income' value={type} onChange={(e, { value }) => setType(value)} options={typeOptions} />
				</Form.Field>
				<Form.Field>
					<label>Amount</label>
					<input type="number" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
				</Form.Field>
				<Button type="submit" color="green">Save settings</Button>
			</Form.Group>
		</Form>
	)
}
>>>>>>> 272f6f0525c70f9f3231c5e5e8a6a6dc00252a39

export default Settings;
