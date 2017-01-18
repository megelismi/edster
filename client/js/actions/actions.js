const questions_url = "/";
const users_url = "/users";

export const getUser = () => dispatch => {
	return fetch(users_url)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.status);
			}
			return res.json();
		}).then(res => {
			console.log(res);
			dispatch(getUserSuccess(res));
			dispatch(getQuestionsSuccess(res));
		}).catch(err => {
			dispatch(getError(err));
		});
}

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = userInfo => ({
	type: GET_USER_SUCCESS,
	userInfo
});

export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const getQuestionsSuccess = userInfo => ({
	type: GET_QUESTIONS_SUCCESS,
	userInfo
});

export const GET_ERROR = 'GET_ERROR';
export const getError = error => ({
	type: GET_ERROR,
	error
});
