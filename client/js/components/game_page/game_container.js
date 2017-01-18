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
	componentDidMount () {
		this.props.getUser();
	}

	render () {
		if (!this.props.user) {
			return <div></div>
		} else {
			return (
				<div>
					<LogoutBtn />
					<ProgressBtn />
					<div className={'feedback-container'}>
						<ScoreBtn />
						<ScoreBtn />
						<Feedback user={this.props.user}/>
					</div>
					<div className={'cards-container'}>
						<OutputCard />
						<InputCard />
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	user: state.userInfo.user
});

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: () => { dispatch(actions.getUser()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
