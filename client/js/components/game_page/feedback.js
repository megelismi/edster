import React from 'react';

function Feedback (props) {
	let feedback;
	const { current, user, correctCount } = props;

	if (current === 'start') {
		feedback = `Welcome, ${user}! Let\'s get started.`
	} else if (current) {
		if (correctCount % 10 === 0) {
			feedback = `Wow! ${correctCount} in a row — you're on fire!`
		} else {
			feedback = `${correctCount} in a row! Keep up the good work, ${user}!`;
		}
	} else {
		feedback = `Keep trying. You got this!`
	}

	return <p className="feedback-text">{feedback}</p>
}

export default Feedback;
