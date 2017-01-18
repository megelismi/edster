import React from 'react';
import { connect } from 'react-redux';

function Feedback (props) {
	let feedback;

	if (props.current === 'start') {
		feedback = `Welcome back, ${props.user}! Let's get started.`
	} else if (props.current) {
		feedback = `${props.correctCount} in a row! Keep up the good work, ${props.user}!`;
	} else {
		feedback = `Keep trying. You got this!`
	}

	return <p className="feedback-text">{feedback}</p>
}

export default Feedback;
