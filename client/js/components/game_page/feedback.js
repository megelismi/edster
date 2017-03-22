import React from 'react';

export function Feedback (props) {
	let feedback, span, feedback2;
	const { current, user, correctCount } = props;

	if (current === 'start') {
		feedback = `Welcome, ${user}! Let\'s get started.`
	} else if (current) {
		if (correctCount % 10 === 0) {
			feedback = `Wow! ${correctCount} in a row — you're on fire!`
		} else {
      feedback = `${correctCount} in a row! Keep up the good work, ${user}!`
		}
	} else {
		feedback = "Whoops! The correct answer is "
    span = props.answer.toUpperCase()
    feedback2 = ". Keep trying!"
	}

	return (
    <p className="feedback-text">{feedback}<span className="emphasis">{span}</span>{feedback2}</p>
  )
}

export default Feedback;
