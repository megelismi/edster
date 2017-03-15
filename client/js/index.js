require('babel-polyfill');

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import store from './store';
import GameContainer from './components/game_page/game_container';
import LandingContainer from './components/landing_page/landing_container';
import ProgressContainer from './components/progress_report/progress_container';
import AboutContainer from './components/about_page/about_container';
import 'whatwg-fetch';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={LandingContainer} />
				<Route path="/quiz" component={GameContainer} />
				<Route path="/progress" component={ProgressContainer} />
				<Route path="/about" component={AboutContainer} />
			</Router>
		</Provider>,
		document.getElementById('app')
	);
});
