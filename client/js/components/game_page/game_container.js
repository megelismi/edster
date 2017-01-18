import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import LogoutBtn from './logout_btn';
import ProgressBtn from './progress_btn';
import ScoreBtn from './score_btn';
import Feedback from './feedback';
import OutputCard from './output_card';
import InputCard from './input_card';

class GameContainer extends React.Component {
	constructor () {
		super ();
		this.state = {
			correct: 0,
			incorrect: 0
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
			this.setState({ correct: correct + 1 }) :
			this.setState({ incorrect: incorrect + 1 }) ;
		if (correct + 1 > high_score) { highScore(correct + 1) };
	}

	render () {
		console.log('state', this.state);
		if (!this.props.selected) {
			return <div></div>
		} else {
			return (
				<div>
					<LogoutBtn />
					<ProgressBtn />
					<div className={'feedback-container'}>
						<ScoreBtn count={this.state.correct} />
						<ScoreBtn count={this.state.incorrect} />
						<Feedback correct={this.state.correct} incorrect={this.state.incorrect} user={this.props.user} />
					</div>
					<div className={'cards-container'}>
						<OutputCard question={this.props.selected} />
						<InputCard question={this.props.selected} changeCount={this.changeCount} />
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
