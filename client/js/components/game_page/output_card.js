import React from 'react';

function OutputCard (props) {
	return (
		<div>
			<p className="input-card-text">{props.question.french}</p>
		</div>
	)
}

export default OutputCard;
