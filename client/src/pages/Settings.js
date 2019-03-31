import React, { useState, useEffect } from 'react'
import { Input, Button, Select } from 'semantic-ui-react'
import SideBar from '../components/SideBar'


class Settings extends React.Component{

	state = { currency: null, type: null };

	render(){
		return(
			<>
				<div>
					Monthly Income
				</div>

				<div className = "ui input">
					<Input type="text" /> 
				</div>
				<Select placeholder='Select your income' options={[{text: 'Hourly'},{text: 'Monthly'}]} />

			</>
		)
	}
};

export default Settings;
