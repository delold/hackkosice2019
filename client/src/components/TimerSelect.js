import React, { useState, useEffect } from 'react'
import styles from './TimerSelect.module.css'

class TimerSelect extends React.Component{

	state = { hours: null, minutes: null };

	render(){
		return(
			<div>
				<input name = "hours" type="text" value = "00"/>
				:
				<input name = "minutes" type="text" value = "00"/> 
				<div>
					<button type="button"> START </button>
				</div>
			</div>
		)
	}
};


export default TimerSelect; 