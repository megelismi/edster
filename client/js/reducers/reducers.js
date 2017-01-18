import * as actions from '../actions/actions';
import { combineReducers } from 'redux';

const userInfo = (state = {}, action) => {
	switch (action.type) {
		case actions.GET_USER_SUCCESS:
			return state = Object.assign({}, state, {
				id: action.userInfo[0]._id,
				user: action.userInfo[0].name
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
		case actions.GET_QUESTIONS_SUCCESS:
			const inputCardText = (questions) => {
					let selected, idx, val;
					let num = Math.floor(Math.random() * 6) + 1;
					if (num === 1) {
							val = 2
					} else if (num > 1 && num < 4) {
							val = 1
					} else {
							val = 0
					}
					selected = questions.filter((q) => q.rating === val);
					idx = Math.floor(Math.random() * selected.length);
					return selected[idx];
			}
			let selected = inputCardText(action.userInfo[0].answerHistory);
			return state = Object.assign({}, state, {
				question_set: action.userInfo[0].answerHistory,
				selected_question: selected
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

export default combineReducers({
	userInfo,
	questionInfo
});
