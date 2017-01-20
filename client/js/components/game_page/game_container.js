import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import ScoreBtn from './score_btn';
import Feedback from './feedback';
import OutputCard from './output_card';
import InputCard from './input_card';
import Header from './header';

class GameContainer extends React.Component {
	constructor () {
		super ();
		this.state = {
			correct: 0,
			incorrect: 0,
			current: 'start',
			currentHigh: 0
		}
		this.changeCount = this.changeCount.bind(this);
	}

	componentDidMount () {
		this.props.getUser();
		this.props.getQuestion();
		this.props.getQuestionsArray();
	}

	changeCount (status) {
		const { correct, incorrect, currentHigh, current } = this.state;
		const { high_score, highScore } = this.props;
		status ?
			this.setState({ correct: correct + 1, current: true, currentHigh: currentHigh + 1 }) :
			this.setState({ incorrect: incorrect + 1, current: false, currentHigh: 0 }) ;
		if (currentHigh + 1 > high_score) { highScore(currentHigh + 1) };
	}

	route () {
		alert('something happened!')
	}

	render () {
		if (!this.props.selected) {
			return <div></div>
		} else {
			return (
				<div className="game-container">
					<Header />
					<div className={'feedback-container'}>
						<Feedback current={this.state.current} correctCount={this.state.currentHigh} user={this.props.user} />
					</div>
					<div className={'cards-container'}>
						<OutputCard question={this.props.selected} />
						<InputCard question={this.props.selected} changeCount={this.changeCount} />
					</div>
					<div className="scores">
						<ScoreBtn count={this.state.correct} text="Correct" />
						<ScoreBtn count={this.state.incorrect} text="Incorrect" />
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
		getQuestionsArray: () => { dispatch(actions.getQuestionsArray()) },
		highScore: (num) => { dispatch(actions.highScore(num)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
