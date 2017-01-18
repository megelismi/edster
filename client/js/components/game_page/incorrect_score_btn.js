import React from 'react';

function IncorrectScoreBtn (props) {
	return (
		<div className="score-btn">Incorrect: {props.count}</div>
	)
}

export default IncorrectScoreBtn;
