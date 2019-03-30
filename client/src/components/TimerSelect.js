import React, { useState, useEffect } from 'react'
import styles from './TimerSelect.module.css'
import { Input, Button } from 'semantic-ui-react'

class TimerSelect extends React.Component{

	state = { hours: null, minutes: null };

	render(){
		return(
			<div className="ui input">
				<input name = "hours" type="text" defaultValue = "00"/>
				<label> : </label>
				<input name = "minutes" type="text" defaultValue = "00"/> 
				<div>
					<button className="ui button" type="button"> START </button>
				</div>
			</div>
		)
	}
};


export default TimerSelect; 


