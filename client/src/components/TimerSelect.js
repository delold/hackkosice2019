import React, { useState, useEffect } from 'react'
import styles from './TimerSelect.module.css'

class TimerSelect extends React.Component{

	state = { hours: null, minutes: null };

	render(){
		return(
			<div className="ui input">
				<div>
					<button className="ui button" type="button"> START </button>
				</div>
			</div>
		)
	}
};


export default TimerSelect; 


