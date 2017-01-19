import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import CorrectScoreBtn from './correct_score_btn';
import IncorrectScoreBtn from './incorrect_score_btn';
import Feedback from './feedback';
import OutputCard from './output_card';
import InputCard from './input_card';
import Dropdown from './dropdown';

class GameContainer extends React.Component {
	constructor () {
		super ();
		this.state = {
			correct: 0,
			incorrect: 0,
			current: 'start'
		}
		this.changeCount = this.changeCount.bind(this);
	}

	componentDidMount () {
		this.props.getUser();
		this.props.getQuestion();
	}

	changeCount (status) {
		const { correct, incorrect } = this.state;
		const { high_score, highScore } = this.props;
		status ?
			this.setState({ correct: correct + 1, current: true }) :
			this.setState({ incorrect: incorrect + 1, current: false }) ;
		if (correct + 1 > high_score) { highScore(correct + 1) };
	}

	route () {
		alert('something happened!')
	}


	render () {
		console.log('state', this.state);
		if (!this.props.selected) {
			return <div></div>
		} else {
			return (
				<div className="game-container">
					<div class="header">
						<Dropdown />
						<img src="/dster-logo.png"/>
					</div>
					<div className={'feedback-container'}>
						<Feedback current={this.state.current} correctCount={this.state.correct} user={this.props.user} />
					</div>
					<div className={'cards-container'}>
						<OutputCard question={this.props.selected} />
						<InputCard question={this.props.selected} changeCount={this.changeCount} />
					</div>
					<div className="scores">
						<CorrectScoreBtn count={this.state.correct} />
						<IncorrectScoreBtn count={this.state.incorrect} />
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	user: state.userInfo.user,
	selected: state.questionInfo.selected_question,
	high_score: state.userInfo.high_score
});

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => { dispatch(actions.getUser()) },
		getQuestion: () => { dispatch(actions.getQuestion()) },
		highScore: (num) => { dispatch(actions.highScore(num)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
