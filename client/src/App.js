import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import PieChart from './components/PieChart'
import List from './components/List'

import Settings from './components/Settings'
import SideBar from './components/SideBar'

import TimerSelect from './components/TimerSelect'

import moment from 'moment'
import { createTransactionModel } from './utils/transaction'

const defaultItems = [
  createTransactionModel({ id: 0 }),
]


class App extends Component {
	  render() {
	    return (        
			<SideBar>
				<div className="App">
		        	<PieChart items={defaultItems} perHour={210} />
		        	<TimerSelect />
		        	<List items={defaultItems} perHour={210} />
		      	</div>
	        </SideBar>
	    );
	}
}

export default App;
