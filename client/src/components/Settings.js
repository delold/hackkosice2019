import React, { useState, useEffect } from 'react'
import styles from './Settings.module.css'

class Settings extends React.Component{

	state = { currency: null, type: null };

	render(){
		return(
			<div>
				<div>
					<button type="button"> close </button>
				</div>
				<div>
					Monthly Income
				</div>
				
				<input type="text" /> 
				<select name = "Select type">
					<option value="" selected disabled hidden>Select type</option>
				  <option value="Hourly">Hourly</option>
				  <option value="Monthly">Monthly</option>
				</select>
			</div>
		)
	}
};


export default Settings; 