import React from 'react';
import { hashHistory } from 'react-router';

function ProgressBtn () {
	return (
		<button className="progress-btn" onClick={() => hashHistory.push('/progress')}>Progress</button>
	)
}

export default ProgressBtn;
