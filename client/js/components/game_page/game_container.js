import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import LogoutBtn from './logout_btn';
import ProgressBtn from './progress_btn';
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
			incorrect: 0
		}
		this.changeCount = this.changeCount.bind(this);
	}

	componentDidMount () {
		this.props.getUser();
		this.props.getQuestion();
	}

	changeCount (status) {
		status ?
			this.setState({ correct: this.state.correct + 1 }) :
			this.setState({ incorrect: this.state.incorrect + 1 }) ;
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
					<LogoutBtn />
					<ProgressBtn />
					<div className={'feedback-container'}>
						<Feedback correct={this.state.correct} incorrect={this.state.incorrect} user={this.props.user} />
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
	high_score: state.questionInfo.high_score
});

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => { dispatch(actions.getUser()) },
		getQuestion: () => { dispatch(actions.getQuestion()) },
		highScore: (num) => { dispatch(actions.highScore(num)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
