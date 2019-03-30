import React from 'react';
import Canvas from 'react-chartjs-2';
import {Button} from 'semantic-ui-react';
import SideBar from './SideBar'

class Statistics extends React.Component{

	state = { day: new Date(), type: '', graph: [{
		'maxParticles': 50,
	    'colors': ['#2E1D62', '#513D91', '#487EEF', '#11A887', '#fc5c65', '#fed330'],
	    'shapes': ['circle', 'square'],
	    'size': 10,
	    'minSpeed': 0.05,
	    'maxSpeed': 0.20,
	    'alpha': 0.70,
	    'backgroundColor': '#1E1F29'
	}] };



	render(){
		return (
			<SideBar>
				<Button.Group>
					<Button>D</Button>
					<Button>W</Button>
					<Button>M</Button>
					<Button>Y</Button>
				</Button.Group>

				<Canvas options={this.state.graph} />
			</SideBar>
		);
	};
};

export default Statistics;