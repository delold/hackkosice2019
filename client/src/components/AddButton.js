import React, { useState, useEffect } from 'react'
import styles from './AddButton.style.css'
import {Button, Icon} from 'semantic-ui-react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AddButton = () => {
  return (
		<div>
			<Button type="ui button"> 
 				<Icon name='add circle'/>
 				<span className="input-group-btn">
						  <Link to="/settings" style={{ color: '#555555' }}>Add</Link>
				</span>
			</Button>
		</div>
  )
}

export default AddButton