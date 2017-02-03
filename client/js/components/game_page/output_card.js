import React from 'react';

export function OutputCard (props) {
	return (
		<div className="output-card">
			<p>{props.question.french}</p>
		</div>
	)
}

export default OutputCard;
