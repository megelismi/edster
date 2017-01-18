import * as actions from '../actions/actions';
import { combineReducers } from 'redux';

const userInfo = (state = { high_score: 0 }, action) => {
	switch (action.type) {
		case actions.GET_USER_SUCCESS:
			return state = Object.assign({}, state, {
				user: action.name
			});
		case actions.HIGH_SCORE:
			return state = Object.assign({}, state, {
				high_score: action.score
			});
		case actions.GET_ERROR:
			return state = Object.assign({}, state, {
				error: true,
				error_type: action.error
			});
		default:
			return state;
	}
}

const questionInfo = (state = {}, action) => {
	switch (action.type) {
		case actions.GET_QUESTION_SUCCESS:
			return state = Object.assign({}, state, {
				selected_question: action.question
			});
		case actions.GET_QUESTION_ERROR:
			return state = Object.assign({}, state, {
				get_error: true,
				get_error_type: action.error
			});
		case actions.SEND_QUESTION_ERROR:
			return state = Object.assign({}, state, {
				send_error: true,
				send_error_type: action.error
			});
		default:
			return state;
	}
}

export default combineReducers({
	userInfo,
	questionInfo
});
