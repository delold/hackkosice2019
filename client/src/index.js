import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css'
import './index.css'

import SideBar from './components/SideBar'

import App from './App'

import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Statistics from './pages/Statistics'
import AchievementPage from './pages/AchievementPage'
import Settings from './pages/Settings'

ReactDOM.render(
	<Router>
		<App>
			<SideBar>
				<Route path= "/statistics" component={Statistics} />
				<Route path= "/settings" component={Settings} />
				<Route path= "/achievements" component={AchievementPage} />
				<Route exact path= "/" component={HomePage}/>
			</SideBar>
		</App>
	</Router>, document.getElementById('root'));


serviceWorker.unregister();
