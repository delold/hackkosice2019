import React, { useState, useEffect } from 'react'
import { Input, Button, Select } from 'semantic-ui-react'


class Settings extends React.Component{

	state = { currency: null, type: null };

	render(){
		return(
			<div>
				<div>
					Monthly Income
				</div>
				
				<div className = "ui input">
					<input type="text" /> 
				</div>
				<Select placeholder='Select your country' 
  					options={[{text: 'Hourly'},{text: 'Monthly'}]} />
			</div>
		)
	}
};

export default Settings;