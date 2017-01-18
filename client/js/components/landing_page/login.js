import React from 'react';
import { hashHistory } from 'react-router';

function Login () {
	return (
		<div>
			<button onClick={() => hashHistory.push('/quiz')}>Log In</button>
		</div>
	)
}

export default Login;
