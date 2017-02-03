import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

export class InputCard extends React.Component {
	constructor () {
		super ();
		this.sendData = this.sendData.bind(this);
	}

	sendData(e) {
		e.preventDefault();
		const { selected, changeCount, sendResult } = this.props;
		let newObj = selected;
		let successCount = selected.successes, failureCount = selected.failures;
		let correct = this.answer.value.toLowerCase() === selected.english ? true : false ;
		correct ? successCount = selected.successes + 1 : failureCount = selected.failures + 1 ;
		newObj = Object.assign({}, newObj, {
			correct: correct.toString(),
			successes: successCount,
			failures: failureCount,
		});
		const updateStateObj = {
			status: correct,
			correctAnswer: selected.english
		}

		changeCount(updateStateObj);
		sendResult(newObj);

		this.answer.value = '';
	}

	render () {
		return (
			<form className="input-card-form" onSubmit={this.sendData}>
				<input ref={answer => this.answer = answer}/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => ({ selected: state.questionInfo.selected_question });
const mapDispatchToProps = (dispatch) => ({ sendResult: (result) => { dispatch(actions.sendResult(result)) } })
export default connect(mapStateToProps, mapDispatchToProps)(InputCard);
