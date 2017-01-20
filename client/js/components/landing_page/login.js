import React from 'react';
import { hashHistory } from 'react-router';

function Login () {
	return (
		<div className="login-link-container">
			<a className="login-link" href="/auth/google">Log in with Google</a>
		</div>
	)
}

export default Login;
