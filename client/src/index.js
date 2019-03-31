import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css'
import './index.css'

import SideBar from './components/SideBar'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Statistics from './pages/Statistics';
import AchievementPage from './pages/AchievementPage';
import Settings from './pages/Settings';

ReactDOM.render(
	<Router>
		<SideBar>
			<Route path= "/statistics" component={Statistics} />
			<Route path= "/settings" component={Settings} />
			<Route path= "/achievements" component={AchievementPage} />
			<Route exact path= "/" component={HomePage}/>
		</SideBar>
	</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
