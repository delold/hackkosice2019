import React, { Component } from 'react';
import './App.css'

import PieChart from './components/PieChart'
import List from './components/List'
import TimerSelect from './components/TimerSelect'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PieChart />
        <TimerSelect />
        <List />
      </div>
    );
  }
}

export default App;
