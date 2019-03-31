import React, { Component } from 'react';

import PieChart from '../components/PieChart'
import List from '../components/List'

import styles from './HomePage.module.css'

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
          <PieChart items={defaultItems} perHour={210} />
          <List items={defaultItems} perHour={210} />
				</>
	    );
	}
}

export default HomePage;
