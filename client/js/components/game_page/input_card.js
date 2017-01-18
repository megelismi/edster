import React from 'react';

class InputCard extends React.Component {
	constructor () {
		super ();
		this.sendData = this.sendData.bind(this);
	}

	sendData () {
		const { english } = this.props.question;
		let bool = (this.answer === english) ? true : false ;
		this.props.changeCount(bool);
	}

	render () {
		return (
			<div>
				<input ref={answer => this.answer = answer}/>
				<button onClick={() => this.sendData()}>Submit answer</button>
			</div>
		)
	}
}

export default InputCard;
