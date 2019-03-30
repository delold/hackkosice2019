import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Statistics from './components/Statistics';
import AchievementsWrapper from './components/AchievementsWrapper';
import Settings from './components/Settings';

ReactDOM.render(
	<Router>
	    <Route path= "/statistics" component={Statistics} />
	    <Route path= "/settings" component={Settings} />
	    <Route path= "/achievements" component={AchievementsWrapper} />
	    <Route exact path= "/" component={App}/>
	</Router>
		, document.getElementById('root'));
		

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
