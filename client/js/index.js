import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import ReactDOM from 'react-dom'; 
import React from 'react'; 
import Container from './components/container';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Container />, document.getElementById('app'))
});

