import React, { Component } from 'react';

import PieChart from './components/PieChart'
import List from './components/List'
import Settings from './components/Settings'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PieChart />
        <List />
        <Settings />
      </div>
    );
  }
}

export default App;
