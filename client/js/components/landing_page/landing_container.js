import React from 'react';
import Welcome from './welcome';
import Login from './login';

function LandingContainer () {
	return (
		<div className='LandingContainer'>
			<Welcome />
			<Login />
		</div>
	)
}

export default LandingContainer;
