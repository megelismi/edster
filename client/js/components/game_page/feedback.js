import React from 'react';

function Feedback () {
	let feedback = `Keep up the good work, ${props.name}!`;
	return <p>{feedback}</p>
}

const mapStateToProps = (state) => ({
	name: state.userInfo.name
});

export default connect(mapStateToProps)(Feedback);
