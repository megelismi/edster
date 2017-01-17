import React from 'react';

function Feedback () {
	let feedback = 'Keep up the good work!';
	return <p>{feedback}</p>
}

const mapStateToProps = (state) => ({
	name: state.userInfo.name
});

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => { dispatch(actions.getUser()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
