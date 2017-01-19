import React from 'react';

function ScoreBtn (props) {
	return (
		<div className="score-btn">{props.text}: {props.count}</div>
	)
}

export default ScoreBtn;
