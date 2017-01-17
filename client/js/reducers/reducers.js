import * as actions from '../actions/actions';
import { combineReducers } from 'redux';

const userInfo = (state = {}, action) => {
	switch (action.type) {
		case actions.GET_USER_SUCCESS:
			return state = Object.assign({}, state, {
				name: action.userInfo[0].name,
				id: action.userInfo[0]._id
			});
		case actions.GET_USER_ERROR:
			return state = Object.assign({}, state, {
				error: true,
				error_type: action.error
			});
		default:
			return state;
	}
}

export default combineReducers({
	userInfo
});
