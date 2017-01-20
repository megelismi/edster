import React from 'react';

class Welcome extends React.Component {

	componentWillMount() {
		document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/travel.jpg)";

	}



	componentWillUnmount () {
		document.body.style.backgroundImage = null;
	}

	render () {
		return (
			<div id="homepage">Welcome!</div>
		)
	}
}

export default Welcome;

