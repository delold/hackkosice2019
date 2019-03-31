import React, { Component } from 'react';

import PieChart from '../components/PieChart'
import List from '../components/List'

import SideBar from '../components/SideBar'
import AddButton from '../components/AddButton'

import { createTransactionModel } from '../utils/transaction'

const defaultItems = [
  createTransactionModel({ id: 0 }),
]

class HomePage extends Component {
	  render() {
	    return (
				<>
					<AddButton />
					<div className="App">
						<PieChart items={defaultItems} perHour={210} />
						<List items={defaultItems} perHour={210} />
					</div>
				</>
	    );
	}
}

export default HomePage;
