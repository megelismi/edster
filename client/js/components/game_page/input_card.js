import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class InputCard extends React.Component {
	constructor () {
		super ();
		this.sendData = this.sendData.bind(this);
	}

	sendData(e) {
		e.preventDefault();
		const { selected, changeCount, sendResult } = this.props;
		let correct = this.answer.value === selected.english ? true : false ;
		let newObj = selected;
		newObj = Object.assign({}, newObj, { correct: correct });

		changeCount(correct);
		sendResult(newObj);

		this.answer.value = '';
	}

	render () {
		return (
			<form onSubmit={this.sendData}>
				<input ref={answer => this.answer = answer}/>
				<button type="submit">Submit answer</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => ({ selected: state.questionInfo.selected_question });
const mapDispatchToProps = (dispatch) => ({ sendResult: (result) => { dispatch(actions.sendResult(result)) } })
export default connect(mapStateToProps, mapDispatchToProps)(InputCard);
