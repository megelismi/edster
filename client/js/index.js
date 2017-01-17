require('babel-polyfill');

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import GameContainer from './components/game_page/game_container';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<Provider store={store}>
			<GameContainer />
		</Provider>,
		document.getElementById('app')
	);
});
