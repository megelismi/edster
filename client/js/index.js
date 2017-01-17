require('babel-polyfill');

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './components/game_page/game_container';

document.addEventListener('DOMContentLoaded', () => {
	return ReactDOM.render(
		<GameContainer />,
		document.getElementById('app')
	);
});
