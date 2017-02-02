import React from 'react';

function Feedback (props) {
	let feedback;
	const { current, user, correctCount } = props;

	// feedback is changing on submit AND on page reload (w/ get request)

	if (current === 'start') {
		feedback = `Welcome, ${user}! Let\'s get started.`
	} else if (current) {
		if (correctCount % 10 === 0) {
			feedback = `Wow! ${correctCount} in a row — you're on fire!`
		} else {
			feedback = `${correctCount} in a row! Keep up the good work, ${user}!`;
		}
	} else {
		// feedback = `Whoops! That was incorrect. Keep trying!`;
		feedback = `Whoops! The correct answer is ${props.answer}. Keep trying!`
	}

	return <p className="feedback-text">{feedback}</p>
}

export default Feedback;
