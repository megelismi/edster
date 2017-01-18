import React from 'react';
import { connect } from 'react-redux';

function Feedback (props) {
	let feedback = `Keep up the good work, ${props.user}!`;
	return <p>{feedback}</p>
}

export default Feedback;
