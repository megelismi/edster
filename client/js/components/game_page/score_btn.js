import React from 'react';

export function ScoreBtn (props) {
	return (
		<div className="score-btn">{props.text}: {props.count}</div>
	)
}

export default ScoreBtn;
