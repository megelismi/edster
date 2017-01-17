import React from 'react';
import { connect } from 'react-redux';

function Feedback (props) {
	let feedback = `Keep up the good work, ${props.name}!`;
	return <p>{feedback}</p>
}

const mapStateToProps = (state) => ({
	name: state.userInfo.name
});

export default connect(mapStateToProps)(Feedback);
