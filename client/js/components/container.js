import React from 'react'; 

export default class Container extends React.Component {
	constructor(props) {
		super(props)
	}

	onClick () {
		console.log('clicked'); 
	}

	render () {
		return (
			<div>
				<img onClick={this.onClick.bind(this)} src='assets/google.png' />
			</div>
		)
	}
}