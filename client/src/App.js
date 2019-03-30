import React, { Component } from 'react';

import PieChart from './components/PieChart'
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PieChart />
        <List />
      </div>
    );
  }
}

export default App;
