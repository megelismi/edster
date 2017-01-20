import React from 'react';
import Login from './login';

class Welcome extends React.Component {

	componentWillMount() {
		document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/travel.jpg)";

	}

	componentWillUnmount () {
		document.body.style.backgroundImage = null;
	}

	render () {
		return (
			<div className="homepage">
				<h1 className="homepage-text">Welcome to <span className="app-name">Edster</span>. Ready to get started?</h1>
				<Login />
			</div>
		)
	}
}

export default Welcome;

<img src="/assets/edster-logo.png"/>

