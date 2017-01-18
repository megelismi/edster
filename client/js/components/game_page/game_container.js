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
	}

	changeCount (status) {
		if (status === true) {
			this.setState({ correct: this.state.correct++ })
		} else {
			this.setState({ correct: this.state.incorrect++ })
		}
	}

	render () {
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
	selected: state.questionInfo.selected_question
});

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => { dispatch(actions.getUser()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
