import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';



class ProgressContainer extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.getQuestionsArray();
	}

	render () {

		if (!this.props.data) {
			return <div></div>
		} else {
			const userProgressArray = this.props.data;
			var masteryData = userProgressArray.map(function(wordObj) {
				if (wordObj.successes >= 5) {
					 return (
						 <tr key={wordObj.id}>
							 <td>{wordObj.french}</td>
							 <td><i className="fa fa-check" aria-hidden="true"></i></td>
						 </tr>
					 )
				 }
				else {
					 return (
						 <tr key={wordObj.id}>
							 <td>{wordObj.french}</td>
							 <td><i className="fa fa-times" aria-hidden="true"></i></td>
						 </tr>
					 )
				}
			})

			return (
			<div className="progress-container">
	            <div className="header">
	                <img className="logo" src="assets/edster-logo.png"/>
	                <div className="dropdown">
	                    <h4>Menu</h4>
	                    <div className="dropdown-content">
	                        <Link to ={'/quiz'}>Flashcards</Link>
	                        <Link to={'/about'}>About Us</Link>
	                        <a href="/auth/logout">Logout</a>
	                    </div>
	                </div>
	            </div>
				<h1>Your Progress Report</h1>
				<p>Words are considered mastered when you've answered them correctly 5 or more times.</p>
				<table className="progress-table">
					<thead>
						<tr>
							<th>Word</th>
							<th>Mastery</th>
						</tr>
					</thead>
					<tbody>
						{masteryData}
					</tbody>
				</table>
			</div>
			)
		}
	}
}


const mapStateToProps = (state) => ({
	user: state.userInfo.user,
	data: state.questionInfo.questions_array
});

const mapDispatchToProps = (dispatch) => {
	return {
		getQuestionsArray: () => { dispatch(actions.getQuestionsArray()) }
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ProgressContainer);
