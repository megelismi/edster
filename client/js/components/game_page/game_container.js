import React from 'react';
import LogoutBtn from './logout_btn';
import ProgressBtn from './progress_btn';
import ScoreBtn from './score_btn';
import Feedback from './feedback';
import OutputCard from './output_card';
import InputCard from './input_card';

class GameContainer extends React.Component {
	render () {
		return (
			<div>
				<LogoutBtn />
				<ProgressBtn />
				<div className={'feedback-container'}>
					<ScoreBtn />
					<ScoreBtn />
					<Feedback />
				</div>
				<div className={'cards-container'}>
					<OutputCard />
					<InputCard />
				</div>
			</div>
		)
	}
}

export default GameContainer;
