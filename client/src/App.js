import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'

import PieChart from './components/PieChart'
import List from './components/List'

import Settings from './components/Settings'
import SideBar from './components/SideBar'

import TimerSelect from './components/TimerSelect'


class App extends Component {
  render() {
    return (        
		<SideBar>
			<div className="App">
	        	<PieChart />
	        	<TimerSelect />
	        	<List />
	      	</div>
        </SideBar>
  	}
}

export default App;
