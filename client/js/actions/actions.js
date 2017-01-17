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
		}).catch(err => {
			dispatch(getUserError(err));
		});
}

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const getUserSuccess = userInfo => ({
	type: GET_USER_SUCCESS,
	userInfo
});

export const GET_USER_ERROR = 'GET_USER_ERROR';
export const getUserError = error => ({
	type: GET_USER_ERROR,
	error
});
